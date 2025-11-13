import React from 'react';
import ProductGallery from '@/components/ProductGallery';
import ProductInfo from '@/components/ProductInfo';
import ProductTabs from '@/components/ProductTabs';
import RecommendedProducts from '@/components/RecommendedProducts';

const page = ({ params }) => {
  const { id } = params;

  const product = {
    id,
    name: 'Vanilla Bean Candle',
    category: 'Candles',
    price: 14.99,
    inStock: 10,
    images: [
      '/images/candle-main.jpg',
      '/images/candle-side.jpg',
      '/images/candle-size.jpg',
    ],
    description:
      'A luxurious hand-poured candle made with natural soy wax and a sweet vanilla scent.',
    shipping:
      'Orders are processed within 5–7 business days. Free shipping on UK mainland orders.',
    care: 'Trim wick to 5mm before lighting. Do not burn for more than 4 hours at a time.',
    reviews: [
      { id: 1, name: 'Sophie', comment: 'Smells amazing and lasts ages!' },
      { id: 2, name: 'James', comment: 'High-quality wax and beautiful packaging.' },
    ],
  };

  const recommended = [
    {
      id: 'candle-2',
      name: 'Lavender Dream Candle',
      price: 12.99,
      image: '/images/lavender.jpg',
    },
    {
      id: 'candle-3',
      name: 'Citrus Glow Candle',
      price: 15.49,
      image: '/images/citrus.jpg',
    },
    {
      id: 'candle-4',
      name: 'Rose Petal Candle',
      price: 13.49,
      image: '/images/rose.jpg',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>
      <ProductTabs product={product} />
      <RecommendedProducts recommended={recommended} />
    </div>
  );
};

export default page;
