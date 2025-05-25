import express, { Request, Response } from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import connectDB from "./config/connectDB";
connectDB();

import cors from "cors"
import BuyersAuth from "./routes/AuthenticationRoutes/BuyersAuthRoutes";
import SellersAuth from "./routes/AuthenticationRoutes/SellersAuthRoutes";
import OrderRoutes from "./routes/OrdersRoutes/OrdersRoute";


app.use(express.json());
app.use(cors())
app.use("/api/auth/Buyers", BuyersAuth);
app.use("/api/auth/Sellers", SellersAuth);
app.use("/api/orders", OrderRoutes)


app.listen(PORT, () => {
  console.log(`⚡ Server running at http://localhost:${PORT}`);
});
