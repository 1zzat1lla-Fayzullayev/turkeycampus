/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function UniversitiesCard({ university }) {
  return (
    <>
      <div className="mt-[50px] border border-[#e9e9e9] rounded-[40px] bg-[white] flex flex-col h-full">
        <div className="">
          <img
            src="/universities.png"
            alt=""
            className="rounded-[40px] w-full"
          />
        </div>
        <div className="flex justify-center items-center flex-col relative">
          <div className="univer_logo p-[5px] relative w-[110px] flex justify-center items-center h-[110px] mt-[-48px] bg-[white] rounded-t-[74px]">
            <img
              src="/universities-logo.png"
              alt=""
              className="rounded-[50%] w-full h-full relative z-[2]"
            />
          </div>
          <h4 className="text-[20px] font-[700] mb-[5px] leading-[1.5] ">
            Istinye University 2024
          </h4>
          <div className="flex items-center gap-1">
            <svg
              className="svg-inline--fa fa-location-dot w-[17px] text-[#e63f38]"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="location-dot"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"
              ></path>
            </svg>
            <p className="text-[#e63f38]">Istanbul</p>
          </div>
          <div className="flex justify-between items-center px-[35px] py-[15px] my-[15px] w-full border border-[#dddddd8a]">
            <div className="flex items-center gap-1">
              <svg
                className="svg-inline--fa fa-user-group w-[18px] text-[#e63f38]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user-group"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
                ></path>
              </svg>
              <span className="text-[#707070] text-[14px]">13226 Students</span>
            </div>
            <div className="flex items-center gap-1">
              <svg
                className="svg-inline--fa fa-graduation-cap w-[18px] text-[#e63f38]"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="graduation-cap"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                ></path>
              </svg>
              <span className="text-[#707070] text-[14px]">152 Programs</span>
            </div>
          </div>
          <div className="flex items-center justify-between w-full pt-[5px] px-[30px] pb-[35px]">
            <div>
              <p className="text-[14px] text-[#707070]">Starting From</p>
              <h5 className="text-[25px] font-[700]">$3500</h5>
            </div>
            <div>
              <a
                href="#"
                className="capitalize text-[16px] font-[600] py-[3px] px-[35px] border border-[#1966a2] text-[#1966a2] bg-transparent rounded-[25px] transition-all ease-in-out hover:bg-[#1966a2] hover:text-white"
              >
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversitiesCard;
