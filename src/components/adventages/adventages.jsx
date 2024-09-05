/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../../layout/wrapper";
import AdventagesCard from "./adventagesCard";

function Adventages() {
  return (
    <>
      <Wrapper>
        <div className="mt-[100px]">
          <h2 className="text-[#1c68a5] mb-5 text-[2rem] text-center">
            Advantages of Applying with{" "}
            <span className="text-[#e63f38]">Turkish Campus</span>{" "}
          </h2>
          <div>
            <AdventagesCard />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Adventages;
