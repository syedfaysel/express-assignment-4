export interface IProduct {
  _id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  brand?: string;
  colors?: string[];
  sizes?: string[];
  images?: string[];
  tags?: string[];
  isFeatured?: boolean;
  isOffer?: boolean;
  oldPrice?: number;
  createdAt: Date;
  updatedAt: Date;
}
