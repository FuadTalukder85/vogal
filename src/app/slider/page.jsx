"use client";
import React, { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Container from "../../components/container/Container";

const images = [
  {
    original: "https://i.postimg.cc/0NFNdKK6/image.png",
    thumbnail: "https://i.postimg.cc/0NFNdKK6/image.png",
  },
  {
    original: "https://i.postimg.cc/HnCsFG2d/image.png",
    thumbnail: "https://i.postimg.cc/HnCsFG2d/image.png",
  },
  {
    original: "https://i.postimg.cc/y6FNcd1d/image.png",
    thumbnail: "https://i.postimg.cc/y6FNcd1d/image.png",
  },
];

const MyGallery = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
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
            <h3 className="text-2xl font-medium">Polka Pot Band Straw Hat</h3>
            <p className="text-2xl font-semibold mt-5">$40.00</p>
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
    </Container>
  );
};

export default MyGallery;
