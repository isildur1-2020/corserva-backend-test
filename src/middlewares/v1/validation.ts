import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../../controllers/v1/responses";

type reqType = "body" | "params" | "query" | "headers";

export const validation = (schema: ObjectSchema, type: reqType) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req[type]);
      next();
    } catch (err: any) {
      console.log(err);
      errorResponse(res, err.message);
    }
  };
};
