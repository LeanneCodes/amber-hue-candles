'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductGallery = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <Image
        src={selectedImage}
        alt={name}
        width={500}
        height={500}
        className="rounded-lg object-cover"
      />
      <div className="flex gap-2 mt-4">
        {images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${name} ${idx}`}
            width={100}
            height={100}
            className={`rounded cursor-pointer border ${
              selectedImage === img ? 'border-black' : 'border-transparent'
            }`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
