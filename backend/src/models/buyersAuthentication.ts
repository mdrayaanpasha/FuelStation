import mongoose, { Schema, Document } from "mongoose";

interface IBuyer extends Document {
  name: string;
  email: string;
  phone: string;
  address: string;
  password: string;
}

const BuyerSchema = new Schema<IBuyer>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true }, 
  },
  { timestamps: true }
);

const Buyer = mongoose.model<IBuyer>("Buyer", BuyerSchema);
export default Buyer;
