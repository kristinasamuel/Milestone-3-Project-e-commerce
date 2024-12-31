// Home // Product Page
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Product type
interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity?: number;
}

export default function ProductPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cart, setCart] = useState<IProduct[]>([]);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); 
      setError(""); 
      try {
        // Fetch data from an api
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const data: IProduct[] = await response.json();
        setProducts(data); 
      } catch (err: any) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Handle Add to Cart functionality
  const handleAddToCart = (product: IProduct) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex > -1) {
      updatedCart[existingProductIndex].quantity! += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="w-full lg:max-w-5xl mx-auto p-0 lg:p-4 mt-10 sm:mt-20 lg:mt-20 ">
      <h1 className="text-[42px] font-bold text-center">New Arrival</h1>
      <p className="text-[22px] text-gray-600 text-center mt-2">
        Discover the latest trends and styles with our exclusive collection.
      </p>
      {/* fetching product  */}
      {loading && (
        <p className="text-[28px] font-medium text-center mt-2 text-red-400">
          Loading products...
        </p>
      )}

      {error && <p className="text-red-500">{error}</p>}
      {/* Display product detail ,image,price */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white  shadow-sm"
          >
            <img
              src={product.image}
              alt={product.title}
              height={100}
              width={100}
              className="w-full h-40 object-contain"
            />
            <div className="mt-4 space-y-1">
              <h2 className="font-medium text-[14px] ">{product.title}</h2>
              <p className="text-gray-600 ">${product.price}</p>
              <Link href={`Products/${product.id}`}>
                <p className=" text-[16px] lg:text-[18px] font-medium text-red-400">
                  Product Detail...
                </p>
              </Link>
              <div className="flex flex-row gap-4">
                <Button
                variant={"destructive"}
                  className="mt-3"
                  onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Thanks message */}
      <div className="mt-12 flex items-center justify-center mb-10">
        <p className="font-medium text-[18px] max-w-2xl text-red-400 text-center">
          Thank you for exploring our collection; we hope it makes your shopping
          easier and enjoyable!
        </p>
      </div>
    </div>
  );
}
