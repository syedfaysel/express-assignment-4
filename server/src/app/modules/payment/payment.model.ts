import { Schema, model } from 'mongoose';
import { PaymentDetails } from './payment.interface';

const paymentSchema = new Schema<PaymentDetails>(
  {
    username: { type: String, required: true },
    price: { type: Number, required: true },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    status: { type: String },
    transaction_id: { type: String },
  },
  {
    timestamps: true,
  },
);

const PaymentModel = model<PaymentDetails>('PaymentCollection', paymentSchema);
export default PaymentModel;
