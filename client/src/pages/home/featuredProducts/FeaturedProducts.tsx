import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import SectionLayout from "@/components/SectionLayout";
import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import { Link } from "react-router-dom";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 auto-rows-fr">
        {featured.map((product: productDto) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <Link
          to="/products"
          className="px-4 py-2 border border-black hover:text-black rounded  font-semibold transition">
          View All Products
        </Link>
      </div>
    </SectionLayout>
  );
};

export default FeaturedProducts;
