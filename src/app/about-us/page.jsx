import React from "react";
import Container from "../../components/container/Container";
import Link from "next/link";
import Image from "next/image";
import aboutUsImg from "../../assets/images/aboutUsImg.png";
import teamImg01 from "../../assets/images/teamImg/teamImg01.png";
import teamImg02 from "../../assets/images/teamImg/teamImg02.png";
import teamImg03 from "../../assets/images/teamImg/teamImg03.png";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#F5F5F5] py-16">
        <h5 className="text-center text-3xl font-semibold uppercase">
          About Us
        </h5>
      </div>
      <Container>
        <div className="mt-16">
          <Link href="/">
            <Image
              className="mt-16 rounded-lg"
              src={aboutUsImg}
              alt="logo"
              height={800}
            ></Image>
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-24 mt-16 items-center">
          <div className="col-span-6">
            <p className="text-lg font-semibold">Welcome To Our Online Store</p>
            <h5 className="text-4xl font-semibold mt-7">
              Discover Our Journey Redefining Online Shopping.
            </h5>
          </div>
          <div className="col-span-6">
            <p className="text-lg font-semibold leading-9">
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
        {/* meet our team */}
        <div>
          <h3 className="text-center text-3xl font-semibold uppercase mt-28">
            Meet Our Teams
          </h3>
          <p className="text-center text-sm mt-3">
            Follow the most popular trends and get exclusive items from vogal
            shop.
          </p>
          <div className="grid grid-cols-12 mt-14 gap-10">
            <div className="col-span-4 relative">
              <Image
                src={teamImg01}
                alt="teamImg01"
                height={4500}
                width={400}
                className="rounded-lg"
              ></Image>
              <div className="absolute top-9 left-9">
                <h5 className="text-xl font-semibold">Savannah nguyen</h5>
                <p className="text-[#868585]">Sales person</p>
              </div>
            </div>
            {/*  */}
            <div className="col-span-4 relative">
              <Image
                src={teamImg02}
                alt="teamImg01"
                height={400}
                width={400}
                className="rounded-lg"
              ></Image>
              <div className="absolute top-9 left-9">
                <h5 className="text-xl font-semibold">Leslie alexander</h5>
                <p className="text-[#868585]">Sales person</p>
              </div>
            </div>
            {/*  */}
            <div className="col-span-4 relative">
              <Image
                src={teamImg03}
                alt="teamImg01"
                height={400}
                width={400}
                className="rounded-lg"
              ></Image>
              <div className="absolute top-9 left-9">
                <h5 className="text-xl font-semibold">Sn Jack</h5>
                <p className="text-[#868585]">Sales person</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
