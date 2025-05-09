import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SectionLayout from "@/components/SectionLayout";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    comment: "Amazing products and super fast delivery. I love shopping here!",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 2,
    name: "Arif Rahman",
    comment: "Great quality and support. Definitely recommended!",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 3,
    name: "Maya Hasan",
    comment: "Loved the packaging and quality. Will order again for sure!",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 4,
    name: "Rafiul Islam",
    comment: "Support team is very responsive. Great experience.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 5,
    name: "Rafiul Islam",
    comment: "Support team is very responsive. Great experience.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 6,
    name: "Rafiul Islam",
    comment: "Support team is very responsive. Great experience.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    id: 7,
    name: "Rafiul Islam",
    comment: "Support team is very responsive. Great experience.",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];

const Testimonials = () => {
  return (
    <>
      <SectionLayout
        title="What Our Customers Say"
        subtitle="Loved by students and professionals—real reviews on our quality stationery and fast service.">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}>
          {testimonials.map(({ id, name, comment, image }) => (
            <SwiperSlide className="pb-16" key={id}>
              <div className="bg-white rounded-2xl p-6 mx-2 text-center pb-10">
                <img
                  src={image}
                  alt={name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover"
                />
                <p className="text-gray-700 italic mb-4">"{comment}"</p>
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionLayout>
    </>
  );
};

export default Testimonials;
