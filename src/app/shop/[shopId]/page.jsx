"use client";
import { useGetSingleProductQuery } from "../../../redux/features/productApi/ProductApi";
import ProductDetails from "../../../components/productDetails/ProductDetails";

const ProductDetailsById = () => {
  const { data } = useGetSingleProductQuery(undefined);
  console.log(data);
  return (
    <div>
      <ProductDetails data={data}></ProductDetails>
    </div>
  );
};

export default ProductDetailsById;
