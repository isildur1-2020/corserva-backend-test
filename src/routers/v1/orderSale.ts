import { Router } from "express";
const router = Router();
import { validation } from "../../middlewares/v1/validation";
import { idSchema, orderSaleSchema } from "../../validation/v1";
import { orderSaleSchemaOptional } from "../../validation/v1/orderSale";
import {
  createOrderSale,
  updateOrderSale,
  deleteOrderSale,
  findAllOrderSales,
} from "../../controllers/v1/orderSale";

router.get("/", findAllOrderSales);
router.post("/", validation(orderSaleSchema, "body"), createOrderSale);
router.patch(
  "/:id",
  validation(idSchema, "params"),
  validation(orderSaleSchemaOptional, "body"),
  updateOrderSale
);
router.delete("/:id", validation(idSchema, "params"), deleteOrderSale);

export default router;
