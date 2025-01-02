"use client";
import Container from "../../../components/container/Container";
import LookBook from "../../../components/lookBook/LookBook";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { useGetProductsQuery } from "../../../redux/features/productApi/ProductApi";
import "./features.css";

const FeaturesPage = () => {
  const { data, isLoading } = useGetProductsQuery();
  const features = data?.filter((features) => features.tag === "features");
  // console.log(features);
  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <div>
      <div className="featuresBannerImg py-16">
        <h3 className="text-center text-3xl font-semibold uppercase">
          Featured collection
        </h3>
        <p className="text-center text-sm mt-3">
          Follow the most popular trends and get exclusive items from vogal
          shop.
        </p>
      </div>
      <LookBook></LookBook>
      <Container>
        <h3 className="text-center text-xl md:text-3xl font-semibold uppercase mt-28 md:mt-20">
          Featured Product
        </h3>
        <p className="text-center text-sm mt-3 px-5 md:px-5">
          Follow the most popular trends and get exclusive items from vogal
          shop.
        </p>
        <div className="grid grid-cols-12 gap-5 mt-10 p-5 md:p-">
          {/* card */}
          {features?.slice(0, 8).map((product, index) => (
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
      </Container>
    </div>
  );
};

export default FeaturesPage;
