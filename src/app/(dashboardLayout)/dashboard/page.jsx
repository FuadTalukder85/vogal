"use client";
import Link from "next/link";
// import { useAppSelector } from "../../redux/hooks";
import { useAppSelector } from "../../../redux/hooks";
import { useCurrentUser } from "../../../redux/features/auth/authSlice";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();
  const user = useAppSelector(useCurrentUser);

  useEffect(() => {
    if (!user) {
      router.push("/account/login");
    }
  }, [router, user]);

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
