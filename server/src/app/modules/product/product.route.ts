import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();


// will call product.controller.ts

router.post('/add-product', productControllers.addNewProduct);


export const ProductRoutes = router;