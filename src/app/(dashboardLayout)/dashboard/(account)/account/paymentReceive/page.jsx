import React from "react";
import { FiLoader } from "react-icons/fi";
import { LuConstruction } from "react-icons/lu";

const paymentReceive = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 text-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md">
        <div className="flex justify-center mb-4">
          <FiLoader className="animate-spin text-4xl text-blue-600" />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 flex gap-3 justify-center items-center">
          Work in Progress
          <span className="text-red-400">
            <LuConstruction />
          </span>
        </h1>
        <p className="text-gray-600">
          Please stay connected with patience — the project will be updated very
          soon.
        </p>
      </div>
    </div>
  );
};

export default paymentReceive;
