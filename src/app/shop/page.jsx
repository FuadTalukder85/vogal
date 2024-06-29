"use client";
import Container from "../../components/container/Container";
import { useGetProductsQuery } from "../../redux/features/productApi/ProductApi";
import { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import sellImg from "../../assets/images/sell.png";
import "./shop.css";

const ShopPage = () => {
  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

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
    return <p className="text-center">Loading...</p>;
  }
  return (
    <div>
      <div className="shopBannerImg py-16">
        <h3 className="text-center text-3xl font-semibold">All Products</h3>
      </div>
      <Container>
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <div className={isFixed ? "fixed top-0 category" : "category"}>
              <h5 className="uppercase font-medium mt-10">Category</h5>
              <ul className="text-sm mt-6">
                <li className="">Men</li>
                <li className="mt-3">Women</li>
                <li className="mt-3">Best Sellers</li>
                <li className="mt-3">Accessories</li>
              </ul>
              <div className="mt-16">
                <Image src={sellImg} width={280} height={100}></Image>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-12 gap-5 mt-10">
              {/* card */}
              {data?.map((product, index) => (
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
                      <p>{product?.title}</p>
                      {product?.discount ? (
                        <p className="mt-2 flex justify-center gap-2">
                          <span className="line-through">
                            ${product?.discount}
                          </span>
                          <span className="text-[#e22515]">
                            ${product?.price}
                          </span>
                        </p>
                      ) : (
                        <p className="mt-2">${product?.price}</p>
                      )}
                    </h5>
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

export default ShopPage;
