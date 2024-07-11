import express from "express";
import { sportProductController } from "./sportGoods.controller";
import validationRequest from "../../app/middleWares/validationRequest";
import { sportProductValidation } from "./sportGoods.validation";

const router = express.Router();

router.post("/create-product", validationRequest(sportProductValidation.createSportsValidationSchema), sportProductController.createSportProduct);

export const sportProductRoutes = router;
