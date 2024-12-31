// Home //Products // [Product]

"use client";
import React, { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

// Define interface
interface IProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity?: number;
}

// fetch product data from API
async function getProduct(id: string): Promise<IProduct | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      console.error(`Failed to fetch product with ID ${id}`);
      return null;
    }
    return await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const ProductDetailPage = ({ params }: { params: { Product: string } }) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProduct(params.Product);
      if (productData) {
        setProduct(productData);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [params.Product]);

  // Show loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <FaSpinner className="animate-spin w-[40px] h-[40px]  text-red-500" />
      </div>
    );
  }

  // Show product not found message
  if (!product) {
    return (
      <div className="text-center p-4 mt-10">
        <h1 className="text-3xl font-bold text-red-600">Product Not Found</h1>
        <p className="text-lg text-gray-700 mt-4">
          Sorry, the product you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 mt-10">
      {/* Product Title */}
      <h1 className="text-[40px] font-bold text-red-500 text-center">
        {product.title}
      </h1>

      <div className="flex flex-col lg:flex-row gap-8 mt-10">
        {/*Product Image */}
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain "
          />
        </div>

        {/*Product Details */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <p className="text-[22px] text-gray-700">
            {" "}
            <span className="font-medium italic text-[24px]">
              Description:
            </span>{" "}
            {product.description}
          </p>
          <p className="text-xl text-gray-700 ">
            <span className="font-medium italic text-[24px]">Category:</span>{" "}
            {product.category}
          </p>
          <p className="text-xl font-semibold text-red-500">
            <span className="font-medium italic text-[24px]">Price:</span>$
            {product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
