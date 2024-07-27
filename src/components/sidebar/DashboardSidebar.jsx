import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";

const DashboardSidebar = () => {
  return (
    <div className="bg-[#F2F2F2] border-r-2 border-[#E5E6E6] md:min-h-screen top-0 sticky p-5 px-10 pt-10">
      <ul>
        <li>
          <Link
            href="/dashboard"
            className="flex gap-3 justify-center items-center hover:text-[#FF8042] transition-all duration-700"
          >
            <span className="text-xl">
              <LuLayoutDashboard />
            </span>
            <p className="text-[#000000] w-full hover:text-[#FF8042] transition-all duration-700">
              Dashboard Home
            </p>
          </Link>
        </li>
        <li className="mt-5">
          <Link
            href="/dashboard/all-product"
            className="flex gap-3 justify-center items-center hover:text-[#FF8042] transition-all duration-700"
          >
            <span className="text-xl">
              <MdOutlineProductionQuantityLimits />
            </span>
            <p className="text-[#000000] w-full hover:text-[#FF8042] transition-all duration-700">
              All Product
            </p>
          </Link>
        </li>

        <li className="mt-5">
          <Link
            href="/dashboard/all-users"
            className="flex gap-3 justify-center items-center hover:text-[#FF8042] transition-all duration-700"
          >
            <span className="text-xl">
              <FaRegUser />
            </span>
            <p className="text-[#000000] w-full hover:text-[#FF8042] transition-all duration-700">
              Users & Role
            </p>
          </Link>
        </li>
        <li className="mt-5">
          <Link
            href="/dashboard/all-orders"
            className="flex gap-3 justify-center items-center hover:text-[#FF8042] transition-all duration-700"
          >
            <span className="text-xl">
              <IoMdCheckboxOutline />
            </span>
            <p className="text-[#000000] w-full hover:text-[#FF8042] transition-all duration-700">
              Total Order
            </p>
          </Link>
        </li>
        <li className="mt-5">
          <Link
            href="/dashboard/message"
            className="flex gap-3 justify-center items-center hover:text-[#FF8042] transition-all duration-700"
          >
            <span className="text-xl">
              <TiMessages />
            </span>
            <p className="text-[#000000] w-full hover:text-[#FF8042] transition-all duration-700">
              Message
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
