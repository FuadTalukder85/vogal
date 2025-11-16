"use client";

import { useForm } from "react-hook-form";
import FormInput from "../../../../components/ReusableForm/FormInput";
import FormSelect from "../../../../components/ReusableForm/FormSelect";
import FormFileUpload from "../../../../components/ReusableForm/FormFileUpload";
import { useState } from "react";
import { useAddCourierMutation } from "../../../../redux/features/courierApi/CourierApi";
import axios from "axios";

const AddCourier = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addCourier] = useAddCourierMutation();
  // Image states
  const [image, setImage] = useState(null);
  // post on imgBB
  const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_API;
  const uploadToImgBB = async (imageFile) => {
    if (!imageFile) return null;
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
      formData
    );
    return res.data?.data?.display_url || null;
  };
  const onSubmit = async (data) => {
    try {
      // Upload images to imgbb
      const imageUrl = await uploadToImgBB(image);

      const courierData = {
        name: data.name,
        status: data.status || "",
        image: imageUrl,
      };
      await addCourier(courierData);
      reset();
      setImage(null);
    } catch (error) {
      console.error("Add courier failed:", error);
    }
  };

  return (
    <div className=" md:p-10">
      <h1 className="text-xl font-semibold py-5 px-3 md:px-0">Add Courier</h1>
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
            {/* <FormInput
              label="Total Delivery"
              required
              type="number"
              placeholder="Type total delivery"
              register={register("totalDelivery", {
                required: "Total delivery is required",
              })}
              error={errors.totalDelivery}
            />
          </div>

          <div className="md:flex gap-5">
            <FormInput
              label="Total Return"
              required
              type="number"
              placeholder="Enter total return"
              register={register("totalReturn", {
                required: "Total return is required",
              })}
              error={errors.totalReturn}
            /> */}
            <FormSelect
              label="Status"
              required
              options={[
                { value: "Active", label: "Active" },
                { value: "Inactive", label: "Inactive" },
                { value: "Dismiss", label: "Dismiss" },
              ]}
              register={register("status", {
                required: "Status is required",
              })}
              error={errors.status}
            />
            <FormFileUpload
              label="Thumbnail Image"
              file={image}
              setFile={setImage}
              error={errors.image}
            />
          </div>

          <div className="md:flex justify-end">
            <button className="w-full md:w-auto mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase">
              Add Courier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourier;
