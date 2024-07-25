"use client";
import { useGetUserQuery } from "../../../../redux/features/auth/authApi";
const AllUsers = () => {
  const { data } = useGetUserQuery();
  // console.log(data);
  return (
    <div className="p-3 md:p-10">
      <h5 className="text-2xl font-semibold">All Users</h5>
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th className="md:text-lg text-[#333333]">SL</th>
              <th className="md:text-lg text-[#333333]">Name</th>
              <th className="md:text-lg text-[#333333]">Email</th>
              <th className="md:text-lg text-[#333333]">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map((user, index) => (
              <tr key={index}>
                <td className="">{index + 1}</td>
                <td className="">
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="">
                        {user.firstName} {user.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="">{user.email}</td>
                <td className="">
                  <button className="text-red-500">Delete</button>
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
