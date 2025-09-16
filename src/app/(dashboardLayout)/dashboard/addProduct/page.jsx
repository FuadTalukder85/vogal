"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddProductMutation } from "../../../../redux/features/productApi/ProductApi";
import FormInput from "../../../../components/ReusableForm/FormInput";
import FormSelect from "../../../../components/ReusableForm/FormSelect";
import FormTextArea from "../../../../components/ReusableForm/FormTextArea";
import FormFileUpload from "../../../../components/ReusableForm/FormFileUpload";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [addProduct] = useAddProductMutation();

  // Image states
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("tag", data.tag || "");
      formData.append("category", data.category);
      formData.append("stockProduct", data.stockProduct);
      formData.append("originalPrice", data.originalPrice);
      formData.append("price", data.price);
      formData.append("discount", data.discount || "");
      formData.append("description", data.description);

      firstImage && formData.append("firstImg", firstImage);
      secondImage && formData.append("secondImg", secondImage);
      thirdImage && formData.append("thirdImg", thirdImage);

      await addProduct(formData);
      reset();
      setFirstImage(null);
      setSecondImage(null);
      setThirdImage(null);
    } catch (error) {
      console.error("Add product failed:", error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-4xl py-5">Add Product</h1>
      <div className="mx-auto bg-base-100 p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="md:flex gap-5">
            <FormInput
              label="Title"
              required
              placeholder="Title here"
              register={register("title", { required: "Title is required" })}
              error={errors.title}
            />
            <FormInput
              label="Tag"
              placeholder="Best selling/sale..."
              register={register("tag")}
            />
          </div>

          <div className="md:flex gap-5">
            <FormSelect
              label="Category"
              required
              options={[
                { value: "men", label: "Men" },
                { value: "women", label: "Women" },
                { value: "jewellery", label: "Jewellery" },
                { value: "partyDress", label: "Party Dress" },
                { value: "accessories", label: "Accessories" },
                { value: "bestSeller", label: "Best Sellers" },
              ]}
              register={register("category", {
                required: "Category is required",
              })}
              error={errors.category}
            />
            <FormInput
              label="Stock Product"
              required
              type="number"
              placeholder="Stock Product"
              register={register("stockProduct", {
                required: "Stock is required",
              })}
              error={errors.stockProduct}
            />
          </div>

          <div className="md:flex gap-5">
            <FormInput
              label="Original Price"
              required
              type="number"
              placeholder="Original Price"
              register={register("originalPrice", {
                required: "Original price is required",
              })}
              error={errors.originalPrice}
            />
            <FormInput
              label="Price"
              required
              type="number"
              placeholder="Price"
              register={register("price", { required: "Price is required" })}
              error={errors.price}
            />
            <FormInput
              label="Discount Price"
              type="number"
              placeholder="Discount Price"
              register={register("discount")}
            />
          </div>

          <FormTextArea
            label="Description"
            required
            placeholder="Description here..."
            register={register("description", {
              required: "Description is required",
            })}
            error={errors.description}
          />

          {/* Image Uploads */}
          <div className="md:flex gap-5">
            <FormFileUpload
              label="Thumbnail Image"
              file={firstImage}
              setFile={setFirstImage}
              error={errors.firstImg}
            />
            <FormFileUpload
              label="Second Image"
              file={secondImage}
              setFile={setSecondImage}
              error={errors.secondImg}
            />
            <FormFileUpload
              label="Third Image"
              file={thirdImage}
              setFile={setThirdImage}
              error={errors.thirdImg}
            />
          </div>

          <button className="text-right mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
