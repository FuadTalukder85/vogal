import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#EAFFFC] md:min-h-screen top-0 sticky p-5">
      <Link href="/dashboard">
        <button className="bg-[#40B884] text-white w-full px-10 text-lg py-1 rounded-xl text-left">
          Dashboard Home
        </button>
      </Link>
      <Link href="/dashboard/all-product" className="">
        <button className="bg-[#40B884] text-white mt-3 w-full px-10 text-lg py-1 rounded-xl text-left">
          All Product
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
