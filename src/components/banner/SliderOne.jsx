import React from "react";
import Image from "next/image";
import bannerImg1 from "../../assets/images/bannerImg/bannerImg1.png";
import { motion } from "framer-motion";
import Link from "next/link";

const SliderOne = () => {
  return (
    <div className="er max-w-[1300px] relative mx-auto md:flex items-center justify-between text-black overflow-hidden">
      <div>
        <Image src={bannerImg1} alt="bannerImg1" height={950} />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-[50%]"
      >
        <div className="mx-auto hidden md:block">
          <p className="">NEW COLLECTION</p>
          <h3>
            <b className="text-7xl">Luxury Brands</b>
            <p className="text-7xl">Without Labels</p>
          </h3>
          <Link href="/shop">
            <button className="mt-7 bg-[#333333] text-white py-3 px-8 text-sm rounded-md uppercase">
              Shop Now
            </button>
          </Link>
        </div>
        {/* responsive */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:hidden">
          <p className="">NEW COLLECTIONnnn</p>
          <h3>
            <b className="text-4xl">Luxury Brands</b>
            <p className="text-4xl">Without Labels</p>
          </h3>
          <div className="flex justify-center">
            <button className="mt-5 bg-[#333333] text-white py-2 px-6 sm:py-3 sm:px-8 text-xs sm:text-sm rounded-md uppercase">
              Shop Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SliderOne;
