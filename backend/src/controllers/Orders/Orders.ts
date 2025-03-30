import { Request, Response } from "express";
import Order from "../../models/Orders";
import Seller from "../../models/sellerAuthentication";

// Create Order
export const createOrder = async (req: Request, res: Response): Promise<any> => {
  try {
    const { buyer, seller, liters } = req.body;


    if (!buyer || !seller || !liters) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newOrder = new Order({ buyer, seller, liters });
    await newOrder.save();

    res.status(201).json({ message: "Order created successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};

// Get Orders by Buyer
export const getBuyerOrders = async (req: Request, res: Response): Promise<any>  => {
  try {
    const { buyer } = req.body;
    if (!buyer) return res.status(400).json({ message: "Buyer ID is required" });

    const orders = await Order.find({ buyer }).populate("seller");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching buyer's orders", error });
  }
};

// Get Orders by Seller (with buyer details)
export const getSellerOrders = async (req: Request, res: Response): Promise<any> => {
  try {
    const { seller } = req.body;
    console.log(seller);
    
    if (!seller) return res.status(400).json({ message: "Seller ID is required" });

    const orders = await Order.find({ seller })
      .populate({
        path: "buyer",
        select: "name address phone", // Fetch specific buyer details
      });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching seller's orders", error });
  }
};


export const updateOrderStatus = async (req: Request, res: Response): Promise<any> => {
  try {
    const { orderId } = req.params;
    const order = await Order.findById(orderId);

    if (!order) return res.status(404).json({ message: "Order not found" });

    order.status = true; // Mark as completed
    await order.save();

    res.status(200).json({ message: "Order updated successfully", order });
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
};

// Get All Orders
export const getAllOrders = async (req: Request, res: Response): Promise<any>  => {
  try {
    const orders = await Order.find({}).populate("buyer seller");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all orders", error });
  }
};

// Delete Order
export const deleteOrder = async (req: Request, res: Response) : Promise<any>  => {
  try {
    const { id } = req.params;
    const order = await Order.findByIdAndDelete(id);

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting order", error });
  }
};



export const GetAllSellers = async (req: Request, res: Response): Promise<any> => {
  try {
    const sellers = await Seller.find();
    res.status(200).json(sellers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching all sellers", error });
  }
}
