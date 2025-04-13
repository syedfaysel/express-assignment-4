import { Request, Response } from 'express';
import config from '../../config';

//ssl commerz
const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = config.ssl_store_id;
const store_passwd = config.ssl_store_password;
const is_live = false; //true for live, false for sandbox
//ssl commerz
import mongoose from 'mongoose';
import { orderServices } from './order.services';
import { IOrder } from './order.interface';
import Order from './order.model';

// CREATE TEMPORARY ORDER FIRST
const createOrder = async (req: Request, res: Response) => {
  try {
    // console.log('request', req.body);
    const transaction_id = new mongoose.Types.ObjectId().toString();
    const requestedData = req.body;
    //sslcommerz init
    const data = {
      total_amount: requestedData.totalAmount,
      currency: 'BDT',
      tran_id: transaction_id, // use unique tran_id for each api call
      success_url: `${config.server_url}/api/v1/orders/success/${transaction_id}`,
      fail_url: `${config.server_url}/api/v1/orders/fail/${transaction_id}`,
      cancel_url: `${config.server_url}/api/v1/orders/fail/${transaction_id}`,
      ipn_url: `${config.server_url}/ipn`,
      shipping_method: 'Courier',
      product_name: 'Computer.',
      product_category: 'general',
      product_profile: 'general',
      cus_name: 'Customer Name',
      cus_email: 'test@gmail.com',
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: requestedData?.shippingAddress?.city || 'Dhaka',
      cus_state: requestedData?.shippingAddress?.state || 'Dhaka',
      cus_postcode: requestedData?.shippingAddress?.zipCode || 1000,
      cus_country: requestedData?.shippingAddress?.country || 'Bangladesh',
      cus_phone: requestedData.contactPhone || '01711111111',
      cus_fax: '01711111111',
      ship_name: 'Shipping Name',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: requestedData?.shippingAddress?.city || 'Dhaka',
      ship_state: requestedData?.shippingAddress?.state || 'Dhaka',
      ship_postcode: 1000,
      ship_country: 'Bangladesh',
    };
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then((apiResponse: any) => {
      // Redirect the user to payment gateway
      const GatewayPageURL = apiResponse.GatewayPageURL;
      res.send({ url: GatewayPageURL });

      const orderData: IOrder = {
        userId: requestedData.userId,
        products: requestedData.products,
        totalAmount: requestedData.totalAmount,
        shippingCost: requestedData?.shippingCost || 0,
        shippingAddress: requestedData?.shippingAddress,
        contactPhone: requestedData.contactPhone,
        customerNote: requestedData?.customerNote || '',
        couponCode: requestedData?.couponCode || '',
        isPaid: false,
        transactionId: transaction_id,
        status: 'pending',
        trackingNumber: null,
      };

      const returnData = orderServices.createOrderIntoDB(orderData);
      // console.log(returnData);
    });
  } catch (error) {
    console.log('Order Creation Failed', error);
    res.status(500).json({
      success: false,
      message: 'Order Creation Failed',
    });
  }
};

const updatePayment = async (req: Request, res: Response) => {
  const transaction_id = req.params.id;
  const result = await orderServices.updatePaymentStatus(req.params.id as string);

  if (result.modifiedCount > 0) {
    res.redirect(`${config.client_url}/orders/success/${transaction_id}`);
  } else {
    res.status(404).json({
      success: false,
      message: 'Order not found',
    });
  }
};

const failedOrCanceledOrder = async (req: Request, res: Response) => {
  console.log(req.path);
  const transaction_id = req.params.id;
  const result = await Order.deleteOne({
    transactionId: transaction_id,
  });

  if (result.deletedCount > 0) {
    res.redirect(`${config.client_url}/orders/fail/${transaction_id}`);
  } else {
    res.status(404).json({
      success: false,
      message: 'Order not found',
    });
  }
};

const getOrders = async (req: Request, res: Response) => {
  const orders = await orderServices.getOrders();
  if (orders) {
    res.status(200).json({
      success: true,
      orders,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Orders not found',
    });
  }
};

export const orderControllers = {
  createOrder,
  updatePayment,
  failedOrCanceledOrder,
  getOrders,
};
