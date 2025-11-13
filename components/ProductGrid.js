import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 text-centre hover:shadow-lg transition">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-3 rounded"
          />
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.scent}</p>
          <p className="font-semibold">£{product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
