import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

// will call product.controller.ts

router.post('/', PaymentController.PaymentPost);
router.post('/payment/success/:id', PaymentController.updatePayment);

export const PaymentRoutes = router;
