import React from "react";
import Wrapper from "../../layout/wrapper";
import ServicesCard from "./servicesCard";

function Services() {
  return (
    <Wrapper>
      <div className="mt-[150px] flex justify-center items-center flex-col">
        <h2 className="text-[38px] font-[700] text-center">
          Our <span className="text-[#e63f38]">Services</span>
        </h2>
        <div className="mt-[100px] flex justify-center items-center w-full">
          <ServicesCard />
        </div>
      </div>
    </Wrapper>
  );
}

export default Services;
