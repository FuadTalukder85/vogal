import React from "react";
import Banner from "../../components/banner/Banner";
import TopCategory from "../../components/topCategory/TopCategory";
import Articles from "../../components/articles/Articles";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCategory></TopCategory>
      <Articles></Articles>
    </div>
  );
};

export default HomePage;
