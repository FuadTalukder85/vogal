"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SliderOne from "./SliderOne";
import SliderTwo from "./SliderTwo";

const Banner = () => {
  const [showSliderOne, setShowSliderOne] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSliderOne((prev) => !prev);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full md:h-[700px] overflow-hidden bg-[#F7F7F7]">
      {showSliderOne ? (
        <motion.div
          key="sliderOne"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          className="w-full flex items-center justify-center"
        >
          <SliderOne />
        </motion.div>
      ) : (
        <motion.div
          key="sliderTwo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
          className="w-full"
        >
          <SliderTwo />
        </motion.div>
      )}
    </div>
  );
};

export default Banner;
