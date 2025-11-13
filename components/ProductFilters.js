import React from 'react';

const ProductFilters = ({ filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6 justify-between items-centre">
      <div className="flex gap-2">
        <select
          value={filters.scent}
          onChange={(e) => handleChange('scent', e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Scents</option>
          <option value="Amber & Musk">Amber & Musk</option>
          <option value="Citrus">Citrus</option>
          <option value="Vanilla">Vanilla</option>
          <option value="Lavender">Lavender</option>
        </select>

        <select
          value={filters.size}
          onChange={(e) => handleChange('size', e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="">All Sizes</option>
          <option value="200ml">200ml</option>
          <option value="300ml">300ml</option>
          <option value="500ml">500ml</option>
        </select>
      </div>

      <select
        value={filters.sort}
        onChange={(e) => handleChange('sort', e.target.value)}
        className="border rounded px-3 py-2"
      >
        <option value="">Sort by</option>
        <option value="featured">Featured</option>
        <option value="alphabetical">Alphabetically</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="recent">Most Recent</option>
      </select>
    </div>
  );
};

export default ProductFilters;
