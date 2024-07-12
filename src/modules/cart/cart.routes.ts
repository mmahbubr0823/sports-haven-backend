import express from "express";
import { cartController } from "./cart.controller";

const router = express.Router();

router.post("/create-cart", cartController.createCart);
router.get("/get-all-carts", cartController.getAllCart);

export const cartRoutes = router;
