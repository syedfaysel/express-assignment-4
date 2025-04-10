import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Sarah Khan",
    comment: "Amazing products and super fast delivery. I love shopping here!",
    image: "/user1.jpg",
  },
  {
    id: 2,
    name: "Arif Rahman",
    comment: "Great quality and support. Definitely recommended!",
    image: "/user2.jpg",
  },
  {
    id: 3,
    name: "Maya Hasan",
    comment: "Loved the packaging and quality. Will order again for sure!",
    image: "/user3.jpg",
  },
  {
    id: 4,
    name: "Rafiul Islam",
    comment: "Support team is very responsive. Great experience.",
    image: "/user4.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className=" bg-[#F3D5C2]">
    <div className="max-w-7xl mx-auto px-4 py-16 font-[josefin-sans]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Customer Testimonials</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 p-4"
            >
              <div className="border border-gray-400 p-6 h-full flex flex-col items-center text-center transition">
                <img
                  src={`https://avatars.githubusercontent.com/u/124599?v=4`}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </section>

  );
};

export default Testimonials;
