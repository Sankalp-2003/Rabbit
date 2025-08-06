import express, { Router } from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { uploadImage } from "../controllers/uploadControllers.js";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadRouter = express.Router();

uploadRouter.post("/", upload.single("image"), uploadImage);

export default uploadRouter;
