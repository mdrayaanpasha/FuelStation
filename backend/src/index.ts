import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import connectDB from "./config/connectDB";
connectDB();


import BuyersAuth from "./routes/AuthenticationRoutes/BuyersAuthRoutes";
import SellersAuth from "./routes/AuthenticationRoutes/SellersAuthRoutes";


app.use(express.json());

app.use("/api/auth/Buyers",BuyersAuth);
app.use("/api/auth/Sellers",SellersAuth);


app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
