import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppSelector } from "../../redux/hooks";
import { useGetUserQuery } from "../../redux/features/auth/authApi";

const AdminRoute = ({ children }) => {
  const user = useAppSelector(useCurrentUser);
  const { data } = useGetUserQuery();
  const router = useRouter();
  const checkUser = data?.find((users) => users?.email === user?.email);
  console.log(checkUser?.role);
  useEffect(() => {
    if (checkUser?.role !== "admin") {
      router.push("/account/login");
    }
  }, [user, router]);

  return user ? children : null;
};

export default AdminRoute;
