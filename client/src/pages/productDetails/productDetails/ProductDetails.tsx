import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { toast } from "sonner";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleProductQuery } from "@/redux/features/proudct/productApi";
import { productDto } from "@/dto/productDto";
import FormatTaka from "@/components/FormatTaka";
import { ShoppingBag, Star } from "lucide-react";

// Optional: You should have this or replace with your UI
// const SuggestedCard = ({ product }: { product: productDto }) => (
//   <div className="border p-4 rounded shadow-sm">
//     <img
//       src={product.images?.[0]}
//       alt={product.name}
//       className="h-40 w-full object-cover mb-2 rounded"
//     />
//     <h4 className="font-semibold">{product.name}</h4>
//     <p className="text-sm text-gray-500">{product.brand}</p>
//     <p className="text-sm text-gray-700">
//       <FormatTaka amount={product.price} />
//     </p>
//   </div>
// );

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedColor, setSelectedColor] = useState<string | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [showError, setShowError] = useState<boolean>(false);

  const { data, isError, isLoading } = useGetSingleProductQuery({ productId });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product</div>;

  const product: productDto = data?.data;
  const needsSize = product?.sizes?.length;
  const needsColor = product?.colors?.length;

  const notify = () => {
    toast.success("Checkout Cart", {
      description: `${product.name} has been added`,
      duration: 3000,
      icon: <ShoppingBag className="m-4" />,
      action: {
        label: "Go to Cart",
        onClick: () => navigate("/cart"),
      },
    });
  };

  const handleAddToCart = () => {
    if ((needsSize && !selectedSize) || (needsColor && !selectedColor)) {
      setShowError(true);
      document.getElementById("sizesGrid")?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      return;
    }

    setShowError(false);

    const cartItem = {
      productId: product._id!,
      name: product.name,
      image: product.images[0],
      selectedSize,
      selectedColor,
      quantity,
      oneQuantityPrice: product.price,
      price: product.price * quantity,
    };

    dispatch(addToCart(cartItem));
    notify();
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value < 1 || isNaN(value)) {
      setQuantity(1);
    } else if (value > product.stock) {
      setQuantity(product.stock);
    } else {
      setQuantity(value);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-[josefin-sans]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full max-h-[500px] rounded-lg shadow"
          />
        </div>

        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="text-lg text-gray-700 space-y-1">
            <p>
              <span className="font-extrabold">Price:</span>{" "}
              <FormatTaka amount={product.price} />
            </p>
            <p>
              <span className="font-extrabold">Category:</span>{" "}
              {product.category}
            </p>
            <p>
              <span className="font-extrabold">Author/Brand:</span>{" "}
              {product.brand}
            </p>
            <p>
              <span className="font-extrabold">Availability:</span>
              <span
                className={
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }>
                {product.stock > 0
                  ? `In Stock (${product.stock})`
                  : "Out of Stock"}
              </span>
            </p>
          </div>

          {/* Ratings */}
          <div className="mt-4">
            <p className="text-lg font-extrabold mb-1">Rating:</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i}>
                  {product.averageRating &&
                  i <= Math.round(product.averageRating) ? (
                   <Star className="text-yellow-500" />
                  ) : (
                     <Star className="text-gray-300" />
                  )}
                </span>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                {product.averageRating
                  ? product.averageRating.toFixed(1)
                  : "(No rating yet)"}
              </span>
            </div>
          </div>

          <div id="sizesGrid" className="flex flex-wrap gap-4">
            {needsSize && (
              <select
                onChange={(e) => setSelectedSize(e.target.value)}
                defaultValue=""
                className="border px-3 py-1 rounded">
                <option value="" disabled>
                  Select Size
                </option>
                {product.sizes?.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            )}

            {needsColor && (
              <select
                onChange={(e) => setSelectedColor(e.target.value)}
                defaultValue=""
                className="border px-3 py-1 rounded">
                <option value="" disabled>
                  Select Color
                </option>
                {product.colors?.map((color) => (
                  <option key={color} value={color}>
                    {color}
                  </option>
                ))}
              </select>
            )}

            <div className="flex items-center gap-2">
              <p className="font-extrabold">Quantity:</p>
              <input
                type="number"
                min={1}
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 border px-2 py-1 rounded"
              />
            </div>
          </div>

          {showError && (
            <p className="text-red-600 text-sm">Please select size and color</p>
          )}

          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`px-6 py-3 text-white font-medium rounded transition ${
              product.stock > 0
                ? "bg-[#1E2525] hover:bg-[#1E2525]"
                : "bg-gray-400 cursor-not-allowed"
            }`}>
            {product.stock ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>

      {/* Suggested Products */}
      {/* {product.suggestedProducts?.length ? (
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-4">You may also like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {product.suggestedProducts.map((item) => (
              <SuggestedCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default ProductDetails;
