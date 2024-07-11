import { z } from "zod";

const createSportsValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    category: z.string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    }),
    stockQuantity: z.number({
      required_error: "Stock quantity is required",
      invalid_type_error: "Stock quantity must be a number",
    }),
    brand: z.string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be a string",
    }),
    rating: z.number({
      required_error: "Rating is required",
      invalid_type_error: "Rating must be a number",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    price: z.number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    }),
    image: z.string({
      required_error: "Image is required",
      invalid_type_error: "Image must be a string",
    }),
  }),
});

export const sportProductValidation = {
  createSportsValidationSchema,
};
