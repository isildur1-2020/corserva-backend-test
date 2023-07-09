import { Request, Response } from "express";
import { successResponse, errorResponse } from "../../controllers/v1/responses";
import {
  ProductModel,
  OrderSaleModel,
  OrderProductModel,
} from "../../database/init";

export const createOrderSale = async (req: Request, res: Response) => {
  try {
    // const newOrderSale = await OrderSaleModel.create({
    //   quantity: 2,
    //   discount: 20,
    //   taxes: 16,
    //   status: "COMPLETED",
    //   trackingInfo: "232nsb",
    // });
    // const newX = await OrderProductModel.create({
    //   orderSaleId: 1,
    //   productId: 1,
    // });
    res.end();
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.original.detail);
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
