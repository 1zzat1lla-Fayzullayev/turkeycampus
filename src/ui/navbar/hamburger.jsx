/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Hamburger({ handleOpenNavbar }) {
  return (
    <>
      <div
        className="bg-[white] xl:hidden flex items-end flex-col p-4 gap-[7px] rounded-full"
        onClick={handleOpenNavbar}
      >
        <div className="w-[20px] md:w-[40px] h-[1px] bg-black"></div>
        <div className="w-[10px] md:w-[20px] h-[1px] bg-black"></div>
      </div>
    </>
  );
}

export default Hamburger;
