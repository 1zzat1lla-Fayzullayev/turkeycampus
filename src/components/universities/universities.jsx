/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../../layout/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import UniversitiesCard from "./universitiesCard";

function Universities() {
  return (
    <>
      <Wrapper>
        <div className="mb-[100px] mt-[100px] h-full relative">
          <div>
            <h2 className="text-[38px] font-[700]">
              List Of <span className="text-[#e63f38]">Universities</span>
            </h2>
            <p className="text-[#707070] font-[500]">
              Top private universities in Turkey.
            </p>
          </div>
          <div className="flex items-center relative justify-center mx-auto w-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
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
              }}
              className="mt-10 relative"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((university, index) => (
                <SwiperSlide key={index} className="relative">
                  <UniversitiesCard university={university} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Universities;
