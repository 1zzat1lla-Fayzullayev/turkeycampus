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
      className={`nav rounded-[10px] md:rounded-b-[43px] px-[2px] md:px-[35px] py-3 flex items-center justify-between md:gap-[50px] xl:bg-white ${
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
              <div className="iconLinkDiv flex items-center gap-1">
                <a
                  href="#"
                  onClick={() => handleActive(index)}
                  className={`text-[#707070] ${
                    activeIndex === index ? "active" : ""
                  } cursor-pointer`}
                >
                  {item.text}
                </a>
                {item.dropdownIcon ? (
                  <svg
                    className={`dropdownIcon svg-inline--fa fa-sort-down w-[7px] mb-1 ${
                      activeIndex === index ? "active" : ""
                    }`}
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="sort-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"
                    ></path>
                  </svg>
                ) : (
                  ""
                )}
              </div>

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
