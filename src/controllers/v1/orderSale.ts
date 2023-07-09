import { Request, Response } from "express";
import { OrderSaleModel } from "../../database/init";
import { IOrderSale } from "../../models/v1/orderSale";
import { successResponse, errorResponse } from "../../controllers/v1/responses";

export const createOrderSale = async (req: Request, res: Response) => {
  try {
    const orderSale: IOrderSale = req.body;
    const { status, trackingInfo } = orderSale;
    const newOrderSale = await OrderSaleModel.create({ status, trackingInfo });
    const message = "Order sale created successfully.";
    successResponse(res, newOrderSale, message, 201);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.original.detail);
  }
};

export const findAllOrderSales = async (req: Request, res: Response) => {
  try {
    const orderSalesFound = await OrderSaleModel.findAll();
    const message = "Order sales found successfully.";
    successResponse(res, orderSalesFound, message);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};

export const updateOrderSale = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [data] = await OrderSaleModel.update(req.body, { where: { id } });
    successResponse(res, null, data !== 0 ? `PK: ${id} updated` : "No items");
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};

export const deleteOrderSale = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemsDeleted = await OrderSaleModel.destroy({ where: { id } });
    const message = itemsDeleted === 1 ? `PK: ${id} deleted.` : "No items";
    successResponse(res, itemsDeleted, message);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};
