"use client";
import { useForm } from "react-hook-form";
import FormInput from "../../../../../../components/ReusableForm/FormInput";
import FormSelect from "../../../../../../components/ReusableForm/FormSelect";
import {
  useGetSingleEmployeeQuery,
  useUpdateEmployeeMutation,
} from "../../../../../../redux/features/employeeApi/EmployeeApi";
import Loading from "../../../../../../components/Loading/Loading";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

const UpdateEmployee = ({ params }) => {
  const router = useRouter();
  const { data, isLoading } = useGetSingleEmployeeQuery(params?.employeeId);
  const [updateEmployee] = useUpdateEmployeeMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (data) {
      reset(data);
    }
  }, [data, reset]);

  const onSubmit = async (formData) => {
    try {
      await updateEmployee({ id: params?.employeeId, body: formData }).unwrap();
      toast.success("Employee updated successfully!", {
        position: "top-right",
      });
      setTimeout(() => {
        router.push("/dashboard/employee");
      }, 800);
    } catch (error) {
      console.error("Update failed:", error);
      toast.error("Failed to update employee", {
        position: "top-right",
      });
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="md:p-10">
      <Toaster />
      <h1 className="text-xl font-semibold py-5 px-3 md:px-0">
        Update Employee
      </h1>

      <div className="mx-auto bg-base-100 p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="md:flex gap-5">
            <FormInput
              label="Employee ID"
              required
              placeholder="ID here"
              register={register("id_no", { required: "Id no is required" })}
              error={errors.id_no}
            />
            <FormInput
              label="Name"
              required
              placeholder="Name here"
              register={register("name", { required: "Name is required" })}
              error={errors.name}
            />
            <FormInput
              label="Number"
              required
              type="number"
              placeholder="Type number"
              register={register("number", { required: "Number is required" })}
              error={errors.number}
            />
          </div>
          <div className="md:flex gap-5">
            <FormInput
              label="Email"
              required
              type="email"
              placeholder="Email"
              register={register("email", { required: "Email is required" })}
              error={errors.email}
            />
            <FormInput
              label="Designation"
              required
              placeholder="Designation"
              register={register("designation", {
                required: "Designation is required",
              })}
              error={errors.designation}
            />
          </div>
          <div className="md:flex gap-5">
            <FormInput
              label="Address"
              required
              placeholder="Address"
              register={register("address", {
                required: "Address is required",
              })}
              error={errors.address}
            />
            <FormInput
              label="Emergency Contact"
              required
              type="number"
              placeholder="Emergency Contact"
              register={register("emergency_contact", {
                required: "Emergency Contact is required",
              })}
              error={errors.emergency_contact}
            />
            <FormInput
              label="Salary"
              required
              type="number"
              placeholder="Salary"
              register={register("salary", { required: "Salary is required" })}
              error={errors.salary}
            />
          </div>
          <div className="md:flex gap-5">
            <FormInput
              label="Remarks"
              required
              placeholder="Remarks"
              register={register("remarks", {
                required: "Remarks is required",
              })}
              error={errors.remarks}
            />
            <FormSelect
              label="Status"
              required
              options={[
                { value: "Active", label: "Active" },
                { value: "Sick", label: "Sick" },
                { value: "Leave", label: "Leave" },
                { value: "Resign", label: "Resign" },
              ]}
              register={register("status", { required: "Status is required" })}
              error={errors.status}
            />
          </div>
          <div className="md:flex justify-end">
            <button className="w-full md:w-auto mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase">
              Update Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateEmployee;
