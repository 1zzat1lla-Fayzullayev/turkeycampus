/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import React from "react";
// import Wrapper from "../../layout/wrapper";

// function Partners() {
//   return (
//     <>
//       <Wrapper>

//       </Wrapper>
//     </>
//   );
// }

// export default Partners;

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Wrapper from "../../layout/wrapper";

const Parnters = () => {
  return (
    <>
      <div className="mt-[100px] ">
        <h2 className="text-[38px] font-[700] text-center text-[black]">
          Our <span className="text-[#e63f38]">Partners</span>
        </h2>
      </div>
      <Wrapper>
        <div className="partners">
          <Swiper
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode, Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              375: {
                slidesPerView: 3,
              },
              480: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part4.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part5.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part12.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part13.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part14.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part15.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiperSlider-img" src="/part16.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Wrapper>
    </>
  );
};

export default Parnters;
