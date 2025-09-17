"use client";
import { toast } from "sonner";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/features/productApi/ProductApi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import FormInput from "../../ReusableForm/FormInput";
import FormSelect from "../../ReusableForm/FormSelect";
import FormTextArea from "../../ReusableForm/FormTextArea";
import FormFileUpload from "../../ReusableForm/FormFileUpload";
import { useEffect, useState } from "react";
import axios from "axios";

const UpdatePoductModal = ({ onClose, productId }) => {
  const { data: product } = useGetSingleProductQuery(productId ?? "");
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: product?.category || "",
    },
  });
  useEffect(() => {
    if (product) {
      reset({
        title: product.title,
        tag: product.tag,
        category: product.category,
        stockProduct: product.stockProduct,
        originalPrice: product.originalPrice,
        price: product.price,
        discount: product.discount,
        description: product.description,
      });
    }
  }, [product, reset]);
  // Image states
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);
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
      const firstImgUrl = firstImage
        ? await uploadToImgBB(firstImage)
        : product?.firstImg;
      const secondImgUrl = secondImage
        ? await uploadToImgBB(secondImage)
        : product?.secondImg;
      const thirdImgUrl = thirdImage
        ? await uploadToImgBB(thirdImage)
        : product?.thirdImg;

      const productData = {
        title: data.title,
        tag: data.tag || "",
        category: data.category,
        stockProduct: data.stockProduct,
        originalPrice: data.originalPrice,
        price: data.price,
        discount: data.discount || "",
        description: data.description,
        firstImg: firstImgUrl,
        secondImg: secondImgUrl,
        thirdImg: thirdImgUrl,
      };
      await updateProduct({ id: productId || "", body: productData });
      setFirstImage(null);
      setSecondImage(null);
      setThirdImage(null);
      onClose(true);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      if (isSuccess) {
        toast.success("Product is updated");
      }
    } catch (error) {
      console.error("Update product failed:", error);
    }
  };

  return (
    <div className="fixed overflow-y-scroll top-0 md:top-2 left-0 backdrop-blur-[1px] w-full mx-auto z-50">
      <div className="max-h-[90vh] overflow-y-scroll">
        <div className="p-5 md:w-[80%] mx-auto bg-gray-100">
          <div className="flex justify-between items-center">
            <h1 className="text-center md:text-2xl mb-5">Update product</h1>
            <button
              onClick={onClose}
              className="mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase "
            >
              Close
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="md:flex gap-5">
              <FormInput
                label="Title"
                placeholder="Title here"
                defaultValue={product?.title}
                register={register("title", {
                  required: "Title is required",
                })}
              />
              <FormInput
                label="Tag"
                placeholder="Best selling/sale..."
                defaultValue={product?.tag}
                register={register("tag")}
              />
            </div>
            <div className="md:flex gap-5">
              <FormSelect
                label="Category"
                options={[
                  { value: "men", label: "Men" },
                  { value: "women", label: "Women" },
                  { value: "jewellery", label: "Jewellery" },
                  { value: "partyDress", label: "Party Dress" },
                  { value: "accessories", label: "Accessories" },
                  { value: "bestSeller", label: "Best Sellers" },
                ]}
                register={register("category")}
              />
              <FormInput
                label="Stock Product"
                type="number"
                placeholder="Stock Product"
                defaultValue={product?.stockProduct}
                register={register("stockProduct", {
                  required: "Stock is required",
                })}
              />
            </div>

            <div className="md:flex gap-5">
              <FormInput
                label="Original Price"
                type="number"
                placeholder="Original Price"
                defaultValue={product?.originalPrice}
                register={register("originalPrice", {
                  required: "Original price is required",
                })}
              />
              <FormInput
                label="Price"
                type="number"
                placeholder="Price"
                defaultValue={product?.price}
                register={register("price", {
                  required: "Price is required",
                })}
              />
              <FormInput
                label="Discount Price"
                type="number"
                placeholder="Discount Price"
                defaultValue={product?.discount}
                register={register("discount")}
              />
            </div>

            <FormTextArea
              label="Description"
              required
              placeholder="Description here..."
              defaultValue={product?.description}
              register={register("description", {
                required: "Description is required",
              })}
            />

            {/* Image Uploads */}
            <div className="md:flex gap-5">
              <FormFileUpload
                label="Thumbnail Image"
                file={firstImage}
                setFile={setFirstImage}
                initialImage={product?.firstImg}
              />
              <FormFileUpload
                label="Second Image"
                file={secondImage}
                setFile={setSecondImage}
                initialImage={product?.secondImg}
              />
              <FormFileUpload
                label="Third Image"
                file={thirdImage}
                setFile={setThirdImage}
                initialImage={product?.thirdImg}
              />
            </div>

            <div className="flex justify-end">
              <button className="mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePoductModal;
