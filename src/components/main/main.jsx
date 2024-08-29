/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";

import { mainData } from "../../data/mainData";
import MainLine from "./mainLine";
import { Navigation, Pagination } from "swiper/modules";
import Wrapper from "../../layout/wrapper";
import MainFindBlock from "../../ui/main/mainFindBlock";

function Main() {
  return (
    <>
      <div className="main-gradient overflow-x-clip w-full ">
        <Wrapper>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {mainData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col md:flex-row mx-[20px] xl:mx-0 justify-around  items-center mt-[20px]">
                  <div className="flex w-full justify-center items-center text-center md:text-start md:items-start md:justify-start flex-col gap-[10px]">
                    <h2 className="text-[#1966a2] font-[800] text-[28px] lg:text-[40px] leading-[1]">
                      {item.title}
                    </h2>
                    <p className="text-[#e63f38] leading-[1.25] text-[20px] font-[700]">
                      {item.desc}
                    </p>
                  </div>
                  <div className="w-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="max-w-[636px]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="">
            <MainLine />
          </div>
          <MainFindBlock />
        </Wrapper>
        
      </div>
    </>
  );
}

export default Main;
