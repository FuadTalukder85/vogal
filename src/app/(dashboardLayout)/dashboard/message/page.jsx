"use client";
import { useState } from "react";
import { useDeleteUserMutation } from "../../../../redux/features/auth/authApi";
import { AiFillDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";
import {
  useGetMessageQuery,
  useRemoveMessageMutation,
} from "../../../../redux/features/messageApi/MessageApi";
const AllMessage = () => {
  const { data, refetch } = useGetMessageQuery();
  const [deleteMessage] = useRemoveMessageMutation();
  const [searchTerm, setSearchTerm] = useState("");
  // handle delete user
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this message?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteMessage(id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Message has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting message:", error);
        }
      }
    });
  };
  // search
  const search = data?.filter((dt) => {
    const term = searchTerm.toLowerCase();
    return (
      dt._id?.toLowerCase().includes(term) ||
      dt.name.toLowerCase().includes(term) ||
      dt.email.toLowerCase().includes(term) ||
      dt.number.toLowerCase().includes(term) ||
      dt.subject.toLowerCase().includes(term) ||
      dt.message.toLowerCase().includes(term)
    );
  });
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">All Message</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search message..."
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
        <table className="table">
          {/* head */}
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200">
              <th className="">SL</th>
              <th className=" hidden md:table-cell">Name</th>
              <th className="">Email</th>
              <th className="">Number</th>
              <th className=" hidden md:table-cell">Subject</th>
              <th className="">Message</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {search?.map((user, index) => (
              <tr key={index} className="border border-gray-200">
                <td className="">{index + 1}</td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="">{user.email}</td>
                <td className="">{user.number}</td>
                <td className="hidden md:table-cell">{user?.subject}</td>
                <td className="hover:text-red-500 transition-all duration-300">
                  {user.message}
                </td>
                <td className="gap-3 text-xl">
                  {/* <FaRegEye className="cursor-pointer text-2xl hover:text-[#E85363] duration-700"></FaRegEye> */}
                  <p className="flex justify-center items-center">
                    <AiFillDelete
                      onClick={() => handleDelete(user?._id)}
                      className="cursor-pointer text-2xl hover:text-[#E85363] duration-700"
                    />
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

export default AllMessage;
