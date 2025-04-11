import { Types } from 'mongoose';

export interface IOrder {
  _id?: string;
  userId: Types.ObjectId;
  products: IOrderItem[];
  totalAmount: number;
  shippingAddress: IShippingAddress;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentDetails: IPaymentDetails;
  trackingNumber: string | null;
  deliveredAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IOrderItem {
  productId: Types.ObjectId;
  quantity: number;
  price: number;
  color?: string;
  size?: string;
}

export interface IShippingAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IPaymentDetails {
  paymentMethod: 'cash' | 'digital';
  transactionId: string | null;
  paymentStatus: 'success' | 'failed' | 'pending';
}
