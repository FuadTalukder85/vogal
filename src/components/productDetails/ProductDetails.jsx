import Image from "next/image";
import React from "react";

const ProductDetails = (data) => {
  console.log(data);
  return (
    <div>
      <Image src={data.firstImg} alt="img"></Image>
    </div>
  );
};

export default ProductDetails;
