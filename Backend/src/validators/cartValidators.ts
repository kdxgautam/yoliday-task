import Joi from 'joi';

export const cartSchema = Joi.object({
  project_id: Joi.number().integer().required()
});
