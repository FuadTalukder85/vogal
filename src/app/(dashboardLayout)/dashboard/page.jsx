import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-10">
      <div>
        <div>
          <Link href="/dashboard/addProduct">
            <button className="mt-3 bg-[#333333] text-white hover:bg-[#40B884] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase ">
              Add Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
