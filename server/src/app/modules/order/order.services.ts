import { IOrder } from './order.interface';
import Order from './order.model';

const createOrderIntoDB = async (order: IOrder) => {
  console.log(order);

  const result = await Order.create(order);
  return result;
};
const updatePaymentStatus = async (id: string) => {
  console.log(id);

  const result = await Order.updateOne(
    { transactionId: id },
    {
      $set: {
        isPaid: true,
      },
    },
  );

  return result;
};

const getOrders = async () => {
  const orders = await Order.find();

  return orders;
};

export const orderServices = {
  createOrderIntoDB,
  updatePaymentStatus,
  getOrders,
};
