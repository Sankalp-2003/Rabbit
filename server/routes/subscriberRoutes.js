import express from "express";
import { createSubscriber } from "../controllers/subscriberControllers.js";

const subscriberRouter = express.Router();

subscriberRouter.post("/", createSubscriber);

export default subscriberRouter;
