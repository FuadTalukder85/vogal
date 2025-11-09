import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="bg-black py-3">
      <div className="max-w-[1300px] md:flex items-center justify-between text-white mx-auto">
        <div className="hidden md:block text-xs">
          <p>AVAILABLE 24/7 AT +566 4444 9940</p>
        </div>
        <div>
          <p className="flex justify-center md:py-0 text-xs">
            FREE DELIVERY ON ORDERS OVER $120. DON’T MISS.
          </p>
        </div>
        <div className="hidden md:block">
          {/* <select className="select bg-black w-full uppercase focus:none">
            <option>English</option>
            <option>Francais</option>
            <option>Deutsch</option>
          </select> */}
          <ul className="flex gap-3 pr-5">
            <li className="bg-white text-black p-1 rounded-md text-sm hover:bg-[#40B884] hover:text-white transition-all duration-300 cursor-pointer">
              <Link href="https://www.facebook.com/fuad.hasan.tk/" target="__">
                <FaFacebookF />
              </Link>
            </li>
            <li className="bg-white text-black p-1 rounded-md text-sm hover:bg-[#40B884] hover:text-white transition-all duration-300 cursor-pointer">
              <FaTwitter />
            </li>
            <li className="bg-white text-black p-1 rounded-md text-sm hover:bg-[#40B884] hover:text-white transition-all duration-300 cursor-pointer">
              <FaInstagram />
            </li>
            <li className="bg-white text-black p-1 rounded-md text-sm hover:bg-[#40B884] hover:text-white transition-all duration-300 cursor-pointer">
              <FaYoutube />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
