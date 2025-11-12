import React from "react";
import TopNav from "../../components/shared/TopNav";
import NavBar from "../../components/shared/NavBar";
import Footer from "../../components/shared/Footer";

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
