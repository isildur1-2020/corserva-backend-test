import { Request, Response } from "express";
import { Product, IProduct } from "../../models/v1/product";
import { successResponse, errorResponse } from "./responses";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct = req.body;
    const newProduct = await Product.create({ ...product });
    successResponse(res, newProduct, "Product created successfully", 201);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.original.detail);
  }
};

export const getAllProducts = async (_: Request, res: Response) => {
  try {
    const productsFound = await Product.findAll({
      attributes: ["id", "name", "price", "stock"],
    });
    successResponse(res, productsFound, "Products found successfully.");
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemsDeleted = await Product.destroy({ where: { id } });
    const message = itemsDeleted === 1 ? `${id} deleted.` : "No items";
    successResponse(res, itemsDeleted, message);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};
