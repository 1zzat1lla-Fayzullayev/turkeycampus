/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function VlogCards({ handleOpenModal }) {
  return (
    <>
      <div className="relative ">
        <div className="relative select-none" onClick={handleOpenModal}>
          <img src="/vlog.png" alt="" className="object-cover rounded-[40px]" />
          <span className="icon cursor-pointer absolute z-[2] left-[36px] flex justify-center items-center bottom-[20px] bg-[#e63f38] text-white rounded-[50%] text-[16px] w-[55px] h-[55px] text-center leading-[62px]">
            <svg
              className="svg-inline--fa fa-play w-[20px] flex justify-between items-center text-white"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
              ></path>
            </svg>
          </span>
        </div>
        <div className="p-[10px]">
          <h3 className="text-[20px] font-[700] mb-[4px] leading-[1.4]">
            Istinye University Vlog 2023
          </h3>
          <p className="text-[#707070] text-[15px] font-[600]">May 18, 2023</p>
        </div>
      </div>
    </>
  );
}

export default VlogCards;
