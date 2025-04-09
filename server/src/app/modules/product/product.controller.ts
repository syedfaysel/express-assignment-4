import { Request, Response } from 'express';
import { productServices } from './product.service';

const addNewProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productServices.addProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: 'Product added successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error in addNewProduct:', error);
  }
};

export const productControllers = {
  addNewProduct,
};
