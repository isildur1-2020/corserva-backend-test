import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message: string,
  statusCode: number = 200
) => {
  return res.status(statusCode).json({
    error: false,
    data,
    message,
  });
};

export const errorResponse = (
  res: Response,
  message: any,
  statusCode: number = 400
) => {
  return res.status(statusCode).json({
    error: true,
    data: null,
    message,
  });
};
