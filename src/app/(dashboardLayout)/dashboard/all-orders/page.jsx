"use client";
import { useState } from "react";
import { FiPrinter } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { useGetPaymentsQuery } from "../../../../redux/features/paymentApi/PaymentApi";
import { MdOutlineReviews } from "react-icons/md";
const AllOrder = () => {
  const { data } = useGetPaymentsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  // const filteredDate = data.sort
  // search
  const search = data?.filter((dt) => {
    const term = searchTerm.toLowerCase();
    return (
      dt.invoiceNumber.toString().toLowerCase().includes(term) ||
      dt.name.toLowerCase().includes(term) ||
      dt.email.toLowerCase().includes(term) ||
      dt.number.toLowerCase().includes(term)
    );
  });
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">All orders</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search orders..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <span className="bg-[#333333] text-white text-2xl hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-3 md:px-7 rounded-e-md cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto mt-3 bg-white md:p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SL</th>
              <th className="p-2">Invoice No</th>
              <th className="p-2">Order Time</th>
              <th className="p-2">Customer Name</th>
              <th className="p-2">Customer Number</th>
              <th className="p-2">Total Item</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Invoice</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {search?.map((order, index) => (
              <tr
                key={index}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="p-2">{index + 1}.</td>
                <td className="p-2">{order.invoiceNumber}</td>
                <td className="p-2">
                  {order.date} {order.time}
                </td>
                <td className="p-2">{order.name}</td>
                <td className="p-2">{order.number}</td>
                <td className="p-2">{order.quantity}</td>
                <td className="p-2">${order.price}</td>
                <td className="p-2 gap-3 text-xl">
                  <p className="flex items-center gap-3">
                    <FiPrinter className="cursor-pointer text-xl hover:text-[#E85363] duration-700" />
                    <MdOutlineReviews className="cursor-pointer text-xl hover:text-[#E85363] duration-700" />
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrder;
