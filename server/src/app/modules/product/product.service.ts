import Product from './product.model';
import { IProduct } from './product.interface';

const addProductIntoDB = (product: IProduct) => {
  const result = Product.create(product);
  return result;
};

const getAllProductsFromDB = () => {
  const result = Product.find();
  return result;
};

const getProductByIdFromDB = (_id: string) => {
  const result = Product.findById(_id);
  return result;
};

const updateProductIntoDB = (_id: string, updatedProduct: any) => {
  const result = Product.findByIdAndUpdate(_id, updatedProduct, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const productServices = {
  addProductIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductIntoDB,
};
