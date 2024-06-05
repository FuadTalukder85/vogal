import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#EAFFFC] md:min-h-screen top-0 sticky p-5">
      <Link href="/dashboard">
        <button className="bg-[#5DD2C0] text-[#333333] w-full px-10 text-lg py-1 rounded-xl text-left">
          Dashboard Home
        </button>
      </Link>
      <Link href="/dashboard/all-products" className="">
        <button className="bg-[#5DD2C0] text-[#333333]  mt-3 w-full px-10 text-lg py-1 rounded-xl text-left">
          All Products
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
