"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useGetUserQuery } from "../../redux/features/auth/authApi";
import Loading from "../../../public/lottie/Loading.json";
import Lottie from "react-lottie";

const AdminRoute = ({ children }) => {
  const user = useAppSelector(useCurrentUser);
  const { data, isLoading } = useGetUserQuery();
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
  };

  useEffect(() => {
    if (!isLoading) {
      const checkUser = data?.find((users) => users?.email === user?.email);
      if (checkUser?.role !== "admin") {
        router.push("/account/login");
      }
    }
  }, [user, router, data, isLoading]);
  if (isLoading || !data) {
    return (
      <div className="w-full">
        <div className="w-[200px] mt-20 mx-auto">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    );
  }
  return user ? children : null;
};

export default AdminRoute;
