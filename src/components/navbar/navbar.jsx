/* eslint-disable no-unused-vars */
import React from "react";
import NavbarTop from "./navbarTop";
import NavbarBottom from "./navbarBottom";
import ApplyBtn from "../../ui/navbar/applyBtn";

function Navbar() {
  return (
    <>
      <div className="relative">
        <div className="text-[#707070] bg-[#d5f0f7] flex flex-col sticky top-0 px-[10px] z-10 pt-[6px]">
          <div>
            <NavbarTop />
            <NavbarBottom />
            <ApplyBtn />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
