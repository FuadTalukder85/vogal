"use client";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Container from "../container/Container";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductDescription from "../tabs/ProductDescription";
import Shipping from "../tabs/Shipping";
import { useAddCartsMutation } from "../../redux/features/cartsApi/CartsApi";
import { useAppDispatch } from "../../redux/hooks";
import "./ProductDetails.css";
import { setCarts } from "../../redux/features/cartsApi/CartsSlice";

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
  const [currentImg, setCurrentImg] = useState(0);
  const [addCarts] = useAddCartsMutation();
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleCurrentImg = (index) => {
    setCurrentImg(index);
  };

  const handleAddTocarts = () => {
    const { title, price } = productDetails;
    const cartItem = {
      title,
      price,
      quantity,
      image: images[currentImg]?.original,
    };
    addCarts(cartItem);
    dispatch(setCarts(cartItem));
  };

  return (
    <Container>
      <div className="grid grid-cols-12 mt-10 gap-10 items-center">
        <div className="col-span-6">
          <ImageGallery
            items={images}
            showThumbnails={true}
            thumbnailPosition="left"
            onSlide={handleCurrentImg}
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
            <button
              onClick={handleAddTocarts}
              className="mt-8 w-full bg-[#333333] text-white hover:bg-[#40B884] transition-all duration-500 py-3 rounded-md text-sm uppercase "
            >
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
