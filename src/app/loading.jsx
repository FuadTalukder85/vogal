"use client";
import Loading from "../../public/lottie/Loading.json";
import Lottie from "react-lottie";

const loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loading,
  };
  return (
    <div className="w-full">
      <div className="w-[200px] mt-20 mx-auto">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default loading;
