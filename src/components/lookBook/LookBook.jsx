"use client";
import Image from "next/image";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Container from "../../components/container/Container";
import lookBookImg01 from "../../assets/images/lookBookImg/lookBook01.png";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LookBook.css";

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

const LookBook = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const { data, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <Container>
      <div className="grid grid-cols-12 gap-14 items-center mt-28">
        <div className="col-span-6 overflow-hidden rounded-lg">
          <Image
            src={lookBookImg01}
            alt="lookBookImg01"
            width={700}
            height={700}
            className="rounded-lg hover:scale-105 duration-700 cursor-pointer"
          ></Image>
        </div>
        <div className="col-span-6">
          <h3 className="text-3xl font-semibold uppercase">
            Shop the Lookbook
          </h3>
          <p className="text-sm mt-3">
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
                    <p className="">{product?.title}</p>
                    {product?.discount ? (
                      <p className="mt-2 flex gap-2">
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
