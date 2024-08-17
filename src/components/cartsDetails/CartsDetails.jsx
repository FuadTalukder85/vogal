"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDeleteCartMutation } from "../../redux/features/cartsApi/CartsApi";
import Swal from "sweetalert2";

const CartsDetails = ({ carts }) => {
  const [quantities, setQuantities] = useState({});
  const [deleteCart] = useDeleteCartMutation();
  // console.log(carts);

  useEffect(() => {
    if (carts.length > 0) {
      const initialQuantities = {};
      carts.forEach((cart) => {
        initialQuantities[cart._id] = cart.quantity || 1;
      });
      setQuantities(initialQuantities);
    }
  }, [carts]);

  const handleDecrement = (id) => {
    if (quantities[id] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };
  const handleIncrement = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete this product!",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteCart(id);
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      }
    });
  };
  return (
    <div>
      <div className="">
        {carts?.map((cart) => {
          const itemTotalPrice = (quantities[cart._id] || 1) * cart.price;
          return (
            <div
              key={cart._id}
              className="grid grid-cols-12 items-center mt-4 bg-base-200 p-3"
            >
              <div className="col-span-4">
                <Image src={cart.image} alt="img" height={80} width={80} />
              </div>
              <div className="col-span-8">
                <div>
                  <h3 className="text-md font-medium">{cart.title}</h3>
                  <p className="text-md font-semibold mt-3">
                    ${itemTotalPrice}.00
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div>
                      <button
                        onClick={() => handleDecrement(cart._id)}
                        className="text-md border px-5"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        value={quantities[cart._id]}
                        className="border w-8 text-md text-center mx-auto"
                        readOnly
                      />
                      <button
                        onClick={() => handleIncrement(cart._id)}
                        className="text-md border px-5"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-[18px] hover:text-[#E85363] duration-700 cursor-pointer">
                      <AiFillDelete onClick={() => handleDelete(cart?._id)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <Link href="/payment">
          <button className="mt-8 w-full bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase ">
            Proceed to checkout
          </button>
        </Link>
        <Link href="/cart">
          <button className="mt-3 w-full bg-[#40B884] text-white hover:bg-[#333333] transition-all duration-500 py-3 rounded-md text-sm uppercase ">
            View cart
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CartsDetails;
