import { IoBagHandleOutline } from "react-icons/io5";
import { FcPaid } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const OverView = () => {
  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="col-span-1 bg-base-300 p-5">
        <div className="flex gap-10 items-center">
          <p className="bg-[#22C55E] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <IoBagHandleOutline />
          </p>
          <div>
            <p>Total Sale</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              $45,00.00
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 bg-base-300 p-5">
        <div className="flex gap-10 items-center">
          <p className="bg-[#FF5200] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            $
          </p>
          <div>
            <p>Total Income</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              $25,00.00
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 bg-base-300 p-5">
        <div className="flex gap-10 items-center">
          <p className="bg-[#CBD5E1] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <FcPaid />
          </p>
          <div>
            <p>Orders Paid</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              $15,00.00
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 bg-base-300 p-5">
        <div className="flex gap-10 items-center">
          <p className="bg-[#eccb45] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <FaCheck />
          </p>
          <div>
            <p>Total Orders</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              120.00
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 bg-base-300 p-5">
        <div className="flex gap-10 items-center">
          <p className="bg-[#FD7E15] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <AiOutlineShoppingCart />
          </p>
          <div>
            <p>Orders on Cart</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              120.00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
