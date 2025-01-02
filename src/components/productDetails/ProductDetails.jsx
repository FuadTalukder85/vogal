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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setCarts } from "../../redux/features/cartsApi/CartsSlice";
import { useCurrentUser } from "../../redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

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
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [currentImg, setCurrentImg] = useState(0);
  const [addCarts] = useAddCartsMutation();
  const dispatch = useAppDispatch();
  const user = useAppSelector(useCurrentUser);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const totalPrice = quantity * productDetails.price;
  const originalProductPrice = quantity * productDetails.originalPrice;
  const totalProfit = totalPrice - originalProductPrice;

  const handleCurrentImg = (index) => {
    setCurrentImg(index);
  };
  const handleAddTocarts = () => {
    if (user && user.email) {
      const { title, originalPrice, price } = productDetails;
      const cartItem = {
        title,
        originalPrice,
        price,
        totalPrice,
        totalProfit,
        quantity,
        image: images[currentImg]?.original,
        email: user?.email,
      };
      addCarts(cartItem);
      dispatch(setCarts(cartItem));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Product added on carts",
        showConfirmButton: false,
        timer: 1500,
      });
      setQuantity(1);
    } else {
      Swal.fire({
        title: "Please login",
        text: "After login you can order the product",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/account/login");
        }
      });
    }
  };

  return (
    <Container>
      <div className="md:grid grid-cols-12 mt-10 gap-10 items-center p-5 md:p-0">
        <div className="col-span-6">
          <ImageGallery
            items={images}
            showThumbnails={true}
            thumbnailPosition="left"
            showPlayButton={false}
            onSlide={handleCurrentImg}
          />
        </div>
        <div className="col-span-6">
          <div>
            <h3 className="text-2xl font-medium mt-5 md:mt-0">
              {productDetails.title}
            </h3>
            <p className="text-2xl font-semibold mt-5">${totalPrice}.00</p>
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
      <Tabs className="mt-20 md:p-0">
        <TabList className="text-sm md:text-base">
          <Tab>Product Description</Tab>
          <Tab>Shipping & Returns</Tab>
        </TabList>

        <TabPanel className="px-3 md:px-0">
          <ProductDescription></ProductDescription>
        </TabPanel>
        <TabPanel className="px-3 md:px-0">
          <Shipping></Shipping>
        </TabPanel>
      </Tabs>
    </Container>
  );
};

export default ProductDetails;
