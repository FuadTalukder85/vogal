"use client";
import { useAddProductMutation } from "../../../../redux/features/productApi/ProductApi";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [addProduct] = useAddProductMutation();
  const onSubmit = async (data) => {
    try {
      await addProduct(data);
      console.log(data);
      reset();
    } catch (error) {
      console.error("Add product failed:", error);
    }
  };

  return (
    <div>
      <div className="my-10">
        <h1 className="text-center text-4xl mb-5">Add product</h1>
        <div className="">
          <div className="card md:w-[50%] mx-auto bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="md:flex justify-between gap-5">
                <div className="form-control  w-full">
                  <label className="label">
                    <span className="label-text">Title *</span>
                  </label>
                  <input
                    type="text"
                    min={1}
                    {...register("title", { required: true })}
                    placeholder="Title here"
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
                    min={1}
                    {...register("tag", { required: true })}
                    placeholder="Best selling/sale..."
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
                    min={1}
                    {...register("firstImg", { required: true })}
                    placeholder="First image here"
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
                    type="secongImg"
                    min={1}
                    {...register("secongImg", { required: true })}
                    placeholder="Second image here"
                    className="input input-bordered"
                  />
                  {errors.secongImg && (
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
                    placeholder="price"
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
                    {...register("discount", { required: true })}
                    placeholder="discount"
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
                  placeholder="description"
                  className="input input-bordered"
                />
                {errors.description && (
                  <small className="text-red-500 ">
                    Description is required
                  </small>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="mt-3 bg-[#333333] text-white hover:bg-[#EFEDEC] hover:text-[#333333] transition-all duration-500 py-3 px-7 rounded-md text-sm uppercase ">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
