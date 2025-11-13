"use client";

import { useState } from "react";
import ProductReviews from "./ProductReviews";

export default function ProductTabs({ product }) {
  const tabs = ["Description", "Shipping & Policies", "Product Care", "Reviews"];
  const [active, setActive] = useState("Description");

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex border-b mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-4 py-2 text-sm font-medium ${
              active === tab
                ? "border-b-2 border-black text-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {active === "Description" && <p>{product.description}</p>}
        {active === "Shipping & Policies" && <p>{product.shipping}</p>}
        {active === "Product Care" && <p>{product.care}</p>}
        {active === "Reviews" && <ProductReviews reviews={product.reviews} />}
      </div>
    </div>
  );
}
