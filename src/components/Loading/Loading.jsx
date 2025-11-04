"use client";
import Lottie from "react-lottie";
import LoadingAnim from "../../../public/lottie/Loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnim,
  };

  return (
    <div className="w-full">
      <div className="w-[200px] mt-20 mx-auto">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

export default Loading;
