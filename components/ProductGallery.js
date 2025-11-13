"use client";

import { useState } from "react";

export default function ProductGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      {/* Main Image */}
      <div className="w-full border rounded-lg overflow-hidden">
        <img
          src={mainImage}
          alt="Main product image"
          className="w-full h-[400px] object-cover object-center transition-all duration-300"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex space-x-3 mt-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className={`border rounded-md overflow-hidden transition-all duration-200 ${
              mainImage === img
                ? "ring-2 ring-black"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-20 h-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
