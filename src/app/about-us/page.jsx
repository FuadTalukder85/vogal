import React from "react";
import Container from "../../components/container/Container";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/vogal.png";

const AboutUs = () => {
  return (
    <Container>
      <div className="mt-16">
        <Link href="/">
          <Image className="mt-16" src={logo} alt="logo" height={100}></Image>
        </Link>
        <h5 className="text-xl mt-10">About Us</h5>
        <p className="mt-2 text-sm">
          Fashion Field is an exceptional lifestyle and fashion eCommerce
          platform based in the vibrant country of Bangladesh. Since its
          inception in 2020, we have been on a mission to revolutionize the
          fashion landscape, inspiring style enthusiasts who are passionate
          about adorning themselves with the finest. Our extensive range
          encompasses a diverse selection of lifestyle, fashion, and personal
          care products catering to women, men, and children of all ages.
        </p>
        <p className="mt-3 text-sm">
          As a proud brand under the umbrella of Elham Lifestyle Limited, we
          belong to the illustrious Elham Group. Renowned as a comprehensive
          source for international buyers seeking top-tier knit and woven
          garments from Bangladesh, our parent company bolsters our commitment
          to quality and excellence.
        </p>
        <p className="mt-3 text-sm">
          At Fashion Field, we assure you that your fashion journey will never
          fade. We,re not just a retailer; we,re your partners in cultivating an
          enduring sense of style.
        </p>
        <h5 className="text-xl mt-10">Our Mission</h5>
        <p className="mt-2 text-sm">
          O﻿ur philosophy on fashion mirrors that of dining – why limit yourself
          to the same menu? At Fashion Field, we present you with a curated
          collection of fashion brands, each meticulously chosen to deliver the
          utmost in quality and trendiness. Our aim is not only to elevate your
          appearance but also to enhance your confidence. Since our inception,
          we have remained steadfast in offering the finest lifestyle products
          accompanied by impeccable customer support.
        </p>
        <h5 className="text-xl mt-10">Our Vision</h5>
        <p className="mt-2 text-sm">
          Our vision is to set the gold standard for online shopping
          experiences, raising the bar for quality products available at
          reasonable prices. In a world often fixated on quantity, we prioritize
          quality above all. Every penny you invest with us is an investment in
          the finest. Our aspirations extend beyond borders – we are committed
          to transcending local boundaries and making our premium services
          accessible to a global clientele.
        </p>
        <p className="mt-3 text-sm">
          In summary, Fashion Field stands as a beacon of innovation and style
          in Bangladesh,s eCommerce arena. With our unwavering dedication to
          quality, we are not just shaping fashion; we are crafting an
          experience that resonates with style-conscious individuals worldwide.
        </p>
      </div>
    </Container>
  );
};

export default AboutUs;
