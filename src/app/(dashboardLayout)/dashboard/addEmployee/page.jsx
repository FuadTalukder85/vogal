"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../../redux/features/productApi/ProductApi";
import FormInput from "../../../../components/ReusableForm/FormInput";
import FormSelect from "../../../../components/ReusableForm/FormSelect";
import FormTextArea from "../../../../components/ReusableForm/FormTextArea";
import FormFileUpload from "../../../../components/ReusableForm/FormFileUpload";
import axios from "axios";

const AddEmployee = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addProduct] = useAddProductMutation();

  const onSubmit = async (data) => {
    try {
      await addProduct(productData);
      reset();
    } catch (error) {
      console.error("Add employee failed:", error);
    }
  };

  return (
    <div className=" md:p-10">
      <h1 className="text-4xl py-5 px-3 md:px-0">Add Employee</h1>
      <div className="mx-auto bg-base-100 p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="md:flex gap-5">
            <FormInput
              label="Name"
              required
              placeholder="Name here"
              register={register("name", { required: "Name is required" })}
              error={errors.title}
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
              placeholder="email"
              register={register("email", {
                required: "Email is required",
              })}
              error={errors.email}
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
              placeholder="emergency_contact"
              register={register("price", {
                required: "Emergency Contact is required",
              })}
              error={errors.emergency_contact}
            />
            <FormInput
              label="Salary"
              required
              type="number"
              placeholder="salary"
              register={register("salary", {
                required: "Salary is required",
              })}
              error={errors.salary}
            />
          </div>

          {/* Image Uploads */}
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
              register={register("status", {
                required: "Status is required",
              })}
              error={errors.status}
            />
          </div>

          <div className="md:flex justify-end">
            <button className="w-full md:w-auto mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
