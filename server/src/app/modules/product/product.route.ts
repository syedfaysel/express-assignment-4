import express from 'express';
import { productControllers } from './product.controller';
import auth from '../../../middlewares/auth';

const router = express.Router();

// will call product.controller.ts

router.post('/add-product', auth('admin'), productControllers.addNewProduct);
router.get('/:id', productControllers.getProductById);
router.get('/', productControllers.getAllProducts);
router.patch('/:id', auth('admin'), productControllers.updateProduct);

export const ProductRoutes = router;
