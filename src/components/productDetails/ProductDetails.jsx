"use client";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Container from "../container/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductDescription from "../tabs/ProductDescription";
import Shipping from "../tabs/Shipping";
import "./ProductDetails.css";

const ProductDetails = ({ productDetails }) => {
  const images = [
    {
      original: productDetails?.firstImg,
      thumbnail: productDetails?.firstImg,
    },
    {
      original: productDetails?.secondImg,
      thumbnail: productDetails?.secondImg,
    },
    {
      original: productDetails?.firstImg,
      thumbnail: productDetails?.firstImg,
    },
  ];
  const [quantity, setQuantity] = useState(0);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  console.log(productDetails);
  return (
    <Container>
      <div className="grid grid-cols-12 mt-10 gap-10 items-center">
        <div className="col-span-6">
          <ImageGallery
            items={images}
            showThumbnails={true}
            thumbnailPosition="left"
          />
        </div>
        <div className="col-span-6">
          <div>
            <h3 className="text-2xl font-medium">{productDetails.title}</h3>
            <p className="text-2xl font-semibold mt-5">
              ${productDetails.price}.00
            </p>
            <p className="font-semibold mt-8">In stock - Ready to ship</p>
            <div className="mt-8">
              <button
                onClick={handleDecrement}
                className="text-2xl border px-5"
              >
                -
              </button>
              {/* <span className="text-2xl border px-5 py-1">{quantity}</span> */}
              <input
                type="text"
                value={quantity}
                className="border w-14 text-2xl text-center mx-auto"
              />
              <button
                onClick={handleIncrement}
                className="text-2xl border px-5"
              >
                +
              </button>
            </div>
            <button className="mt-8 w-full bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase ">
              Add Product
            </button>
          </div>
        </div>
      </div>
      <Tabs className="mt-28">
        <TabList>
          <Tab>Product Description</Tab>
          <Tab>Shipping & Returns</Tab>
        </TabList>

        <TabPanel>
          <ProductDescription></ProductDescription>
        </TabPanel>
        <TabPanel>
          <Shipping></Shipping>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ProductDetails;
