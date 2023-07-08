import Joi, { ObjectSchema } from "joi";

export const idSchema: ObjectSchema = Joi.object({
  id: Joi.number().required().positive(),
});
