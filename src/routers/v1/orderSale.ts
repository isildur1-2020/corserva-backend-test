import { Router } from "express";
const router = Router();
import {
  createOrderSale,
  updateOrderSale,
  deleteOrderSale,
  findOneOrderSale,
  findAllOrderSales,
} from "../../controllers/v1/orderSale";

router.get("/:id", findOneOrderSale);
router.get("/", findAllOrderSales);
router.post("/", createOrderSale);
router.patch("/:id", updateOrderSale);
router.delete("/:id", deleteOrderSale);

export default router;
