"use client";
import { useState } from "react";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../../../redux/features/auth/authApi";
import { AiFillDelete } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import Swal from "sweetalert2";
const AllUsers = () => {
  const { data, refetch } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();
  const [searchTerm, setSearchTerm] = useState("");
  // change role
  const handleChangeRole = (user, role) => {
    Swal.fire({
      title: `Change the role?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          fetch(`http://localhost:5000/api/v1/users/admin/${user._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ role }),
          })
            .then((res) => res.json)
            .then((data) => {
              console.log(data);
              refetch();
            });
          Swal.fire({
            title: "Yes",
            text: "Role has been changed.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error change role:", error);
        }
      }
    });
  };
  // handle delete user
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteUser(id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      }
    });
  };
  // search
  const search = data.filter((dt) => {
    const term = searchTerm.toLowerCase();
    return (
      dt._id?.toLowerCase().includes(term) ||
      dt.email.toLowerCase().includes(term)
    );
  });
  return (
    <div className="p-3 md:p-10">
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">All Users</h5>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search by id or email..."
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
              <th className="">Id</th>
              <th className="">Email</th>
              <th className=" hidden md:table-cell">Joined</th>
              <th className="">Role</th>
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
                      <div className="">
                        {user.firstName} {user.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">{user._id}</td>
                <td className="">{user.email}</td>
                <td className="hidden md:table-cell">{user?.date}</td>
                <td className="hover:text-red-500 transition-all duration-300">
                  {user?.role === "admin" ? (
                    <button onClick={() => handleChangeRole(user, "user")}>
                      Admin
                    </button>
                  ) : (
                    <button onClick={() => handleChangeRole(user, "admin")}>
                      User
                    </button>
                  )}
                </td>
                <td className="flex gap-3 text-xl">
                  {/* <FaRegEye className="cursor-pointer text-2xl hover:text-[#E85363] duration-700"></FaRegEye> */}
                  <AiFillDelete
                    onClick={() => handleDelete(user?._id)}
                    className="cursor-pointer text-2xl hover:text-[#E85363] duration-700"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
