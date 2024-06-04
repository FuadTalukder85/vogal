import Image from "next/image";
import logo from "../../assets/images/vogal.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image src={logo} alt="logo" height={32}></Image>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 uppercase font-semibold text-[12px] text-[#111111]">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Shop</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Deal zone</a>
            </li>
            <li>
              <a>Pages</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Buy now</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-4">
            <li className="text-xl">
              <a href="">
                <CiSearch />
              </a>
            </li>
            <li className="text-xl">
              <a href="">
                <MdOutlineAccountCircle />
              </a>
            </li>
            <li className="text-xl">
              <a href="">
                <CiHeart />
              </a>
            </li>
            <li className="text-xl">
              <a href="">
                <CiShoppingCart />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
