import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleWares/globalErrorHandler";
import notFoundApi from "./app/middleWares/notFoundApi";

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// routes
// app.use('/api/products', productRoutes);
// app.use('/api/orders', orderRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// // global error handler
app.use(globalErrorHandler);

// // not found rout
app.use(notFoundApi);

export default app;
