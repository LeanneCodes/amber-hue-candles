"use client";

import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const handleRemove = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">You haven’t added any favourites yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 space-y-3 shadow-sm"
            >
              <img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-gray-600">£{item.price}</p>

              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
