"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

import watches from "@/public/watches-category-1.png";
import phones from "@/public/phones-category-1.png";
import laptops from "@/public/laptops-category-1.png";

type CategoryCard2Props = {
  src: StaticImageData;
  category: string;
  href: string;
};

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

function CategoryCard2({ src, category, href }: CategoryCard2Props) {
  return (
    <Link
      href={`/products/${href}`}
      className="bg-apex-gray p-4 flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="h-72 flex justify-center items-center pt-12">
        <Image
          src={src}
          alt="category image"
          width={5000}
          height={5000}
          className="object-cover"
        />
      </div>
      <button className="bg-white w-full text-center py-4 rounded-2xl lg:text-lg">
        {category}
      </button>
    </Link>
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
          Show All Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
        <CategoryCard2 src={watches} category="Watches" href="womens-watches" />
        <CategoryCard2 src={phones} category="Phones" href="smartphones" />
        <CategoryCard2 src={laptops} category="Laptops" href="laptops" />
      </div>
      <div className="pb-10">
        <h1 className="text-2xl">All Categories</h1>
      </div>
      <CategoryCard />
    </div>
  );
}
