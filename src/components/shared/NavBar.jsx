"use client";
import Image from "next/image";
import logo from "../../assets/images/vogal.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useAppSelector } from "../../redux/hooks";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const user = useAppSelector(useCurrentUser);
  const router = useRouter();

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
                <Link href="/">Pages</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/">Blog</Link>
              </li>
              <li className="text-[#e22515]">
                <Link href="/">Buy now</Link>
              </li>
            </ul>
          </div>

          <Link href="/">
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
            <li>
              <Link href="/">Deal zone</Link>
            </li>
            <li>
              <Link href="/">Pages</Link>
            </li>
            <li>
              <Link href="/">Blog</Link>
            </li>
            <li>
              <Link href="/">Buy now</Link>
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
            <li className="text-xl">
              <CiShoppingCart />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
