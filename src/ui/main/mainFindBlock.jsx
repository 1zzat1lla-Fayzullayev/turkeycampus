/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuGroup,
} from "@chakra-ui/react";

function MainFindBlock() {
  const [activeMenu, setActiveMenu] = useState(null); 


  const handleMenuClick = (menu) => {
    setActiveMenu(menu === activeMenu ? null : menu); 
  };

  const renderMenuContent = (menu) => {
    switch (menu) {
      case "degree":
        return (
          <MenuList>
            <MenuGroup title="Choose a Degree">
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Bachelor's</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Master's</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Doctorate</MenuItem>
            </MenuGroup>
          </MenuList>
        );
      case "field":
        return (
          <MenuList>
            <MenuGroup title="Choose a Field">
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Engineering</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Medicine</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Arts</MenuItem>
            </MenuGroup>
          </MenuList>
        );
      case "speciality":
        return (
          <MenuList>
            <MenuGroup title="Choose a Speciality">
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Computer Science</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Mechanical Engineering</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Psychology</MenuItem>
            </MenuGroup>
          </MenuList>
        );
      case "language":
        return (
          <MenuList>
            <MenuGroup title="Choose a Language">
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>English</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>Spanish</MenuItem>
              <MenuItem _hover={{ bg: "red.500", color: "white" }}>French</MenuItem>
            </MenuGroup>
          </MenuList>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-white z-[10] relative flex flex-col md:flex-row md:items-center justify-between border border-[#aaaaaa60] rounded-[40px] px-[18px] py-[29px]">
        <div>
          <h2 className="text-[32px] font-[700] text-[black] leading-[35px]">
            Find <br className="hidden md:block"/> Your <span className="text-[#e63f38]">Best Choice</span>
          </h2>
        </div>
        <div className="w-full">
          <div className="flex flex-col w-full gap-[20px] p-7 md:p-0">
            <div className="flex flex-col md:flex-row w-full items-center gap-[25px] ">
              <Menu isOpen={activeMenu === "degree"}>
                <MenuButton
                  onClick={() => handleMenuClick("degree")}
                  className="flex justify-between items-center uppercase  border border-[#aaa] cursor-pointer rounded-[100px] px-5 w-full md:max-w-[220px] py-3"
                >
                  <h4 className="text-[11px] text-[#7A7A7A]">choose a degree</h4>
                  <img src="/find-icon1.svg" alt="" />
                </MenuButton>
                {renderMenuContent("degree")}
              </Menu>

           
              <Menu isOpen={activeMenu === "field"}>
                <MenuButton
                  onClick={() => handleMenuClick("field")}
                  className="flex justify-between items-center uppercase  border border-[#aaa] cursor-pointer rounded-[100px] px-5 w-full md:max-w-[220px] py-3"
                >
                  <h4 className="text-[11px] text-[#7A7A7A]">choose a field</h4>
                  <img src="/find-icon2.svg" alt="" />
                </MenuButton>
                {renderMenuContent("field")}
              </Menu>

             
              <Menu isOpen={activeMenu === "speciality"}>
                <MenuButton
                  onClick={() => handleMenuClick("speciality")}
                  className="flex justify-between items-center uppercase  border border-[#aaa] cursor-pointer rounded-[100px] px-5 w-full md:max-w-[220px] py-3"
                >
                  <h4 className="text-[11px] text-[#7A7A7A]">choose a speciality</h4>
                  <img src="/find-icon3.svg" alt="" />
                </MenuButton>
                {renderMenuContent("speciality")}
              </Menu>

            
              <Menu isOpen={activeMenu === "language"}>
                <MenuButton
                  onClick={() => handleMenuClick("language")}
                  className="flex justify-between items-center uppercase  border border-[#aaa] cursor-pointer rounded-[100px] px-5 w-full md:max-w-[220px] py-3"
                >
                  <h4 className="text-[11px] text-[#7A7A7A]">choose a language</h4>
                  <img src="/find-icon4.svg" alt="" />
                </MenuButton>
                {renderMenuContent("language")}
              </Menu>
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
    </>
  );
}

export default MainFindBlock;
