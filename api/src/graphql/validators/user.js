import Joi from 'joi';

const name = Joi.string().max(255).required().label('Name');
const email = Joi.string().email().required().label('Email');
const password = Joi.string().max(30).min(8).required().label('Password');

export const loginValidate = Joi.object().keep({
  email,
  password
});

export const registerValidate = Joi.object().keys({
  name,
  email,
  password
});
