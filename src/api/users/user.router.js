const { Router } = require('express');
const {
  getCurrentUser,
  updateUsersController,
} = require('./user.controller');

const { authMiddleware, validate } = require('../../utils');
const Joi = require('joi');
const catchAsync = require('../../utils/catchAsync');
const usersRouter = Router();

const DataUserSchema = Joi.object({
  aboutMySelf: Joi.string().required(),
  skills: Joi.string().required(),
  projectsExperience: Joi.string().required(),
  workExperience: Joi.string().required(),
  contactsPhone: Joi.string().required(),
});

usersRouter.get('/current', catchAsync(authMiddleware), catchAsync(getCurrentUser));

usersRouter.put(
  '/savings-info',
  catchAsync(authMiddleware),
  validate(DataUserSchema),
  catchAsync(updateUsersController),
);

module.exports = usersRouter;
