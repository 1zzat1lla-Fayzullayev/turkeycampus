/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Hamburger from "../../ui/navbar/hamburger";
import MobileApplyBtn from "../../ui/navbar/mobileApplyBtn";

function NavbarBottom({ handleOpenNavbar }) {
  const [activeIndex, setActiveIndex] = useState(
    () => JSON.parse(localStorage.getItem("activeIndex")) || 0
  );

  const menuItems = [
    { text: "Home" },
    { text: "About us" },
    { text: "Services" },
    { text: "Study Destinations" },
    { text: "Universities" },
    { text: "Fields" },
    { text: "Videos & Podcast" },
    { text: "Blog" },
    { text: "Contact Us" },
  ];

  const handleActive = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", JSON.stringify(index));
  };

  useEffect(() => {
    const storedIndex = JSON.parse(localStorage.getItem("activeIndex"));
    if (storedIndex !== null) {
      setActiveIndex(storedIndex);
    }
  }, []);

  return (
    <div className="nav rounded-b-[43px] px-[2px] md:px-[35px] py-3 flex items-center justify-between md:gap-[50px] xl:bg-white">
      <img src="/logo.png" alt="Logo" className="max-w-[145px]" />

      <div>
        <ul className="xl:flex hidden items-center gap-[30px]">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => handleActive(index)}
                className={`text-[#707070] ${
                  activeIndex === index ? "active" : ""
                } cursor-pointer`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-[8px]">
        <MobileApplyBtn />
        <Hamburger handleOpenNavbar={handleOpenNavbar}/>
      </div>
    </div>
  );
}

export default NavbarBottom;
