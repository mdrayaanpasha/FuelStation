import { Router } from "express";
import { 
  createOrder, 
  getBuyerOrders, 
  getSellerOrders, 
  getAllOrders, 
  deleteOrder ,
  GetAllSellers,
  updateOrderStatus
} from "../../controllers/Orders/Orders";

const OrderRoutes = Router();

OrderRoutes.post("/create", createOrder);
OrderRoutes.post("/buyers-orders", getBuyerOrders);
OrderRoutes.post("/sellers-orders", getSellerOrders);
OrderRoutes.get("/all", getAllOrders);
OrderRoutes.delete("/delete/:id", deleteOrder);
OrderRoutes.get("/GetAllSellers",GetAllSellers  );
OrderRoutes.put("/update/:orderId", updateOrderStatus);

export default OrderRoutes;
