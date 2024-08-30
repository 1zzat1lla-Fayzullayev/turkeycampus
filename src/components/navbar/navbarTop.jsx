/* eslint-disable no-unused-vars */
import React from "react";
import Icons from "../../ui/navbar/icons";

function NavbarTop() {
  return (
    <>
      <div className="xl:flex justify-between items-center bg-[#f8f8f8] hidden py-[8px] px-[30px] rounded-t-[43px]">
        <Icons />

        <div className="flex items-center gap-5 text-[black]">
          <div className="flex items-center gap-1">
            <img src="/login.svg" alt="" className="w-[15px]" />
            <h4 className="font-[500]">Login</h4>
          </div>
          <div className="flex items-center gap-1">
            <img src="/signup.svg" alt="" className="w-[15px]"                        />
            {/* <svg className="signup-icon svg-inline--fa fa-user-plus" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></svg> */}
            <h4 className="font-[500]">Signup</h4>
          </div>

          <select className="font-[500] uppercase outline-none bg-transparent">
            <option value="en" className="font-[500] uppercase">
              english
            </option>
            <option value="tr" className="font-[500] uppercase">
              turkey
            </option>
            <option value="uz" className="font-[500] uppercase">
              uzbek
            </option>
          </select>
        </div>
      </div>
    </>
  );
}

export default NavbarTop;
