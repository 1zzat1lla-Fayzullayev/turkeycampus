/* eslint-disable no-unused-vars */
import React from "react";

function NavbarTop() {
  return (
    <>
      <div className="xl:flex justify-between items-center bg-[#f8f8f8] hidden py-[8px] px-[30px] rounded-t-[43px]">
        <div className="flex items-center gap-3" style={{color: "#676767"}}>
          <a href="#" style={{ color: "#676767" }} className="w-[19px]">
            <img src="/facebook.svg" alt="" />
          </a>
          <a href="#" style={{ color: "#676767" }} className="w-[19px]">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="#" style={{ color: "#676767" }} className="w-[19px]">
            <img src="/youtube.svg" alt="" />
          </a>
          <a href="#" style={{ color: "#676767" }} className="w-[19px]">
            <img src="/instagram.svg" alt="" />
          </a>
          <a href="#" style={{ color: "#676767" }} className="w-[19px]">
            <img src="/whatsapp.svg" alt="" />
          </a>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <img src="/login.svg" alt="" className="w-[15px]" />
            <h4 className="font-[500]">Login</h4>
          </div>
          <div className="flex items-center gap-1">
            <img src="/signup.svg" alt="" className="w-[15px]" />
            <h4 className="font-[500]">Signup</h4>
          </div>

          <select className="font-[500] uppercase outline-none">
            <option value="en" className="font-[500] uppercase">
              english
            </option>
            <option value="tr" className="font-[500] uppercase">
              turkey
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
