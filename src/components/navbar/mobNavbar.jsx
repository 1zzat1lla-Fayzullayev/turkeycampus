/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function MobNavbar({ handleOpenNavbar, navbar }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.6)] z-[1000] transition-opacity duration-300 ease-out ${
          navbar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOpenNavbar}
      >
        <div
        onClick={(e) => e.stopPropagation()}
          className={`mob-navbar px-4 bg-white fixed top-0 left-0 h-full z-[999999] min-w-[330px] max-w-full py-8 transition-transform duration-300 ease-out transform ${
            navbar ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <div className="flex justify-between items-center">
            <img src="/logo.png" alt="Logo" className="w-[145px]" />
            <button
              onClick={handleOpenNavbar}
              aria-label="Close"
              className="p-2 text-gray-600 hover:text-red-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MobNavbar;
