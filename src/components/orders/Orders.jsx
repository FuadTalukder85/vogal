import { useGetPaymentsQuery } from "../../redux/features/paymentApi/PaymentApi";
import { FaRegEye } from "react-icons/fa";

const Orders = () => {
  const { data } = useGetPaymentsQuery();
  return (
    <div className="bg-white p-5">
      <h5 className="text-xl">Orders</h5>
      <hr className="bg-[#FF8042] py-[1.5px] w-[150px]" />
      <div className="overflow-x-auto mt-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-[18px]">
              <th className="font-extralight text-[#333333]">SL *</th>
              <th className="font-extralight text-[#333333]">Ordered Email</th>
              <th className="font-extralight text-[#333333] text-center">
                Price
              </th>
              <th className="font-extralight text-[#333333] text-center">
                Quantity
              </th>
              <th className="md:text-lg text-[#333333] text-center">
                View Details
              </th>
            </tr>
          </thead>
          <tbody className="text-lg">
            {data?.slice(0, 5).map((payments, index) => (
              <tr>
                <td className="font-semibold">{index + 1}.</td>
                <td className="">{payments.email}</td>
                <td className="text-center">${payments.price}.00</td>
                <td className="text-center">{payments.quantity}</td>
                <td className="flex items-center justify-center text-2xl cursor-pointer hover:text-[#FD7E15]">
                  <FaRegEye />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
