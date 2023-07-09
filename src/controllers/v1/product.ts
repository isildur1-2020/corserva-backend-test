import { Request, Response } from "express";
import { ProductModel } from "../../database/init";
import { IProduct } from "../../models/v1/product";
import { successResponse, errorResponse } from "./responses";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct = req.body;
    const newProduct = await ProductModel.create({ ...product });
    successResponse(res, newProduct, "ProductModel created successfully", 201);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.original.detail);
  }
};

export const getAllProducts = async (_: Request, res: Response) => {
  try {
    const productsFound = await ProductModel.findAll({
      attributes: ["id", "name", "price", "stock"],
    });
    successResponse(res, productsFound, "Products found successfully.");
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [data] = await ProductModel.update(req.body, { where: { id } });
    successResponse(res, null, data !== 0 ? `PK: ${id} updated` : "No items");
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const itemsDeleted = await ProductModel.destroy({ where: { id } });
    const message = itemsDeleted === 1 ? `PK: ${id} deleted.` : "No items";
    successResponse(res, itemsDeleted, message);
  } catch (err: any) {
    console.log(err);
    errorResponse(res, err.message);
  }
};
