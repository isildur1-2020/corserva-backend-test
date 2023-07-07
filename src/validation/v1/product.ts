import Joi, { ObjectSchema } from "joi";

export const productSchema: ObjectSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  stock: Joi.number().integer().positive().required(),
});
