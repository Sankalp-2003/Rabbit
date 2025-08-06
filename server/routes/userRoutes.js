// @ts-nocheck
import express from "express";
import { loginUser, registerUser } from "../controllers/userControllers.js";
import User from "../models/User.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

export default userRouter;
