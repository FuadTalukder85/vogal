import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="bg-[#e2eef8] md:min-h-screen top-0 sticky p-5">
      <ul>
        <li>
          <Link href="/dashboard">
            <p className="bg-white text-[#333333] w-full text-md px-5 rounded-xl text-lef hover:bg-[#40B884] hover:text-white transition-all duration-700">
              Dashboard Home
            </p>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/all-product" className="mt-2">
            <p className="bg-white text-[#333333] mt-1 w-full text-md px-5 rounded-xl text-left hover:bg-[#40B884] hover:text-white transition-all duration-700">
              All Product
            </p>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/all-product" className="mt-2">
            <p className="bg-white text-[#333333] mt-1 w-full text-md px-5 rounded-xl text-left hover:bg-[#40B884] hover:text-white transition-all duration-700">
              Total Order
            </p>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/all-users" className="mt-2">
            <p className="bg-white text-[#333333] mt-1 w-full text-md px-5 rounded-xl text-left hover:bg-[#40B884] hover:text-white transition-all duration-700">
              Users
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
