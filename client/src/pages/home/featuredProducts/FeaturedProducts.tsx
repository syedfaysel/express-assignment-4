import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import SectionLayout from "@/components/SectionLayout";
import { Button } from "@/components/ui/button";
import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import { NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useGetProductsQuery({});

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError) return <div>Error loading products</div>;
  const products = data?.data || [];
  const featured = products.slice(0, 6);
  return (
    <SectionLayout title="Featured Products">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 auto-rows-fr">
        {featured.map((product: productDto) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <NavLink to={`/products`}>
          <Button className="bg-teal-700 text-white hover:bg-teal-800 transition duration-300 ease-in-out cursor-pointer px-4 py-4">
            View All Products
          </Button>
        </NavLink>
      </div>
    </SectionLayout>
  );
};

export default FeaturedProducts;
