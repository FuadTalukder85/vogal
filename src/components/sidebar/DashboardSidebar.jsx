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
    <div className="md:min-h-screen top-0 sticky z-50">
      <div className="bg-black py-3"></div>
      <div className="hidden md:block p-5 px-10 pt-5">
        <div className="bg-[#F2F2F2] py-2 rounded-xl">
          <Link
            href="/"
            className="hover:text-[#FF8042] transition-all duration-700"
          >
            <p className="flex items-center justify-center hover:text-[#FF8042] transition-all duration-700">
              <Image src={logo} alt="logo" height={32}></Image>
            </p>
          </Link>
        </div>
        <ul className="text-black">
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
      {/* Responsive menu */}
      <div className="flex items-center gap-5 md:hidden p-5">
        <div className="drawer">
          <input
            id="my-dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-dashboard-drawer"
              className="drawer-button text-3xl"
            >
              <LuLayoutDashboard />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-dashboard-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
              <h5 className="uppercase font-medium text-black">
                Admin Dashboard
              </h5>
              {/* Sidebar content here */}
              <li className="py-5 border-b border-gray-300 uppercase text-sm mt-5">
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
              <li className="py-5 border-b border-gray-300 uppercase text-sm">
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

              <li className="py-5 border-b border-gray-300 uppercase text-sm">
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
              <li className="py-5 border-b border-gray-300 uppercase text-sm">
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
              <li className="py-5 border-b border-gray-300 uppercase text-sm">
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
        <div className="bg-[#F2F2F2] py-2 rounded-xl w-60">
          <Link href="/" className="">
            <p className="flex items-center justify-center hover:text-[#FF8042] transition-all duration-700">
              <Image src={logo} alt="logo" height={32}></Image>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
