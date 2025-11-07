"use client";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";
import {
  useGetCourierQuery,
  useRemoveCourierMutation,
} from "../../../../redux/features/courierApi/CourierApi";
import Image from "next/image";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Loading from "../../../../components/Loading/Loading";
const Courier = () => {
  const { data, isLoading, refetch } = useGetCourierQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [removeCourier] = useRemoveCourierMutation();
  // search
  const search = data?.filter((dt) => {
    const term = searchTerm.toLowerCase();
    return dt.name.toLowerCase().includes(term);
  });
  // handle delete courier
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this courier?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeCourier(id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Courier has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting courier:", error);
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
          <h5 className="text-xl font-semibold">Courier</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search courier..."
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
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Total Delivery</th>
              <th className="p-2">Total Return</th>
              <th className="p-2">Status</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {search?.map((courier, index) => (
              <tr
                key={index}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="px-2 p-1">{index + 1}.</td>
                <td className="px-2 p-1">
                  <Image
                    src={courier.image}
                    alt="courier"
                    width={60}
                    height={60}
                  />
                </td>
                <td className="px-2 p-1">{courier.name}</td>
                <td className="px-2 p-1">55</td>
                <td className="px-2 p-1">7</td>
                <td className="px-2 p-1">{courier.status}</td>
                <td className="px-2 p-1">
                  <p className="flex items-center gap-3">
                    <FiEdit className="text-xl" />
                    <p className="cursor-pointer text-2xl hover:text-[#E85363] duration-700">
                      <AiFillDelete
                        onClick={() => handleDelete(courier?._id)}
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

export default Courier;
