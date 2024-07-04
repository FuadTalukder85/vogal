import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <div className="bg-[#333333] md:min-h-screen top-0 sticky p-5">
      <ul>
        <li>
          <Link href="/dashboard">
            <p className="bg-white text-[#333333] w-full text-md px-5 rounded-xl text-left hover:bg-red-600">
              Dashboard Home
            </p>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/all-product" className="mt-2">
            <p className="bg-white text-[#333333] mt-1 w-full text-md px-5 rounded-xl text-left">
              All Product
            </p>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/all-product" className="mt-2">
            <p className="bg-white text-[#333333] mt-1 w-full text-md px-5 rounded-xl text-left">
              Total Order
            </p>
          </Link>
        </li>
        <li className="mt-2">
          <Link href="/dashboard/all-product" className="mt-2">
            <p className="bg-white text-[#333333] mt-1 w-full text-md px-5 rounded-xl text-left">
              Users
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
