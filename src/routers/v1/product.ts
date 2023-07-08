import { Router } from "express";
const router: Router = Router();
import { validation } from "../../middlewares/v1/validation";
import { productSchema, idSchema } from "../../validation/v1";
import {
  createProduct,
  getAllProducts,
  deleteProduct,
} from "../../controllers/v1/product";

router.get("/", getAllProducts);
router.post("/", validation(productSchema, "body"), createProduct);
router.delete("/:id", validation(idSchema, "params"), deleteProduct);

export default router;
