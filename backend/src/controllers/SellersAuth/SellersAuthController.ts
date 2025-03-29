import Seller from "../../models/sellerAuthentication"; // ✅ Corrected import path
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config(); // ✅ Load environment variables

export const registerSeller = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, phone, company, password } = req.body; // ✅ Added address

    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const SellerExists = await Seller.findOne({ email });
    if (SellerExists) return res.status(400).json({ message: "Seller already exists" });

    const hashedPass = await bcrypt.hash(password, 10); // ✅ Secure salt rounds

    const newSeller = new Seller({ name, email, phone, company, password: hashedPass }); // ✅ Corrected fields
    await newSeller.save();

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }
    const JWT_SECRET = process.env.JWT_SECRET as string;

    const token = jwt.sign({ id: newSeller._id }, JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "Seller registered successfully", token });
  } catch (error) {
    console.error("Error in registerSeller:", error);
    res.status(500).json({ message: "Server error", error });
  }
};


export const loginSeller = async (req: Request, res: Response): Promise<any> => {
    const {email,password} = req.body;
    try {
        const UserData = await Seller.findOne({ email });
        if (!UserData) return res.status(400).json({ message: "Seller does not exist" });
    
        // ✅ Fixed password comparison
        const isMatch = await bcrypt.compare(password, UserData.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    
        if (!process.env.JWT_SECRET) {
          throw new Error("JWT_SECRET is missing in environment variables");
        }
        const JWT_SECRET = process.env.JWT_SECRET as string;
    
        const token = jwt.sign({ id: UserData._id }, JWT_SECRET, { expiresIn: "1h" });
    
        res.status(200).json({ message: "Seller logged in successfully", token });
      } catch (error) {
        res.status(500).json({ message: "Server error", error });
      }
};