/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import NavbarTop from "./navbarTop";
import NavbarBottom from "./navbarBottom";
import ApplyBtn from "../../ui/navbar/applyBtn";
import MobNavbar from "./mobNavbar";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleOpenNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <>
      <div className="text-[#707070] bg-[#d5f0f7] h-[150px] flex flex-col items-center top-0  z-10 pt-[6px]">
        <div className="fixed z-[999] w-[98%] mx-auto">
          <NavbarTop />
          <NavbarBottom handleOpenNavbar={handleOpenNavbar} />
          <ApplyBtn />
        </div>
      </div>

      {navbar && <MobNavbar handleOpenNavbar={handleOpenNavbar} navbar={navbar}/>}
    </>
  );
}

export default Navbar;
