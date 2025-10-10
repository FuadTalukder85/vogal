"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TiMessages } from "react-icons/ti";
import avatar from "../../assets/images/avatar.png";
import flag from "../../assets/images/flag.jpg";
import { CgProfile } from "react-icons/cg";
import { MdLogout, MdOutlineSms } from "react-icons/md";
import { logout } from "../../redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "../../redux/hooks";
const DashNav = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    router.push("/account/login");
  };
  return (
    <div
      onClickCapture={(e) => {
        if (
          !e.target.closest(".dropdown-box") &&
          !e.target.closest(".avatar-box")
        ) {
          setShowModal(false);
        }
      }}
      className="sticky top-0 z-40 md:flex justify-between items-center md:px-10 bg-[#262D34] text-gray-200 border-b border-gray-500"
    >
      {/* search */}
      <div className="hidden md:flex items-center relative px-3 md:px-0">
        <input
          type="text"
          className="py-2 px-5 w-full md:w-[680px] rounded-md focus:outline-none drop-shadow-lg bg-transparent border border-gray-500"
          placeholder="Type to search..."
        />
        <span className="absolute right-0 text-white text-2xl transition-all duration-500 pr-5 md:pr-3 rounded-e-md cursor-pointer">
          <CiSearch />
        </span>
      </div>
      {/* admin */}
      <div className="hidden md:flex justify-center gap-5">
        <ul className="flex items-center gap-5 border-r border-gray-500 pr-5">
          <li className="py-5">
            <Image
              src={flag}
              alt="flag"
              width={30}
              height={30}
              className="rounded-full"
            ></Image>
          </li>
          <li className="text-2xl">
            <TiMessages />
          </li>
        </ul>
        <div
          onClick={() => setShowModal(!showModal)}
          className="flex items-center gap-3"
        >
          <Image
            src={avatar}
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
          <div className="">
            <div>
              <h3>Fuad Talukder</h3>
              <p className="-mt-1 text-sm">Admin</p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden flex items-center relative px-3 md:px-0 mb-3 md:mb-0">
        <input
          type="text"
          className="py-2 px-5 w-full md:w-[680px] rounded-md focus:outline-none drop-shadow-lg bg-transparent border border-gray-500"
          placeholder="Type to search..."
        />
        <span className="absolute right-0 text-white text-2xl transition-all duration-500 pr-5 md:pr-3 rounded-e-md cursor-pointer">
          <CiSearch />
        </span>
      </div>
      {/* dropdown */}
      {showModal && (
        <div className="fixed inset-0 z-0" onClick={() => setShowModal(false)}>
          <div className="dropdown-box absolute right-10 top-16 h-40 w-[180px] bg-white rounded-md shadow-xl text-[#333333]">
            <ul className="px-6 pt-2 pb-5 space-y-2">
              <li>Welcome!</li>
              <li className="flex gap-2 items-center hover:text-[#FF8042] transition-all duration-300 cursor-pointer">
                <CgProfile /> Profile
              </li>
              <li className="flex gap-2 items-center hover:text-[#FF8042] transition-all duration-300 cursor-pointer">
                <MdOutlineSms /> Message
              </li>
              <li
                onClick={handleLogout}
                className="flex gap-2 items-center hover:text-[#FF8042] transition-all duration-300 cursor-pointer"
              >
                <MdLogout /> Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashNav;
