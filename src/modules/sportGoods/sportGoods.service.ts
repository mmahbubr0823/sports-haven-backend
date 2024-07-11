import { TSports } from "./sportGoods.interface";
import { Sports } from "./sportGoods.model";

// create product
const createSportProduct = async (payload: TSports) => {
  const result = await Sports.create(payload);
  return result;
};
// get products
const getAllSportProducts = async () => {
  const result = await Sports.find();
  return result;
};
// get a product
const getSingleSportProduct = async (id: any) => {
  const result = await Sports.findById(id);
  return result;
};
// update a product
const updateSportProduct = async (id: any) => {
  const result = await Sports.findOneAndUpdate({ _id: id });
  return result;
};

export const sportServices = {
  createSportProduct,
  getAllSportProducts,
  getSingleSportProduct,
  updateSportProduct,
};
