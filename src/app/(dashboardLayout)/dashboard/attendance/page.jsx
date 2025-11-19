"use client";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useGetEmployeeQuery } from "../../../../redux/features/employeeApi/EmployeeApi";
import {
  useAddAttendanceMutation,
  useGetAttendanceQuery,
} from "../../../../redux/features/attendanceApi/AttendanceApi";
import Loading from "../../../../components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceData, setAttendanceData] = useState({});
  const { data: employees, isLoading } = useGetEmployeeQuery();
  const [addAttendance] = useAddAttendanceMutation();
  const { data: attendanceRecords, refetch } = useGetAttendanceQuery();

  // initialize attendance data for selected date
  useEffect(() => {
    if (employees && selectedDate && attendanceRecords) {
      const initialData = {};
      employees.forEach((emp) => {
        const existingRecord = attendanceRecords.find(
          (a) => a.number === emp.number && a.date === selectedDate
        );

        initialData[emp.number] = {
          present: existingRecord?.present || false,
          absent: existingRecord?.absent || false,
          tempPresent: false,
          tempAbsent: false,
        };
      });
      setAttendanceData(initialData);
    }
  }, [employees, selectedDate, attendanceRecords]);

  // search
  const search = employees?.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name?.toLowerCase().includes(term) ||
      emp.id_no?.toString().toLowerCase().includes(term) ||
      emp.number?.toString().toLowerCase().includes(term)
    );
  });
  const handleCheckboxChange = (number, field) => {
    if (!selectedDate) {
      toast.error("Please select a date first!", { position: "top-right" });
      return;
    }
    setAttendanceData((prev) => {
      if (!prev[number]) return prev;

      return {
        ...prev,
        [number]: {
          ...prev[number],
          [field === "present" ? "tempPresent" : "tempAbsent"]:
            !prev[number][field === "present" ? "tempPresent" : "tempAbsent"],
        },
      };
    });
  };

  // save attendance
  const handleSave = async () => {
    if (!selectedDate) {
      toast.error("Please select a date!");
      return;
    }
    const anySelected = Object.values(attendanceData).some(
      (record) => record.tempPresent || record.tempAbsent
    );
    if (!anySelected) {
      toast.error("Please select at least one employee to update", {
        position: "top-right",
      });
      return;
    }
    try {
      let savedCount = 0;
      for (const [number, record] of Object.entries(attendanceData)) {
        const emp = employees.find((e) => e.number.toString() === number);
        if (!emp) continue;
        const present = record.tempPresent;
        const absent = record.tempAbsent;
        if (!present && !absent) continue;
        await addAttendance({
          date: selectedDate,
          name: emp.name,
          number: emp.number,
          present,
          absent,
        }).unwrap();

        savedCount++;
      }

      if (savedCount > 0) {
        toast.success("Attendance saved successfully!", {
          position: "top-right",
        });
        refetch();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to save attendance", {
        position: "top-right",
      });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-3 md:p-10">
      <Toaster />
      <div className="md:flex justify-between items-center">
        <h5 className="hidden md:flex text-xl font-semibold">
          Employee Attendance
        </h5>

        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              refetch();
            }}
            className="border border-gray-300 rounded-md px-2 py-2 text-sm mr-3"
          />
          <input
            type="text"
            className="py-2 px-3 w-[250px] rounded-l-md border border-gray-200 text-sm focus:outline-none"
            placeholder="Search by Name, ID No., Number"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="bg-[#333333] text-white text-2xl py-[6px] px-3 rounded-r-md">
            <CiSearch />
          </span>
        </div>
      </div>

      <div className="overflow-x-auto mt-5 bg-white md:p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">Id No.</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Present</th>
              <th className="p-2">Absent</th>
            </tr>
          </thead>
          <tbody>
            {search?.map((emp, index) => {
              const record = attendanceData[emp.number];
              return (
                <tr
                  key={emp._id}
                  className="text-sm border border-gray-200 text-left"
                >
                  <td className="px-2 p-1">{index + 1}.</td>
                  <td className="px-2 p-1">{emp.id_no}</td>
                  <td className="px-2 p-1">{emp.name}</td>
                  <td className="px-2 p-1">{emp.number}</td>
                  <td className="px-2 p-1">
                    {record?.present ? (
                      "Present"
                    ) : (
                      <input
                        type="checkbox"
                        checked={record?.tempPresent || false}
                        onChange={() =>
                          handleCheckboxChange(emp.number, "present")
                        }
                      />
                    )}
                  </td>
                  <td className="px-2 p-1">
                    {record?.absent ? (
                      "Absent"
                    ) : (
                      <input
                        type="checkbox"
                        checked={record?.tempAbsent || false}
                        onChange={() =>
                          handleCheckboxChange(emp.number, "absent")
                        }
                      />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="md:flex justify-end">
          <button
            onClick={handleSave}
            className="w-full md:w-auto mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-2 px-7 rounded-md text-sm uppercase"
          >
            Save Change
          </button>
        </div>
      </div>
    </div>
  );
};
export default Attendance;
