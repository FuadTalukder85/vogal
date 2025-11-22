"use client";
import { useState, useMemo } from "react";
import { FiEdit } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import FormInput from "../../../../../../components/ReusableForm/FormInput";
import {
  useGetSalaryQuery,
  useAddSalaryMutation,
} from "../../../../../../redux/features/salaryApi/SalaryApi";
import Loading from "../../../../../../components/Loading/Loading";
import toast, { Toaster } from "react-hot-toast";

const Salary = () => {
  const [openModal, setOpenModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [salaryBreakdown, setSalaryBreakdown] = useState({
    houseRent: 0,
    professionalTax: 0,
    overtime: 0,
    commission: 0,
  });

  const { data: salaries, isLoading, refetch } = useGetSalaryQuery();
  const [addSalary] = useAddSalaryMutation();
  const filteredEmployees = useMemo(() => {
    if (!salaries) return [];
    return salaries.filter((emp) => {
      const idNo = String(emp.id_no).toLowerCase();
      const number = String(emp.number).toLowerCase();
      return (
        emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        idNo.includes(searchTerm.toLowerCase()) ||
        number.includes(searchTerm.toLowerCase())
      );
    });
  }, [salaries, searchTerm]);

  const handleSalaryInput = (field, value) => {
    setSalaryBreakdown((prev) => ({ ...prev, [field]: Number(value) || 0 }));
  };

  const netPayableAmount = useMemo(() => {
    if (!selectedEmployee) return 0;
    const basicSalary = Number(selectedEmployee.salary ?? 0);
    const houseRent = Number(salaryBreakdown.houseRent);
    const overtime = Number(salaryBreakdown.overtime);
    const commission = Number(salaryBreakdown.commission);
    const professionalTax = Number(salaryBreakdown.professionalTax);
    return basicSalary + houseRent + overtime + commission - professionalTax;
  }, [selectedEmployee, salaryBreakdown]);

  const handleConfirmSalary = async () => {
    if (!selectedEmployee) {
      alert("Please select an employee!");
      return;
    }
    const payload = {
      id_no: selectedEmployee.id_no,
      name: selectedEmployee.name,
      number: selectedEmployee.number,
      designation: selectedEmployee.designation || "",
      salary: selectedEmployee.salary || 0,
      houseRent: salaryBreakdown.houseRent,
      professionalTax: salaryBreakdown.professionalTax,
      overtime: salaryBreakdown.overtime,
      commission: salaryBreakdown.commission,
      netPayable: netPayableAmount,
      remarks: "",
      status: "Paid",
      generateDate: new Date().toISOString(),
    };
    try {
      await addSalary(payload).unwrap();
      toast.success("Salary generated successfully", { position: "top-right" });
      setOpenModal(false);
      setSalaryBreakdown({
        houseRent: 0,
        professionalTax: 0,
        overtime: 0,
        commission: 0,
      });
      setSelectedEmployee(null);
      refetch();
    } catch (error) {
      console.log(error);
      toast.error("Error generating salary", { position: "top-right" });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="p-3 md:p-10">
      <Toaster />
      <div className="md:flex justify-between">
        <h5 className="hidden md:block text-xl font-semibold">
          Generate Salary
        </h5>
        <div className="flex items-center mt-2 md:mt-0">
          <input
            type="text"
            className="py-3 px-5 w-[280px] rounded-s-md border focus:outline-none"
            placeholder="Search employee..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="bg-[#333] text-white text-2xl hover:bg-[#40B884] transition-all duration-300 py-3 px-5 rounded-e-md cursor-pointer">
            <CiSearch />
          </span>
        </div>
      </div>

      <div className="overflow-x-auto mt-3 bg-white md:p-5 rounded-md shadow">
        <table className="w-full">
          <thead>
            <tr className="text-[14px] text-[#333] bg-gray-200 text-left">
              <th className="p-2">SN</th>
              <th className="p-2">Generate date</th>
              <th className="p-2">Employee ID</th>
              <th className="p-2">Designation</th>
              <th className="p-2">Name</th>
              <th className="p-2">Number</th>
              <th className="p-2">Salary</th>
              <th className="p-2">Payable Salary</th>
              <th className="p-2">Remarks</th>
              <th className="p-2">Status</th>
              <th className="p-2">Generate Salary</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp, index) => {
              const salaryValue = emp.salary ?? 0;
              const netPayable =
                Number(emp.salary ?? 0) +
                Number(emp.houseRent ?? 0) +
                Number(emp.overtime ?? 0) +
                Number(emp.commission ?? 0) -
                Number(emp.professionalTax ?? 0);

              return (
                <tr key={index} className="text-sm border-b">
                  <td className="px-2 p-1">{index + 1}</td>
                  <td className="px-2 p-1">
                    {emp.generateDate
                      ? new Date(emp.generateDate).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="px-2 p-1">{emp.id_no}</td>
                  <td className="px-2 p-1">{emp.designation ?? "N/A"}</td>
                  <td className="px-2 p-1">{emp.name}</td>
                  <td className="px-2 p-1">{emp.number}</td>
                  <td className="px-2 p-1">${salaryValue}</td>
                  <td className="px-2 p-1">${netPayable}</td>
                  <td className="px-2 p-1">{emp.remarks ?? "N/A"}</td>
                  <td className="px-2 p-1">{emp.status ?? "Pending"}</td>
                  <td className="px-2 p-1">
                    <div className="flex items-center gap-3 text-xl">
                      <button
                        onClick={() => {
                          setSelectedEmployee(emp);
                          setOpenModal(true);
                        }}
                      >
                        <FiEdit className="cursor-pointer hover:text-[#40B884] duration-200" />
                      </button>
                      <span className="text-sm bg-[#40B884] text-white px-1 rounded-sm cursor-pointer hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500">
                        Payslip
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {openModal && selectedEmployee && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="bg-white p-7 rounded-xl w-[92%] md:w-[520px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] relative border border-gray-200"
            >
              <button
                onClick={() => setOpenModal(false)}
                className="absolute top-3 right-3 text-3xl text-gray-500 hover:text-red-500 transition"
              >
                <IoClose />
              </button>
              <h3 className="text-xl font-semibold text-[#329e6b] mb-5">
                Salary Breakdown
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between bg-gray-100 py-3 px-4 rounded-lg border">
                  <span className="font-semibold text-gray-700">
                    Basic Salary:
                  </span>
                  <span className="font-bold text-[#329e6b]">
                    ${selectedEmployee.salary || 0}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormInput
                    label="Professional Tax"
                    placeholder="$0"
                    type="number"
                    value={salaryBreakdown.professionalTax}
                    onChange={(e) =>
                      handleSalaryInput("professionalTax", e.target.value)
                    }
                  />
                  <FormInput
                    label="House Rent Allowance"
                    placeholder="$0"
                    type="number"
                    value={salaryBreakdown.houseRent}
                    onChange={(e) =>
                      handleSalaryInput("houseRent", e.target.value)
                    }
                  />
                  <FormInput
                    label="Overtime Amount"
                    placeholder="$0"
                    type="number"
                    value={salaryBreakdown.overtime}
                    onChange={(e) =>
                      handleSalaryInput("overtime", e.target.value)
                    }
                  />
                  <FormInput
                    label="Commission"
                    placeholder="$0"
                    type="number"
                    value={salaryBreakdown.commission}
                    onChange={(e) =>
                      handleSalaryInput("commission", e.target.value)
                    }
                  />
                </div>
                <div className="flex justify-between border-t pt-4 mt-2">
                  <span className="font-semibold text-gray-800">
                    Net Payable:
                  </span>
                  <span className="font-bold text-[#40B884] text-lg">
                    ${netPayableAmount.toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleConfirmSalary}
                className="w-full mt-3 bg-[#40B884] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-2 px-7 rounded-md text-sm uppercase"
              >
                Confirm & Generate Salary
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Salary;
