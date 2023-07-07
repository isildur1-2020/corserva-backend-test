import { Router } from "express";
const router: Router = Router();
import productRouter from "./product";

router.use("/product", productRouter);

export default router;
