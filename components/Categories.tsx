"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function CategoryCard() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategories(res);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        categories.map((category) => (
          <Link
            key={category}
            href={`/products/${category}`}
            className="bg-apex-gray py-5 text-center rounded-2xl capitalize"
          >
            {category}
          </Link>
        ))
      )}
    </div>
  );
}

export default function Categories() {
  return (
    <div className="section-container px-6 py-24">
      <div className="flex items-center justify-between pb-10">
        <h1 className="text-2xl">Shop by Categories</h1>
        <Link
          href="/products"
          className="font-medium hover:underline hover:decoration-2"
        >
          Show All
        </Link>
      </div>
      <CategoryCard />
    </div>
  );
}
