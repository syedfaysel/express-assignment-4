import express from 'express';
import { orderControllers } from './order.controller';
import auth from '../../../middlewares/auth';

const router = express.Router();

router.post('/', auth('admin', 'user'), orderControllers.createOrder);
router.get('/', auth('admin'), orderControllers.getOrders);
router.post('/success/:id', orderControllers.updatePayment);
router.post('/fail/:id', orderControllers.failedOrCanceledOrder);
router.post('/cancel/:id', orderControllers.failedOrCanceledOrder);

// TODO::
// router.post('/updateStatus/:id', auth('admin'), orderControllers.updateOrderStatus);

export const OrderRoutes = router;
