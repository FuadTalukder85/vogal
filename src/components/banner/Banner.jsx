import React from "react";
import bannerImg1 from "../../assets/images/bannerImg/bannerImg1.png";
import Image from "next/image";
// import bannerImg2 from "../../assets/images/bannerImg/bannerImg2.png"

const Banner = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div className="max-w-[1300px] mx-auto flex items-center justify-between text-black">
        <div className="w-[50%]">
          <p className="">NEW COLLECTION</p>
          <h3>
            <b className="text-7xl">Luxury Brands</b>
            <p className="text-7xl">Without Labels</p>
          </h3>
          <button className="mt-7 bg-[#333333] text-white py-3 px-8 text-sm rounded-md uppercase">
            Shop Now
          </button>
        </div>
        <div>
          <Image src={bannerImg1} alt="bannerImg1"></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
