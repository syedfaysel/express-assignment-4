import { NextFunction, Request, Response, Router } from 'express';
import { userController } from './user.controller';
import { UserValidation } from './userValidation';

const userRoute = Router();

userRoute.post(
  '/create-user',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log({ body: req.body });
      const parsedBody = await UserValidation.userValidationSchema.parseAsync(req.body);
      req.body = parsedBody;
      console.log({ parsedBody });
      next();
    } catch (error) {
      next(error);
    }
  },
  userController.createUser,
);
userRoute.get('/:userId', userController.getSingleUser);
userRoute.put('/:userId', userController.updateUser);
userRoute.delete('/:userId', userController.deleteUser);
userRoute.get('/', userController.getUser);

export default userRoute;
