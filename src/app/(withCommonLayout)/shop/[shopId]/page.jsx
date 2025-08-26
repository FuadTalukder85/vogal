import ProductDetails from "../../../../components/ProductDetails";

const ProductDetailsById = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.shopId}`
  );
  const productDetails = await res.json();
  return (
    <div>
      <ProductDetails productDetails={productDetails}></ProductDetails>
    </div>
  );
};

export default ProductDetailsById;
