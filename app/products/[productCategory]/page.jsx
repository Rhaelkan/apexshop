"use client";

import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "@/components/ProductCard";

export default function page({ params }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedCategory, setCheckedCategory] = useState(
    params.productCategory
  );

  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${checkedCategory}`).then(
      (res) =>
        res.json().then((res) => {
          setProducts(res.products);
          setLoading(false);
        })
    );
  }, [checkedCategory]);

  return (
    <>
      <div className="section-container flex flex-col items-start px-6 2xl:px-0 2xl:flex-row 2xl:justify-between gap-12 mt-20">
        <div className="flex flex-col gap-6 items-start border-b-2 mb-10 pb-6 border-gray-300 flex-1 min-w-[300px] 2xl:sticky 2xl:top-52">
          <h1 className="text-lg font-bold">Product Categories</h1>

          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() =>
              checkedCategory === "womens-watches"
                ? setCheckedCategory(params.productCategory)
                : setCheckedCategory("womens-watches")
            }
          >
            <button
              className={`border-2 border-black rounded-md ${
                checkedCategory === "womens-watches" && "bg-black"
              }`}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              }
            </button>
            <h1>Women Watches</h1>
          </div>
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() =>
              checkedCategory === "smartphones"
                ? setCheckedCategory(params.productCategory)
                : setCheckedCategory("smartphones")
            }
          >
            <button
              className={`border-2 border-black rounded-md ${
                checkedCategory === "smartphones" && "bg-black"
              }`}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              }
            </button>
            <h1>Phones</h1>
          </div>

          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() =>
              checkedCategory === "laptops"
                ? setCheckedCategory(params.productCategory)
                : setCheckedCategory("laptops")
            }
          >
            <button
              className={`border-2 border-black rounded-md ${
                checkedCategory === "laptops" && "bg-black"
              }`}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              }
            </button>
            <h1>Laptops</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full 2xl:w-9/12">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                source={product.thumbnail}
                title={product.title}
                desc={product.desc}
                price={product.price}
                href={`/products/${product.category}/${product.id}`}
              />
            ))
          )}
        </div>
      </div>
      <hr className="my-40" />
    </>
  );
}
