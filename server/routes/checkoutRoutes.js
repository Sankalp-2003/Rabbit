import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createCheckout,
  updateCheckout,
  finalizeCheckout,
} from "../controllers/checkoutController.js";

const checkoutRouter = express.Router();

checkoutRouter.post("/", protect, createCheckout);
checkoutRouter.put("/:id/pay", protect, updateCheckout);
checkoutRouter.post("/:id/finalize", protect, finalizeCheckout);

export default checkoutRouter;
