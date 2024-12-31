//  Cart Page
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// create interface for products
interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
}

export default function CartPage() {
  const [cart, setCart] = useState<IProduct[]>([]);

  //localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  // Remove Product From Cart, handle (functionality)
  const handleRemoveFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10 sm:mt-20 lg:mt-20">
      {/* heading */}
      <h3 className="text-[32px] sm:text-[34px] lg:text-[40px] font-bold text-center">
        Review Your Cart
      </h3>
            {/*when the cart is empty show this */}
      {cart.length === 0 ? (
        <div className="text-center mt-3">
          <p>No items in your cart yet.</p>
          <Link
            href="/"
            className="text-red-500 text-[24px] font-semibold hover:underline"
          >
            Go back to shopping
          </Link>
        </div>
      ) : (
        // products in cart
        <div className="bg-white border rounded-lg shadow-sm p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4 mb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-contain border rounded-lg"
                />
                <div>
                  <h2 className="font-normal text-xl">{item.title}</h2>
                  <p className="text-gray-500">
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <Button
              variant={"ghost"}
                onClick={() => handleRemoveFromCart(item.id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Remove
              </Button>
            </div>
          ))}
          {/* total price */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-[20px] font-medium">
              Total: $
              {cart
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </p>
            {/* navigate to chekout */}
            <Link href="/Checkout">
              <Button
                variant={"destructive"}
                className="py-2 px-6 rounded-lg text-[16px] font-semibold "
              >
                Checkout Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
