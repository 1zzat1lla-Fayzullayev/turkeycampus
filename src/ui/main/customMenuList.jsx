/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { MenuList, MenuGroup, MenuItem } from "@chakra-ui/react";

function CustomMenuList({ menuType }) {
  const menuItems = {
    degree: [
      "Bachelor's",
      "Master's",
      "Doctorate",
      "Associate",
      "Training Course",
      "Language Course",
      "Foundation Year",
    ],
    field: ["Engineering", "Medicine", "Arts"],
    speciality: ["Computer Science", "Mechanical Engineering", "Psychology"],
    language: ["English", "Spanish", "French"],
  };

  return (
    <MenuList
      zIndex="20"
      maxH="150px"
      overflowY="scroll"
      boxShadow="md"
      border="1px solid"
      borderColor="#aaaaaa60"
      background="white"
      borderRadius="10px"
      className="w-full"
    >
      <MenuGroup>
        {menuItems[menuType].map((item, index) => (
          <MenuItem
            key={index}
            _hover={{ bg: "#e63f38", color: "white" }}
            className="text-[16px] p-2"
          >
            {item}
          </MenuItem>
        ))}
      </MenuGroup>
    </MenuList>
  );
}

export default CustomMenuList;