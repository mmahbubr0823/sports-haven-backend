import { TSports } from "./sportGoods.interface";
import { Sports } from "./sportGoods.model";

const createSportProduct = async (payload: TSports) => {
  const result = await Sports.create(payload);
  return result;
};

export const sportServices = {
    createSportProduct,
  // getSingleProduct,
  // updateProduct,
  // deleteProduct,
  // getProducts
};
