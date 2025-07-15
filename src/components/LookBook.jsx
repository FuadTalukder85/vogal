"use client";
import Image from "next/image";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Container from "./Container";
import lookBookImg01 from "../assets/images/lookBookImg/lookBook01.png";
import { useGetProductsQuery } from "../redux/features/productApi/ProductApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// custom button
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute flex -bottom-16 left-64 md:left-80 px-6 md:px-0 ">
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
    <div className="absolute flex -bottom-16 left-52 md:left-64 px-5 md:px-0 z-10">
      <div
        className="custom-arrow next-arrow bg-white border border-gray-200 p-3 rounded-md shadow-md cursor-pointer hover:bg-seaBlue transition-all duration-700 z-10"
        onClick={onClick}
      >
        <FaArrowLeft className="text-black" />
      </div>
    </div>
  );
};

const LookBook = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
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
  const { data, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <Container>
      <div className="md:grid grid-cols-12 gap-14 items-center mt-5 md:mt-28">
        <div className="col-span-6 overflow-hidden md:rounded-lg">
          <Image
            src={lookBookImg01}
            alt="lookBookImg01"
            width={700}
            height={700}
            className="md:rounded-lg hover:scale-105 duration-700 cursor-pointer"
          ></Image>
        </div>
        <div className="col-span-6">
          <h3 className="text-xl md:text-3xl font-semibold uppercase mt-5 md:mt-0 px-3 md:px-0">
            Shop the Lookbook
          </h3>
          <p className="text-sm mt-3 px-3 md:px-0">
            Follow the most popular trends and get exclusive items from Vogal
            Shop.
          </p>
          <Slider {...settings}>
            {data?.slice(0, 9).map((product, index) => (
              <div className="relative overflow-hidden px-3 mt-10" key={index}>
                <Link href={`/shop/${product._id}`}>
                  {product?.firstImg && (
                    <Image
                      src={product.firstImg}
                      alt={product.title || "Product Image"}
                      width={500}
                      height={500}
                      className="rounded-lg"
                    />
                  )}
                  <div className="absolute top-0 left-0 px-3 opacity-0 hover:opacity-100 transition-all duration-700 overflow-hidden">
                    {product?.secondImg && (
                      <Image
                        src={product.secondImg}
                        alt={product.title || "Product Image"}
                        width={500}
                        height={500}
                        className="rounded-lg"
                      />
                    )}
                    <div className="flex justify-center">
                      <ul className="flex gap-2 justify-center absolute bottom-3">
                        <li className="bg-white text-lg font-semibold p-2 rounded-full">
                          <CiHeart />
                        </li>
                        <li className="bg-white text-lg font-semibold p-2 rounded-full">
                          <CiShoppingCart />
                        </li>
                        <li className="bg-white text-lg font-semibold p-2 rounded-full">
                          <CiSearch />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="text-md mt-4 px-3">
                    <p className="text-center md:text-start">
                      {product?.title}
                    </p>
                    {product?.discount ? (
                      <p className="mt-2 flex gap-2 justify-center md:justify-normal">
                        <span className="line-through text-[#979595]">
                          ${product?.discount}
                        </span>
                        <span className="">${product?.price}</span>
                      </p>
                    ) : (
                      <p className="mt-2">${product?.price}</p>
                    )}
                  </h5>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
};

export default LookBook;
