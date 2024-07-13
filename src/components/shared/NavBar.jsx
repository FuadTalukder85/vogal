"use client";
import Image from "next/image";
import logo from "../../assets/images/vogal.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DealZone from "../../components/dealZone/DealZone";
import CartsSidebar from "../sidebar/CartsSidebar";
import useCarts from "../hooks/useCarts";

const NavBar = () => {
  const user = useAppSelector(useCurrentUser);
  const router = useRouter();
  const [carts, error] = useCarts();
  // console.log(carts);

  const handleOnclick = () => {
    if (user) {
      router.push("/account");
    } else {
      router.push("/account/login");
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#F7F7F7] rounded-box w-36"
            >
              <li className="text-[#e22515]">
                <Link href="/">Home</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/">Features</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/">Deal zone</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/about-us">About US</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/contactUs">Contact US</Link>
              </li>
            </ul>
          </div>

          <Link href="/" className="relative">
            <Image src={logo} alt="logo" height={32}></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-medium text-xs text-[#111111]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/">Features</Link>
            </li>
            <li className="relative group z-50">
              <Link href="/">
                <span>Deal zone</span>
                <div className="hidden absolute bg-white w-[1080px] top-full -left-[520px] group-hover:block">
                  <DealZone></DealZone>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about-us">About US</Link>
            </li>
            <li>
              <Link href="/contactUs">Contact US</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-4">
            <li className="text-xl">
              <CiSearch />
            </li>
            <li onClick={handleOnclick} className="text-xl cursor-pointer">
              <MdOutlineAccountCircle />
            </li>
            <li className="text-xl">
              <CiHeart />
            </li>
            {/* Drawer  */}
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button">
                  <li className="text-xl cursor-pointer">
                    <div className="indicator">
                      <AiOutlineShoppingCart className="me-[8px]"></AiOutlineShoppingCart>
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
                <div className="menu bg-white text-base-content min-h-full w-[480px] p-4">
                  <CartsSidebar></CartsSidebar>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
