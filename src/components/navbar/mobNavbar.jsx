/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { menuItems } from "../../data/navbarData";
import Dropdown from "../../ui/navbar/dropdown";
import Icons from "../../ui/navbar/icons";

function MobNavbar({
  handleOpenNavbar,
  navbar,
  handleActive,
  activeIndex,
  handleMouseEnter,
  handleMouseLeave,
  openDropdownIndex,
}) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] z-[1000] transition-opacity duration-300 ease-out ${
          navbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOpenNavbar}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`mob-navbar px-4 bg-white fixed top-0 left-0 h-full z-[999999] min-w-[330px] max-w-full py-8 transition-transform duration-300 ease-out transform ${
            navbar ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <div className="flex justify-between items-center">
            <img src="/logo.png" alt="Logo" className="w-[145px]" />
            <button
              onClick={handleOpenNavbar}
              aria-label="Close"
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mt-[20px]">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    onClick={() => handleActive(index)}
                    className={`block py-2 px-4 text-[#707070] font-[600] text-[13px] md:text-[16px] hover:bg-[#fef5f5] rounded-[23px] hover:text-[#e63f38] transition-colors ${
                      activeIndex === index ? "active-mob" : ""
                    }`}
                  >
                    {item.text}
                  </a>
                  {item.hasDropdown && openDropdownIndex === index && (
                    <Dropdown
                      links={item.dropdownLinks || []}
                      handleMouseEnter={() => handleMouseEnter(index)}
                      handleMouseLeave={handleMouseLeave}
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-center mt-2 gap-5 text-[black]">
              <div className="flex items-center gap-1">
                <img src="/login.svg" alt="" className="w-[15px]" />
                <h4 className="font-[500]">Login</h4>
              </div>
              <div className="flex items-center gap-1">
                <img src="/signup.svg" alt="" className="w-[15px]" />
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
            <div className="flex items-center justify-center mt-4">
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobNavbar;
