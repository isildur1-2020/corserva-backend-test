import { Request, Response } from "express";
import { IOrderSale } from "../../models/v1/orderSale";
import { successResponse, errorResponse } from "../../controllers/v1/responses";
import {
  ProductModel,
  OrderSaleModel,
  OrderProductModel,
} from "../../database/init";

export const createOrderSale = async (req: Request, res: Response) => {
  try {
    const orderSale: IOrderSale = req.body;
    const { status, trackingInfo, products } = orderSale;
    const newOrderSale = await OrderSaleModel.create({
      status,
      trackingInfo,
    });
    for (let item of products) {
      const { productId, quantity, discount } = item;
      await OrderProductModel.create({
        discount,
        quantity,
        productId,
        orderSaleId: newOrderSale.dataValues.id,
      });
    }
    successResponse(res, newOrderSale, "OK", 201);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};

export const addProductsToOrderSale = async () => {
  try {
  } catch (err) {
    console.log(err);
  }
};

export const findOneOrderSale = async (req: Request, res: Response) => {
  try {
    console.log("object");
  } catch (err: any) {
    console.log("");
  }
};

export const findAllOrderSales = async (req: Request, res: Response) => {
  try {
    console.log("object");
  } catch (err: any) {
    console.log("");
  }
};

export const updateOrderSale = async (req: Request, res: Response) => {
  try {
    console.log("object");
  } catch (err: any) {
    console.log("");
  }
};

export const deleteOrderSale = async (req: Request, res: Response) => {
  try {
    console.log("object");
  } catch (err: any) {
    console.log("");
  }
};
