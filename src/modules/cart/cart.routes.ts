import express from "express";
import { cartController } from "./cart.controller";

const router = express.Router();

router.post("/create-cart", cartController.createCart);

export const cartRoutes = router;
