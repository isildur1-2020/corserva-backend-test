import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";

export const validation =
  (schema: ObjectSchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (err: any) {
      console.log(err);
      res.json({
        err: true,
        data: null,
        message: err.message,
      });
    }
  };
