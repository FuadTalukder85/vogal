"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useGetProductsQuery } from "../redux/features/productApi/ProductApi";
import { useEffect } from "react";
import Link from "next/link";
import Loading from "../components/Loading/Loading.jsx";

const NewArrivals = () => {
  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1300px] mx-auto mt-5 md:mt-24 p-5 md:p-0">
      <h5 className="text-2xl font-medium text-center">New Arrivals</h5>
      <p className="text-sm text-black text-center">
        We have your occasion covered
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
        {/* card */}
        {data?.slice(0, 8).map((product, index) => (
          <div key={index} className="relative overflow-hidden ">
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
                <p className="text-sm md:text-base">{product?.title}</p>
                {product?.discount ? (
                  <p className="mt-2 flex gap-2">
                    <span className="line-through text-[#40B884]">
                      ${product?.discount}
                    </span>
                    <span className="">${product?.price}</span>
                  </p>
                ) : (
                  <p className="mt-2">${product?.price}</p>
                )}
              </h5>
            </Link>
            <Link href={`/shop/${product._id}`}>
              <button className="w-full mt-3 border bg-[#333333] text-white hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase">
                Buy Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
