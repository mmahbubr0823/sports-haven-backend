import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { cartServices } from "./cart.service";
import { Cart } from "./cart.model";

// create product
const createCart = catchAsync(async (req: Request, res: Response) => {
  const result = await cartServices.createCart(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product is successfully added to your cart!",
    data: result,
  });
});
// create product
const getAllCart = catchAsync(async (req: Request, res: Response) => {
  const result = await cartServices.getAllCart();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Carted products are successfully fetched!",
    data: result,
  });
});

export const cartController = {
  createCart,
  getAllCart,
};
