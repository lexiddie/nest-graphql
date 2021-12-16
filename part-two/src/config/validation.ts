import * as Joi from 'joi';

export const validationSchema = Joi.object({ port: Joi.number().default(3000), dbUri: Joi.string().required() });
