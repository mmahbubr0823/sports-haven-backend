import express from "express";
import { sportProductController } from "./sportGoods.controller";
import validationRequest from "../../app/middleWares/validationRequest";
import { sportProductValidation } from "./sportGoods.validation";

const router = express.Router();

router.post(
  "/create-product",
  validationRequest(sportProductValidation.createSportsValidationSchema),
  sportProductController.createSportProduct
);
router.get("/all-products", sportProductController.getAllSportProduct);
router.get("/single-product/:id", sportProductController.getSingleSportProduct);

export const sportProductRoutes = router;
