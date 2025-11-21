"use client";
import { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { useGetAttendanceQuery } from "../../../../../../redux/features/attendanceApi/AttendanceApi";
import Loading from "../../../../../../components/Loading/Loading";
import { Toaster } from "react-hot-toast";
import { LuScanEye } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import Link from "next/link";

const Attendance = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentMonthName = months[new Date().getMonth()];
  const [selectedMonth, setSelectedMonth] = useState(currentMonthName);
  const [searchTerm, setSearchTerm] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const { data, isLoading } = useGetAttendanceQuery();

  const cleanData = useMemo(() => {
    if (!data) return [];
    return data.filter(
      (item) =>
        item &&
        item.name &&
        item.number &&
        item.date &&
        (item.present !== undefined || item.absent !== undefined)
    );
  }, [data]);

  const monthFiltered = useMemo(() => {
    if (!cleanData.length) return [];

    return cleanData.filter((item) => {
      const month = new Date(item.date).toLocaleString("en-US", {
        month: "long",
      });
      return month === selectedMonth;
    });
  }, [cleanData, selectedMonth]);

  const grouped = useMemo(() => {
    const map = {};
    monthFiltered.forEach((rec) => {
      if (!map[rec.number]) {
        map[rec.number] = {
          id_no: rec.id_no || "",
          name: rec.name,
          number: rec.number,
          totalPresent: 0,
          totalAbsent: 0,
        };
      }
      if (rec.present) map[rec.number].totalPresent++;
      if (rec.absent) map[rec.number].totalAbsent++;
    });
    return Object.values(map);
  }, [monthFiltered]);

  const search = grouped.filter((emp) => {
    const t = searchTerm.toLowerCase();
    return (
      emp?.name?.toLowerCase().includes(t) ||
      emp?.id_no?.toString().toLowerCase().includes(t) ||
      emp?.number?.toString().toLowerCase().includes(t)
    );
  });

  // modal
  const modalRecords = useMemo(() => {
    if (!selectedEmployee) return [];
    return monthFiltered.filter(
      (rec) => rec.number === selectedEmployee.number
    );
  }, [selectedEmployee, monthFiltered]);

  if (isLoading) return <Loading />;

  return (
    <div className="p-3 md:p-10">
      <Toaster />
      <div className="md:flex justify-between items-center">
        <h5 className="hidden md:flex text-xl font-semibold">
          Attendance Month: {selectedMonth}
        </h5>
        <div className="flex items-center mt-2 md:mt-0">
          <select
            className="w-full py-2 px-3 rounded-md mr-5"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">Select Month</option>
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="py-2 px-3 w-[250px] rounded-l-md border border-gray-200 text-sm focus:outline-none"
            placeholder="Search by Name, ID No., Number"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="bg-[#333333] text-white text-2xl py-[6px] px-3 rounded-r-md">
            <CiSearch />
          </span>
          <Link
            href="/dashboard/payroll/addAttendance"
            className="flex gap-2 items-center ml-5 w-full md:w-auto bg-[#40B884] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-2 px-7 rounded-md text-sm uppercase"
          >
            <span className="text-xl">
              <FaPlus />
            </span>
            Attendance
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto mt-5 bg-white md:p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">ID No.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Total Present</th>
              <th className="p-2">Total Absent</th>
              <th className="p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {search.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center p-4 text-gray-500">
                  No data found
                </td>
              </tr>
            ) : (
              search.map((emp, index) => (
                <tr key={index} className="text-sm border border-gray-200">
                  <td className="px-2 p-1">{index + 1}.</td>
                  <td className="px-2 p-1">{emp.id_no || "-"}</td>
                  <td className="px-2 p-1">{emp.name}</td>
                  <td className="px-2 p-1">{emp.number}</td>
                  <td className="px-2 p-1">{emp.totalPresent}</td>
                  <td className="px-2 p-1">{emp.totalAbsent}</td>
                  <td className="px-2 p-1">
                    <button
                      onClick={() => {
                        setSelectedEmployee(emp);
                        setOpenModal(true);
                      }}
                      className="text-xl cursor-pointer hover:text-[#40B884] duration-200"
                    >
                      <LuScanEye />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* attendance modal */}
      {openModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-md w-[90%] md:w-[600px]">
            <h2 className="text-xl font-semibold mb-3">
              {selectedEmployee.name} - {selectedMonth} Attendance
            </h2>
            <table className="w-full mb-5">
              <thead>
                <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
                  <th className="p-2">SN</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Present</th>
                  <th className="p-2">Absent</th>
                </tr>
              </thead>
              <tbody>
                {modalRecords.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="text-center p-3">
                      No attendance found
                    </td>
                  </tr>
                ) : (
                  <>
                    {modalRecords.map((rec, index) => (
                      <tr
                        key={rec._id || index}
                        className="text-sm border border-gray-200"
                      >
                        <td className="p-1">{index + 1}</td>
                        <td className="p-1">
                          {new Date(rec.date).toLocaleDateString("en-GB")}
                        </td>
                        <td className="p-1">{rec.present ? 1 : 0}</td>
                        <td className="p-1">{rec.absent ? 1 : 0}</td>
                      </tr>
                    ))}

                    {/* footer */}
                    <tr className="bg-gray-100 font-semibold border border-gray-300">
                      <td className="p-2 text-center" colSpan={2}>
                        Total
                      </td>
                      <td className="p-2 text-green-700">
                        {modalRecords.reduce(
                          (sum, rec) => sum + (rec.present ? 1 : 0),
                          0
                        )}
                      </td>
                      <td className="p-2 text-red-700">
                        {modalRecords.reduce(
                          (sum, rec) => sum + (rec.absent ? 1 : 0),
                          0
                        )}
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>

            <div className="flex justify-between">
              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-400 text-white px-5 py-2 rounded-md"
              >
                Close
              </button>
              <button className="bg-[#40B884] text-white px-5 py-2 rounded-md">
                Approved for salary
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;
