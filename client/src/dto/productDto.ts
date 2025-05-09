export type productDto = {
  _id?: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  brand?: string;
  colors?: string[];
  sizes?: string[];
  images: string[];
  tags?: string[];
  isFeatured?: boolean;
  isOffer?: boolean;
  oldPrice?: number;

  // Newly added fields
  ratings?: { userId: string; star: number }[];
  averageRating?: number;
  suggestedProducts?: string[];

  createdAt: Date;
  updatedAt: Date;
};
