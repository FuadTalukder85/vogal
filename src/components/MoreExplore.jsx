import Image from "next/image";
import explore1 from "../assets/images/exploreImg/explore1.png";
import explore2 from "../assets/images/exploreImg/explore2.png";
import explore3 from "../assets/images/exploreImg/explore3.png";
import explore4 from "../assets/images/exploreImg/explore4.png";
import Link from "next/link";

const MoreExplore = () => {
  return (
    <div className="max-w-[1300px] mx-auto mt-5 md:mt-24 p-5 md:p-0">
      <h5 className="text-2xl font-medium text-center">
        There,s More to Explore
      </h5>
      <Link href={`/shop`}>
        <div className="md:flex gap-5 mt-10">
          <div className="relative overflow-hidden">
            <Image
              className="hover:scale-110 transition-all duration-500"
              src={explore1}
              alt="explore1"
            ></Image>
            <div className="flex justify-center">
              <button className="absolute bottom-8 mt-7 bg-white text-[#333333] py-3 px-8 text-sm rounded-md uppercase">
                Women
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden mt-5 md:mt-0">
            <Image
              className="hover:scale-110 transition-all duration-500"
              src={explore2}
              alt="explore2"
            ></Image>
            <div className="flex justify-center">
              <button className="absolute bottom-8 mt-7 bg-white text-[#333333] py-3 px-8 text-sm rounded-md uppercase">
                Men
              </button>
            </div>
          </div>
          <div className="">
            <div className="relative overflow-hidden">
              <Image
                className="hover:scale-110 transition-all duration-500"
                src={explore3}
                alt="explore3"
              ></Image>
              <div className="flex justify-center">
                <button className="absolute bottom-8 mt-7 bg-white text-[#333333] py-3 px-8 text-sm rounded-md uppercase">
                  Shoes
                </button>
              </div>
            </div>
            <div className="relative mt-5 overflow-hidden">
              <Image
                className="hover:scale-110 transition-all duration-500"
                src={explore4}
                alt="explore4"
              ></Image>
              <div className="flex justify-center">
                <button className="absolute bottom-8 mt-7 bg-white text-[#333333] py-3 px-8 text-sm rounded-md uppercase">
                  Accessories
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MoreExplore;
