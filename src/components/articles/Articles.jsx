import React from "react";
import Image from "next/image";
import articleImg1 from "../../assets/images/articleImg/articleImg1.png";
import articleImg2 from "../../assets/images/articleImg/articleImg2.png";
import articleImg3 from "../../assets/images/articleImg/articleImg3.png";

const Articles = () => {
  return (
    <div className="bg-[#F7F7F7] mt-10">
      <div className="max-w-[1300px] mx-auto py-16">
        <h5 className="text-3xl font-semibold text-center">News & Articles</h5>
        <div className="flex gap-5 mt-7">
          <div className="bg-white">
            <Image src={articleImg1} alt="articleImg1"></Image>
            <h5 className="text-lg font-semibold text-center mt-4 pb-5">
              Match outfits with other significant
            </h5>
          </div>
          <div className="bg-white">
            <Image src={articleImg2} alt="articleImg1"></Image>
            <h5 className="text-lg font-semibold text-center mt-4 pb-5">
              Fresh work outfits for new year
            </h5>
          </div>
          <div className="bg-white">
            <Image src={articleImg3} alt="articleImg1"></Image>
            <h5 className="text-lg font-semibold text-center mt-4 pb-5">
              Spotlights the new role models
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
