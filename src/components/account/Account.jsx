"use client";
import Link from "next/link";
import { logout, useCurrentUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useRouter } from "next/navigation";

const Account = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };
  return (
    <div className="max-w-[1300px] mx-auto mb-10 p-5 md:p-0">
      <h5 className="text-2xl font-medium text-center md:mt-24">My Account</h5>
      <div className="md:grid grid-cols-12 gap-10 mt-10">
        <div className="col-span-2">
          <ul className="mt-8">
            <li className="text-xs">
              Welcome <span className="font-bold">Sn Jack</span>
            </li>
            <li className="border-t-2 text-xs mt-5 pt-3">My Orders</li>
            <li className="border-t-2 text-xs mt-5 pt-3">My Address</li>
            <li className="border-t-2 text-xs mt-5 pt-3 font-semibold">
              {user ? (
                <button onClick={handleLogout}>Logout</button>
              ) : (
                <Link onClick={handleLogout} href="/"></Link>
              )}
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <h5 className="text-xl font-medium mt-10 md:mt-0">Order History</h5>
          <p className="text-xs mt-5 md:mt-12">
            You haven,t placed any orders yet.
          </p>

          <button className="mt-6 bg-[#86bbbf] hover:bg-[#333333] transition-all duration-500 text-white py-3 px-6 text-xs rounded-md uppercase">
            Make your first order
          </button>

          <h5 className="text-xl font-medium mt-10">Account details</h5>
          <p className="text-sm font-semibold mt-12">Sn Jack</p>
        </div>
        <div className="col-span-5"></div>
        <div className="col-span-2">
          <div>
            <Link href="/dashboard">
              <button className="mt-6 bg-[#333333] hover:bg-[#86bbbf] transition-all duration-500 text-white py-3 px-6 text-xs rounded-md uppercase">
                Dashboard
              </button>
            </Link>
          </div>
          <div>
            <button className="mt-10 md:mt-36 border-b-2 pb-1 text-[#333333] text-xs">
              View Addresses (1)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
