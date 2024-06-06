import React from "react";

const TopNav = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1300px] md:flex items-center justify-between text-white mx-auto text-xs">
        <div className="hidden md:block">
          <p>AVAILABLE 24/7 AT +566 4444 9940</p>
        </div>
        <div>
          <p className="flex justify-center py-2 md:py-0">
            FREE DELIVERY ON ORDERS OVER $120. DON’T MISS.
          </p>
        </div>
        <div className="hidden md:block">
          <select className="select select-ghost w-full max-w-xs uppercase">
            <option disabled selected>
              English
            </option>
            <option>Francais</option>
            <option>Deutsch</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
