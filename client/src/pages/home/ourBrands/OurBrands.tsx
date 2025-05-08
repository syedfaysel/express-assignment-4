"use client";
import SectionLayout from "@/components/SectionLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { useRef } from "react";

const brands = [
  {
    name: "Staedtler",
    logo: "https://i.ibb.co.com/BHt9L2KP/Staedtler-logo-stacked-svg.png",
  },
  {
    name: "Pilot",
    logo: "https://i.ibb.co.com/Qx7ZyXn/272482706ccdb816342236eaa3c312b0.jpg",
  },
  {
    name: "Deli",
    logo: "https://i.ibb.co.com/hRdwkgsq/images.png",
  },
  {
    name: "Faber-Castell",
    logo: "https://i.ibb.co.com/tpLWTR14/faber-castell-logo-png-seeklogo-51440.png",
  },

  {
    name: "Uni-Ball",
    logo: "https://i.ibb.co.com/twmDx25y/images-1.png",
  },
  {
    name: "Pentel",
    logo: "https://i.ibb.co.com/3mRNjY4x/images-2.png",
  },
];

const OurBrands = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SectionLayout
      title="Our Trusted Brands"
      subtitle="We bring you quality stationery items from the most reliable brands around the globe.">
      <div className="relative">
        {/* Navigation Buttons */}
        <div className="absolute -bottom-20 right-0 space-x-3">
          <button ref={prevRef} className="  bg-white  rounded-full p-2">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button ref={nextRef} className=" bg-white  rounded-full p-2">
          <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Autoplay, Navigation]}>
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-40 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionLayout>
  );
};

export default OurBrands;
