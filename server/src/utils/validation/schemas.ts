import Joi from "@hapi/joi";

import { config } from "../../common/config";

const optionalScheme = Joi.object()
  .max(config.MAX_OPTIONAL_PROPERTIES)
  .pattern(/.*/, [
    Joi.string(),
    Joi.number(),
    Joi.boolean(),
    Joi.date(),
    Joi.object(),
  ])
  .custom(optionalValidator, "optional object validation")
  .error((errors: any) => {
    errors
      .filter((err: any) => err.code === "object.length")
      .forEach(
        (err: any) =>
          (err.message = `Optional field exceeds the limit of ${config.MAX_SYMBOLS_PER_OBJECT} symbols per object`)
      );
    return errors;
  });

const schemas = {
  id: Joi.object({ id: Joi.string() }),
  wordId: Joi.object({ id: Joi.string(), wordId: Joi.string() }),
  user: Joi.object()
    .options({ abortEarly: false, allowUnknown: true })
    .keys({
      name: Joi.string().max(200),
      email: Joi.string().email({ tlds: { allow: false } }),
      password: Joi.string().min(config.MIN_PASSWORD_LENGTH),
    }),
  userWord: Joi.object()
    .options({ abortEarly: false, allowUnknown: false })
    .keys({
      difficulty: Joi.string().max(50),
      optional: optionalScheme,
    }),
  statistics: Joi.object()
    .options({ abortEarly: false, allowUnknown: false })
    .keys({
      learnedWords: Joi.number()
        .integer()
        .min(0)
        .max(100000),
      optional: optionalScheme,
    }),
  settings: Joi.object()
    .options({ abortEarly: false, allowUnknown: false })
    .keys({
      wordsPerDay: Joi.number()
        .integer()
        .min(1)
        .max(1000),
      optional: optionalScheme,
    }),
};

function optionalValidator(value: any, helpers: any) {
  if (JSON.stringify(value).length > config.MAX_SYMBOLS_PER_OBJECT) {
    return helpers.error("object.length");
  }

  return value;
}

export default schemas;
