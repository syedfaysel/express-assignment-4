import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
import authRoute from './app/modules/auth/auth.route';
import userRoute from './app/modules/user/user.route';
import config from './app/config';
import { PaymentRoutes } from './app/modules/payment/payment.route';
const app: Application = express();

// parser and other middlewares
app.use(express.json());
app.use(cors({ origin: config.client_url, credentials: true }));

app.use('/api/v1/products', ProductRoutes);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/user', userRoute);
app.use('/api/v1/ssl', PaymentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello World!' });
});

// All application routes

export default app;
