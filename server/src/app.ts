import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.route';
const app: Application = express();

// parser and other middlewares
app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello World!' });
});

// All application routes

export default app;
