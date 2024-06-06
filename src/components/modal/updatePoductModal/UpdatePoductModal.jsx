"use client";
import { toast } from "sonner";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../../redux/features/productApi/ProductApi";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const UpdatePoductModal = ({ onClose, productId }) => {
  const { data: product } = useGetSingleProductQuery(productId ?? "");
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await updateProduct({ id: productId || "", body: data });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product has been Updated",
        showConfirmButton: false,
        timer: 1500,
      });
      if (isSuccess) {
        toast.success("Product is updated");
        onClose();
      }
    } catch (error) {
      console.error("Update product failed:", error);
    }
    console.log(data);
  };

  return (
    <div className="fixed top-0 md:top-36 left-0 backdrop-blur-[1px] w-full mx-auto">
      <div className="md:my-10">
        <div className="">
          <div className="card md:w-[50%] mx-auto bg-[#EAFFFC]">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex justify-between">
                <h1 className="text-center md:text-4xl mb-5">Update product</h1>
                <button
                  onClick={onClose}
                  className="mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase "
                >
                  Close
                </button>
              </div>
              <div className="md:flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Title *</span>
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    defaultValue={product?.title}
                    className="input input-bordered"
                  />
                  {errors.title && (
                    <small className="text-red-500 ">Title is required</small>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Tag *</span>
                  </label>
                  <input
                    type="tag"
                    {...register("tag")}
                    defaultValue={product?.tag}
                    className="input input-bordered"
                  />
                  {errors.tag && (
                    <small className="text-red-500 ">Tag is required</small>
                  )}
                </div>
              </div>
              {/* Image */}
              <div className="md:flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">First Image *</span>
                  </label>
                  <input
                    type="text"
                    {...register("firstImg", { required: true })}
                    defaultValue={product?.firstImg}
                    className="input input-bordered"
                  />
                  {errors.firstImg && (
                    <small className="text-red-500 ">
                      First image is required
                    </small>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Second Image *</span>
                  </label>
                  <input
                    type="secondImg"
                    {...register("secondImg", { required: true })}
                    defaultValue={product?.secondImg}
                    className="input input-bordered"
                  />
                  {errors.secondImg && (
                    <small className="text-red-500 ">
                      Second image is required
                    </small>
                  )}
                </div>
              </div>

              <div className="md:flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Price *</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("price", { required: true })}
                    defaultValue={product?.price}
                    className="input input-bordered"
                  />
                  {errors.price && (
                    <small className="text-red-500 ">
                      Discount price is required
                    </small>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Discount price *</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("discount")}
                    defaultValue={product?.discount}
                    className="input input-bordered"
                  />
                  {errors.discount && (
                    <small className="text-red-500 ">Price is required</small>
                  )}
                </div>
              </div>

              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Description *</span>
                </label>
                <input
                  {...register("description", { required: true })}
                  defaultValue={product?.description}
                  className="input input-bordered"
                />
                {errors.description && (
                  <small className="text-red-500 ">
                    Description is required
                  </small>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePoductModal;
