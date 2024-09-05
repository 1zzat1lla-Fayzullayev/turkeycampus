/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import { servicesData } from "../../data/servicesData"; // Import your services data

function ServicesCard() {
  return (
    <div className="mt-[50px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        // pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mt-10"
      >
        {servicesData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              key={item.title}
              className="relative select-none z-[10] w-[312px] rounded-lg min-h-[291px] mt-[65px] shadow-lg border border-gray-200 bg-white"
            >
              <div className="service-img flex items-center justify-center mt-4">
                <img
                  src={item.pic}
                  alt="Service Icon"
                  className="h-[82px] w-[82px] rounded-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
              <div className="flex justify-center mb-6">
                <a
                  href="https://turkeycampus.com/en/contact-us"
                  className="px-8 py-2 border border-[#1966a2] text-[#1966a2] rounded-full hover:bg-[#1966a2] hover:text-white transition duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ServicesCard;
