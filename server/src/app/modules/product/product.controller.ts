import { Request, Response } from 'express';
import { productServices } from './product.service';
import { IProduct } from './product.interface';

const addNewProduct = async (req: Request, res: Response) => {
  try {
    const product: IProduct = req.body;
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

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error in getAllProducts:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await productServices.getProductByIdFromDB(id);

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully by id',
      data: result,
    });
  } catch (error) {
    console.log('Error in getProductById:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

const updateProductById = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const result = await productServices.updateProductIntoDB(id, updatedData);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product could not be updated',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product fetched successfully by id',
      data: result,
    });
  } catch (error) {
    console.log('Error in updating product:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};
const updateProduct = async (req: Request, res: Response): Promise<any | void> => {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    const result = await productServices.updateProductIntoDB(id, updatedData);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error in updateProduct:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const productControllers = {
  addNewProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  updateProductById,
};
