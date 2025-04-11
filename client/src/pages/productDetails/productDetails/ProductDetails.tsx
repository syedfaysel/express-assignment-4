const product = {
  id: 108,
  name: "Eraser Pack (4 Pcs)",
  description: "Non-smudging erasers perfect for school use.",
  price: 2,
  category: "School Supplies",
  author: "Nataraj",
  available: true,
  image:
    "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fstock_item%252Fstock_item_images%252Fimages%252F000%252F001%252F351%252Foriginal%252FEMP_FINELINERS_SET_4_ECOMM.jpeg%253F1705936360%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D3559b2a80a0bf601f743110c2b8e28fd?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=ec59d82b4afc835a97caca20f9893143",
};

const ProductDetails = () => {
  const handleAddToCart = () => {
    alert(`${product.name} added to cart!`);
  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 font-[josefin-sans]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[400px] object-cover rounded-lg shadow"
          />
        </div>


        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 text-lg">{product.description}</p>

          <div className="text-lg text-gray-700">
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Author/Brand:</strong> {product.author}
            </p>
            <p>
              <strong>Availability:</strong>{" "}
              <span
                className={
                  product.available ? "text-green-600" : "text-red-600"
                }>
                {product.available ? "In Stock" : "Out of Stock"}
              </span>
            </p>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.available}
            className={`px-6 py-3 text-white font-medium rounded transition ${
              product.available
                ? "bg-[#1E2525] hover:bg-[#1E2525]"
                : "bg-gray-400 cursor-not-allowed"
            }`}>
            {product.available ? "Add to Cart" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
