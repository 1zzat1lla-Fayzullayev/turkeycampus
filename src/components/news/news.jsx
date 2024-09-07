/* eslint-disable no-unused-vars */
import React from "react";
import Wrapper from "../../layout/wrapper";

function News() {
  return (
    <>
      <Wrapper>
        <div className="mt-[100px] px-4">
          <h2 className="text-[38px] text-center font-[700] mb-8">
            Our <span className="text-[#e63f38]">News</span>
          </h2>

          {/* News Container */}
          <div className="news-container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* News Card */}
            {["/news1.jpg", "/news2.jpg", "/news3.jpg"].map((image, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-3xl overflow-hidden p-4"
              >
                <img
                  src={image}
                  alt={`news-${index + 1}`}
                  className="w-full md:w-[130px] h-[150px] md:h-[130px] object-cover rounded-2xl"
                />
                <div className="mt-4 md:mt-0 md:ml-4 flex flex-col justify-between">
                  <p className="text-[#e63f38] text-[15px] font-[500]">Jul 10, 2023</p>
                  <h4 className="text-[20px] font-[700] my-2">Application Deadlines for Turkish Universities</h4>
                  {/* <button className="text-white bg-[#e63f38] hover:bg-[#c72e28] font-[500] py-1 px-4 rounded-lg mt-2">
                    Read More
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default News;
