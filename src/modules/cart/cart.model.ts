import { Schema, model } from "mongoose";
import { TCart } from "./cart.interface";

const cartSchema = new Schema<TCart>({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Cart = model<TCart>("Cart", cartSchema);
