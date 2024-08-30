/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../../layout/wrapper";

function About() {
  return (
    <>
      <Wrapper>
        <div className="mt-[150px] flex flex-col md:flex-row mx-[20px] xl:mx-0 items-center gap-[50px] relative z-[10]">
          <div>
            <img
              src="/about.png"
              alt=""
              className="w-full h-full rounded-[40px]"
            />
          </div>
          <div className="max-w-[600px]">
            <h3 className="about-h3 relative pl-[22px] uppercase text-[#1966a2] text-[26px] md:text-[30px] font-[600]">
              About us
            </h3>
            <h2 className="text-[38px] md:text-[42px] font-[800] leading-[1.4] text-[#212529]">
              {" "}
              Who We Are:
            </h2>

            <div className="mb-[10px]">
              <p className="text-[#707070] font-[500]">
                If you've decided to enroll in one of Turkey's colleges, this is
                the first place to gain information about studying in Turkey and
                to get your free admission.
                <br />
                <br />
                With a seamless mix of innovation and over 10 years of
                experience, Turkey Campus opens doors to unparalleled
                educational opportunities in Turkey and Cyprus. We are the
                official partner of more than 65 universities. Our platform
                offers personalized guidance, from choosing the perfect program
                to navigating admissions, ensuring every student's journey is
                smooth and successful. Join us today and embark on a
                transformative academic adventure with Turkey Campus at your
                side!
              </p>
            </div>
            <div className="mt-[40px]">
              <a
                href="#"
                className="py-[15px] px-[52px] rounded-[30px] border border-[#1966a2] text-[#1966a2] bg-transparent text-[16px] capitalize font-[600] transition-all ease-in-out hover:bg-[#1966a2] hover:text-[white]"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default About;
