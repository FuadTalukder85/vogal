"use client";
import Image from "next/image";
import { useState } from "react";

const CartsDetails = ({ carts }) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  // console.log(carts);
  return (
    <div>
      <div className="">
        {carts?.map((cart) => (
          <div
            key={cart._id}
            className="grid grid-cols-12 items-center mt-4 bg-base-200 p-3"
          >
            <div className="col-span-4">
              <Image src={cart.image} alt="img" height={80} width={80}></Image>
            </div>
            <div className="col-span-8">
              <div>
                <h3 className="text-md font-medium">{cart.title}</h3>
                <p className="text-md font-semibold mt-3">
                  ${cart.totalPrice}.00
                </p>
                <div className="mt-4">
                  <button
                    onClick={handleDecrement}
                    className="text-md border px-5"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={cart.quantity}
                    className="border w-8 text-md text-center mx-auto"
                  />
                  <button
                    onClick={handleIncrement}
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
          // onClick={handleAddTocarts}
          className="mt-8 w-full bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase "
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartsDetails;
