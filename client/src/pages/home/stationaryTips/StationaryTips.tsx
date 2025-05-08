import SectionLayout from "@/components/SectionLayout";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "How to Organize Your Desk",
    excerpt: "A tidy desk boosts productivity. Learn simple tricks to keep your workspace clean and efficient.",
    image: "https://i.ibb.co.com/DDb7hNcF/office-organizing-ideas-desk-getty-0823-e1093935a7af46ffb5fb44aff7583f04.webp",
    slug: "how-to-organize-your-desk",
  },
  {
    title: "Best Stationery for Artists",
    excerpt: "Explore top stationery tools every artist should have in their creative toolkit.",
    image: "https://i.ibb.co.com/35kmDWgL/CHOOSING-KEEPING-LEAD.jpg",
    slug: "best-stationery-for-artists",
  },
  {
    title: "5 Tips for Writing a Perfect Journal",
    excerpt: "Get inspired with easy journaling tips to stay consistent and creative every day.",
    image: "https://i.ibb.co.com/XfJstrQh/estee-janssens-396887-unsplash.webp",
    slug: "tips-for-perfect-journal",
  },
];

const StationeryTips = () => {
  return (
    <SectionLayout
      title="Stationery Tips & Guides"
      subtitle="Discover useful articles and insights to make the most of your stationery."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={post.image} alt={post.title} className="h-60 w-full object-cover" />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-sm text-gray-600 flex-grow">{post.excerpt}</p>
              <Link
                to={`/blog/${post.slug}`}
                className="mt-4 inline-block text-green-700 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default StationeryTips;
