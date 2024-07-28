"use client";
import Image from "next/image";
import teamImg01 from "../../assets/images/teamImg/teamImg01.png";
import teamImg02 from "../../assets/images/teamImg/teamImg02.png";
import teamImg03 from "../../assets/images/teamImg/teamImg03.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./MeetOurTeam.css";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const MeetOurTeam = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-semibold uppercase mt-28">
        Meet Our Teams
      </h3>
      <p className="text-center text-sm mt-3">
        Follow the most popular trends and get exclusive items from Vogal Shop.
      </p>

      <div className="mt-14">
        <Slider {...settings}>
          <div className="relative">
            <Image
              src={teamImg01}
              alt="Savannah Nguyen"
              height={450}
              width={400}
              className="rounded-lg mx-auto"
            />
            <div className="absolute top-9 left-9">
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
            <div className="absolute top-9 left-9">
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
            <div className="absolute top-9 left-9">
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
