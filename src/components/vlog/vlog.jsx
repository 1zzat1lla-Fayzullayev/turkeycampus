/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Wrapper from "../../layout/wrapper";
import VlogCards from "./vlogCards";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

function Vlog() {
  const [modal, setModal] = useState(false);

  const handleOpenModal = () => setModal(!modal);

  const renderSwiperSlides = () => {
    return [1, 2, 3, 4, 5, 6].map((item, index) => (
      <SwiperSlide key={index} className="relative">
        <VlogCards item={item} handleOpenModal={handleOpenModal} />
      </SwiperSlide>
    ));
  };

  const renderModal = () => {
    return (
      <div
        className="fixed bg-[#000000ab] flex justify-center items-center inset-0 z-[1000] w-full h-full"
        onClick={handleOpenModal}
      >
        <div className="relative flex justify-center items-center w-[85%] h-full">
          <iframe
            className="md:w-[750px] md:h-[450px] w-full h-[25%]"
            src="https://www.youtube.com/embed/Znaw5J3qKgE?si=d5-IwhZb-KsmluBY"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{width: "30px", position: "absolute", top: 5, right: 5, fill: "white"}}>
          <path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"></path>
        </svg>
      </div>
    );
  };

  return (
    <>
      <Wrapper>
        <div className="mt-[100px]">
          <header>
            <h2 className="text-[38px] font-[700] text-black">
              Turkey <span className="text-[#e63f38]">Campus</span>
            </h2>
            <p className="text-[#707070] font-[500]">
              Turkey Campus, because we promise you the finest academic programs
              Turkey has to offer.
            </p>
          </header>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="mt-10 relative"
          >
            {renderSwiperSlides()}
          </Swiper>
        </div>
      </Wrapper>

      {modal && renderModal()}
    </>
  );
}

export default Vlog;
