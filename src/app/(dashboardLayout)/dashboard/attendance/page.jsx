"use client";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useGetEmployeeQuery } from "../../../../redux/features/employeeApi/EmployeeApi";
import { useAddAttendanceMutation } from "../../../../redux/features/attendanceApi/AttendanceApi";
import Loading from "../../../../components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";

const Attendance = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [attendanceData, setAttendanceData] = useState({});
  const { data: employees, isLoading, refetch } = useGetEmployeeQuery();
  const [addAttendance] = useAddAttendanceMutation();

  // Initialize attendance data when employees or date changes
  useEffect(() => {
    if (employees && selectedDate) {
      const initialData = {};
      employees.forEach((emp) => {
        const existingRecord = emp.attendanceRecords?.find(
          (a) => a.date.split("T")[0] === selectedDate
        );
        initialData[emp.number] = {
          present: existingRecord?.present || false,
          absent: existingRecord?.absent || false,
        };
      });
      setAttendanceData(initialData);
    }
  }, [employees, selectedDate]);

  // Filter by search
  const search = employees?.filter((emp) => {
    const term = searchTerm.toLowerCase();
    return (
      emp.name.toLowerCase().includes(term) ||
      emp.number.toString().toLowerCase().includes(term)
    );
  });

  // Handle checkbox
  const handleCheckboxChange = (number, field) => {
    setAttendanceData((prev) => ({
      ...prev,
      [number]: {
        ...prev[number],
        [field]: !prev[number]?.[field],
        ...(field === "present"
          ? { absent: false }
          : field === "absent"
          ? { present: false }
          : {}),
      },
    }));
  };

  // Handle save
  const handleSave = async () => {
    if (!selectedDate) {
      toast.error("Please select a date!");
      return;
    }

    const anySelected = Object.values(attendanceData).some(
      (record) => record.present || record.absent
    );
    if (!anySelected) {
      toast.error("Please select at least one employee");
      return;
    }

    try {
      let duplicateFound = false;

      for (const [number, record] of Object.entries(attendanceData)) {
        const emp = employees.find((e) => e.number === Number(number));
        if (!emp) continue;

        // Skip if nothing selected
        if (!record.present && !record.absent) continue;

        // Prevent duplicate attendance
        const alreadyRecorded = emp.attendanceRecords?.some(
          (a) => a.date.split("T")[0] === selectedDate
        );

        if (alreadyRecorded) {
          duplicateFound = true;
          toast.error(
            `Attendance for ${emp.name} already recorded for this date`
          );
          continue;
        }

        // Post new attendance
        await addAttendance({
          date: selectedDate,
          name: emp.name,
          number: emp.number,
          present: record.present,
          absent: record.absent,
        }).unwrap();
      }

      if (!duplicateFound) toast.success("Attendance saved successfully!");
      refetch();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save attendance");
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

        <div className="flex gap-3 items-center mt-2 md:mt-0">
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => {
              setSelectedDate(e.target.value);
              refetch();
            }}
            className="border border-gray-300 rounded-md px-2 py-2 text-sm"
          />
          <input
            type="text"
            className="py-2 px-3 w-[250px] rounded-md border border-gray-200 text-sm focus:outline-none"
            placeholder="Search employee..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="bg-[#333333] text-white text-2xl py-[6px] px-3 rounded-md">
            <CiSearch />
          </span>
        </div>
      </div>

      <div className="overflow-x-auto mt-5 bg-white md:p-5">
        <table className="w-full">
          <thead>
            <tr className="md:text-[14px] text-[#333333] bg-gray-200 border border-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Present</th>
              <th className="p-2">Absent</th>
            </tr>
          </thead>
          <tbody>
            {search?.map((emp, index) => (
              <tr
                key={emp._id}
                className="text-sm border border-gray-200 text-left"
              >
                <td className="px-2 p-1">{index + 1}.</td>
                <td className="px-2 p-1">{emp.name}</td>
                <td className="px-2 p-1">{emp.number}</td>
                <td className="px-2 p-1 text-center">
                  <input
                    type="checkbox"
                    checked={attendanceData[emp.number]?.present || false}
                    onChange={() => handleCheckboxChange(emp.number, "present")}
                  />
                </td>
                <td className="px-2 p-1 text-center">
                  <input
                    type="checkbox"
                    checked={attendanceData[emp.number]?.absent || false}
                    onChange={() => handleCheckboxChange(emp.number, "absent")}
                  />
                </td>
              </tr>
            ))}
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
