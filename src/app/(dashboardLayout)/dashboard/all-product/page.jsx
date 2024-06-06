"use client";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useGetProductsQuery } from "../../../../redux/features/productApi/ProductApi";
import UpdatePoductModal from "../../../../components/modal/updatePoductModal/UpdatePoductModal";
import Image from "next/image";
import { useEffect, useState } from "react";

const AllProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [editById, setEditById] = useState(null);

  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // console.log(data);
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
                    <div className="avatar gap-5">
                      <div className="mask mask-squircle">
                        <Image
                          src={product?.firstImg}
                          alt="product"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="mask mask-squircle">
                        <Image
                          src={product?.secondImg}
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
                    <div className="md:font-bold">{product?.title}</div>
                  </div>
                </td>
                <td className="hidden md:table-cell md:font-bold">
                  {product._id}
                </td>
                <td className="md:font-bold">${product.price}</td>
                <td className="flex items-center justify-center text-[#E85363] text-4xl">
                  <div className="flex items-center justify-center text-[#E85363] text-4xl">
                    <MdEditSquare
                      onClick={() => {
                        setEditById(product?._id);
                        handleShowModal();
                      }}
                      className="cursor-pointer"
                    />
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
        {showModal && (
          <UpdatePoductModal
            onClose={() => {
              setShowModal(false);
            }}
            productId={editById}
          />
        )}
      </div>
    </div>
  );
};

export default AllProduct;
