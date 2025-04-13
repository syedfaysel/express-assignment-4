import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import { Link, NavLink } from "react-router-dom";

const FeaturedProducts = () => {
  const { data, isLoading, isError } = useGetProductsQuery({});
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;
  const products = data?.data || [];
  const featured = products.slice(0, 6);
  return (
    <section className="bg-[#FAF7F0] font-[josefin-sans]">
      <div className="max-w-7xl mx-auto px-4 py-10 ">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:py-6">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {featured.map((product: productDto) => (
            <Link
              to={`/products/${product._id}`}
              key={product._id}
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full object-cover mb-3"
              />
              <h3 className="text-lg font-medium text-gray-700">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="font-semibold">
                ৳ {product.price.toLocaleString("en-BD")}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-[#1E2525] text-white rounded hover:bg-[#1E2525] transition">
            <NavLink to={"/products"}>View All</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
