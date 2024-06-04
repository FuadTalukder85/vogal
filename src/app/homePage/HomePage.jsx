import React from "react";
import Banner from "../../components/banner/Banner";
import TopCategory from "../../components/topCategory/TopCategory";
import MoreExplore from "../../components/moreExplore/MoreExplore";
import CompanyLogo from "../../components/companyLogo/CompanyLogo";
import Articles from "../../components/articles/Articles";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategory></TopCategory>
      <MoreExplore></MoreExplore>
      <CompanyLogo></CompanyLogo>
      <Articles></Articles>
    </div>
  );
};

export default HomePage;
