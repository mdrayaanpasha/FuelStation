"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSeller = exports.registerSeller = void 0;
const sellerAuthentication_1 = __importDefault(require("../../models/sellerAuthentication")); // ✅ Corrected import path
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // ✅ Load environment variables
const registerSeller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, company, password } = req.body; // ✅ Added address
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }
        const SellerExists = yield sellerAuthentication_1.default.findOne({ email });
        if (SellerExists)
            return res.status(400).json({ message: "Seller already exists" });
        const hashedPass = yield bcrypt_1.default.hash(password, 10); // ✅ Secure salt rounds
        const newSeller = new sellerAuthentication_1.default({ name, email, phone, company, password: hashedPass }); // ✅ Corrected fields
        yield newSeller.save();
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing in environment variables");
        }
        const JWT_SECRET = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign({ id: newSeller._id }, JWT_SECRET, { expiresIn: "1h" });
        res.status(201).json({ message: "Seller registered successfully", token });
    }
    catch (error) {
        console.error("Error in registerSeller:", error);
        res.status(500).json({ message: "Server error", error });
    }
});
exports.registerSeller = registerSeller;
const loginSeller = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const UserData = yield sellerAuthentication_1.default.findOne({ email });
        if (!UserData)
            return res.status(400).json({ message: "Seller does not exist" });
        // ✅ Fixed password comparison
        const isMatch = yield bcrypt_1.default.compare(password, UserData.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });
        if (!process.env.JWT_SECRET) {
            throw new Error("JWT_SECRET is missing in environment variables");
        }
        const JWT_SECRET = process.env.JWT_SECRET;
        const token = jsonwebtoken_1.default.sign({ id: UserData._id }, JWT_SECRET, { expiresIn: "1h" });
        res.status(200).json({ message: "Seller logged in successfully", token });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
exports.loginSeller = loginSeller;
