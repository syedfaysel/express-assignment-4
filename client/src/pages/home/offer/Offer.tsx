import ProductCard from "@/components/ProductCard";
import SectionLayout from "@/components/SectionLayout";
import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";

const Offer = () => {
  const {
    data,
    isError: isProductsError,
    isLoading: isProductsLoading,
  } = useGetProductsQuery({});

  if (isProductsLoading) return <div>Loading...</div>;
  if (isProductsError) return <div>Error loading products</div>;

  const products: productDto[] = data?.data || [];
  
  // Filter products that have `isOffer` set to true
  const offerProducts = products.filter((product) => product.isOffer);

  return (
    <>
      <SectionLayout title="Special Offers">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {offerProducts.length > 0 ? (
            offerProducts.map((product: productDto, index: number) => (
              <ProductCard product={product} key={index}></ProductCard>
            ))
          ) : (
            <p className="text-gray-500">No offer found.</p>
          )}
        </div>
      </SectionLayout>
    </>
  );
};

export default Offer;
