import { Router } from "express";
const router: Router = Router();
import { validation } from "../../middlewares/v1/validation";
import { productSchema, idSchema } from "../../validation/v1";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
} from "../../controllers/v1/product";
import { productSchemaOptional } from "../../validation/v1/product";

router.get("/", getAllProducts);
router.post("/", validation(productSchema, "body"), createProduct);
router.patch(
  "/:id",
  validation(idSchema, "params"),
  validation(productSchemaOptional, "body"),
  updateProduct
);
router.delete("/:id", validation(idSchema, "params"), deleteProduct);

export default router;
