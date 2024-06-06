import React from "react";
import Image from "next/image";
import bannerImg1 from "../../assets/images/bannerImg/bannerImg1.png";
import { motion } from "framer-motion";

const SliderOne = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between text-black">
        <div>
          <Image src={bannerImg1} alt="bannerImg1" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-[50%]"
        >
          <div>
            <p className="">NEW COLLECTION</p>
            <h3>
              <b className="text-7xl">Luxury Brands</b>
              <p className="text-7xl">Without Labels</p>
            </h3>
            <button className="mt-7 bg-[#333333] text-white py-3 px-8 text-sm rounded-md uppercase">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderOne;
