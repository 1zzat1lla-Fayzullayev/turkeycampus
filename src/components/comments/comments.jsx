/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Wrapper from "../../layout/wrapper";
import { Navigation } from "swiper/modules";
import Rate from "../../ui/rate/rate";

const Comments = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();

      // Disable/Enable navigation buttons based on slide index
      const swiper = swiperRef.current;
      const updateNavigationButtons = () => {
        if (swiper.isBeginning) {
          prevRef.current.classList.add("swiper-button-disabled");
        } else {
          prevRef.current.classList.remove("swiper-button-disabled");
        }

        if (swiper.isEnd) {
          nextRef.current.classList.add("swiper-button-disabled");
        } else {
          nextRef.current.classList.remove("swiper-button-disabled");
        }
      };

      // Attach event listeners for slide change
      swiper.on("slideChange", updateNavigationButtons);

      // Initial check
      updateNavigationButtons();
    }
  }, [prevRef, nextRef]);

  return (
    <Wrapper>
      <div className="relative">
        <div className="mt-[100px] text-center relative">
          <h2 className="text-[38px] font-[700] leading-[48px]">
            The Thoughts Of <br />
            <span className="text-[#e63f38]">Our Students</span>
          </h2>
        </div>

        <img
          src="/testimnonial-effict.svg"
          className="absolute left-[7%] top-[7%] hidden md:block"
        />

        <div className="relative mt-10 px-4">
          <div
            ref={prevRef}
            className="swiper-button-prev hidden lg:flex ml-[60px] bg-[#1966a2] rounded-l-[40px] w-[120px] h-[80px] text-center text-white z-[8] disabled:opacity-50"
            tabIndex="0"
            role="button"
            aria-label="Previous slide"
          ></div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            loop={false} // Disable loop mode
            className="mySwiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {[1, 2, 3, 4, 5].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex comment_div justify-center items-center w-full">
                  <div className="bg-white comment_div py-10 px-6 shadow-md rounded-lg relative">
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
            ))}
          </Swiper>

          <div
            ref={nextRef}
            className="swiper-button-next hidden lg:flex bg-[#1966a2] mr-[60px] rounded-r-[40px] w-[120px] h-[80px] text-center text-white z-[8] disabled:opacity-50"
            tabIndex="0"
            role="button"
            aria-label="Next slide"
          ></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Comments;
