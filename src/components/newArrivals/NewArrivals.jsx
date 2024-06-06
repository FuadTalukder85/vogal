"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";
import { useEffect } from "react";

const NewArrivals = () => {
  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  // console.log(data);

  return (
    <div className="max-w-[1300px] mx-auto mt-24">
      <h5 className="text-2xl font-medium text-center">New Arrivals</h5>
      <p className="text-sm text-black text-center">
        We have your occasion covered
      </p>
      <div className="grid grid-cols-12 gap-5 mt-10">
        {/* card */}
        {data?.slice(0, 8).map((product, index) => (
          <div key={index} className="col-span-3 relative overflow-hidden">
            <Image
              src={product.firstImg}
              alt="topSeller1"
              width={500}
              height={500}
            ></Image>

            <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
              <Image
                className=""
                src={product.secondImg}
                alt="topSeller1"
                width={500}
                height={500}
              ></Image>
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

            <h5 className="text-md text-center mt-4">
              <p>{product.title}</p>
              {product.discount ? (
                <p className="mt-2 flex justify-center gap-2">
                  <span className="line-through">${product.discount}</span>
                  <span className="text-[#e22515]">${product.price}</span>
                </p>
              ) : (
                <p className="mt-2">${product.price}</p>
              )}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
