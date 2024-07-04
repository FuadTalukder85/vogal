import { CiDeliveryTruck } from "react-icons/ci";
import { FaBorderTopLeft } from "react-icons/fa6";

const ActivityOverview = () => {
  return (
    <div>
      <h5 className="text-2xl font-semibold">Activity Overview</h5>
      <div className="grid grid-cols-12 mt-8">
        <div className="col-span-6 mx-auto text-center">
          <span className="text-[#FD7E15] text-5xl flex justify-center">
            <CiDeliveryTruck />
          </span>
          <p className="mt-3 text-xl font-semibold">Ordered</p>
          <p className="mt-3 text-[#333333]">110 New items</p>
          <div className="border-2 border-[#FD7E15] rounded-full w-48 mt-5"></div>
        </div>
        <div className="col-span-6 mx-auto text-center">
          <span className="text-[#FD7E15] text-5xl flex justify-center">
            <FaBorderTopLeft />
          </span>
          <p className="mt-3 text-xl font-semibold">Delivered</p>
          <p className="mt-3 text-[#333333]">11 New Packages</p>
          <div className="border-2 border-[#FD7E15] rounded-full w-48 mt-5"></div>
        </div>
        <div className="col-span-6 mx-auto text-center mt-5">
          <span className="text-[#FD7E15] text-5xl flex justify-center">
            <FaBorderTopLeft />
          </span>
          <p className="mt-3 text-xl font-semibold">Delivered</p>
          <p className="mt-3 text-[#333333]">11 New Packages</p>
          <div className="border-2 border-[#FD7E15] rounded-full w-48 mt-5"></div>
        </div>
        <div className="col-span-6 mx-auto text-center mt-5">
          <span className="text-[#FD7E15] text-5xl flex justify-center">
            <CiDeliveryTruck />
          </span>
          <p className="mt-3 text-xl font-semibold">Ordered</p>
          <p className="mt-3 text-[#333333]">110 New items</p>
          <div className="border-2 border-[#FD7E15] rounded-full w-48 mt-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ActivityOverview;
