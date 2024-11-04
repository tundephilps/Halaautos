"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { ChevronLeft, ChevronRight } from "react-icons/ai";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Hero1 from "../../public/HERO.jpg";

import Hero2 from "../../public/hero2.jpg";
import Hero3 from "../../public/hero3.jpg";

const heroImages = [
  {
    src: Hero1,
    title: "Welcome to our website",
    description: "Explore our products and services",
  },
  {
    src: Hero2,
    title: "Discover our latest offerings",
    description: "Learn more about our new products",
  },
  {
    src: Hero3,
    title: "Experience our exceptional service",
    description: "Contact us to learn more",
  },
];

const Hero = () => {
  return (
    <Swiper
      className="mySwiper"
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet bg-red-500",
      }}
      // navigation={{
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // }}
      modules={[Autoplay, Pagination]}
    >
      {heroImages.map((hero, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[80vh]">
            <Image
              src={hero.src}
              className="w-full h-full object-cover"
              alt=""
            />
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center items-center">
              <h1 className="lg:text-5xl text-3xl font-bold mb-4">
                {hero.title}
              </h1>
              <p className="text-lg">{hero.description}</p>

              <button className="flex justify-center items-center mx-auto mt-6 gap-2 w-44 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-red-700 hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]">
                <p>DISCOVER MORE</p>
              </button>
            </div>
          </div>

          {/* <div className=" absolute top-[55%] left-4 text-white">
            <FaAngleLeft className=" text-white w-12 h-12" />
          </div>
          <div className=" absolute top-[55%] right-4 text-white">
            <FaAngleRight className="w-12 h-12 text-white" />
          </div>
          <div className="swiper-pagination"></div> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
