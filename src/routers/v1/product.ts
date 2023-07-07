import { Router } from "express";
const router: Router = Router();
import { productSchema } from "../../validation/v1";
import { validation } from "../../middlewares/validation";
import { createProduct } from "../../controllers/v1/product";

router.post("/", validation(productSchema), createProduct);

export default router;
