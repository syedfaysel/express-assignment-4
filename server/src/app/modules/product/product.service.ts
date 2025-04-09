import Product from './product.model';
import { IProduct } from './product.interface';

const addProductIntoDB = (product: IProduct) => {
  const result = Product.create(product);
  return result;
};

export const productServices = {
  addProductIntoDB,
};
