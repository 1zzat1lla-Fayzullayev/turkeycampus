/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Dropdown({ links = [], handleMouseEnter, handleMouseLeave }) {
  return (
    <div
      className="absolute left-0 top-full mt-2 w-[200px] bg-white shadow-lg rounded-lg p-2 border border-gray-200 transition-all duration-300 ease-in-out transform origin-top"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.link}
              className="block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition duration-200"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
