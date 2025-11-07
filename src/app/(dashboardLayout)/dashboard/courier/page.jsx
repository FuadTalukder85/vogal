"use client";
import { FiEdit } from "react-icons/fi";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
const Courier = () => {
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">Courier</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search courier..."
            // onChange={(e) => {
            //   setSearchTerm(e.target.value);
            // }}
          />
          <span className="bg-[#333333] text-white text-2xl hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-3 md:px-7 rounded-e-md cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto mt-3 bg-white md:p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Total Delivery</th>
              <th className="p-2">Total Return</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm border border-gray-200 text-left">
              <td className="px-2 p-1">1.</td>
              <td className="px-2 p-1">N/A</td>
              <td className="px-2 p-1">Stead Fast</td>
              <td className="px-2 p-1">55</td>
              <td className="px-2 p-1">7</td>
              <td className="px-2 p-1">Active</td>
              <td className="px-2 p-1">
                <FiEdit className="text-xl" />
              </td>
            </tr>
            <tr className="text-sm border border-gray-200 text-left">
              <td className="px-2 p-1">2.</td>
              <td className="px-2 p-1">N/A</td>
              <td className="px-2 p-1">Sundarban</td>
              <td className="px-2 p-1">55</td>
              <td className="px-2 p-1">7</td>
              <td className="px-2 p-1">Active</td>
              <td className="px-2 p-1">
                <FiEdit className="text-xl" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Courier;
