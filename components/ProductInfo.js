'use client';
import React, { useState } from 'react';

const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0 && value <= product.inStock) setQuantity(value);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">{product.name}</h1>
      <p className="text-sm text-gray-500 mt-1">{product.category}</p>
      <p className="text-xl font-bold mt-3">£{product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-1">VAT and tax included</p>

      <div className="mt-4">
        <label className="block text-sm font-medium">Quantity:</label>
        <input
          type="number"
          min="1"
          max={product.inStock}
          value={quantity}
          onChange={handleQuantityChange}
          className="border p-2 w-20 rounded mt-1"
        />
        <p className="text-xs text-gray-500 mt-1">
          {product.inStock} in stock
        </p>
      </div>

      <button className="bg-black text-white px-6 py-3 mt-5 rounded hover:bg-gray-800 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
