"use client";

import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(initialCart);
  }, []);

  return (
    <nav className="bg-white p-6 sm:py-10 top-0 z-20 w-full sticky">
      <div className="section-container flex items-center justify-between">
        <Link href="/" className="text-3xl sm:text-3xl font-bold">
          ApexShop
        </Link>
        <ul className="flex items-center gap-8 text-lg max-sm:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={`${
                  pathName === link.href &&
                  "font-semibold underline decoration-2"
                } ${
                  pathName.includes("/products") &&
                  link.title === "Shop" &&
                  "font-semibold underline decoration-2"
                }`}
              >
                {link.title}{" "}
                {link.title === "Cart" && cart.length > 0 && `(${cart.length})`}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => setIsMenuOpen(true)} className="sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <aside className="backdrop-blur-3xl fixed inset-0 rounded-2xl p-8 flex flex-col items-center justify-center z-20">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href={link.href}
                  className={`text-5xl ${
                    pathName === link.href &&
                    "font-semibold underline decoration-4"
                  } ${
                    pathName.includes("/products") &&
                    link.title === "Shop" &&
                    "font-semibold underline decoration-2"
                  }`}
                >
                  {link.title}{" "}
                  {link.title === "Cart" &&
                    cart.length > 1 &&
                    `(${cart.length})`}
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </aside>
      )}
    </nav>
  );
}
