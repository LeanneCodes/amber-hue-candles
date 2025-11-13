import React from 'react';
import Image from 'next/image';

const RecommendedProducts = ({ recommended }) => {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {recommended.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 text-center">
            <Image
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="mx-auto rounded"
            />
            <h3 className="mt-3 font-medium">{item.name}</h3>
            <p className="text-gray-700 mt-1">£{item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedProducts;
