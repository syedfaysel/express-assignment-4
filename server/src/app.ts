import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import authRoute from './app/modules/auth/auth.route';
import userRoute from './app/modules/user/user.route';
const app: Application = express();

// parser and other middlewares
app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRoutes);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello World!' });
});

// All application routes

export default app;
