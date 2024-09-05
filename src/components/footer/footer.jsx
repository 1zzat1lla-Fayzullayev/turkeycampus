/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../../layout/wrapper";
import Icons from "../../ui/navbar/icons";

function Footer() {
  return (
    <div className="footer py-8 bg-white">
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          {/* Logo and Contact Information */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10">
              <img src="/logo.png" alt="Logo" className="w-[150px] md:w-[200px]" />
              <Icons />
            </div>
            <div className="max-w-[360px] flex flex-col gap-5 mt-3">
              <p className="text-[#212529] text-sm md:text-base">
                Want to study in Turkey? With over 10 years of experience and as the official representative of more than 65 Turkish private universities, Turkey Campus will guide you through the process and secure your acceptance letter for free!
              </p>
              <a href="#" className="text-[#1966a2] text-sm md:text-base">
                Gökdemir Plaza, E5 üzeri M, Mehmet Akif Ersoy Cd. D:1, 34515 Esenyurt/İstanbul, Istanbul, Turkey, 34515
              </a>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="svg-inline--fa fa-mobile-screen-button w-4 text-[#e63f38]"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="mobile-screen-button"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM304 64H80V384H304V64z"
                    ></path>
                  </svg>
                  <a href="#" className="text-sm">00905415822955</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="svg-inline--fa fa-envelope w-4 text-[#e63f38]"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="envelope"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                    ></path>
                  </svg>
                  <a href="#" className="text-sm">info@turkeycampus.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full lg:w-1/3">
            <ul className="flex flex-col items-center gap-4">
              <h2 className="text-[20px] font-[700] mb-[15px] text-center">Useful Links</h2>
              <div className="flex items-start gap-10">
                <div>
                  <li className="list-disc mb-2">
                    <a href="#" className="font-[600] text-[14px]">Get a free admission</a>
                  </li>
                  <li className="list-disc mb-2">
                    <a href="#" className="font-[600] text-[14px]">Privacy Policy</a>
                  </li>
                  <li className="list-disc mb-2">
                    <a href="#" className="font-[600] text-[14px]">Become an affiliate</a>
                  </li>
                </div>
                <div>
                  <li className="list-disc mb-2">
                    <a href="#" className="font-[600] text-[14px]">Be Our Agent</a>
                  </li>
                  <li className="list-disc mb-2">
                    <a href="#" className="font-[600] text-[14px]">Our Services</a>
                  </li>
                  <li className="list-disc mb-2">
                    <a href="#" className="font-[600] text-[14px]">Terms and Conditions</a>
                  </li>
                </div>
              </div>
            </ul>
          </div>

          {/* Newsletter and Discounts */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            <div className="footer-widget p-[16px]">
              <p className="text-[#e63f38] font-[700] text-[20px]">Newsletter</p>
              <p className="text-[#707070] text-sm">Don’t miss the latest news</p>
              <div className="mt-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-[#dee2e6] py-[5px] outline-none w-full rounded-[5px] px-3 text-sm"
                />
                <button className="bg-[#1966a2] border text-[white] outline-none rounded-[45px] text-center font-[600] w-full h-[31px] mt-[10px] border-[#1966a2]">
                  Send Now
                </button>
              </div>
            </div>
            <div className="footer-widget mt-[30px] p-[16px]">
              <p>
                Get exclusive <span className="text-[#e63f38]"> discounts</span> up to <span className="text-[#e63f38]">75%</span>
              </p>
              <button className="bg-[#1966a2] border px-[35px] py-[3px] mx-auto flex justify-center items-center text-[white] outline-none rounded-[45px] text-center font-[600] h-[31px] mt-[10px] border-[#1966a2]">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default Footer;
