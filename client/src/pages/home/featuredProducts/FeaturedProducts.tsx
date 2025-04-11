import { NavLink } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Product A",
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fstock_item%252Fstock_item_images%252Fimages%252F000%252F001%252F351%252Foriginal%252FEMP_FINELINERS_SET_4_ECOMM.jpeg%253F1705936360%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D3559b2a80a0bf601f743110c2b8e28fd?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=ec59d82b4afc835a97caca20f9893143",
    price: "$19.99",
  },
  {
    id: "2",
    name: "Product B",
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fstock_item%252Fstock_item_images%252Fimages%252F000%252F001%252F353%252Foriginal%252FNEW_DESK_ACCESSORIES_1.jpg%253F1705936361%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Df6f49343a09f92a7718bbc38588e8a0b?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=85adf124d6614891bd204021e4ddda67",
    price: "$29.99",
  },
  {
    id: "3",
    name: "Product C",
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F20%2F1726577825%2F1739532008%2F45728.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=a8bb8612b71e14806bffad5d9b2a8c57",
    price: "$39.99",
  },
  {
    id: "4",
    name: "Product D",
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F20%2F1726577825%2F1737653207%2F51535.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=2f56d472726167e3cb6e0641593be3e7",
    price: "$24.99",
  },
  {
    id: "5",
    name: "Product E",
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fproduct_type_name_images%252Fimages%252F000%252F001%252F628%252Foriginal%252FMedium-0924_PDP_Spiral-Recipe_Inside_2_RET.jpg%253F1729086859%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Db56ec50b1049d7342cd03536ec40efe5?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=246550e373d742d435a83498c1c33020",
    price: "$44.99",
  },
  {
    id: "6",
    name: "Product F",
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F33%2F1726492116%2F1738083013%2F50937.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=1b75dad52905b024ace305f3d41345df",
    price: "$34.99",
  },
];

const FeaturedProducts = () => {
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
          {featured.map((product) => (
            <div key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover mb-3"
              />
              <h3 className="text-lg font-medium text-gray-700">
                {product.name}
              </h3>
              <p className="font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 bg-[#1E2525] text-white rounded hover:bg-[#1E2525] transition">
            <NavLink to={"/all-products"}>all products</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
