import { Router } from 'express';

import validateRequest from '../../../middlewares/validateRequest';

import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validation';
import { UserValidation } from '../user/user.validation';

const authRoute = Router();

authRoute.post(
  '/register',
  validateRequest(UserValidation.userValidationSchema),
  AuthController.register,
);

authRoute.post(
  '/login',
  validateRequest(AuthValidation.loginvalidationSchema),
  AuthController.login,
);

export default authRoute;
