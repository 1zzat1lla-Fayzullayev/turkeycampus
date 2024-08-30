/* eslint-disable no-unused-vars */
import React from "react";
import { servicesData } from "../../data/servicesData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function ServicesCard() {
  return (
    <>
      <div className="flex justify-center items-center py-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          // navigation
          // pagination={{ clickable: true }}
          style={{ width: "100%", maxWidth: "1200px" }}
        >
          {servicesData.map((item) => (
            <SwiperSlide key={item.title} className="flex justify-center">
              <div className="w-[280px] relative z-[10] mx-auto rounded-lg shadow-lg border border-gray-200 bg-white">
                <div className="service-img flex items-center justify-center mt-4">
                  <img
                    src={item.pic}
                    alt="Service Icon"
                    className="h-24 w-24 rounded-full object-cover"
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
    </>
  );
}

export default ServicesCard;
