import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleWares/globalErrorHandler";
import notFoundApi from "./app/middleWares/notFoundApi";
import { sportProductRoutes } from "./modules/sportGoods/sportGoods.routes";
import { cartRoutes } from "./modules/cart/cart.routes";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
app.use('/api/sports-products', sportProductRoutes);
app.use('/api/sports-products', cartRoutes);
// app.use('/api/orders', orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// // global error handler
app.use(globalErrorHandler);

// // not found rout
app.use(notFoundApi);

export default app;
