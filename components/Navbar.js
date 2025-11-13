// components/Navbar.jsx
"use client";

import Link from "next/link";
import React from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="font-semibold">Amber Hue Candles</Link>
          <Link href="/products" className="text-sm text-gray-600">Shop</Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/wishlist" className="text-sm text-gray-600">Wishlist</Link>

          <Link href="/checkout" className="relative inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h12l-2-8M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z"/>
            </svg>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
