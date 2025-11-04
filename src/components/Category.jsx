import Image from "next/image";
import React from "react";
import men from "../assets/images/dealZoneImg/dealzone03.png";
import women from "../assets/images/dealZoneImg/dealzone05.png";
import jewelerry from "../assets/images/dealZoneImg/dealzone01.png";
import party from "../assets/images/dealZoneImg/dealzone02.png";
import accessories from "../assets/images/dealZoneImg/dealzone04.png";
import kids from "../assets/images/dealZoneImg/kids.jpg";
import gadget from "../assets/images/dealZoneImg/gadget.jpg";
import gift from "../assets/images/dealZoneImg/gift.jpg";

const Category = () => {
  const category = [
    {
      image: men,
      title: "Mens's Fashion",
    },
    {
      image: women,
      title: "Women's Fashion",
    },
    {
      image: jewelerry,
      title: "Jewelerry",
    },
    {
      image: party,
      title: "Party Dress",
    },
    {
      image: accessories,
      title: "Accessories",
    },
    {
      image: kids,
      title: "Kids Collections",
    },
    {
      image: gadget,
      title: "Gadget",
    },
    {
      image: gift,
      title: "Gift Items",
    },
  ];
  return (
    <div className="max-w-[1300px] mx-auto p-5 md:p-0 md:mt-16">
      <h5 className="text-2xl font-medium text-center">Categories</h5>
      <div>
        <ul className="grid grid-cols-8 mt-7">
          {category?.map((cat, index) => (
            <li key={index} className="flex flex-col items-center">
              <Image
                src={cat.image}
                alt="men"
                height={100}
                width={100}
                className="rounded-md"
              />
              <span className="mt-2 uppercase font-light">{cat.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
