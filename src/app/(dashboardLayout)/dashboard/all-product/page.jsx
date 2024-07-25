"use client";
import { useState, useEffect } from "react";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../../../redux/features/productApi/ProductApi";
import UpdatePoductModal from "../../../../components/modal/updatePoductModal/UpdatePoductModal";
import Image from "next/image";
import Swal from "sweetalert2";

const ITEMS_PER_PAGE = 8;

const AllProduct = () => {
  const [showModal, setShowModal] = useState(false);
  const [editById, setEditById] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  const [removeProduct] = useRemoveProductMutation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure you want to delete this product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await removeProduct(id);
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    });
  };

  // Calculate paginated data
  const paginatedData =
    data?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    ) || [];

  const totalPages = Math.ceil((data?.length || 0) / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-3 md:p-10">
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
              <th className="hidden w-56 md:table-cell md:text-lg text-[#333333]">
                Product Title
              </th>
              <th className="hidden md:table-cell md:text-lg text-[#333333] text-center">
                Original Price
              </th>
              <th className="md:text-lg text-[#333333] text-center">Price</th>
              <th className="md:text-lg text-[#333333] text-center">
                Discount
              </th>
              <th className="md:text-lg text-[#333333] text-center">Update</th>
              <th className="md:text-lg text-[#333333] text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((product, index) => (
              <tr key={product._id}>
                <th>
                  <label className="text-[#E85363] md:font-bold">
                    {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                  </label>
                </th>
                <td className="hidden md:table-cell">
                  <div className="flex items-center gap-3">
                    <div className="avatar gap-5">
                      <div className="mask mask-squircle">
                        {product?.firstImg && (
                          <Image
                            src={product.firstImg}
                            alt={product.title || "Product Image"}
                            width={40}
                            height={40}
                          />
                        )}
                      </div>
                      <div className="mask mask-squircle">
                        {product?.secondImg && (
                          <Image
                            src={product.secondImg}
                            alt={product.title || "Product Image"}
                            width={40}
                            height={40}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="md:font-bold">{product?.title}</td>
                <td className="hidden md:table-cell md:font-bold text-center">
                  ${product.originalPrice}
                </td>
                <td className="md:font-bold text-center">${product.price}</td>
                <td className="hidden md:table-cell md:font-bold text-center">
                  ${product.discount}
                </td>
                <td className="flex items-center justify-center text-[#E85363] text-4xl">
                  <MdEditSquare
                    onClick={() => {
                      setEditById(product?._id);
                      handleShowModal();
                    }}
                    className="cursor-pointer"
                  />
                </td>
                <td>
                  <div className="flex items-center justify-center cursor-pointer text-[#E85363] text-4xl">
                    <AiFillDelete onClick={() => handleDelete(product?._id)} />
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
      {/* Pagination */}
      <div className="flex justify-center items-center gap-5 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FaArrowLeft />
        </button>
        <ul className="flex gap-2">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`px-4 py-1 rounded-md ${
                  currentPage === pageNumber + 1
                    ? "bg-[#E85363] text-white"
                    : "bg-white text-[#E85363]"
                }`}
                onClick={() => handlePageChange(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            </li>
          ))}
        </ul>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AllProduct;
