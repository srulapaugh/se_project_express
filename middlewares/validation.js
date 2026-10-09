const { celebrate, Joi } = require("celebrate");
const validator = require("validator");

const validateURL = (value, helpers) => {
  if (validator.isURL(value, { require_protocol: true })) {
    return value;
  }
  return helpers.error("string.uri");
};

const name = (field) =>
  Joi.string()
    .required()
    .min(2)
    .max(30)
    .messages({
      "string.min": `The minimum length of the "${field}" field is 2`,
      "string.max": `The maximum length of the "${field}" field is 30`,
      "string.empty": `The "${field}" field must be filled in`,
      "any.required": `The "${field}" field is required`,
    });

const url = (field) =>
  Joi.string()
    .required()
    .custom(validateURL)
    .messages({
      "string.empty": `The "${field}" field must be filled in`,
      "string.uri": `The "${field}" field must be a valid url`,
      "any.required": `The "${field}" field is required`,
    });

const email = Joi.string().required().email().messages({
  "string.email": 'The "email" field must be a valid email',
  "string.empty": 'The "email" field must be filled in',
  "any.required": 'The "email" field is required',
});

const password = Joi.string().required().messages({
  "string.empty": 'The "password" field must be filled in',
  "any.required": 'The "password" field is required',
});

module.exports.validateCardBody = celebrate({
  body: Joi.object().keys({
    name: name("name"),
    imageUrl: url("imageUrl"),
    weather: Joi.string().required().valid("hot", "warm", "cold").messages({
      "any.only": 'The "weather" field must be hot, warm, or cold',
      "string.empty": 'The "weather" field must be filled in',
      "any.required": 'The "weather" field is required',
    }),
  }),
});

module.exports.validateUserBody = celebrate({
  body: Joi.object().keys({
    name: name("name"),
    avatar: url("avatar"),
    email,
    password,
  }),
});

module.exports.validateLogin = celebrate({
  body: Joi.object().keys({ email, password }),
});

module.exports.validateProfileBody = celebrate({
  body: Joi.object().keys({
    name: name("name"),
    avatar: url("avatar"),
  }),
});

module.exports.validateItemId = celebrate({
  params: Joi.object().keys({
    itemId: Joi.string().hex().length(24).required().messages({
      "string.hex": 'The "itemId" field must be a valid hexadecimal ID',
      "string.length": 'The "itemId" field must be 24 characters long',
    }),
  }),
});
