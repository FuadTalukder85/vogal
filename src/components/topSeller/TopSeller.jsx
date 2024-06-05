import Image from "next/image";
import topSeller01 from "../../assets/images/topSellerImg/topSeller01.png";
import topSeller1 from "../../assets/images/topSellerImg/topSeller1.png";
import topSeller02 from "../../assets/images/topSellerImg/topSeller02.png";
import topSeller2 from "../../assets/images/topSellerImg/topSeller2.png";
import topSeller03 from "../../assets/images/topSellerImg/topSeller03.png";
import topSeller3 from "../../assets/images/topSellerImg/topSeller3.png";
import topSeller04 from "../../assets/images/topSellerImg/topSeller04.png";
import topSeller4 from "../../assets/images/topSellerImg/topSeller4.png";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const TopSeller = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-24">
      <h5 className="text-2xl font-medium text-center">Top Seller</h5>
      <div className="grid grid-cols-12 gap-5 mt-10">
        {/* card one */}
        <div className="col-span-3 relative overflow-hidden">
          <Image src={topSeller01} alt="topSeller1"></Image>
          <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
            <Image className="" src={topSeller1} alt="topSeller1"></Image>
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
            <p>Long Sleeve Top Black</p>
            <p className="mt-2">$40.00</p>
          </h5>
        </div>
        {/* card two */}
        <div className="col-span-3 relative overflow-hidden">
          <Image src={topSeller02} alt="topSeller1"></Image>
          <p className="absolute top-0 left-0 bg-[#FD6F8D] w-[45px] text-white py-1 text-center text-xs">
            Sale
          </p>
          <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
            <Image className="" src={topSeller2} alt="topSeller1"></Image>
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
            <p>Zip-through hoodie set</p>
            <p className="mt-2 flex justify-center gap-2">
              <span className="line-through">$90.00</span>
              <span className="text-[#e22515]">$56.00</span>
            </p>
          </h5>
        </div>
        {/* card three */}
        <div className="col-span-3 relative overflow-hidden">
          <Image src={topSeller03} alt="topSeller1"></Image>
          <p className="absolute top-0 left-0 bg-[#FD6F8D] w-[45px] text-white py-1 text-center text-xs">
            Sale
          </p>
          <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
            <Image className="" src={topSeller3} alt="topSeller1"></Image>
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
            <p>Solid Cargo Pant</p>
            <p className="mt-2 flex justify-center gap-2">
              <span className="line-through">$90.00</span>
              <span className="text-[#e22515]">$56.00</span>
            </p>
          </h5>
        </div>
        {/* card four */}
        <div className="col-span-3 relative overflow-hidden">
          <Image src={topSeller04} alt="topSeller1"></Image>
          <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 transition-all duration-700">
            <Image className="" src={topSeller4} alt="topSeller1"></Image>
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
            <p>High Heel Black Sandal</p>
            <p className="mt-2">$140.00</p>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default TopSeller;
