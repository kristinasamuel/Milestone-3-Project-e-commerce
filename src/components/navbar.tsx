// Home // Navbar 
"use client";
import Link from "next/link";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div>
        {/* Header section */}
        <div className="border-gray-300 flex items-center justify-between border px-4 h-[88px] ">
          {/* Logo */}
          <span className="text-3xl md:text-[42px] lg:text-[42px] md:ml-14 md:text-center font-bold font-serif hover:text-red-400   ">
            shopsy
          </span>
           {/* Icons section */}
          <div className="flex  mr-0 md:mr-14 ">
            <FaUser className="h-[30px] w-[30px] hover:text-red-400"/>
           <Link href={"/Cart"}> <FaCartShopping className="h-[30px] w-[30px] ml-2 hover:text-red-400"/></Link> 
            <FaHeart className="h-[30px] w-[30px] ml-2 hover:text-red-400"/>
          </div>
        </div>
        {/* Link section */}
        <div className=" flex items-center justify-center m-8">
          <ul className="flex flex-wrap gap-4 lg:gap-6 mt-6 text-[18px]">
            <Link href={"/"}>
              <li className=" hover:text-gray-500 hover:underline underline-offset-8">
                Home
              </li>
            </Link>
            <Link href={"/Products"}>
              <li className=" hover:text-gray-500 hover:underline underline-offset-8">
                Products
              </li>
            </Link>
            <Link href={"/About"}>
              <li className=" hover:text-gray-500 hover:underline underline-offset-8">
                About
              </li>
            </Link>
            <Link href={"/Cart"}>
              <li className=" hover:text-gray-500 hover:underline underline-offset-8">
                Cart
              </li>
            </Link>
            <Link href={"/Checkout"}>
              <li className=" hover:text-gray-500 hover:underline underline-offset-8">
                Checkout
              </li>
            </Link>
            <Link href={"/Contact"}>
              <li className=" hover:text-gray-500 hover:underline underline-offset-8">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
