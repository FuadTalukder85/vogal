"use client";
import { useState } from "react";
import { FiEdit, FiPrinter } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import {
  useGetPaymentsQuery,
  useUpdatePaymentMutation,
} from "../../../../redux/features/paymentApi/PaymentApi";
import Link from "next/link";
import Loading from "../../../../components/Loading/Loading";
import { useGetCourierQuery } from "../../../../redux/features/courierApi/CourierApi";
import { useGetEmployeeQuery } from "../../../../redux/features/employeeApi/EmployeeApi";
import toast, { Toaster } from "react-hot-toast";
import ReactPaginate from "react-paginate";

const AllOrder = () => {
  const { data, isLoading, refetch } = useGetPaymentsQuery();
  const { data: employee } = useGetEmployeeQuery();
  const { data: courier } = useGetCourierQuery();
  const [updatePayment] = useUpdatePaymentMutation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newNote, setNewNote] = useState("");
  const [openModal, setOpenModal] = useState(false);
  // filter
  const [selectedFilter, setSelectedFilter] = useState("all");
  // pagination
  const [currentPage, setCurrentPage] = useState(0);

  const sortedDate = data
    ?.slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const search = sortedDate?.filter((dt) => {
    const term = searchTerm.toLowerCase();
    return (
      dt.invoiceNumber.toString().toLowerCase().includes(term) ||
      // dt.name.toLowerCase().includes(term) ||
      // dt.email.toLowerCase().includes(term) ||
      dt.number.toLowerCase().includes(term)
    );
  });

  const handleUpdate = async (id, field, value) => {
    try {
      if (!value) return;
      const updateData = { [field]: value };
      await updatePayment({ id, data: updateData }).unwrap();
      refetch();
      toast.success(`${field} updated successfully`, { position: "top-right" });
    } catch (err) {
      toast.error(`Failed to update ${field}`);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) return toast.error("Please write something!");
    try {
      await updatePayment({
        id: selectedOrder._id,
        data: { note: newNote },
      }).unwrap();
      toast.success("Note added successfully!");
      setNewNote("");
      refetch();
      setOpenModal(false);
    } catch {
      toast.error("Failed to add note");
    }
  };

  // filter
  const itemsPerPage = 10;
  const newOrder = search?.filter((dt) => dt.status === "Pending");
  const cancelOrder = search?.filter((dt) => dt.status === "Cancel");
  const returnOrder = search?.filter((dt) => dt.status === "Return");
  const completeOrder = search?.filter((dt) => dt.status === "Completed");
  const shipmentOrder = search?.filter((dt) => dt.status === "Shipment");
  const processingOrder = search?.filter((dt) => dt.status === "Processing");
  const filteredOrders =
    selectedFilter === "all"
      ? search
      : search?.filter((order) => order.status === selectedFilter);

  // pagination
  const offset = currentPage * itemsPerPage;
  const currentItems = filteredOrders?.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredOrders?.length / itemsPerPage);
  console.log("currentItems", currentItems);
  // handle page click
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  if (isLoading) return <Loading />;
  return (
    <div className="p-3 md:p-10">
      <Toaster />
      <div className="md:flex justify-between">
        <div className="hidden md:flex justify-center">
          <h5 className="text-xl font-semibold">All orders</h5>
        </div>

        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-2 md:px-5 w-[300px] rounded-s-md focus:outline-none border border-gray-200 text-sm"
            placeholder="Type invoice or customer phone..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="bg-[#333333] text-white text-2xl hover:bg-[#40B884] transition-all duration-500 py-[10px] px-3 md:px-7 rounded-e-md cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>
      {/* filter */}
      <div>
        <ul className="grid grid-cols-2 md:flex gap-2 md:gap-5 items-center py-5 capitalize">
          {[
            { label: "All", value: "all", count: search?.length || 0 },
            { label: "Pending", value: "Pending", count: newOrder.length },
            {
              label: "Processing",
              value: "Processing",
              count: processingOrder.length,
            },
            {
              label: "Shipment",
              value: "Shipment",
              count: shipmentOrder.length,
            },
            {
              label: "Completed",
              value: "Completed",
              count: completeOrder.length,
            },
            { label: "Return", value: "Return", count: returnOrder.length },
            { label: "Cancel", value: "Cancel", count: cancelOrder.length },
          ].map((item) => (
            <li
              key={item.value}
              onClick={() => setSelectedFilter(item.value)}
              className={`px-3 py-1 border border-[#40B884] rounded-md cursor-pointer transition-all duration-300 ${
                selectedFilter === item.value
                  ? "bg-[#40B884] text-white"
                  : "bg-white text-[#333333]"
              }`}
            >
              {item.label}
              <span className="ml-2 bg-gray-200 px-2 rounded-md text-[#333333] font-semibold">
                {item.count}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-x-auto mt-3 bg-white md:p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SL</th>
              <th className="p-2">Invoice No</th>
              <th className="p-2">Order Time</th>
              <th className="p-2">Customer Info</th>
              <th className="p-2">Total Item</th>
              <th className="p-2">Amount</th>
              <th className="p-2">Process By</th>
              <th className="p-2">Courier</th>
              <th className="p-2">Status</th>
              <th className="p-2">Note</th>
              <th className="p-2">Invoice</th>
            </tr>
          </thead>

          <tbody>
            {currentItems?.map((order, index) => (
              <tr
                key={index}
                className="text-sm border border-gray-200 text-left hover:bg-gray-50"
              >
                <td className="px-2 p-1">{index + 1}.</td>
                <td className="px-2 p-1">{order.invoiceNumber}</td>
                <td className="px-2 p-1">
                  {order.date} {order.time}
                </td>
                <td className="px-2 p-1">
                  {order.name}
                  <p>{order.number}</p>
                </td>
                <td className="px-2 p-1">{order.quantity}</td>
                <td className="px-2 p-1">${order.price}</td>

                <td className="px-2 p-1">
                  <select
                    className={`outline-none border-2 border-gray-200 rounded-md px-1 ${
                      !order.processBy ? "text-red-500" : ""
                    }`}
                    value={order.processBy || ""}
                    onChange={(e) =>
                      handleUpdate(order._id, "processBy", e.target.value)
                    }
                  >
                    <option value="">Pending</option>
                    {employee?.map((emp) => (
                      <option key={emp._id} value={emp.name}>
                        {emp.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="px-2 p-1">
                  <select
                    className={`outline-none border-2 border-gray-200 rounded-md px-1 ${
                      !order.courier ? "text-red-500" : " "
                    }`}
                    value={order.courier || ""}
                    onChange={(e) =>
                      handleUpdate(order._id, "courier", e.target.value)
                    }
                  >
                    <option value="">Select courier</option>
                    {courier?.map((cr) => (
                      <option key={cr._id} value={cr.name}>
                        {cr.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td className="px-2 p-1">
                  <select
                    className={`outline-none border-2 border-gray-200 rounded-md px-1 ${
                      order.status === "Pending" ? "text-red-500" : ""
                    }`}
                    value={order.status || ""}
                    onChange={(e) =>
                      handleUpdate(order._id, "status", e.target.value)
                    }
                  >
                    <option value="Pending">Pending</option>
                    <option value="Cancel">Cancel</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipment">Shipment</option>
                    <option value="Return">Return</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>

                {/* Note section */}
                <td className="px-2 p-1">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        setSelectedOrder(order);
                        setOpenModal(true);
                      }}
                      className="flex items-center gap-1 text-gray-600 hover:text-black"
                    >
                      <span>
                        {Array.isArray(order.note) ? (
                          <span className="font-semibold text-[#40B884] capitalize">
                            {order.note.slice(-1)[0]}
                          </span>
                        ) : (
                          order.note || (
                            <span className="text-red-500">Add note</span>
                          )
                        )}
                      </span>
                      <FiEdit />
                    </button>
                  </div>
                </td>

                <td className="px-2 p-1 text-xl">
                  <Link href={`/dashboard/all-orders/${order._id}`}>
                    <FiPrinter className="cursor-pointer hover:text-[#E85363] duration-700" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* note modal */}
      {openModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[500px] relative">
            <h3 className="text-lg font-semibold mb-3">
              Notes for Invoice #{selectedOrder.invoiceNumber}
            </h3>
            <div className="max-h-[150px] overflow-y-auto mb-3 border border-gray-200 p-2 rounded-md">
              {Array.isArray(selectedOrder.note) &&
              selectedOrder.note.length > 0 ? (
                selectedOrder.note.map((n, i) => (
                  <p key={i} className="border-b py-1 text-sm">
                    ~ {n}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 text-sm italic">
                  No previous notes
                </p>
              )}
            </div>
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Write new note..."
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none mb-3"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleAddNote}
                className="px-4 py-2 bg-[#40B884] text-white rounded-md hover:bg-[#2d8a63]"
              >
                Add Note
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-end mt-5 md:mt-10">
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center space-x-2"}
          pageClassName={"px-3 py-1 border rounded-md cursor-pointer"}
          previousClassName={"px-3 py-1 border rounded-md cursor-pointer"}
          nextClassName={"px-3 py-1 border rounded-md cursor-pointer"}
          activeClassName={"bg-[#40B884] text-white"}
        />
      </div>
    </div>
  );
};

export default AllOrder;
