"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllSellers = exports.deleteOrder = exports.getAllOrders = exports.updateOrderStatus = exports.getSellerOrders = exports.getBuyerOrders = exports.createOrder = void 0;
const Orders_1 = __importDefault(require("../../models/Orders"));
const sellerAuthentication_1 = __importDefault(require("../../models/sellerAuthentication"));
// Create Order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { buyer, seller, liters } = req.body;
        if (!buyer || !seller || !liters) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newOrder = new Orders_1.default({ buyer, seller, liters });
        yield newOrder.save();
        res.status(201).json({ message: "Order created successfully", order: newOrder });
    }
    catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
});
exports.createOrder = createOrder;
// Get Orders by Buyer
const getBuyerOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { buyer } = req.body;
        if (!buyer)
            return res.status(400).json({ message: "Buyer ID is required" });
        const orders = yield Orders_1.default.find({ buyer }).populate("seller");
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching buyer's orders", error });
    }
});
exports.getBuyerOrders = getBuyerOrders;
// Get Orders by Seller (with buyer details)
const getSellerOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { seller } = req.body;
        console.log(seller);
        if (!seller)
            return res.status(400).json({ message: "Seller ID is required" });
        const orders = yield Orders_1.default.find({ seller })
            .populate({
            path: "buyer",
            select: "name address phone", // Fetch specific buyer details
        });
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching seller's orders", error });
    }
});
exports.getSellerOrders = getSellerOrders;
const updateOrderStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const order = yield Orders_1.default.findById(orderId);
        if (!order)
            return res.status(404).json({ message: "Order not found" });
        order.status = true; // Mark as completed
        yield order.save();
        res.status(200).json({ message: "Order updated successfully", order });
    }
    catch (error) {
        res.status(500).json({ message: "Error updating order", error });
    }
});
exports.updateOrderStatus = updateOrderStatus;
// Get All Orders
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield Orders_1.default.find({}).populate("buyer seller");
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching all orders", error });
    }
});
exports.getAllOrders = getAllOrders;
// Delete Order
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const order = yield Orders_1.default.findByIdAndDelete(id);
        if (!order)
            return res.status(404).json({ message: "Order not found" });
        res.status(200).json({ message: "Order deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting order", error });
    }
});
exports.deleteOrder = deleteOrder;
const GetAllSellers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellers = yield sellerAuthentication_1.default.find();
        res.status(200).json(sellers);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching all sellers", error });
    }
});
exports.GetAllSellers = GetAllSellers;
