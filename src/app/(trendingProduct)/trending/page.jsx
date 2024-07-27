"use client";
import { useGetProductsQuery } from "../../../redux/features/productApi/ProductApi";

const TrendingPage = () => {
  const { data } = useGetProductsQuery();
  //   console.log(data);
  const jewellery = data?.filter(
    (jewellerys) =>
      jewellerys.category === "jewellery" && jewellerys.tag === "trending"
  );
  console.log(jewellery);
  return <div>Trending page</div>;
};

export default TrendingPage;
