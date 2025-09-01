"use client";
import { useGetUserQuery } from "../../../../redux/features/auth/authApi";
import { AiFillDelete } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
const AllUsers = () => {
  const { data } = useGetUserQuery();

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/api/v1/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
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
                <td className="">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button onClick={() => handleMakeAdmin(user)}>User</button>
                  )}
                </td>
                <td className="flex gap-3 text-xl">
                  <FaRegEye className=""></FaRegEye>
                  <AiFillDelete className="text-red-500"></AiFillDelete>
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
