/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Wrapper from "../../layout/wrapper";
import { Navigation } from "swiper/modules";
import Rate from "../../ui/rate/rate";

const Comments = () => {
  return (
    <Wrapper>
      <div className="mt-[100px] text-center relative">
        <h2 className="text-[38px] font-[700] leading-[48px]">
          The Thoughts Of <br />
          <span className="text-[#e63f38]">Our Students</span>
        </h2>
      </div>

      <div className="relative">
        <div
          className="swiper-button-prev bg-[#1966a2] rounded-l-[40px] w-[120px] h-[80px] text-center text-white z-[8]"
          tabIndex="0"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-71808810a5c10fe711"
          aria-disabled="false"
        ></div>
        <div className="relative mt-10 px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            loop
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="flex justify-center items-center w-full">
                <div className="bg-white p-6 shadow-md rounded-lg relative max-w-lg">
                  <Rate />
                  <p className="mt-4 text-gray-600">
                    Such a trustworthy company, the staff is always courteous
                    and helpful. I recommend them 100%.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img
                        src="/profile1.png"
                        className="w-[50px] rounded-full"
                        style={{ width: "50px" }}
                      />
                      <div>
                        <h4 className="font-semibold">Mohammed Saad</h4>
                        <p className="text-sm text-gray-500">Student</p>
                      </div>
                    </div>
                    <div className="">
                      <svg
                        className="svg-inline--fa fa-quote-right text-[#ddd] w-[75px]"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="quote-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="swiper-button-next swiper-button-prev bg-[#1966a2] rounded-r-[40px] w-[120px] h-[80px] text-center text-white z-[8]"
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-71808810a5c10fe711"
          aria-disabled="false"
        ></div>
      </div>
    </Wrapper>
  );
};

export default Comments;
