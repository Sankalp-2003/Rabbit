import express from "express";
import {
  addCartItems,
  updateCartItems,
  deleteCartItems,
  getCartItems,
  mergeCartItems,
} from "../controllers/cartControllers.js";
import { protect } from "../middleware/authMiddleware.js";

const cartRouter = express.Router();

cartRouter.post("/", addCartItems);
cartRouter.put("/", updateCartItems);
cartRouter.delete("/", deleteCartItems);
cartRouter.get("/", getCartItems);

//* merge cart on login
cartRouter.post("/merge", protect, mergeCartItems);

export default cartRouter;
