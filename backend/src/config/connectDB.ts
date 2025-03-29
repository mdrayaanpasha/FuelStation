import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 
const mongoURI = process.env.MONGO_URI as string;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: "PJ-FUEL", 
    });
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
