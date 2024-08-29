/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Hamburger from "../../ui/navbar/hamburger";
import MobileApplyBtn from "../../ui/navbar/mobileApplyBtn";
import Dropdown from "../../ui/navbar/dropdown";

function NavbarBottom({ handleOpenNavbar }) {
  const [activeIndex, setActiveIndex] = useState(
    () => JSON.parse(localStorage.getItem("activeIndex")) || 0
  );

  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const menuItems = [
    { text: "Home", link: "/" },
    {
      text: "About us",
      link: "/about",
      hasDropdown: true,
      dropdownLinks: [{ text: "Be our Agent", link: "/be-our-agent" }],
    },
    { text: "Services", link: "/services" },
    {
      text: "Study Destinations",
      link: "/study-destinations",
      hasDropdown: true,
      dropdownLinks: [
        { text: "USA", link: "/study-destinations/usa" },
        { text: "UK", link: "/study-destinations/uk" },
      ],
    },
    {
      text: "Universities",
      link: "/universities",
      hasDropdown: true,
      dropdownLinks: [
        { text: "Harvard", link: "/universities/harvard" },
        { text: "Stanford", link: "/universities/stanford" },
      ],
    },
    {
      text: "Fields",
      link: "/fields",
      hasDropdown: true,
      dropdownLinks: [
        { text: "Engineering", link: "/fields/engineering" },
        { text: "Medicine", link: "/fields/medicine" },
      ],
    },
    {
      text: "Videos & Podcast",
      link: "/media",
      hasDropdown: true,
      dropdownLinks: [
        { text: "Webinars", link: "/media/webinars" },
        { text: "Podcasts", link: "/media/podcasts" },
      ],
    },
    { text: "Blog", link: "/blog" },
    { text: "Contact Us", link: "/contact" },
  ];

  const handleActive = (index) => {
    setActiveIndex(index);
    localStorage.setItem("activeIndex", JSON.stringify(index));
  };

  const handleMouseEnter = (index) => {
    setOpenDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdownIndex(null);
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
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a
                href={item.link}
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
