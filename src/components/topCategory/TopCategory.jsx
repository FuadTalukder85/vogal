import React from "react";
import category1 from "../../assets/images/categoryImg/category1.png";
import category2 from "../../assets/images/categoryImg/category2.png";
import category3 from "../../assets/images/categoryImg/category3.png";
import Image from "next/image";
import Link from "next/link";

const TopCategory = () => {
  return (
    <div className="max-w-[1300px] mx-auto p-5 md:p-0">
      <h5 className="text-2xl font-medium text-center md:mt-14">
        Explore Top Categories
      </h5>
      <Link href={`/shop`}>
        <div className="grid grid-cols-12 gap-5 mt-7">
          {/* first category */}
          <div className="col-span-12 md:col-span-4">
            <div className="overflow-hidden">
              <Image
                className="hover:scale-110 transition-all duration-500"
                src={category1}
                alt="category1"
                height={600}
              ></Image>
            </div>
            <h5 className="text-xl md:text-2xl font-semibold text-center mt-5">
              Spring Forward!
            </h5>
            <div className="flex justify-center">
              <button className="mt-3 border border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white hover:bg transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase ">
                Discover More
              </button>
            </div>
          </div>
          {/* second category */}
          <div className="col-span-6 md:col-span-4">
            <div className="overflow-hidden">
              <Image
                className="hover:scale-110 transition-all duration-500"
                src={category2}
                alt="category1"
                height={600}
              ></Image>
            </div>
            <h5 className="text-xl md:text-2xl font-semibold text-center mt-5">
              Bold Moves
            </h5>
            <div className="flex justify-center">
              <button className="mt-3 border border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase">
                Discover More
              </button>
            </div>
          </div>
          {/* third category */}
          <div className="col-span-6 md:col-span-4">
            <div className="overflow-hidden">
              <Image
                className="hover:scale-110 transition-all duration-500"
                src={category3}
                alt="category1"
                height={600}
              ></Image>
            </div>
            <h5 className="text-xl md:text-2xl font-semibold text-center mt-5">
              Online Exclusive
            </h5>
            <div className="flex justify-center">
              <button className="mt-3 border border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-white hover:bg transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopCategory;
