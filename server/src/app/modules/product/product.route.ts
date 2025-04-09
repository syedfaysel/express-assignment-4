import express from 'express';
import { productControllers } from './product.controller';

const router = express.Router();

// will call product.controller.ts

router.post('/add-product', productControllers.addNewProduct);
router.get('/:id', productControllers.getProductById);
router.get('/', productControllers.getAllProducts);
router.patch('/:id', productControllers.updateProduct);

export const ProductRoutes = router;
