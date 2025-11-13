"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Load wishlist state on mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(savedWishlist.some((item) => item.id === product.id));
  }, [product.id]);

  const handleWishlistToggle = () => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updatedWishlist;

    if (isWishlisted) {
      updatedWishlist = savedWishlist.filter((item) => item.id !== product.id);
    } else {
      updatedWishlist = [...savedWishlist, product];
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-gray-700">{product.shortDescription}</p>

      <div className="text-xl font-bold">£{product.price}</div>

      {/* Quantity + Buttons */}
      <div className="flex items-center space-x-4 mt-4">
        {/* Quantity Selector */}
        <div className="flex items-center border rounded-md overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-3 py-1 text-lg"
          >
            −
          </button>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (!isNaN(value) && value >= 1) setQuantity(value);
            }}
            className="w-16 text-center border-l border-r outline-none"
            min="1"
          />
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 text-lg"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
        >
          Add to Cart
        </button>

        {/* Wishlist Heart */}
        <button
          onClick={handleWishlistToggle}
          className={`p-2 rounded-full border transition-all duration-200 ${
            isWishlisted
              ? "bg-red-500 border-red-500 text-white"
              : "border-gray-300 text-gray-500 hover:text-red-500"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart fill={isWishlisted ? "white" : "none"} />
        </button>
      </div>

      <p className="text-sm text-gray-500">
        {product.stock > 0
          ? `In stock: ${product.stock}`
          : "Out of stock"}
      </p>
    </div>
  );
}
