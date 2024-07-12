import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";

// create product
const createCart = async (payload: TCart) => {
  const result = await Cart.create(payload);
  return result;
};

// get products
const getAllCart = async () => {
  const result = await Cart.find();
  return result;
};

export const cartServices = {
  createCart,
  getAllCart
};
