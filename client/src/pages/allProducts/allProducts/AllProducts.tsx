import { productDto } from "@/dto/productDto";
import { useGetProductsQuery } from "@/redux/features/proudct/productApi";
import { useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);


  const { data, isError: isProductsError, isLoading: isProductsLoading } = useGetProductsQuery({});
  if (isProductsLoading) return <div>Loading...</div>;
  if (isProductsError) return <div>Error loading products</div>;
  const products : productDto[] = data?.data || [];


  const filteredProducts = products?.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product?.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;

    const matchesStock = !inStockOnly || product.stock > 0;

    return matchesSearch && matchesCategory && matchesStock;
  });

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(products?.map((p) => p.category))),
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 font-[josefin-sans]">
      <h2 className="text-2xl font-semibold mb-6">All Products</h2>

      {/* Search and Filters */}
      <div className="grid md:grid-cols-4 gap-6 mb-10">
        <input
          type="text"
          placeholder="Search by name, author, category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="col-span-2 p-2 border"
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border">
          {uniqueCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <label className="flex items-center space-x-2 text-sm">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={(e) => setInStockOnly(e.target.checked)}
          />
          <span>In Stock Only</span>
        </label>
      </div>

      {/* Results */}
      {filteredProducts?.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts?.map((product:productDto) => (
            <div
              key={product._id}
              className="border p-4 hover:shadow-md transition flex flex-col">
              <img
                src={product?.images[0]}
                alt={product.name}
                className="w-full object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">By {product.brand}</p>
              <p className="text-sm text-gray-600 mt-1">
                Category: {product.category}
              </p>
              <p className="text-[#1E2525] font-semibold mt-1">
                ${product.price}
              </p>
              <p
                className={`text-sm mt-1 ${
                  product.stock > 0 ? "text-green-600" : "text-red-500"
                }`}>
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
              <Link
                to={`/products/${product._id}`}
                className="inline-block bg-[#1E2525] hover:bg-black text-white text-sm font-medium px-4 py-2 mt-4 text-center transition">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllProducts;
