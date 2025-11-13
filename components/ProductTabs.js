'use client';
import React, { useState } from 'react';

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="mt-10">
      <div className="flex gap-6 border-b pb-2">
        {['description', 'shipping', 'care', 'reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`uppercase text-sm font-medium ${
              activeTab === tab
                ? 'border-b-2 border-black pb-1'
                : 'text-gray-500'
            }`}
          >
            {tab === 'description'
              ? 'Description'
              : tab === 'shipping'
              ? 'Shipping & Policies'
              : tab === 'care'
              ? 'Product Care'
              : 'Reviews'}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {activeTab === 'description' && <p>{product.description}</p>}
        {activeTab === 'shipping' && <p>{product.shipping}</p>}
        {activeTab === 'care' && <p>{product.care}</p>}
        {activeTab === 'reviews' && (
          <ul className="space-y-3">
            {product.reviews.map((r) => (
              <li key={r.id}>
                <p className="font-semibold">{r.name}</p>
                <p className="text-gray-600 text-sm">{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;
