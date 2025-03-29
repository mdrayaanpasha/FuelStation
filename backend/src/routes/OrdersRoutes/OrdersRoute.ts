import { Router } from "express";
import { 
  createOrder, 
  getBuyerOrders, 
  getSellerOrders, 
  getAllOrders, 
  deleteOrder 
} from "../../controllers/Orders/Orders";

const OrderRoutes = Router();

OrderRoutes.post("/create", createOrder);
OrderRoutes.get("/buyers-orders", getBuyerOrders);
OrderRoutes.get("/sellers-orders", getSellerOrders);
OrderRoutes.get("/all", getAllOrders);
OrderRoutes.delete("/delete/:id", deleteOrder);

export default OrderRoutes;
