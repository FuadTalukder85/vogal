"use client";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { AiFillDelete } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import FormInput from "../../../../../../components/ReusableForm/FormInput";
const Salary = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <h5 className="hidden md:block text-xl font-semibold">
          Generate Salary
        </h5>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-5 w-[280px] rounded-s-md border focus:outline-none"
            placeholder="Search employee..."
          />
          <span className="bg-[#333] text-white text-2xl hover:bg-[#40B884] transition-all duration-300 py-3 px-5 rounded-e-md cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto mt-3 bg-white md:p-5 rounded-md shadow">
        <table className="w-full">
          <thead>
            <tr className="text-[14px] text-[#333] bg-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">Generate date</th>
              <th className="p-2">Employee ID</th>
              <th className="p-2">Designation</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Salary</th>
              <th className="p-2">Payable Salary</th>
              <th className="p-2">Remarks</th>
              <th className="p-2">Status</th>
              <th className="p-2">Generate Salary</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm border-b">
              <td className="px-2 p-1">1</td>
              <td className="px-2 p-1">21/11/2025</td>
              <td className="px-2 p-1">12125</td>
              <td className="px-2 p-1">Manager</td>
              <td className="px-2 p-1">Korim Ali</td>
              <td className="px-2 p-1">01756867585</td>
              <td className="px-2 p-1">$1000</td>
              <td className="px-2 p-1">$900</td>
              <td className="px-2 p-1">N/A</td>
              <td className="px-2 p-1">Paid</td>
              <td className="px-2 p-1">
                <div className="flex items-center gap-3 text-xl">
                  <button onClick={() => setOpenModal(true)}>
                    <FiEdit className="cursor-pointer hover:text-[#40B884] duration-200" />
                  </button>
                  <span className="text-sm bg-[#40B884] text-white px-1 rounded-sm cursor-pointer hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500">
                    Payslip
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white p-7 rounded-xl w-[92%] md:w-[520px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] relative border border-gray-200"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-red-500 transition"
              >
                <IoClose />
              </button>
              <h3 className="text-xl font-semibold text-[#329e6b] mb-5">
                Salary Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between bg-gray-100 py-3 px-4 rounded-lg border">
                  <span className="font-semibold text-gray-700">
                    Basic Salary:
                  </span>
                  <span className="font-bold text-[#329e6b]">$500</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <FormInput label="House Rent Allowance" placeholder="$0" />
                  </div>
                  <div>
                    <FormInput
                      label="Professional Tax"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div>
                    <FormInput
                      label="Overtime Amount"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                  <div>
                    <FormInput
                      label="Commission"
                      placeholder="$0"
                      type="number"
                    />
                  </div>
                </div>
                <div className="flex justify-between border-t pt-4 mt-2">
                  <span className="font-semibold text-gray-800">
                    Net Payable:
                  </span>
                  <span className="font-bold text-[#40B884] text-lg">
                    $0.00
                  </span>
                </div>
              </div>
              <button className="w-full mt-3 bg-[#40B884] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-2 px-7 rounded-md text-sm uppercase">
                Confirm & Generate Salary
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Salary;
