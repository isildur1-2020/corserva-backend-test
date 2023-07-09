import { Router } from "express";
const router = Router();
import { orderSaleSchema } from "../../validation/v1";
import { validation } from "../../middlewares/v1/validation";
import {
  createOrderSale,
  updateOrderSale,
  deleteOrderSale,
  findOneOrderSale,
  findAllOrderSales,
} from "../../controllers/v1/orderSale";

router.get("/:id", findOneOrderSale);
router.get("/", findAllOrderSales);
router.post("/", validation(orderSaleSchema, "body"), createOrderSale);
router.patch("/:id", updateOrderSale);
router.delete("/:id", deleteOrderSale);

export default router;
