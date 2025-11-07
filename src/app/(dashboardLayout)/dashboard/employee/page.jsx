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
const AllOrder = () => {
  const { data, isLoading, refetch } = useGetEmployeeQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [removeEmployee] = useRemoveEmployeeMutation();
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
  // handle delete employee
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this employee?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeEmployee(id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your employee has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting employee:", error);
        }
      }
    });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">All Employee</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search employee..."
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
              <th className="p-2">SN</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Email</th>
              <th className="p-2">Address</th>
              <th className="p-2">Emergency Contact</th>
              <th className="p-2">Salary</th>
              <th className="p-2">Remarks</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
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
                <td className="px-2 p-1">{employee.email}</td>
                <td className="px-2 p-1">{employee.address}</td>
                <td className="px-2 p-1">{employee.emergency_contact}</td>
                <td className="px-2 p-1">${employee.salary}</td>
                <td className="px-2 p-1">{employee.remarks}</td>
                <td className="px-2 p-1">{employee.status}</td>
                <td className="px-2 p-1 gap-3 text-xl">
                  <p className="flex items-center gap-3">
                    <FiEdit className="text-xl" />
                    <p className="cursor-pointer text-2xl hover:text-[#E85363] duration-700">
                      <AiFillDelete
                        onClick={() => handleDelete(employee?._id)}
                      />
                    </p>
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
