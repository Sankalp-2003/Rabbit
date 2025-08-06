import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  getUserOrders,
  getOrderDetailsById,
} from "../controllers/orderControllers.js";

const orderRouter = express.Router();

orderRouter.get("/my-orders", protect, getUserOrders);
orderRouter.get("/:id", protect, getOrderDetailsById);

export default orderRouter;
