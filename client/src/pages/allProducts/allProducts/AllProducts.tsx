import { useState } from "react";

const sampleProducts = [
  {
    id: 101,
    name: "Premium Notebook",
    description: "A high-quality ruled notebook with 200 pages.",
    price: 10,
    category: "Stationery",
    author: "Classmate",
    available: true,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fstock_item%252Fstock_item_images%252Fimages%252F000%252F001%252F351%252Foriginal%252FEMP_FINELINERS_SET_4_ECOMM.jpeg%253F1705936360%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D3559b2a80a0bf601f743110c2b8e28fd?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=ec59d82b4afc835a97caca20f9893143",
  },
  {
    id: 102,
    name: "Gel Pen Pack (5 Pcs)",
    description: "Smooth writing gel pens with blue ink.",
    price: 5,
    category: "Stationery",
    author: "Pilot",
    available: true,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fstock_item%252Fstock_item_images%252Fimages%252F000%252F001%252F353%252Foriginal%252FNEW_DESK_ACCESSORIES_1.jpg%253F1705936361%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Df6f49343a09f92a7718bbc38588e8a0b?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=85adf124d6614891bd204021e4ddda67",
  },
  {
    id: 103,
    name: "HB Pencils (10 Pack)",
    description: "Durable graphite pencils ideal for sketching and writing.",
    price: 3,
    category: "Stationery",
    author: "Faber-Castell",
    available: true,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F20%2F1726577825%2F1739532008%2F45728.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=a8bb8612b71e14806bffad5d9b2a8c57",
  },
  {
    id: 104,
    name: "12-Inch Ruler",
    description: "Transparent plastic ruler with inch and cm scales.",
    price: 1.5,
    category: "School Supplies",
    author: "Camlin",
    available: true,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F20%2F1726577825%2F1737653207%2F51535.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=2f56d472726167e3cb6e0641593be3e7",
  },
  {
    id: 105,
    name: "Sticky Notes (3 Colors)",
    description: "Perfect for reminders and quick notes. 300 sheets total.",
    price: 2.5,
    category: "Office Supplies",
    author: "Post-it",
    available: false,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fproduct_type_name_images%252Fimages%252F000%252F001%252F628%252Foriginal%252FMedium-0924_PDP_Spiral-Recipe_Inside_2_RET.jpg%253F1729086859%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3Db56ec50b1049d7342cd03536ec40efe5?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=246550e373d742d435a83498c1c33020",
  },
  {
    id: 106,
    name: "A4 Copier Paper (500 Sheets)",
    description: "Multipurpose white paper for printers and copiers.",
    price: 6,
    category: "Office Supplies",
    author: "Double A",
    available: true,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F33%2F1726492116%2F1738083013%2F50937.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=1b75dad52905b024ace305f3d41345df",
  },
  {
    id: 107,
    name: "Desk Organizer",
    description: "Keeps your pens, notes, and clips in one place.",
    price: 8,
    category: "Office Supplies",
    author: "Staples",
    available: true,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fwww.papier.com%2Fus%2Ftemplated_image%2F20%2F1726577825%2F1739532008%2F45728.jpg?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=a8bb8612b71e14806bffad5d9b2a8c57",
  },
  {
    id: 108,
    name: "Eraser Pack (4 Pcs)",
    description: "Non-smudging erasers perfect for school use.",
    price: 2,
    category: "School Supplies",
    author: "Nataraj",
    available: false,
    image:
      "https://papier.imgix.net/https%3A%2F%2Fpapier.imgix.net%2Fhttps%253A%252F%252Fd1o785do8fyxgx.cloudfront.net%252Fstock_item%252Fstock_item_images%252Fimages%252F000%252F001%252F351%252Foriginal%252FEMP_FINELINERS_SET_4_ECOMM.jpeg%253F1705936360%3Fixlib%3Drb-3.2.1%26auto%3Dformat%252Ccompress%26s%3D3559b2a80a0bf601f743110c2b8e28fd?ixlib=rb-3.2.1&w=408&auto=format%2Ccompress&s=ec59d82b4afc835a97caca20f9893143",
  },
];

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      categoryFilter === "All" || product.category === categoryFilter;

    const matchesStock = !inStockOnly || product.available;

    return matchesSearch && matchesCategory && matchesStock;
  });

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(sampleProducts.map((p) => p.category))),
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
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border p-4 hover:shadow-md transition flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500">By {product.author}</p>
              <p className="text-sm text-gray-600 mt-1">
                Category: {product.category}
              </p>
              <p className="text-[#1E2525] font-semibold mt-1">
                ${product.price}
              </p>
              <p
                className={`text-sm mt-1 ${
                  product.available ? "text-green-600" : "text-red-500"
                }`}>
                {product.available ? "In Stock" : "Out of Stock"}
              </p>
              <a
                href={`/products/${product.id}`}
                className="inline-block bg-[#1E2525] hover:bg-black text-white text-sm font-medium px-4 py-2 mt-4 text-center transition">
                View Details
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllProducts;
