/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { servicesData } from "../../data/servicesData";

const ServicesSwiper = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full ">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            {item}
          </div>
        ))} */}

        <div
          // ref={swiperRef}
          className="flex space-x-4 px-4"
          // style={{ scrollSnapType: "x mandatory" }}
        >
          {servicesData.map((item) => (
            <div
              key={item.title}
              className="w-1/4 flex-shrink-0 relative z-[10] rounded-lg shadow-lg border border-gray-200 bg-white"
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
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default ServicesSwiper;
