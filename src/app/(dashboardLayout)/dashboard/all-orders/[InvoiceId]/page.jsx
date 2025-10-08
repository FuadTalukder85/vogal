import Image from "next/image";
import logo from "../../../../../assets/images/vogal.png";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuPrinterCheck } from "react-icons/lu";

const Invoice = () => {
  return (
    <div className="p-3 md:p-10">
      <h5 className="text-xl font-semibold">Invoice</h5>
      <div className="bg-white p-3 rounded-md mt-3">
        <div className="flex justify-between">
          <div className="">
            <div className="text-[#9097A7]">
              <h3 className="text-black font-semibold text-2xl">INVOICE TO</h3>
              <p>01963195735</p>
              <p>fuadtalukder25@gmail.com</p>
              <p>Khilkhet, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[#9097A7] flex flex-col items-end">
              <Image src={logo} alt="logo" height={100} width={100}></Image>
              <p>01963195735</p>
              <p>fuadtalukder25@gmail.com</p>
              <p>Khilkhet, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 bg-white md:p-5">
          <div className="flex gap-48">
            <div>
              <p className="font-semibold">DATE</p>
              <span>27 Sep, 2025</span>
            </div>
            <div>
              <p className="font-semibold">INVOICE NO</p>
              <span>20255</span>
            </div>
          </div>
          <table className="w-full mt-3">
            <thead>
              <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
                <th className="p-2">SL</th>
                <th className="p-2">Product Title</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Item Price</th>
                <th className="p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {/* {search?.map((order, index) => ( */}
              <tr
                // key={index}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="p-2">1.</td>
                <td className="p-2">Lungi</td>
                <td className="p-2">1</td>
                <td className="p-2">$250</td>
                <td className="p-2">$250</td>
              </tr>
              <tr
                // key={index}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="p-2">2.</td>
                <td className="p-2">Panjabi</td>
                <td className="p-2">2</td>
                <td className="p-2">$350</td>
                <td className="p-2">$700</td>
              </tr>
              <tr
                // key={index}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="p-2">3.</td>
                <td className="p-2">Hoodie</td>
                <td className="p-2">1</td>
                <td className="p-2">$550</td>
                <td className="p-2">$550</td>
              </tr>
              {/* ))} */}
            </tbody>
          </table>
          <div className="w-full bg-gray-200 mt-10 rounded-lg shadow-sm flex justify-between px-6 py-4 text-sm md:text-base">
            {/* Payment Method */}
            <div className="flex flex-col mb-2 md:mb-0">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Payment Method
              </span>
              <span className="text-gray-800 mt-1">Cash</span>
            </div>

            {/* Shipping Cost */}
            <div className="flex flex-col mb-2 md:mb-0">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Shipping Cost
              </span>
              <span className="text-gray-800 mt-1">$60.00</span>
            </div>

            {/* Discount */}
            <div className="flex flex-col mb-2 md:mb-0">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Discount
              </span>
              <span className="text-gray-800 mt-1">$0.00</span>
            </div>

            {/* Total Amount */}
            <div className="flex flex-col items-end">
              <span className="font-semibold text-gray-700 uppercase text-xs md:text-sm">
                Total Amount
              </span>
              <span className="text-red-600 font-bold text-lg mt-1">
                $90.78
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Download and print */}
      <div className="flex justify-end">
        <div className="flex gap-5">
          <button className="flex gap-2 items-center mt-7 bg-purple-700 text-white py-2 px-8 text-sm rounded-md uppercase">
            Download Invoice
            <span>
              <IoCloudDownloadOutline />
            </span>
          </button>
          <button className="flex gap-2 items-center mt-7 bg-teal-500 text-white py-2 px-8 text-sm rounded-md uppercase">
            Print Invoice
            <span>
              <LuPrinterCheck />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
