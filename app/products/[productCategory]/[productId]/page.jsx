"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function page({ params }) {
  const [product, setProduct] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.productId}`).then((res) =>
      res.json().then((res) => {
        setProduct(res);
        setPhotos(res.images);
      })
    );
  }, []);

  // Function to add the current product to the cart
  const addToCart = () => {
    // Retrieve the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update the cart with the current product
    const updatedCart = [...existingCart, product];

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <div className="min-h-screen section-container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src={product.thumbnail}
            alt="product photo"
            width={5000}
            height={5000}
            className="aspect-video object-contain"
          />
          <div className="flex flex-col h-full justify-between py-4">
            <div>
              <h1 className="text-3xl font-bold">{product.title}</h1>
              <div className="flex items-center space-x-2">
                <h1 className="capitalize">{product.category}</h1>
                <span> | </span>
                {product.stock > 0 ? (
                  <h1 className="text-green-500">
                    In Stock:{" "}
                    <span className="text-black">{product.stock}</span>
                  </h1>
                ) : (
                  <h1 className="text-red-500">Out of Stock</h1>
                )}
              </div>
              <h1 className="mt-3 text-xl font-medium">${product.price}.00</h1>
              <h1 className="mt-7 text-lg font-medium">Description</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="mt-10">
              <Link href="/cart">
                <button
                  onClick={addToCart}
                  className="bg-black px-6 py-3 text-white rounded-xl uppercase text-sm lg:text-base w-full"
                >
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-20">
          <h1 className="text-3xl font-bold">Product Detail Images</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5">
            {photos.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="product detail image"
                width={5000}
                height={5000}
                className="aspect-square object-cover rounded-2xl"
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="my-40" />
    </>
  );
}
