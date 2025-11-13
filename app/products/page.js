'use client';
import React, { useState } from 'react';

const page = () => {
  const [products] = useState([
    { id: 1, name: 'Amber Glow Candle', category: 'Candles', scent: 'Amber & Musk', size: '200ml', price: 14.99, image: '/images/amber-glow.jpg' },
    { id: 2, name: 'Citrus Breeze Candle', category: 'Candles', scent: 'Citrus', size: '300ml', price: 17.99, image: '/images/citrus-breeze.jpg' },
    { id: 3, name: 'Rose Essence Perfume', category: 'Perfumes', scent: 'Rose', size: '50ml', price: 29.99, image: '/images/rose-essence.jpg' },
    { id: 4, name: 'Ocean Drift Diffuser', category: 'Reed Diffusers', scent: 'Ocean', size: '100ml', price: 24.99, image: '/images/ocean-drift.jpg' },
    { id: 5, name: 'Vanilla Dream Wax Melt', category: 'Wax Melts', scent: 'Vanilla', size: '6-pack', price: 9.99, image: '/images/vanilla-dream.jpg' },
    { id: 6, name: 'Lavender Fields Perfume', category: 'Perfumes', scent: 'Lavender', size: '100ml', price: 34.99, image: '/images/lavender-fields.jpg' },
  ]);

  const [filters, setFilters] = useState({
    category: '',
    scent: '',
    size: '',
    sort: '',
  });

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const sortedProducts = [...products].sort((a, b) => {
    switch (filters.sort) {
      case 'alphabetical':
        return a.name.localeCompare(b.name);
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;
      case 'recent':
        return b.id - a.id; // assuming higher ID = newer
      default:
        return 0;
    }
  });

  const filteredProducts = sortedProducts.filter((p) =>
    (!filters.category || p.category === filters.category) &&
    (!filters.scent || p.scent === filters.scent) &&
    (!filters.size || p.size === filters.size)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Shop All Products</h1>

      {/* Filters Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        {/* Category */}
        <select
          value={filters.category}
          onChange={(e) => handleChange('category', e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Categories</option>
          <option value="Candles">Candles</option>
          <option value="Perfumes">Perfumes</option>
          <option value="Wax Melts">Wax Melts</option>
          <option value="Reed Diffusers">Reed Diffusers</option>
        </select>

        {/* Scent */}
        <select
          value={filters.scent}
          onChange={(e) => handleChange('scent', e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Scents</option>
          <option value="Amber & Musk">Amber & Musk</option>
          <option value="Citrus">Citrus</option>
          <option value="Rose">Rose</option>
          <option value="Ocean">Ocean</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Lavender">Lavender</option>
        </select>

        {/* Size */}
        <select
          value={filters.size}
          onChange={(e) => handleChange('size', e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Sizes</option>
          <option value="6-pack">6-pack</option>
          <option value="50ml">50ml</option>
          <option value="100ml">100ml</option>
          <option value="200ml">200ml</option>
          <option value="300ml">300ml</option>
        </select>

        {/* Sort By */}
        <select
          value={filters.sort}
          onChange={(e) => handleChange('sort', e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">Sort By</option>
          <option value="alphabetical">Alphabetically (A-Z)</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="priceHighLow">Price: High to Low</option>
          <option value="recent">Most Recent</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 hover:shadow-md transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded mb-3"
              />
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="font-semibold mt-2">£{product.price.toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default page;
