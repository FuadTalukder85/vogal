import React from "react";
import Container from "../../../components/Container";
import Image from "next/image";
import aboutUsImg from "../../../assets/images/aboutUsImg.png";
import MeetOurTeam from "../../../components/MeetOurTeam";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] py-6 md:py-16">
        <h5 className="text-center text-3xl font-semibold uppercase">
          About Us
        </h5>
      </div>
      <Container>
        <div className="mt-16">
          <Image
            className="mt-16 md:rounded-lg"
            src={aboutUsImg}
            alt="logo"
            height={800}
          ></Image>
        </div>
        <div className="md:grid grid-cols-12 gap-24 mt-5 md:mt-16 items-center px-3 md:px-0">
          <div className="col-span-6">
            <p className="text-lg font-semibold">Welcome To Our Online Store</p>
            <h5 className="text-2xl md:text-4xl font-semibold mt-3 md:mt-7">
              Discover Our Journey Redefining Online Shopping.
            </h5>
          </div>
          <div className="col-span-6">
            <p className="text-sm md:text-lg md:font-semibold md:leading-9 mt-3 md:mt-0">
              At vogal, we,re passionate about bringing you the latest trends
              and timeless classics in fashion. Our journey began with a vision
              to redefine the online shopping experience, offering a curated
              selection of high-quality clothing, accessories, and lifestyle
              products that reflect your unique style. What sets us apart is our
              dedication to providing exceptional customer service and a
              seamless shopping experience from start to finish.
            </p>
          </div>
        </div>
        <MeetOurTeam></MeetOurTeam>
      </Container>
    </div>
  );
};

export default AboutUs;
