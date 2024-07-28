"use client";
import Image from "next/image";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Container from "../../components/container/Container";
import lookBookImg01 from "../../assets/images/lookBookImg/lookBook01.png";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";

const LookBook = () => {
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
            Follow the most popular trends and get exclusive items from vogal
            shop.
          </p>
          <div className="grid grid-cols-12 gap-5 mt-10">
            {/* card */}
            {data?.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="col-span-6 md:col-span-6 relative overflow-hidden"
              >
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

                  <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
                    {product?.secondImg && (
                      <Image
                        src={product.secondImg}
                        alt={product.title || "Product Image"}
                        width={500}
                        height={500}
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
          </div>
          <div className="flex gap-3 justify-center mt-7">
            <p className="border border-[#979595] text-lg p-3 rounded-full hover:bg-[#333333] hover:text-white duration-700 cursor-pointer">
              <FaArrowLeft />
            </p>
            <p className="border border-[#979595] text-lg p-3 rounded-full hover:bg-[#333333] hover:text-white duration-700 cursor-pointer">
              <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LookBook;
