/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import NavbarTop from "./navbarTop";
import NavbarBottom from "./navbarBottom";
import ApplyBtn from "../../ui/navbar/applyBtn";
import MobNavbar from "./mobNavbar";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(
    () => JSON.parse(localStorage.getItem("activeIndex")) || 0
  );

  const handleMouseEnter = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdownIndex(null);
  };

  const handleActive = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", JSON.stringify(index));
  };

  const handleOpenNavbar = () => {
    setNavbar(!navbar);
  };

  useEffect(() => {
    const storedIndex = JSON.parse(localStorage.getItem("activeIndex"));
    if (storedIndex !== null) {
      setActiveIndex(storedIndex);
    }
  }, []);
  return (
    <>
      <div className="text-[#707070] bg-[#d5f0f7] h-[150px] flex flex-col items-center top-0  z-10 pt-[6px]">
        <div className="fixed z-[999] w-[98%] mx-auto">
          <NavbarTop />
          <NavbarBottom
            handleOpenNavbar={handleOpenNavbar}
            activeIndex={activeIndex}
            handleActive={handleActive}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            openDropdownIndex={openDropdownIndex}
          />
          <ApplyBtn />
        </div>
      </div>

      {navbar && (
        <MobNavbar
          handleOpenNavbar={handleOpenNavbar}
          navbar={navbar}
          handleActive={handleActive}
          activeIndex={activeIndex}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          openDropdownIndex={openDropdownIndex}
        />
      )}
    </>
  );
}

export default Navbar;
