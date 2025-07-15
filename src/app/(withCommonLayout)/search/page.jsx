"use client";
import Link from "next/link";
import Container from "../../../components/Container";
import { useGetProductsQuery } from "../../../redux/features/productApi/ProductApi";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const { data, isLoading } = useGetProductsQuery();

  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch();
  };

  return (
    <Container>
      <h1 className="text-2xl text-center mt-10">What are you looking for?</h1>
      <div className="text-center md:mt-16">
        <div className="flex items-center justify-center mt-10">
          <input
            type="text"
            className="py-3 px-5 md:w-[480px] rounded-s-md focus:outline-none drop-shadow-lg"
            placeholder="Search by title or category..."
            value={searchQuery}
            onChange={handleInputChange}
          />
          <span
            className="bg-[#333333] text-white text-2xl hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-7 rounded-e-md cursor-pointer"
            onClick={handleSearch}
          >
            <CiSearch />
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-10 px-5 md:px-0">
        {filteredData?.length > 0 ? (
          filteredData.map((product, index) => (
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
            </div>
          ))
        ) : (
          <div className="col-span-12 text-center">No products found.</div>
        )}
      </div>
    </Container>
  );
};

export default SearchPage;
