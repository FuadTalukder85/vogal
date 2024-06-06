"use client";
import { useForm } from "react-hook-form";
import { useRegisterUsersMutation } from "../../../../redux/features/auth/authApi";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users] = useRegisterUsersMutation();

  const onSubmit = async (data) => {
    try {
      await users(data).unwrap();
      reset();
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };
  return (
    <div className="hero bg-base-200 md:mt-28">
      <div className="hero-content flex-col">
        {/* lg:flex-row-reverse */}
        <div className="text-center">
          <span className="text-2xl font-medium text-black">
            Create an Account
          </span>
        </div>
        <div className="card shrink-0 w-full max-w-fit bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="md:flex gap-10">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="First name"
                  className="input order border-[#EFEDEC] text-xs md:w-56"
                  {...register("firstName")}
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Last name"
                  className="input order border-[#EFEDEC] text-xs md:w-56"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="email"
                className="input order border-[#EFEDEC] text-xs"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                className="input order border-[#EFEDEC] text-xs"
                {...register("password")}
              />
            </div>
            <div>
              <div className="flex gap-3 items-center mt-2">
                <input type="checkbox" defaultChecked className="checkbox" />
                <span className="p-0 text-xs">
                  Subscribe to stay updated with new products and offers!
                </span>
              </div>
            </div>

            <div className="form-control mt-5">
              <button
                type="submit"
                className="border bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 px-7 rounded-md text-xs uppercase"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
