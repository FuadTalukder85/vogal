"use client";
import { useState, useEffect } from "react";
import { MdEditSquare } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {
  useGetProductsQuery,
  useRemoveProductMutation,
} from "../../../../redux/features/productApi/ProductApi";
import UpdatePoductModal from "../../../../components/modal/updatePoductModal/UpdatePoductModal";
import Image from "next/image";
import Swal from "sweetalert2";
import Link from "next/link";
import Loading from "../../../../components/Loading/Loading";

const ITEMS_PER_PAGE = 20;

const AllProduct = () => {
  const menu = [
    "S/L",
    "Product Image",
    "Product Title",
    "Category",
    "Price",
    "Sale Price",
    "Discount",
    "Action",
  ];
  const [showModal, setShowModal] = useState(false);
  const [editById, setEditById] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const { data, isLoading, refetch } = useGetProductsQuery(undefined);
  const [removeProduct] = useRemoveProductMutation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [refetch]);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  // handle delete product
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
  useEffect(() => {
    if (data) {
      setFilteredData(data);
    }
  }, [data]);

  // Filter data based on search query
  const handleSearch = () => {
    const filtered = data?.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered || []);
  };

  // Calculate paginated data
  const paginatedData =
    filteredData?.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    ) || [];

  const totalPages = Math.ceil((filteredData?.length || 0) / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="md:p-10">
      <div className="md:flex justify-between p-3 md:p-0">
        <div className="hidden md:flex justify-center">
          <button className="border bg-[#333333] text-white hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-7 rounded-md uppercase">
            <Link href="/dashboard/addProduct">Add Products</Link>
          </button>
        </div>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[280px] rounded-s-md focus:outline-none"
            placeholder="Search by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="bg-[#333333] text-white text-2xl hover:bg-[#40B884] hover:text-white hover:bg transition-all duration-500 py-3 px-3 md:px-7 rounded-e-md cursor-pointer">
            {" "}
            <CiSearch onClick={handleSearch} />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto clear-start mt-10 bg-white p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              {menu?.map((item, index) => {
                return (
                  <th key={index} className="p-2">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {paginatedData?.map((product, index) => (
              <tr
                key={product._id}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="p-2">
                  {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}.
                </td>
                <td className="p-2">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-3">
                      <div className="">
                        {product?.firstImg && (
                          <Image
                            src={product.firstImg}
                            alt={product.title || "Product Image"}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                        )}
                      </div>
                      <div className="">
                        {product?.secondImg && (
                          <Image
                            src={product.secondImg}
                            alt={product.title || "Product Image"}
                            width={40}
                            height={40}
                            className="rounded-lg"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-2">{product?.title}</td>
                <td className="p-2">{product?.category}</td>
                <td className="p-2">${product.originalPrice}</td>
                <td className="p-2">${product.price}</td>
                <td className="p-2">${product.discount}</td>
                <td className="p-2">
                  <div className="flex gap-3">
                    <div className="cursor-pointer text-2xl hover:text-[#E85363] duration-700">
                      <MdEditSquare
                        onClick={() => {
                          setEditById(product?._id);
                          handleShowModal();
                        }}
                      />
                    </div>
                    <div className="cursor-pointer text-2xl hover:text-[#E85363] duration-700">
                      <AiFillDelete
                        onClick={() => handleDelete(product?._id)}
                      />
                    </div>
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
