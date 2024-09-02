"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useGetUserQuery } from "../../redux/features/auth/authApi";

const AdminRoute = ({ children }) => {
  const user = useAppSelector(useCurrentUser);
  const { data, isLoading } = useGetUserQuery();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      const checkUser = data?.find((users) => users?.email === user?.email);
      if (checkUser?.role !== "admin") {
        router.push("/account/login");
      }
    }
  }, [user, router, data, isLoading]);
  if (isLoading || !data) {
    return <p className="text-center mt-5">Loading...</p>;
  }
  return user ? children : null;
};

export default AdminRoute;
