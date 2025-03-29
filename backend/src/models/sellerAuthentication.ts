import mongoose, { Schema, Document } from "mongoose";

interface ISeller extends Document {
  name: string;
  email: string;
  phone: string;
  company: string;
  password: string;
}

const SellerSchema = new Schema<ISeller>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    company: { type: String, required: true },
    password: { type: String, required: true }, // Store hashed password in production
  },
  { timestamps: true }
);

const Seller = mongoose.model<ISeller>("Seller", SellerSchema);
export default Seller;
