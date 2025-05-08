import SectionLayout from "@/components/SectionLayout";
import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import React from "react";
import { Link } from "react-router-dom";

const Category: React.FC = () => {
  const {
    data,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsQuery({});

  if (isProductsLoading) return <div>Loading...</div>;
  if (isProductsError) return <div>Error loading products</div>;

  const products: productDto[] = data?.data || [];

  const categoryImagesMap: Record<string, string> = {};

  products.forEach((product) => {
    if (!categoryImagesMap[product.category]) {
      categoryImagesMap[product.category] = product.images?.[0];
    }
  });

  const uniqueCategories: string[] = [
    ...Array.from(new Set(products.map((p) => p.category))),
  ];
  console.log(categoryImagesMap);
  return (
    <SectionLayout title="Categories">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {uniqueCategories.map((category) => (
          <Link to={`/products/category/${category}`}
            key={category}
            className="relative h-52 rounded-lg overflow-hidden shadow-md">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  categoryImagesMap[category] ||
                  "https://i.ibb.co.com/wr7PJ5Zx/school-stationery-with-accessories.jpg"
                })`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-2xl uppercase font-bold z-10">
                {category}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Category;