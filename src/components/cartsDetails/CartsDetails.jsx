"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const CartsDetails = ({ carts }) => {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = {};
    carts.forEach((cart) => {
      initialQuantities[cart._id] = cart.quantity || 1;
    });
    setQuantities(initialQuantities);
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

  return (
    <div>
      <div className="">
        {carts?.map((cart) => (
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
                  ${cart.totalPrice}.00
                </p>
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
          </div>
        ))}

        <button
          // onClick={handleAddToCarts}
          className="mt-8 w-full bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase "
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartsDetails;
