import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import Image from "next/image";
import logo from "../../assets/images/vogal.png";

const DashboardSidebar = () => {
  return (
    <div className="md:min-h-screen top-0 sticky">
      <div className="bg-black py-3"></div>
      <div className="p-5 px-10 pt-5">
        <ul className="text-black">
          <li className="bg-[#F2F2F2] py-2 rounded-xl">
            <Link
              href="/"
              className="hover:text-[#FF8042] transition-all duration-700"
            >
              <p className="flex items-center justify-center hover:text-[#FF8042] transition-all duration-700">
                <Image src={logo} alt="logo" height={32}></Image>
              </p>
            </Link>
          </li>
          <li className="mt-5">
            <Link
              href="/dashboard"
              className="flex gap-3 justify-center items-center hover:text-[#FF8042] transition-all duration-700"
            >
              <span className="text-xl">
                <LuLayoutDashboard />
              </span>
              <p className="w-full hover:text-[#FF8042] transition-all duration-700">
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
              <p className="w-full hover:text-[#FF8042] transition-all duration-700">
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
              <p className="w-full hover:text-[#FF8042] transition-all duration-700">
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
              <p className="w-full hover:text-[#FF8042] transition-all duration-700">
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
              <p className=" w-full hover:text-[#FF8042] transition-all duration-700">
                Message
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
