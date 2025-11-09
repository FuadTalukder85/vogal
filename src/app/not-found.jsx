"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import notFound from "../../public/not_found.jpeg";

const NoRoute = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-200 text-[#333333] px-5">
      <div className="flex justify-center mb-6 animate-bounce-slow">
        <Image
          src={notFound}
          alt="Page not found"
          height={250}
          width={250}
          className="rounded-xl shadow-md"
        />
      </div>

      <div className="text-center max-w-md">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800">
          Oops! Page Not Found 😢
        </h2>
        <p className="text-gray-600 leading-relaxed">
          We're sorry, an error has occurred. The page you're looking for might
          have been moved, deleted, or never existed.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/">
          <button className="border border-[#40B884] text-[#40B884] hover:bg-[#40B884] hover:text-white transition-all duration-500 px-6 py-2 rounded-md text-sm uppercase tracking-wide shadow-md hover:shadow-lg">
            Back to Homepage
          </button>
        </Link>
      </div>

      <style jsx>{`
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default NoRoute;
