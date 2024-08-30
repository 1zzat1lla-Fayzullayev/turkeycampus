/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../../layout/wrapper";
import ServicesCard from "./servicesCard";

function Services() {
  return (
    <>
      <div>
        <Wrapper>
          <div className="mt-[150px] flex justify-center items-center flex-col">
            <h2 className="text-[38px] font-[700] ">
              Our <span className="text-[#e63f38]">Services</span>
            </h2>
            <div className="mt-[100px]">
              <ServicesCard />
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default Services;
