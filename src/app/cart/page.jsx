"use client";
import Image from "next/image";
import Link from "next/link";
import useCarts from "../../components/hooks/useCarts";
import { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDeleteCartMutation } from "../../redux/features/cartsApi/CartsApi";
import Swal from "sweetalert2";

const Cart = () => {
  const [carts] = useCarts();
  const [quantities, setQuantities] = useState({});
  const [deleteCart] = useDeleteCartMutation();

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

  const totalPrice = carts.reduce((sum, item) => sum + item.totalPrice, 0);
  // console.log(totalPrice);

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
      <div className="w-[800px] mx-auto">
        <h5 className="text-2xl font-semibold text-center mt-5">My Cart</h5>
        <div className="flex justify-between items-center px-10 mt-10">
          <h5 className="font-semibold text-lg">
            Total Price :{" "}
            <span className="text-[#E85363]">${totalPrice}.00</span>
          </h5>{" "}
          <div className="flex gap-5">
            <Link href="/payment">
              <button className="w-[180px] bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase">
                Proceed to checkout
              </button>
            </Link>
            <Link href="/shop">
              <button className="w-[180px] bg-[#40B884] text-white hover:bg-[#333333] transition-all duration-500 py-3 rounded-md text-sm uppercase">
                Continue shopping
              </button>
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto mt-3 bg-white p-5">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th className="md:text-[14px] text-[#333333]">SL</th>
                <th className="md:text-[14px] text-[#333333]">Product</th>
                <th className="md:text-[14px] text-[#333333]">Quantity</th>
                <th className="md:text-[14px] text-[#333333]">Total</th>
                <th className="md:text-[14px] text-[#333333] text-center">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {carts?.map((cart, index) => {
                const itemTotalPrice = (quantities[cart._id] || 1) * cart.price;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex gap-5 items-center">
                        <Image
                          src={cart.image}
                          alt="img"
                          height={80}
                          width={80}
                        />
                        <div>
                          <h3 className="text-md font-medium">{cart.title}</h3>
                          <p>${cart.price}.00</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <div>
                          <div className="">
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
                        </div>
                      </div>
                    </td>
                    <td>
                      <p className="text-md font-semibold">
                        ${itemTotalPrice}.00
                      </p>
                    </td>
                    <td>
                      <div className="flex items-center justify-center text-[18px] hover:text-[#E85363] duration-700 cursor-pointer">
                        <AiFillDelete onClick={() => handleDelete(cart?._id)} />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
