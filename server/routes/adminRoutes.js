import express from "express";
import { admin, protect } from "../middleware/authMiddleware.js";
import {
  getAllUsers,
  createUser,
  updateUserDetails,
  deleteUser,
} from "../controllers/adminControllers.js";

const adminRouter = express.Router();

adminRouter.get("/", protect, admin, getAllUsers);
adminRouter.post("/", protect, admin, createUser);
adminRouter.put("/:id", protect, admin, updateUserDetails);
adminRouter.delete("/:id", protect, admin, deleteUser);

export default adminRouter;
