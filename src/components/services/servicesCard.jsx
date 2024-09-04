/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { servicesData } from "../../data/servicesData";
import Swiper from "./servicesSwiper";

function ServicesCard() {
  

  const swiperRef = useRef(null);

  // Function to handle scrolling left
  const scrollLeft = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({ left: -swiperRef.current.clientWidth, behavior: "smooth" });
    }
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy({ left: swiperRef.current.clientWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="relative py-8 max-w-[85%] mx-auto">
      {/* Buttons for navigation */}
      {/* <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1966a2] text-white p-2 rounded-full shadow-md z-20"
      >
        &lt;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1966a2] text-white p-2 rounded-full shadow-md z-20"
      >
        &gt;
      </button> */}

      {/* Swiper Container */}
      {/* <div
        ref={swiperRef}
        className="flex space-x-4 px-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {servicesData.map((item) => (
          <div
            key={item.title}
            className="w-1/4 flex-shrink-0 relative z-[10] rounded-lg shadow-lg border border-gray-200 bg-white"
            style={{ scrollSnapAlign: "start" }}
          >
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
        ))}
      </div> */}
      <Swiper autoplayInterval={4000}>
        {/* <div className="bg-blue-500 h-64 flex justify-center items-center text-white text-2xl">Slide 1</div>
        <div className="bg-red-500 h-64 flex justify-center items-center text-white text-2xl">Slide 2</div>
        <div className="bg-green-500 h-64 flex justify-center items-center text-white text-2xl">Slide 3</div> */}
        {servicesData.map((item) => (
            <div
              key={item.title}
              className="relative select-none z-[10] w-[312px] rounded-lg min-h-[291px] mt-[65px] shadow-lg border border-gray-200 bg-white"
              // style={{ scrollSnapAlign: "start" }}
            >
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
          ))}
      </Swiper>
    </div>
  );
}

export default ServicesCard;
