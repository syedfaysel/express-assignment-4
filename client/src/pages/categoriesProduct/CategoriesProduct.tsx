import ProductCard from "@/components/ProductCard";
import SectionLayout from "@/components/SectionLayout";
import { productDto } from "@/dto/productDto";
import { useGetProductsByCategoryQuery } from "@/redux/features/proudct/productApi";
import { useParams } from "react-router-dom";

const CategoriesProduct = () => {
  const { productCategory } = useParams<{ productCategory: string }>();
  const {
    data,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsByCategoryQuery({ productCategory });
  if (isProductsLoading) return <div>Loading...</div>;
  if (isProductsError) return <div>Error loading products</div>;
  const products: productDto[] = data?.data || [];
  console.log(products);
  return (
    <>
      <SectionLayout title={productCategory || "Default Category"}>
        {products?.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products?.map((product: productDto, index: number) => (
              <ProductCard product={product} key={index}></ProductCard>
            ))}
          </div>
        )}
      </SectionLayout>
    </>
  );
};

export default CategoriesProduct;
