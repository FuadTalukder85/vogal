"use client";
import { IoBagHandleOutline } from "react-icons/io5";
import { FcPaid } from "react-icons/fc";
import { FaCheck } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useGetPaymentsQuery } from "../../redux/features/paymentApi/PaymentApi";
import { useGetCartsQuery } from "../../redux/features/cartsApi/CartsApi";

const OverView = () => {
  const { data } = useGetPaymentsQuery();
  const { data: orderOnCarts } = useGetCartsQuery();
  const totalPayment = data?.reduce((sum, item) => sum + item.price, 0);
  const totalOrder = data?.reduce((sum, item) => sum + item.quantity, 0);
  const orderOnCart = orderOnCarts?.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  // console.log(orderOnCart);
  return (
    <div className="grid grid-cols-12 md:grid-cols-5 gap-2 md:gap-5">
      <div className="col-span-6 md:col-span-1 bg-base-300 p-3">
        <div className="flex gap-2 md:gap-10 items-center">
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
      <div className="col-span-6 md:col-span-1 bg-base-300 p-3">
        <div className="flex gap-2 md:gap-10 items-center">
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
      <div className="col-span-6 md:col-span-1 bg-base-300 p-3">
        <div className="flex gap-2 md:gap-10 items-center">
          <p className="bg-[#CBD5E1] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <FcPaid />
          </p>
          <div>
            <p>Orders Paid</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              ${totalPayment}.00
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-6 md:col-span-1 bg-base-300 p-3">
        <div className="flex gap-2 md:gap-10 items-center">
          <p className="bg-[#eccb45] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <FaCheck />
          </p>
          <div>
            <p>Total Orders</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              {totalOrder}
            </p>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="col-span-6 md:col-span-1 bg-base-300 p-3">
        <div className="flex gap-2 md:gap-10 items-center">
          <p className="bg-[#FD7E15] text-3xl text-white w-12 h-12 rounded-tr-xl rounded-b-xl flex items-center justify-center">
            <AiOutlineShoppingCart />
          </p>
          <div>
            <p>Order on Cart</p>
            <p className="text-[#333333] text-xl font-bold hover:text-red-600">
              {orderOnCart}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
