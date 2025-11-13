"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import toast from "react-hot-toast";

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setIsWishlisted(savedWishlist.some((item) => item.id === product.id));
  }, [product.id]);

  const handleWishlistToggle = () => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    let updatedWishlist;

    if (isWishlisted) {
      updatedWishlist = savedWishlist.filter((item) => item.id !== product.id);
      toast("Removed from wishlist");
    } else {
      updatedWishlist = [...savedWishlist, product];
      toast.success("Added to wishlist ❤️");
    }

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = savedCart.find((item) => item.id === product.id);

    let updatedCart;

    if (existingItem) {
      updatedCart = savedCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
          : item
      );
    } else {
      updatedCart = [...savedCart, { ...product, quantity }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    toast.success(`${quantity} × ${product.name} added to cart 🛒`);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-gray-700">{product.shortDescription}</p>
      <div className="text-xl font-bold">£{product.price}</div>

      <div className="flex items-center space-x-4 mt-4">
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
            onClick={() =>
              setQuantity((prev) =>
                product.stock ? Math.min(prev + 1, product.stock) : prev + 1
              )
            }
            className="px-3 py-1 text-lg"
          >
            +
          </button>
        </div>

        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
        >
          Add to Cart
        </button>

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
        {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
      </p>
    </div>
  );
}
