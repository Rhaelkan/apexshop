"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "./ProductCard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
        setLoading(false);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        products.map((product) => (
          <ProductCard
            source={product.thumbnail}
            title={product.title}
            desc={product.description}
            price={product.price}
          />
        ))
      )}
    </div>
  );
}
