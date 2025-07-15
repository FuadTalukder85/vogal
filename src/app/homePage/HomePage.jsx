import React from "react";
import Banner from "../../components/banner/Banner";
import TopCategory from "../../components/TopCategory";
import MoreExplore from "../../components/MoreExplore";
import CompanyLogo from "../../components/CompanyLogo";
import TopSeller from "../../components/TopSeller";
import Articles from "../../components/Articles";
import CustomerService from "../../components/CustomerService";
import NewArrivals from "../../components/NewArrivals";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategory></TopCategory>
      <NewArrivals></NewArrivals>
      <MoreExplore></MoreExplore>
      <CompanyLogo></CompanyLogo>
      <TopSeller></TopSeller>
      <Articles></Articles>
      <CustomerService></CustomerService>
    </div>
  );
};

export default HomePage;
