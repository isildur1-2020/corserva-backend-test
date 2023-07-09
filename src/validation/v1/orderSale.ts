import Joi, { ObjectSchema } from "joi";

export const orderSaleSchema: ObjectSchema = Joi.object({
  status: Joi.string().valid("PENDING", "COMPLETED", "CANCELED").required(),
  trackingInfo: Joi.string().alphanum().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.number().positive().required(),
        quantity: Joi.number().positive().required(),
        discount: Joi.number().positive().max(99).required(),
      })
    )
    .required(),
});

export const orderSaleSchemaOptional: ObjectSchema = Joi.object({
  status: Joi.string().valid("PENDING", "COMPLETED", "CANCELED"),
  trackingInfo: Joi.string().alphanum(),
});
