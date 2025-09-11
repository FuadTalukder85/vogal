import React from "react";
import TopNav from "../../components/Shared/TopNav";
import NavBar from "../../components/Shared/NavBar";
import Footer from "../../components/Shared/Footer";

const layout = ({ children }) => {
  return (
    <div>
      <TopNav></TopNav>
      <NavBar></NavBar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default layout;
