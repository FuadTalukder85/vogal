"use client";
import Image from "next/image";
import teamImg01 from "../../assets/images/teamImg/teamImg01.png";
import teamImg02 from "../../assets/images/teamImg/teamImg02.png";
import teamImg03 from "../../assets/images/teamImg/teamImg03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// custom button
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute flex -bottom-16 left-36 md:left-[660px] px-6 md:px-0 ">
      <div
        className="custom-arrow prev-arrow bg-black p-3 rounded-md shadow-md cursor-pointer hover:bg-seaBlue transition-all duration-700"
        onClick={onClick}
      >
        <FaArrowRight className="text-white" />
      </div>
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute flex -bottom-16 left-24 md:left-[600px] px-5 md:px-0 z-10">
      <div
        className="custom-arrow next-arrow bg-white border border-gray-200 p-3 rounded-md shadow-md cursor-pointer hover:bg-seaBlue transition-all duration-700 z-10"
        onClick={onClick}
      >
        <FaArrowLeft className="text-black" />
      </div>
    </div>
  );
};
const MeetOurTeam = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow onClick={() => {}} />,
          prevArrow: <PrevArrow onClick={() => {}} />,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          nextArrow: <NextArrow onClick={() => {}} />,
          prevArrow: <PrevArrow onClick={() => {}} />,
        },
      },
    ],
  };

  return (
    <div className="mb-28">
      <h3 className="text-center text-xl md:text-3xl font-semibold uppercase mt-10 md:mt-28">
        Meet Our Teams
      </h3>
      <p className="text-center text-sm md:mt-3 px-5 md:px-0">
        Follow the most popular trends and get exclusive items from Vogal Shop.
      </p>

      <div className="mt-14 mx-auto">
        <Slider {...settings}>
          <div className="relative">
            <Image
              src={teamImg01}
              alt="Savannah Nguyen"
              height={450}
              width={400}
              className="rounded-lg mx-auto"
            />
            <div className="absolute top-5 left-10">
              <h5 className="text-xl font-semibold">Savannah Nguyen</h5>
              <p className="text-[#868585]">Sales Person</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={teamImg02}
              alt="Leslie Alexander"
              height={400}
              width={400}
              className="rounded-lg mx-auto"
            />
            <div className="absolute top-5 left-10">
              <h5 className="text-xl font-semibold">Leslie Alexander</h5>
              <p className="text-[#868585]">Sales Person</p>
            </div>
          </div>
          <div className="relative">
            <Image
              src={teamImg03}
              alt="Sn Jack"
              height={400}
              width={400}
              className="rounded-lg mx-auto"
            />
            <div className="absolute top-5 left-10">
              <h5 className="text-xl font-semibold">Sn Jack</h5>
              <p className="text-[#868585]">Sales Person</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MeetOurTeam;
