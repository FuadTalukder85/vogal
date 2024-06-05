"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useLoginUsersMutation } from "../../../../redux/features/auth/authApi";
import Cookies from "js-cookie";
import { verifyToken } from "../../../utils/VerifyToken";

const LoginForm = () => {
  // const dispatch = useAppDispatch();
  const { register, handleSubmit, reset } = useForm();
  const [loggedUser] = useLoginUsersMutation();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    try {
      const res = await loggedUser(userInfo).unwrap();
      reset();
      const user = verifyToken(res.token);

      const { token } = res;
      dispatch(setUser({ user: user, token: res.token }));
      localStorage.setItem("token", token);
      Cookies.set("refreshToken", token);
      nagivate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero bg-base-200 mt-28 max-w-screen-lg mx-auto">
      <div className="hero-content flex-col">
        {/* lg:flex-row-reverse */}
        <div className="text-center">
          <span className="text-2xl font-medium text-black">My Account</span>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="card shrink-0 bg-base-100 border border-[#EFEDEC] p-10">
            <h5 className="text-2xl font-medium text-black">Login</h5>
            <p className="mt-5 text-xs">
              If you have an account with us, please log in.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body p-0 mt-5"
            >
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  className="input order border-[#EFEDEC] text-xs w-96"
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  className="input order border-[#EFEDEC] text-xs"
                  {...register("password")}
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="form-control mt-5">
                    <button
                      type="submit"
                      className=" border bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase"
                    >
                      Sign in
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-xs cursor-pointer hover:text-[#FD6F8D]">
                    Forgot your password?
                  </p>
                </div>
              </div>
            </form>
          </div>
          <div className="border border-[#EFEDEC] p-10">
            <h5 className="text-2xl font-medium text-black">NEW CUSTOMER?</h5>
            <p className="mt-5 text-xs leading-6">
              Registering for this site allows you to access your order status
              and history. We’ll get a new account set up for you in no time.
              For this will only ask you for information necessary to make the
              purchase process faster and easier
            </p>
            <Link href="/account/register">
              <button className="mt-6 bg-[#333333] text-white py-3 px-8 text-sm rounded-md uppercase">
                Create an account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
