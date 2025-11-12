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
import Link from "next/link";

const Category = () => {
  const category = [
    {
      image: men,
      title: "Mens's Fashion",
      href: "/shop/men",
    },
    {
      image: women,
      title: "Women's Fashion",
      href: "/shop/women",
    },
    {
      image: jewelerry,
      title: "Jewelerry",
      href: "/shop/jewelerry",
    },
    {
      image: party,
      title: "Party Dress",
      href: "/shop/partyDress",
    },
    {
      image: accessories,
      title: "Accessories",
      href: "/shop/accessories",
    },
    {
      image: kids,
      title: "Kids Collections",
      href: "/shop/kids",
    },
    {
      image: gadget,
      title: "Gadget",
      href: "/shop/gadget",
    },
    {
      image: gift,
      title: "Gift Items",
      href: "/shop/gift",
    },
  ];
  return (
    <div className="bg-[#F7F7F7] md:mt-16 py-7">
      <div className="max-w-[1300px] mx-auto p-1 md:p-0">
        <h5 className="text-2xl font-medium text-center">Categories</h5>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-8 mt-7">
            {category?.map((cat, index) => (
              <li key={index} className="flex flex-col items-center">
                <Link href={cat.href}>
                  <Image
                    src={cat.image}
                    alt="men"
                    height={100}
                    width={100}
                    className="rounded-md"
                  />
                </Link>

                <span className="mt-2 uppercase font-light">{cat.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
