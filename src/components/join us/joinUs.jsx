/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Wrapper from "../../layout/wrapper";

function JoinUs() {
  const [universities, setUniversities] = useState(0);
  const [partnerAgencies, setPartnerAgencies] = useState(0);
  const [guaranteedAcceptance, setGuaranteedAcceptance] = useState(0);
  const [studentsEnrolled, setStudentsEnrolled] = useState(0);

  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
      const animateNumbers = (setter, finalValue) => {
        let start = 0;
        const duration = 2000;
        const increment = Math.ceil(finalValue / (duration / 50));

        const interval = setInterval(() => {
          start += increment;
          if (start >= finalValue) {
            setter(finalValue);
            clearInterval(interval);
          } else {
            setter(start);
          }
        }, 50);
      };

      animateNumbers(setUniversities, 203);
      animateNumbers(setPartnerAgencies, 481);
      animateNumbers(setGuaranteedAcceptance, 30082);
      animateNumbers(setStudentsEnrolled, 18853);
    } else {
      setUniversities(0);
      setPartnerAgencies(0);
      setGuaranteedAcceptance(0);
      setStudentsEnrolled(0);
    }
  }, [inView, controls]);

  const stats = [
    { number: universities, label: "Universities", icon: "/univer.svg" },
    { number: partnerAgencies, label: "Partner Agency", icon: "/partner.svg" },
    {
      number: guaranteedAcceptance,
      label: "Guaranteed Acceptance",
      icon: "/garanty.svg",
    },
    {
      number: studentsEnrolled,
      label: "Students Enrolled",
      icon: "/student.svg",
    },
  ];

  return (
    <Wrapper>
      <div
        ref={ref}
        className="flex flex-col items-center mt-20 px-4 md:px-8 lg:px-0"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
          Join Us <span className="text-[#e63f38]">Now</span>
        </h2>
        <div className="w-full max-w-6xl flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-content-center place-items-center">
            {/* <div className="joinus-first-bg hidden md:block h-[216px] w-[440px]"></div> */}
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="joinus-num-bg p-4 h-[240px] w-[250px] rounded-lg flex flex-col justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 mb-2"
                />
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  +{item.number.toLocaleString()}
                </h4>
                <p className="text-sm md:text-base font-bold text-white text-center">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default JoinUs;
