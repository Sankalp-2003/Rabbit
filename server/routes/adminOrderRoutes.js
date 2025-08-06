import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  getAllAdminOrders,
  updateAdminOrder,
  deleteAdminOrder,
} from "../controllers/adminOrderControllers.js";

const adminOrderRouter = express.Router();

adminOrderRouter.get("/", protect, admin, getAllAdminOrders);
adminOrderRouter.put("/:id", protect, admin, updateAdminOrder);
adminOrderRouter.delete("/:id", protect, admin, deleteAdminOrder);

export default adminOrderRouter;
