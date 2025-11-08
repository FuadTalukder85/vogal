"use client";
import Link from "next/link";
import { LuLayoutDashboard } from "react-icons/lu";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardDoubleArrowRight,
  MdOutlineProductionQuantityLimits,
  MdOutlineWallet,
} from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRegUser, FaUserTie } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Image from "next/image";
import logo from "../../assets/images/vogal_white.png";
import { IoCloseOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import avatar from "../../assets/images/avatar.png";
import { useState } from "react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const closeDrawer = (id) => {
    if (typeof window !== "undefined") {
      const drawerCheckbox = document.getElementById(id);
      if (drawerCheckbox) {
        drawerCheckbox.checked = false;
      }
    }
  };
  const isActive = (path) => {
    if (pathname === path) return "text-white";
  };
  const menu = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      href: "",
      label: "Products",
      icon: <MdOutlineProductionQuantityLimits />,
      subMenu: [
        { href: "/dashboard/all-product", label: "Manage Product" },
        { href: "/dashboard/addProduct", label: "Add Product" },
      ],
    },
    {
      href: "",
      label: "Orders",
      icon: <IoMdCheckboxOutline />,
      subMenu: [
        { href: "/dashboard/all-orders", label: "Manage Order" },
        { href: "/dashboard/orders/packaging", label: "Packaging" },
      ],
    },
    {
      href: "",
      label: "Courier",
      icon: <TbTruckDelivery />,
      subMenu: [
        { href: "/dashboard/courier", label: "Manage Courier" },
        { href: "/dashboard/addCourier", label: "Add Courier" },
      ],
    },
    {
      href: "",
      label: "Employee",
      icon: <FaUserTie />,
      subMenu: [
        { href: "/dashboard/employee", label: "Manage employee" },
        { href: "/dashboard/addEmployee", label: "Add employee" },
      ],
    },
    {
      href: "",
      label: "Accounts",
      icon: <MdOutlineWallet />,
      subMenu: [
        { href: "/dashboard/account/income", label: "Income" },
        { href: "/dashboard/account/expense", label: "Expense" },
        { href: "/dashboard/account/salary", label: "Employee Salary" },
        { href: "/dashboard/account/paymentReceive", label: "Payment Receive" },
      ],
    },
    {
      href: "",
      label: "Reports",
      icon: <HiOutlineDocumentReport />,
      subMenu: [
        { href: "/dashboard/reports", label: "Profit / Loss Report" },
        { href: "/dashboard/reports/sale", label: "Sale Report" },
        { href: "/dashboard/reports/orders", label: "Order Report" },
        { href: "/dashboard/reports/cancel", label: "Cancel Report" },
        { href: "/dashboard/reports/cancel", label: "Stock Report" },
      ],
    },
    {
      href: "/dashboard/message",
      label: "Message",
      icon: <TiMessages />,
    },
    {
      href: "/dashboard/all-users",
      label: "Users & Role",
      icon: <FaRegUser />,
    },
  ];

  return (
    <div className="md:min-h-screen top-0 sticky z-50">
      <div className="hidden md:block">
        <div className=" border-b border-gray-500 py-3">
          <Link
            href="/"
            className="hover:text-white transition-all duration-700"
          >
            <p className="flex items-center justify-center hover:text-white transition-all duration-700">
              <Image src={logo} alt="logo" height={40}></Image>
            </p>
          </Link>
        </div>
        <ul className="text-[#9097A7] py-4 capitalize">
          {menu.map((item, index) => (
            <li key={index} className="mt-3">
              {!item.subMenu ? (
                <Link
                  href={item.href}
                  className={`flex gap-3 justify-center items-center hover:text-white transition-all duration-700 border-b border-gray-500 pb-3 ps-6 ${isActive(
                    item.href
                  )}`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <p className="w-full">{item.label}</p>
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === index ? null : index)
                    }
                    className={`flex gap-3 justify-center items-center w-full text-left hover:text-white transition-all duration-700 border-b border-gray-500 pb-3 ps-6 pr-4 ${isActive(
                      item.href
                    )}`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p className="w-full">{item.label}</p>
                    <span
                      className={`text-2xl transition-transform duration-300 ${
                        openMenu === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <MdOutlineKeyboardArrowDown />
                    </span>
                  </button>
                  {openMenu === index && (
                    <ul className="ps-8 text-gray-400 space-y-3 mt-4">
                      {item.subMenu.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <Link
                            href={sub.href}
                            className={`block hover:text-white transition-all duration-500 border-b border-gray-500 pb-3  ${isActive(
                              sub.href
                            )}`}
                          >
                            <span className="flex items-center gap-3">
                              <MdOutlineKeyboardDoubleArrowRight /> {sub.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Responsive menu */}
      <div className="flex items-center gap-5 md:hidden p-3">
        <div className="drawer">
          <input
            id="my-dashboard-drawer"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content max-w-[50px]">
            {/* Page content here */}
            <label
              htmlFor="my-dashboard-drawer"
              className="drawer-button text-3xl text-white"
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
              <div className="flex justify-between items-center">
                <h5 className="uppercase font-medium text-black">
                  Admin Dashboard
                </h5>
                <span
                  onClick={() => closeDrawer("my-dashboard-drawer")}
                  className="cursor-pointer border border-black rounded-md"
                >
                  <IoCloseOutline />
                </span>
              </div>
              {/* Sidebar content here */}
              {menu.map((item, index) => (
                <li
                  key={index}
                  className="py-5 border-b border-gray-300 uppercase text-sm"
                >
                  {!item.subMenu ? (
                    <Link
                      href={item.href}
                      onClick={() => closeDrawer("my-dashboard-drawer")}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xl">{item.icon}</span>
                      <p className="w-full">{item.label}</p>
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setOpenMenu(openMenu === index ? null : index)
                        }
                        className="flex items-center gap-3 w-full text-left"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <p className="w-full">{item.label}</p>
                      </button>
                      {openMenu === index && (
                        <ul className="pl-10 mt-2 space-y-2 text-gray-600">
                          {item.subMenu.map((sub, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                href={sub.href}
                                onClick={() =>
                                  closeDrawer("my-dashboard-drawer")
                                }
                                className="block hover:text-black"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          onClick={() => setShowModal(!showModal)}
          className="flex items-center gap-3 text-white w-full"
        >
          <div className="text-right md:text-base">
            <h3 className="truncate">Fuad Talukder</h3>
            <p className="-mt-1 text-sm">Admin</p>
          </div>

          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full flex shrink-0"
          ></Image>
        </div>
        <div className="hidden py-2 px-5 rounded-xl">
          <Link href="/">
            <p className="flex items-center justify-center hover:text-white transition-all duration-700">
              <Image src={logo} alt="logo" height={40}></Image>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(DashboardSidebar), { ssr: false });
