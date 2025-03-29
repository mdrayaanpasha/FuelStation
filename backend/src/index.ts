import express, { Request, Response } from "express";
import BuyersAuth from "./routes/AuthenticationRoutes/BuyersAuthRoutes";
const app = express();
const PORT = process.env.PORT || 3000;
import connectDB from "./config/connectDB";
connectDB();



app.use(express.json());

app.use("/api/auth/Buyers",BuyersAuth);
// app.use("/api/auth/Sellers",SellersRoutes);


app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
