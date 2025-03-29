import mongoose, { Schema, Document } from "mongoose";

// Define Order Interface
interface IOrder extends Document {
  buyer: mongoose.Types.ObjectId;
  seller: mongoose.Types.ObjectId;
  liters: number;
}

// Define Order Schema
const OrderSchema = new Schema<IOrder>(
  {
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Buyer",
      required: true,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true,
    },
    liters: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

// Create Order Model
const Order = mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
