import React from "react";
import companyLogo1 from "../../assets/images/companyLogoImg/companyLogo1.png";
import companyLogo2 from "../../assets/images/companyLogoImg/companyLogo2.png";
import companyLogo3 from "../../assets/images/companyLogoImg/companyLogo3.png";
import companyLogo4 from "../../assets/images/companyLogoImg/companyLogo4.png";
import companyLogo5 from "../../assets/images/companyLogoImg/companyLogo5.png";
import companyLogo6 from "../../assets/images/companyLogoImg/companyLogo6.png";
import companyLogo7 from "../../assets/images/companyLogoImg/companyLogo7.png";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-16 grid grid-cols-12 md:flex gap-5 p-5 md:p-0">
      <div className="col-span-3">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo1}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="col-span-3">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo2}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="col-span-3">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo3}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="col-span-3">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo4}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="col-span-4">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo5}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="col-span-4">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo6}
          alt="companyLogo1"
        ></Image>
      </div>
      <div className="col-span-4">
        <Image
          className="border border-[#EFEDEC]"
          src={companyLogo7}
          alt="companyLogo1"
        ></Image>
      </div>
    </div>
  );
};

export default CompanyLogo;
