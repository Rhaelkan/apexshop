"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Update the cart state whenever it changes in localStorage
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(initialCart);
  }, []);

  const removeFromCart = (index) => {
    // Create a copy of the cart
    const updatedCart = [...cart];

    // Remove the product at the specified index
    updatedCart.splice(index, 1);

    // Update the cart state
    setCart(updatedCart);

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="section-container px-6">
      <h1 className="text-3xl font-bold pt-10">Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p className="mt-5 lg:text-lg">
            Your cart is empty. You can continue shopping to add products your
            cart.
          </p>
        </div>
      ) : (
        <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-16">
          <div className="flex-1">
            <div className="flex items-center justify-between max-md:hidden mt-4 mb-2">
              <h1>Products</h1>
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </div>
            <hr className="max-md:my-4 md:mb-4" />
            <div className="flex flex-col">
              {cart.map((product, index) => (
                <div>
                  <div key={index} className="flex justify-between">
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/products/${product.category}/${product.id}`}
                      >
                        <div className="w-32 aspect-square bg-apex-gray flex justify-center items-center">
                          <Image
                            src={product.thumbnail}
                            alt="product photo"
                            width={1000}
                            height={1000}
                            className="w-24 aspect-square object-cover"
                          />
                        </div>
                      </Link>

                      <div className="flex flex-col gap-4 md:flex-row md:items-center">
                        <Link
                          href={`/products/${product.category}/${product.id}`}
                        >
                          <div>
                            <h1 className="font-bold truncate text-2xl max-w-[100px] sm:max-w-[250px] lg:max-w-[450px] xl:max-w-[350px] 2xl:max-w-[450px]">
                              {product.title}
                            </h1>
                            <h1 className="text-lg">${product.price}.00</h1>
                          </div>
                        </Link>

                        <div className="px-4 py-1 border border-black flex items-center gap-6 rounded-xl md:hidden w-fit">
                          <button className="text-3xl">-</button>
                          <h1 className="font-bold">1</h1>
                          <button className="text-2xl">+</button>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between items-end py-2 md:flex-row md:items-center gap-16">
                      <div className="px-4 py-1 border border-black flex items-center gap-6 rounded-xl h-fit my-auto max-md:hidden">
                        <button className="text-3xl">-</button>
                        <h1 className="font-bold">1</h1>
                        <button className="text-2xl">+</button>
                      </div>
                      <h1 className="text-lg">${product.price}</h1>
                      <button onClick={() => removeFromCart(index)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          dataSlot="icon"
                          className="w-6 h-6 text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <hr className="my-4" />
                </div>
              ))}
            </div>
          </div>
          <div className="border p-6 flex flex-col gap-4 xl:w-4/12">
            <h1 className="font-bold text-lg">Summary</h1>
            <hr />
            <div className="flex items-center justify-between font-medium">
              <h1>Delivery Charge</h1>
              <h1>$0</h1>
            </div>
            <hr />
            <div className="flex items-center justify-between font-medium">
              <h1>Grand Total</h1>
              <h1>$1660.00</h1>
            </div>
            <hr />
            <Link
              href="/products"
              className="bg-black px-6 py-3 text-white rounded-xl uppercase text-sm lg:text-base w-full text-center"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}

      <div className="p-8 bg-apex-gray mt-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:p-16">
        <div>
          <h1 className="text-2xl lg:text-3xl">Continue Shopping</h1>
          <p className="lg:mt-2">
            Continue shopping to add items to your cart.
          </p>
        </div>
        <Link
          href="/products"
          className="bg-black px-6 py-3 text-white rounded-xl uppercase text-sm lg:text-base w-fit"
        >
          Continue Shopping
        </Link>
      </div>

      <hr className="my-20 lg:my-40" />
    </div>
  );
}
