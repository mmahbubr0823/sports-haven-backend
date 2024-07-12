import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { cartServices } from "./cart.service";

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

  export const cartController = {
    createCart,
  }