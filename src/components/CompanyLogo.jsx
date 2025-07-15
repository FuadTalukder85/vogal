import React from "react";
import companyLogo1 from "../assets/images/companyLogoImg/companyLogo1.png";
import companyLogo2 from "../assets/images/companyLogoImg/companyLogo2.png";
import companyLogo3 from "../assets/images/companyLogoImg/companyLogo3.png";
import companyLogo4 from "../assets/images/companyLogoImg/companyLogo4.png";
import companyLogo5 from "../assets/images/companyLogoImg/companyLogo5.png";
import companyLogo6 from "../assets/images/companyLogoImg/companyLogo6.png";
import companyLogo7 from "../assets/images/companyLogoImg/companyLogo7.png";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-8 grid grid-cols-2 md:grid-cols-8 space-y-2 md:space-y-0 space-x-2 p-3 pr-5 md:p-0">
      <div className="mt-2 md:mt-0 ps-2 md:ps-0">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo1}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo2}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo3}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo4}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo5}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo6}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo7}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo3}
          alt="companyLogo1"
        ></Image>
      </div>
    </div>
  );
};

export default CompanyLogo;
