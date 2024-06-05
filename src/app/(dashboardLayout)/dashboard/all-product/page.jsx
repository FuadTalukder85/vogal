"use client";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useGetProductsQuery } from "../../../../redux/features/productApi/ProductApi";
import Image from "next/image";
const AllProduct = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  if (isLoading) {
    return <></>;
  }
  console.log(data);
  return (
    <div className="p-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th className="md:hidden md:text-lg text-[#333333]">*</th>
              <th className="hidden md:table-cell md:text-lg text-[#333333]">
                SL NO.
              </th>

              <th className="hidden md:text-lg text-[#333333]">
                Product Image
              </th>
              <th className="hidden md:table-cell md:text-lg text-[#333333]">
                Product Image
              </th>

              <th className="md:hidden text-[#333333]">Title</th>
              <th className="hidden md:table-cell md:text-lg text-[#333333]">
                Product Title
              </th>
              <th className="hidden md:table-cell md:text-lg text-[#333333]">
                Product ID
              </th>
              <th className="md:text-lg text-[#333333]">Price</th>
              <th className="md:text-lg text-[#333333] text-center">Update</th>
              <th className="md:text-lg text-[#333333] text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((product, index) => (
              <tr key={product._id}>
                <th>
                  <label className="text-[#E85363] md:font-bold">
                    {index + 1}
                  </label>
                </th>
                <td className="hidden md:table-cell">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle">
                        <Image
                          src={product.firstImg}
                          alt="product"
                          width={40}
                          height={40}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="md:font-bold">{product.title}</div>
                  </div>
                </td>
                <td className="hidden md:table-cell md:font-bold">
                  {product._id}
                </td>
                <td className="md:font-bold">${product.price}</td>
                <td className="flex items-center justify-center text-[#E85363] text-4xl">
                  <div className="flex items-center justify-center text-[#E85363] text-4xl">
                    <MdEditSquare />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center text-[#E85363] text-4xl">
                    <AiFillDelete />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProduct;
