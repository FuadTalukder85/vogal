"use client";
import Image from "next/image";
import logo from "../../assets/images/vogal.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Trending from "../Trending";
import CartsSidebar from "../sidebar/CartsSidebar";
import useCarts from "../hooks/useCarts";
import { IoCloseOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const NavBar = () => {
  const user = useAppSelector(useCurrentUser);
  const router = useRouter();
  const [carts] = useCarts();
  const pathname = usePathname();

  const handleOnclick = () => {
    router.push(user ? "/account" : "/account/login");
  };
  const closeDrawer = (id) => {
    if (typeof window !== "undefined") {
      const drawerCheckbox = document.getElementById(id);
      if (drawerCheckbox) drawerCheckbox.checked = false;
    }
  };
  const isActive = (path) =>
    pathname === path ? "text-[#40B884] font-bold" : "";

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="navbar bg-base-100">
        {/* ---------- Navbar Start ---------- */}
        <div className="navbar-start">
          {/* mobile drawer */}
          <div className="dropdown block md:hidden pr-4 z-50">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content">
                <label htmlFor="my-drawer" className="drawer-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
              </div>

              <div className="drawer-side">
                <label
                  htmlFor="my-drawer"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
                  <div className="flex justify-between items-center">
                    <h5 className="uppercase font-medium text-black">Menu</h5>
                    <span
                      onClick={() => closeDrawer("my-drawer")}
                      className="cursor-pointer border border-black rounded-md"
                    >
                      <IoCloseOutline />
                    </span>
                  </div>

                  {[
                    { href: "/", label: "Home" },
                    { href: "/shop", label: "Shop" },
                    { href: "/features", label: "Features" },
                    { href: "/about-us", label: "About Us" },
                    { href: "/contactUs", label: "Contact Us" },
                  ].map((link, i) => (
                    <li
                      key={i}
                      className={`py-5 border-b border-gray-300 uppercase text-sm mt-2 ${
                        pathname === link.href ? "text-[#40B884]" : "text-black"
                      }`}
                      onClick={() => closeDrawer("my-drawer")}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                  <li>
                    <div className="block md:hidden mt-8">
                      <p className="uppercase text-black">Need help?</p>
                      <span>Call +566 4444 9940</span>
                    </div>
                  </li>
                  <li className="mt-8 bg-black text-white">
                    <div className="block md:hidden py-3">
                      <ul className="flex justify-between gap-3 px-9">
                        <li className="bg-white text-black p-1 rounded-md text-sm">
                          <FaFacebookF />
                        </li>
                        <li className="bg-white text-black p-1 rounded-md text-sm">
                          <FaTwitter />
                        </li>
                        <li className="bg-white text-black p-1 rounded-md text-sm">
                          <FaInstagram />
                        </li>
                        <li className="bg-white text-black p-1 rounded-md text-sm">
                          <FaYoutube />
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Link href="/">
            <Image src={logo} alt="logo" height={32} />
          </Link>
        </div>

        {/* ---------- Navbar Center ---------- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-medium text-xs">
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className={isActive("/shop")}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/features" className={isActive("/features")}>
                Features
              </Link>
            </li>
            <li className="relative group">
              <span className={isActive("/trending")}>Trending</span>
              <div className="hidden z-50 absolute bg-white w-[1080px] top-full -left-[520px] group-hover:block">
                <Trending />
              </div>
            </li>
            <li>
              <Link href="/about-us" className={isActive("/about-us")}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className={isActive("/contactUs")}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* ---------- Navbar End ---------- */}
        <div className="navbar-end pe-5">
          <ul className="flex gap-4 items-center">
            <li className="text-xl cursor-pointer hover:text-[#40B884] transition-all duration-700">
              <Link href="/search">
                <CiSearch />
              </Link>
            </li>
            <li
              onClick={handleOnclick}
              className="text-xl cursor-pointer hover:text-[#40B884] transition-all duration-700"
            >
              <MdOutlineAccountCircle />
            </li>

            {/* Cart Drawer */}
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <li className="text-xl cursor-pointer">
                    <div className="indicator hover:text-[#40B884] transition-all duration-700">
                      <AiOutlineShoppingCart className="me-[8px]" />
                      <span className="badge badge-sm indicator-item rounded-full text-white font-semibold bg-black p-1">
                        {carts?.length || 0}
                      </span>
                    </div>
                  </li>
                </label>
              </div>

              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <div className="menu bg-white text-base-content min-h-full w-[315px] md:w-[350px]">
                  <div className="flex justify-between items-center py-3 px-2">
                    <h5 className="uppercase font-medium text-black">
                      My cart
                    </h5>
                    <span
                      onClick={() => closeDrawer("my-drawer-4")}
                      className="cursor-pointer border border-black rounded-md"
                    >
                      <IoCloseOutline />
                    </span>
                  </div>
                  <CartsSidebar />
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
