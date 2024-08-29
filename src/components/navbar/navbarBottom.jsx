/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import Hamburger from "../../ui/navbar/hamburger";
import MobileApplyBtn from "../../ui/navbar/mobileApplyBtn";
import Dropdown from "../../ui/navbar/dropdown";
import { menuItems } from "../../data/navbarData";

function NavbarBottom({
  handleOpenNavbar,
  activeIndex,
  handleActive,
  handleMouseEnter,
  handleMouseLeave,
  openDropdownIndex,
}) {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav rounded-b-[43px] px-[2px] md:px-[35px] py-3 flex items-center justify-between md:gap-[50px] xl:bg-white ${
        isBlurred ? "backdrop-blur-md" : ""
      }`}
    >
      <img src="/logo.png" alt="Logo" className="max-w-[145px]" />

      <div>
        <ul className="xl:flex hidden items-center gap-[30px]">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a
                href="#"
                onClick={() => handleActive(index)}
                className={`text-[#707070] ${
                  activeIndex === index ? "active" : ""
                } cursor-pointer`}
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
      </div>
      <div className="flex items-center gap-[8px]">
        <MobileApplyBtn />
        <Hamburger handleOpenNavbar={handleOpenNavbar} />
      </div>
    </div>
  );
}

export default NavbarBottom;
