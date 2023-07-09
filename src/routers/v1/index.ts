import { Router } from "express";
const router: Router = Router();
import productRouter from "./product";
import orderSaleRouter from "./orderSale";

router.use("/product", productRouter);
router.use("/order-sale", orderSaleRouter);

export default router;
