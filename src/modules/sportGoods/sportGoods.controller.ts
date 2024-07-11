import { Request, Response } from "express";
import catchAsync from "../../app/utils/catchAsync";
import { sportServices } from "./sportGoods.service";
import sendResponse from "../../app/utils/sendResponse";

// create product
const createSportProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await sportServices.createSportProduct(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Product is created successfully",
    data: result,
  });
});
// get products
const getAllSportProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await sportServices.getAllSportProducts();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Products are fetched successfully",
    data: result,
  });
});
// get a product
const getSingleSportProduct = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await sportServices.getSingleSportProduct(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Product is fetched successfully",
      data: result,
    });
  }
);

export const sportProductController = {
  createSportProduct,
  getAllSportProduct,
  getSingleSportProduct,
};
