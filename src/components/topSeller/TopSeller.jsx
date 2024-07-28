"use client";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";
import { useEffect } from "react";
import Link from "next/link";

const TopSeller = () => {
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
    <div className="max-w-[1300px] mx-auto mt-5 md:mt-24 p-5 md:p-0">
      <h5 className="text-2xl font-medium text-center">Top Seller</h5>

      <div className="grid grid-cols-12 gap-5 mt-10">
        {/* card */}
        {data?.slice(1, 5).map((product, index) => (
          <div
            key={index}
            className="col-span-6 md:col-span-3 relative overflow-hidden"
          >
            <Link href={`/shop/${product._id}`}>
              {product?.firstImg && (
                <Image
                  src={product.firstImg}
                  alt={product.title || "Product Image"}
                  width={500}
                  height={500}
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

              <h5 className="text-md text-center mt-4">
                <p>{product.title}</p>
                {product.discount ? (
                  <p className="mt-2 flex justify-center gap-2">
                    <span className="line-through text-[#979595]">
                      ${product.discount}
                    </span>
                    <span className="">${product.price}</span>
                  </p>
                ) : (
                  <p className="mt-2">${product.price}</p>
                )}
              </h5>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSeller;
