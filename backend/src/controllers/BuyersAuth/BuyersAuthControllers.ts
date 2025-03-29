import { Request, Response } from "express";
import Buyer from "../../models/buyersAuthentication"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config(); // ✅ Load environment variables

export const registerBuyer = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, phone, company, password, address } = req.body; // ✅ Added address

    if (!password || !address) {
      return res.status(400).json({ message: "Password and address are required" });
    }

    const BuyerExists = await Buyer.findOne({ email });
    if (BuyerExists) return res.status(400).json({ message: "Buyer already exists" });

    const hashedPass = await bcrypt.hash(password, 10); // ✅ Secure salt rounds

    const newBuyer = new Buyer({ name, email, phone, company, password: hashedPass, address }); // ✅ Corrected fields
    await newBuyer.save();

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }
    const JWT_SECRET = process.env.JWT_SECRET as string;

    const token = jwt.sign({ id: newBuyer._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "Buyer registered successfully", token });
  } catch (error) {
    console.error("Error in registerBuyer:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const loginBuyer = async (req: Request, res: Response): Promise<any> => {
  try {
    const { email, password } = req.body;

    const UserData = await Buyer.findOne({ email });
    if (!UserData) return res.status(400).json({ message: "Buyer does not exist" });

    // ✅ Fixed password comparison
    const isMatch = await bcrypt.compare(password, UserData.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }
    const JWT_SECRET = process.env.JWT_SECRET as string;

    const token = jwt.sign({ id: UserData._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Buyer logged in successfully", token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
