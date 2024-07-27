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
    // console.log(data);
  };

  return (
    <div className="fixed top-0 md:top-2 left-0 backdrop-blur-[1px] w-full mx-auto">
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
              {/*  */}
              <div className="md:flex justify-between gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      Title <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Title here"
                    className="input input-bordered"
                    defaultValue={product?.title}
                  />
                  {errors.title && (
                    <small className="text-red-500 ">Title is required</small>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Tag</span>
                  </label>
                  <input
                    type="tag"
                    {...register("tag")}
                    placeholder="Best selling/sale..."
                    className="input input-bordered"
                    defaultValue={product?.tag}
                  />
                  {/* {errors.tag && (
                    <small className="text-red-500 ">Tag is required</small>
                  )} */}
                </div>
              </div>
              {/* Image */}
              <div className="md:flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">
                      Category <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <select
                    {...register("category", { required: true })}
                    className="select select-bordered w-full"
                    defaultValue={product?.category}
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="jewellery">Jewellery</option>
                    <option value="partyDress">Party Dress</option>
                    <option value="accessories">Accessories</option>
                    <option value="bestSeller">Best Sellers</option>
                  </select>
                  {errors.category && (
                    <small className="text-red-500 ">
                      Category is required
                    </small>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">
                      Stock Product{" "}
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("stockProduct", { required: true })}
                    placeholder="Stock Product"
                    className="input input-bordered"
                    defaultValue={product?.stockProduct}
                  />
                  {errors.stockProduct && (
                    <small className="text-red-500 ">
                      Stock product is required
                    </small>
                  )}
                </div>
              </div>
              {/*  */}
              <div className="md:flex justify-between gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      Original Price{" "}
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("originalPrice", { required: true })}
                    placeholder="Original Price"
                    className="input input-bordered"
                    defaultValue={product?.originalPrice}
                  />
                  {errors.originalPrice && (
                    <small className="text-red-500 ">
                      Original price is required
                    </small>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">
                      Price <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("price", { required: true })}
                    placeholder="price"
                    className="input input-bordered"
                    defaultValue={product?.price}
                  />
                  {errors.price && (
                    <small className="text-red-500 ">Price is required</small>
                  )}
                </div>
              </div>
              {/*  */}
              <div className="md:flex justify-between gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">Discount price</span>
                  </label>
                  <input
                    type="number"
                    min={1}
                    {...register("discount")}
                    placeholder="Discount Price"
                    className="input input-bordered"
                    defaultValue={product?.discount}
                  />
                  {/* {errors.discount && (
                    <small className="text-red-500 ">
                      Discount Price is required
                    </small>
                  )} */}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">
                      First Image{" "}
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("firstImg", { required: true })}
                    placeholder="First image here"
                    className="input input-bordered"
                    defaultValue={product?.firstImg}
                  />
                  {errors.firstImg && (
                    <small className="text-red-500 ">
                      First image is required
                    </small>
                  )}
                </div>
              </div>
              {/*  */}
              <div className="md:flex justify-between gap-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">
                      Second Image{" "}
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="secondImg"
                    {...register("secondImg", { required: true })}
                    placeholder="Second image here"
                    className="input input-bordered"
                    defaultValue={product?.secondImg}
                  />
                  {errors.secondImg && (
                    <small className="text-red-500 ">
                      Second image is required
                    </small>
                  )}
                </div>
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">
                      Third Image{" "}
                      <span className="text-red-500 text-lg">*</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("thirdImg", { required: true })}
                    placeholder="Third image here"
                    className="input input-bordered"
                    defaultValue={product?.thirdImg}
                  />
                  {errors.thirdImg && (
                    <small className="text-red-500 ">
                      Third image is required
                    </small>
                  )}
                </div>
              </div>
              {/*  */}
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">
                    Description <span className="text-red-500 text-lg">*</span>
                  </span>
                </label>
                <input
                  {...register("description", { required: true })}
                  placeholder="description"
                  className="input input-bordered"
                  defaultValue={product?.description}
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
