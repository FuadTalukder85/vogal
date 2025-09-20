import { useGetPaymentsQuery } from "../redux/features/paymentApi/PaymentApi";
// import { FaRegEye } from "react-icons/fa";

const Orders = () => {
  const { data = [] } = useGetPaymentsQuery();

  const newDate = (dateStr) => {
    if (!dateStr) return new Date(0);
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const newData = [...data].sort((a, b) => newDate(b.date) - newDate(a.date));
  return (
    <div className="bg-white p-5">
      <h5 className="text-xl">Recent Orders</h5>
      <hr className="bg-[#FF8042] py-[1.5px] w-[150px] rounded-tr-full rounded-tl-full" />
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="md:text-[14px] text-[#333333]">SL *</th>
              <th className="md:text-[14px] text-[#333333]">Ordered Email</th>
              <th className="md:text-[14px] text-[#333333] text-center">
                Price
              </th>
              <th className="md:text-[14px] text-[#333333] text-center">
                Quantity
              </th>
              {/* <th className="md:text-[14px] text-[#333333] text-center">
                View Details
              </th> */}
            </tr>
          </thead>
          <tbody>
            {newData?.slice(0, 6).map((payments, index) => (
              <tr key={index}>
                <td className="font-semibold">{index + 1}.</td>
                <td className="">{payments.email}</td>
                <td className="text-center">${payments.price}.00</td>
                <td className="text-center">{payments.quantity}</td>
                {/* <td className="flex items-center justify-center text-2xl cursor-pointer hover:text-[#FD7E15]">
                  <FaRegEye />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
