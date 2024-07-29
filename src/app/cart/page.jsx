"use client";
import Image from "next/image";
import Link from "next/link";
import useCarts from "../../components/hooks/useCarts";
import { useState, useEffect } from "react";

const Cart = () => {
  const [carts] = useCarts();
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    if (Object.keys(quantities).length === 0) {
      const initialQuantities = {};
      carts.forEach((cart) => {
        initialQuantities[cart._id] = cart.quantity || 1;
      });
      setQuantities(initialQuantities);
    }
  }, [carts, quantities]);

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

  return (
    <div>
      <div className="p-3 md:p-10">
        <h5 className="text-xl font-semibold text-center">My Cart</h5>
        <div className="overflow-x-auto mt-3 bg-white p-5 w-[800px] mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="">
                <th className="md:text-[14px] text-[#333333]">SL</th>
                <th className="md:text-[14px] text-[#333333]">Product</th>
                <th className="md:text-[14px] text-[#333333]">Quantity</th>
                <th className="md:text-[14px] text-[#333333]">Total</th>
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
                          <div className="mt-4">
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
                      <p className="text-md font-semibold mt-3">
                        ${itemTotalPrice}.00
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-center gap-7">
            <Link href="/payment">
              <button className="mt-8 w-[180px] bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase">
                Proceed to checkout
              </button>
            </Link>
            <Link href="/shop">
              <button className="mt-8 w-[180px] bg-[#40B884] text-white hover:bg-[#333333] transition-all duration-500 py-3 rounded-md text-sm uppercase">
                Continue shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
