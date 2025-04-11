import { PaymentDetails } from './payment.interface';
import PaymentModel from './payment.model';

const addPaymentIntoDB = async (payment: PaymentDetails) => {
  console.log(payment);

  const result = await PaymentModel.create(payment);
  return result;
};
const updatePaymentIntoDB = async (id: string) => {
  console.log(id);

  const result = await PaymentModel.updateOne(
    { transaction_id: id },
    {
      $set: {
        status: true,
      },
    },
  );

  return result;
};

export const paymentServices = {
  addPaymentIntoDB,
  updatePaymentIntoDB,
};
