const { Router } = require('express');
const Joi = require('joi');
const authRouter = Router();
const { validate, catchAsync } = require('../../utils');
const authController = require('./auth.controller');

const registerSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

authRouter.post(
  '/sign-up',
  validate(registerSchema),
  catchAsync(authController.createNewUser),
);

authRouter.post(
  '/sign-in',
  validate(loginSchema),
  catchAsync(authController.loginUser),
);


module.exports = authRouter;