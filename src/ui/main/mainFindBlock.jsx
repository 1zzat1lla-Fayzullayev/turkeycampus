/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Menu, MenuButton } from "@chakra-ui/react";
import CustomMenuList from "./customMenuList";

function MainFindBlock() {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu);
  };

  const menuItems = [
    { key: "degree", label: "choose a degree", icon: "/find-icon1.svg" },
    { key: "field", label: "choose a field", icon: "/find-icon2.svg" },
    {
      key: "speciality",
      label: "choose a speciality",
      icon: "/find-icon3.svg",
    },
    { key: "language", label: "choose a language", icon: "/find-icon4.svg" },
  ];

  return (
    <div className="bg-white z-[10] relative flex flex-col md:flex-row md:items-center justify-between border border-[#aaaaaa60] rounded-[40px] px-[18px] py-[29px]" ref={menuRef}>
      <div>
        <h2 className="text-[32px] font-[700] text-[black] leading-[35px]">
          Find <br className="hidden md:block" /> Your{" "}
          <span className="text-[#e63f38]">Best Choice</span>
        </h2>
      </div>
      <div className="w-full">
        <div className="flex flex-col w-full gap-[20px] p-7 md:p-0">
          <div
            className="flex flex-col md:flex-row w-full items-center gap-[25px]"
            ref={menuRef}
          >
            {menuItems.map((item) => (
              <Menu key={item.key} isOpen={activeMenu === item.key}>
                <MenuButton
                  onClick={() => handleMenuClick(item.key)}
                  className="flex justify-between items-center uppercase border border-[#aaa] cursor-pointer rounded-[100px] px-5 w-full md:max-w-[220px] py-3"
                >
                  <h4 className="text-[11px] text-[#7A7A7A]">{item.label}</h4>
                  <img src={item.icon} alt="" />
                </MenuButton>
                <CustomMenuList menuType={item.key} />
              </Menu>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="Type what you are looking for"
              className="w-full border outline-none px-[20px] py-5 relative border-[#aaa] cursor-pointer rounded-[100px]"
            />
            <img
              src="/find-icon5.svg"
              alt=""
              className="absolute top-6 right-5 w-[20px] cursor-pointer"
            />
          </div>
          <button className="w-full bg-[#1966a2] rounded-[45px] text-center outline-none text-white font-[600] h-[65px] border-none leading-[65px]">
            Search Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainFindBlock;
