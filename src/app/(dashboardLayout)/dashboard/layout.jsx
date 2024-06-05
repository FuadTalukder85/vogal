import Sidebar from "../../../components/sidebar/Sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="md:min-h-screen my-2">
      <div className="md:flex justify-between">
        <div className="md:w-[20%]">
          <Sidebar />
        </div>
        <div className="md:w-[80%] bg-base-200 rounded-box ml-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
