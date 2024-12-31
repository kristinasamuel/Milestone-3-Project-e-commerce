//  Home // category

"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function CategorySection() {
  const categories = [
    {
      id: 1,
      name: "Women",
      image: "/images/item3.jpg",
    },
    {
      id: 2,
      name: "Men",
      image: "/images/item.jpg",
    },
    {
      id: 3,
      name: "Rings Collection",
      image: "/images/item4.jpg",
    },
    {
      id: 4,
      name: "Home Appliances",
      image: "/images/item2.jpg",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20">
      <div className="text-center">
        <h2 className="text-[34px] sm:text-[34px] lg:text-[40px] font-bold">Shop by Category</h2>
        <p className="text-[18px] text-gray-600 mt-2">
          Explore our categories and find exactly what you need for your
          perfect shopping experience.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {categories.map((category) => (
          <div
            key={category.id}
            className="border p-4 rounded-lg text-center shadow-md hover:shadow-xl transition-all"
          >
            <Image
              src={category.image}
              alt={category.name}
              width={200}
              height={200}
              className="w-full h-40 object-contain"
            />
            <h3 className="text-[18px] font-medium mt-3">{category.name}</h3>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-8 mb-10">
       <Link href={"/Products"}>  <Button variant={"destructive"}> Explore More</Button> </Link>
      </div>
    </div>
  );
}
