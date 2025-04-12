import { Request, Response } from 'express';
import config from '../../config';

//ssl commerz
const SSLCommerzPayment = require('sslcommerz-lts');
const store_id = config.ssl_store_id;
const store_passwd = config.ssl_store_password;
const is_live = false; //true for live, false for sandbox
//ssl commerz
import mongoose from 'mongoose';
import { paymentServices } from './payment.service';

const PaymentPost = async (req: Request, res: Response) => {
  console.log('request', req.body);
  const transaction_id = new mongoose.Types.ObjectId().toString();
  const requestedData = req.body;
  //sslcommerz init
  const data = {
    total_amount: requestedData.price,
    currency: 'BDT',
    tran_id: transaction_id, // use unique tran_id for each api call
    success_url: `${config.server_url}/api/v1/ssl/payment/success/${transaction_id}`,
    fail_url: `${config.server_url}/fail`,
    cancel_url: `${config.server_url}/cancel`,
    ipn_url: `${config.server_url}/ipn`,
    shipping_method: 'Courier',
    product_name: 'Computer.',
    product_category: 'Electronic',
    product_profile: 'general',
    cus_name: requestedData.userName,
    cus_email: requestedData.email,
    cus_add1: requestedData.address,
    cus_add2: 'Dhaka',
    cus_city: 'Dhaka',
    cus_state: 'Dhaka',
    cus_postcode: '1000',
    cus_country: 'Bangladesh',
    cus_phone: '01711111111',
    cus_fax: '01711111111',
    ship_name: 'Customer Name',
    ship_add1: 'Dhaka',
    ship_add2: 'Dhaka',
    ship_city: 'Dhaka',
    ship_state: 'Dhaka',
    ship_postcode: 1000,
    ship_country: 'Bangladesh',
  };
  const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
  sslcz.init(data).then((apiResponse: any) => {
    // Redirect the user to payment gateway
    const GatewayPageURL = apiResponse.GatewayPageURL;
    res.send({ url: GatewayPageURL });

    const paymentDatasendToDB: any = {
      price: requestedData.price,
      phone: requestedData.phone,
      username: requestedData.userName,
      email: requestedData.email,
      address: requestedData.address,
      status: 'false',
      transaction_id,
    };

    const returnData = paymentServices.addPaymentIntoDB(paymentDatasendToDB);
    console.log(returnData);
  });
};

const updatePayment = async (req: Request, res: Response) => {
  console.log('id', req.params.id);
  const transaction_id = req.params.id;
  const result = await paymentServices.updatePaymentIntoDB(req.params.id as string);
  console.log(result);

  if (result.modifiedCount > 0) {
    res.redirect(`${config.client_url}/api/v1/ssl/payment/success/${transaction_id}`);
  }
};

export const PaymentController = {
  PaymentPost,
  updatePayment,
};
