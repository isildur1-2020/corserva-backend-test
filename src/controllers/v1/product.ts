import { Request, Response } from "express";
import { Product, IProduct } from "../../models/product";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct = req.body;
    const newProduct = await Product.create({ ...product });
    await newProduct.save();
    res.json({
      err: false,
      data: newProduct,
      message: "Product created successfully",
    });
  } catch (err: any) {
    console.log(err);
    res.json({
      err: true,
      data: null,
      message: err.errors,
    });
  }
};
