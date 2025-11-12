"use client";
import Container from "../../../../../components/Container";
import { useGetProductsQuery } from "../../../../../redux/features/productApi/ProductApi";
import { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import sellImg from "../../../../../assets/images/sell.png";
import dynamic from "next/dynamic";
import Loading from "../../../../../components/Loading/Loading";

const Women = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const men = data?.filter((dt) => dt.category === "women");
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="">
      <div
        style={{
          backgroundImage: "url('/shopBannerImg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-16"
      >
        <h3 className="text-center text-3xl font-semibold uppercase">
          All Products
        </h3>
      </div>
      <Container>
        <div className="grid grid-cols-12">
          <div className="md:col-span-3">
            {/* large screen */}
            <div className="hidden md:block">
              <div className={isFixed ? "fixed top-0 category" : "category"}>
                <div className="mt-8 hidden md:block">
                  <Image
                    src={sellImg}
                    width={200}
                    height={100}
                    alt="img"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 p-5 md:p-0">
            <div className="grid grid-cols-12 gap-5 mt-10">
              {/* card */}
              {men?.map((product, index) => (
                <div
                  key={index}
                  className="col-span-6 md:col-span-4 relative overflow-hidden"
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
                      <p>{product?.title}</p>
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
                  <Link
                    href={`/shop/${product._id}`}
                    className="hidden md:block"
                  >
                    <button className="w-full mt-3 border bg-[#333333] text-white hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase">
                      Buy Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

// export default women;
export default dynamic(() => Promise.resolve(Women), { ssr: false });
