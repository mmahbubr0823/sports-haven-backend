import express from "express";
import { sportProductController } from "./sportGoods.controller";

const router = express.Router();

router.post("/create-product", sportProductController.createSportProduct);

export const sportProductRoutes = router;
