// Check out page
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Define interface 
interface IProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const [cart, setCart] = useState<IProduct[]>([]);
// Storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Calculate total price of Product item
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 sm:mt-20 lg:mt-20">
      <h1 className="text-[40px] font-bold text-center text-red-400">Checkout Process</h1>
      <p className="font-normal text-gray-700 text-[23px] text-center mt-2 mb-6"> A list of all the items in the cart with quantities, prices, and totals.</p>

      {/* Show Order detail */}
      <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-[32px] font-semibold mb-4 text-red-400">Order Overview</h2>
         {/* use if else condition to show product in cart */}
        {cart.length === 0 ? (
          <p>Your cart is empty. <Link href="/" className="text-teal-500 font-semibold hover:underline">Go back to shopping</Link></p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4 mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain border rounded-lg"
                  />
                  <div>
                    <h3 className="font-normal text-xl">{item.title}</h3>
                    <p className="text-gray-500">Price: ${item.price} x {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4 border-t pt-4">
              <p className="text-xl font-medium">Total: ${calculateTotal()}</p>
            </div>
          </div>
        )}
      </div>

      {/* Bill Section */}
      <div className="bg-white border rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-[32px] font-semibold mb-4 text-red-400">Payment Details</h2>
        <form>
          <div className="space-y-4">
            <div>
              <Label className="block text-gray-700 font-medium mb-2">Name</Label>
              <Input
                type="text"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <Label className="block text-gray-700 font-medium mb-2">Email</Label>
              <Input
                type="email"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <Label className="block text-gray-700 font-medium mb-2">Address</Label>
              <Input
                type="text"
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Address"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label className="block text-gray-700 font-medium mb-2">City</Label>
                <Input
                  type="text"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="City"

                  required
                />
              </div>
              <div>
                <Label className="block text-gray-700 font-medium mb-2">Country</Label>
                <Input
                  type="text"
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Your Country"
                  required
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-5">
          <Button
          variant={"destructive"}
            type="submit"
            className=" text-white py-3 rounded-lg font-semibold "
          >
           Confirm Order
          </Button>
          </div>
        </form>
      </div>
    </div>
  );
}