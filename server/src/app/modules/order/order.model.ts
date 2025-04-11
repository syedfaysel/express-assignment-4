import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const OrderItemSchema = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    color: { type: String },
    size: { type: String },
  },
  { _id: false },
);

const ShippingAddressSchema = new Schema(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  { _id: false },
);

const PaymentDetailsSchema = new Schema(
  {
    paymentMethod: {
      type: String,
      enum: ['cash', 'digital'],
      required: true,
    },
    transactionId: { type: String, default: null },
    paymentStatus: {
      type: String,
      enum: ['success', 'failed', 'pending'],
      required: true,
    },
  },
  { _id: false },
);

const OrderSchema = new Schema<IOrder>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: { type: [OrderItemSchema], required: true },
    totalAmount: { type: Number, required: true, min: 0 },
    shippingAddress: { type: ShippingAddressSchema, required: true },
    status: {
      type: String,
      enum: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    paymentDetails: { type: PaymentDetailsSchema, required: true },
    trackingNumber: { type: String, default: null },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  },
);

const Order = model<IOrder>('Order', OrderSchema);
export default Order;
