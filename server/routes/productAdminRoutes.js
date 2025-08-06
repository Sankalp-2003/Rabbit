import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import { getAllAdminProducts } from "../controllers/productAdminController.js";

const productAdminRouter = express.Router();

productAdminRouter.get("/", protect, admin, getAllAdminProducts);

export default productAdminRouter;
