"use client";
import Container from "../../../../../components/Container";
import { useGetProductsQuery } from "../../../../../redux/features/productApi/ProductApi";
import { useEffect, useState } from "react";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import sellImg from "../../../../../assets/images/sell.png";
import { MdFilterListOff } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import Loading from "../../../../../components/Loading/Loading";

const Men = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const men = data?.filter((dt) => dt.category === "men");
  const [isFixed, setIsFixed] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState({
    men: false,
    women: false,
    jewellery: false,
    partyDress: false,
    bestSeller: false,
    accessories: false,
  });
  // console.log(data);

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

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filteredProducts = men?.filter((product) => {
    if (
      selectedCategories.men ||
      selectedCategories.women ||
      selectedCategories.jewellery ||
      selectedCategories.partyDress ||
      selectedCategories.bestSeller ||
      selectedCategories.accessories
    ) {
      return (
        (selectedCategories.men && product?.category === "men") ||
        (selectedCategories.women && product?.category === "women") ||
        (selectedCategories.jewellery && product?.category === "jewellery") ||
        (selectedCategories.partyDress && product?.category === "partyDress") ||
        (selectedCategories.bestSeller && product?.category === "bestSeller") ||
        (selectedCategories.accessories && product?.category === "accessories")
      );
    }
    return true;
  });
  const closeDrawer = (id) => {
    if (typeof window !== "undefined") {
      const drawerCheckbox = document.getElementById(id);
      if (drawerCheckbox) {
        drawerCheckbox.checked = false;
      }
    }
  };

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
                <h5 className="uppercase font-medium mt-10">Category</h5>
                <ul className="text-sm mt-6">
                  <li className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.men}
                      onChange={() => handleCategoryChange("men")}
                    />{" "}
                    Men
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.women}
                      onChange={() => handleCategoryChange("women")}
                    />{" "}
                    Women
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.jewellery}
                      onChange={() => handleCategoryChange("jewellery")}
                    />{" "}
                    Jewellery
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.partyDress}
                      onChange={() => handleCategoryChange("partyDress")}
                    />{" "}
                    Party Dress
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.bestSeller}
                      onChange={() => handleCategoryChange("bestSeller")}
                    />{" "}
                    Best Sellers
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.accessories}
                      onChange={() => handleCategoryChange("accessories")}
                    />{" "}
                    Accessories
                  </li>
                  {/* <li className="flex items-center gap-3 mt-2">
                  <input type="checkbox" className="checkbox checkbox-sm" />{" "}
                  Weekly Deal
                </li> */}
                </ul>
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
            {/* responsive */}
            {/* Drawer  */}
            <div className="drawer block md:hidden">
              <input
                id="filter-drawerr"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="filter-drawerr"
                  className="flex justify-center items-center gap-3 w-56 underline uppercase mt-10"
                >
                  <span className="text-xl -z-50">
                    <MdFilterListOff />
                  </span>{" "}
                  <span className="-z-50">Filter by category</span>
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="filter-drawerr"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
                  {/* Sidebar content here */}
                  <div className="flex justify-between items-center">
                    <h5 className="uppercase font-medium text-black">
                      Category
                    </h5>
                    <span
                      onClick={() => closeDrawer("filter-drawerr")}
                      className="cursor-pointer border border-black rounded-md"
                    >
                      <IoCloseOutline />
                    </span>
                  </div>
                  <li className="flex items-center gap-3 mt-8">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.men}
                      onChange={() => handleCategoryChange("men")}
                    />{" "}
                    Men
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.women}
                      onChange={() => handleCategoryChange("women")}
                    />{" "}
                    Women
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.jewellery}
                      onChange={() => handleCategoryChange("jewellery")}
                    />{" "}
                    Jewellery
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.partyDress}
                      onChange={() => handleCategoryChange("partyDress")}
                    />{" "}
                    Party Dress
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.bestSeller}
                      onChange={() => handleCategoryChange("bestSeller")}
                    />{" "}
                    Best Sellers
                  </li>
                  <li className="flex items-center gap-3 mt-2">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm"
                      checked={selectedCategories.accessories}
                      onChange={() => handleCategoryChange("accessories")}
                    />{" "}
                    Accessories
                  </li>
                  <li className="z-50">
                    <div className="mt-8 block md:hidden">
                      <Image
                        src={sellImg}
                        width={200}
                        height={100}
                        alt="img"
                      ></Image>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 p-5 md:p-0">
            <div className="grid grid-cols-12 gap-5 mt-10">
              {/* card */}
              {filteredProducts?.map((product, index) => (
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
                  <Link href={`/shop/${product._id}`}>
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

// export default Men;
export default dynamic(() => Promise.resolve(Men), { ssr: false });
