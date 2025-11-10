"use client";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import {
  useGetEmployeeQuery,
  useRemoveEmployeeMutation,
} from "../../../../redux/features/employeeApi/EmployeeApi";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import Loading from "../../../../components/Loading/Loading";
const Attendance = () => {
  const { data, isLoading, refetch } = useGetEmployeeQuery();
  const [searchTerm, setSearchTerm] = useState("");
  // search
  const search = data?.filter((dt) => {
    const term = searchTerm.toLowerCase();
    return (
      dt.name.toLowerCase().includes(term) ||
      dt.number.toString().toLowerCase().includes(term) ||
      dt.email.toLowerCase().includes(term) ||
      dt.emergency_contact.toLowerCase().includes(term) ||
      dt.address.toLowerCase().includes(term)
    );
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">Employee Attendance</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[300px] rounded-s-md focus:outline-none border border-gray-200 text-sm"
            placeholder="Search employee..."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <span className="bg-[#333333] text-white text-2xl hover:bg-[#40B884] transition-all duration-500 py-[10px] px-3 md:px-7 rounded-e-md cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto mt-3 bg-white md:p-5">
        {/* add here date picker */}
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Present</th>
              <th className="p-2">Absent</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {search?.map((employee, index) => (
              <tr
                key={index}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="px-2 p-1">{index + 1}.</td>
                <td className="px-2 p-1">{employee.name}</td>
                <td className="px-2 p-1">{employee.number}</td>
                <td className="px-2 p-1">
                  <input type="checkbox" />
                </td>
                <td className="px-2 p-1">
                  <input type="checkbox" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="md:flex justify-end">
          <button className="w-full md:w-auto mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-2 px-7 rounded-md text-sm uppercase">
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
