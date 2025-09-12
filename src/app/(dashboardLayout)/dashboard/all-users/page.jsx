"use client";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../../../redux/features/auth/authApi";
import { AiFillDelete } from "react-icons/ai";
import Swal from "sweetalert2";
const AllUsers = () => {
  const { data, refetch } = useGetUserQuery();
  const [deleteUser] = useDeleteUserMutation();

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
  return (
    <div className="p-3 md:p-10">
      <h5 className="text-xl font-semibold">All Users</h5>
      <div className="overflow-x-auto mt-3 bg-white md:p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th className="md:text-[14px] text-[#333333]">SL</th>
              <th className="md:text-[14px] text-[#333333] hidden md:table-cell">
                Name
              </th>
              <th className="md:text-[14px] text-[#333333]">Email</th>
              <th className="md:text-[14px] text-[#333333] hidden md:table-cell">
                Joined
              </th>
              <th className="md:text-[14px] text-[#333333]">Role</th>
              <th className="md:text-[14px] text-[#333333]">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((user, index) => (
              <tr key={index}>
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
                <td className="">{user.email}</td>
                <td className="hidden md:table-cell">{user?.date}</td>
                <td>
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
