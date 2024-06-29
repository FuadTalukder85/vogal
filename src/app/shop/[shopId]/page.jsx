"use client";
// import { useGetSingleProductQuery } from "../../../redux/features/productApi/ProductApi";
import ProductDetails from "../../../components/productDetails/ProductDetails";

const ProductDetailsById = async ({ params }) => {
  // const { data } = useGetSingleProductQuery(undefined);
  // console.log(data);
  const res = await fetch(`http://localhost:5000/products/${params.shopId}`);
  const productDetails = await res.json();
  return (
    <div>
      <ProductDetails productDetails={productDetails}></ProductDetails>
    </div>
  );
};

export default ProductDetailsById;
