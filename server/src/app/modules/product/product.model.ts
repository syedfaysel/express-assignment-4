import { Schema, model } from 'mongoose';
import { IProduct } from './product.interface';

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String },
    category: { type: String, default: 'generic' },
    stock: { type: Number, required: true, min: 0, default: 0 },
    brand: { type: String },
    colors: { type: [String], default: [] },
    sizes: { type: [String], default: [] },
    images: { type: [String], default: [] },
    tags: { type: [String], default: [] },
    isFeatured: { type: Boolean, default: false },
    isOffer: { type: Boolean, default: false },
    oldPrice: { type: Number, min: 0 },
    ratings: [{ userId: String, star: Number }], // Example: { userId: 'abc123', star: 4 }
    averageRating: { type: Number, default: 0 }, // Will be calculated from ratings

    // 🛍️ Suggested product IDs
    suggestedProducts: [String], // Example: ['prod123', 'prod456']
  },
  {
    timestamps: true,
  },
);

const Product = model<IProduct>('Product', productSchema);
export default Product;
