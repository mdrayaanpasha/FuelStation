"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BuyersAuthRoutes_1 = __importDefault(require("./routes/AuthenticationRoutes/BuyersAuthRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const connectDB_1 = __importDefault(require("./config/connectDB"));
(0, connectDB_1.default)();
app.use(express_1.default.json());
app.use("/api/auth/Buyers", BuyersAuthRoutes_1.default);
// app.use("/api/auth/Sellers",SellersRoutes);
app.listen(PORT, () => {
    console.log(`⚡ Server running at http://localhost:${PORT}`);
});
