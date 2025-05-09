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

  // New fields
  ratings?: { userId: string; star: number }[];
  averageRating?: number;
  suggestedProducts?: string[];

  createdAt: Date;
  updatedAt: Date;
}
