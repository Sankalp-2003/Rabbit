import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  addProducts,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  getSimilarProducts,
  getBestSellerProduct,
  getNewArrivals,
} from "../controllers/productControllers.js";

const productRouter = express.Router();

productRouter.get("/best-seller", getBestSellerProduct);
productRouter.get("/new-arrivals", getNewArrivals);

productRouter.post("/", protect, admin, addProducts);
productRouter.put("/:id", protect, admin, updateProduct);
productRouter.delete("/:id", protect, admin, deleteProduct);
productRouter.get("/", getAllProducts);
productRouter.get("/:id", getSingleProduct);
productRouter.get("/similar/:id", getSimilarProducts);

export default productRouter;
