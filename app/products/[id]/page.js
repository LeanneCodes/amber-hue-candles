import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import ProductTabs from "@/components/ProductTabs";

export default function ProductPage() {
  const product = {
    id: 1,
    name: "Vanilla Bean Candle",
    category: "Candles",
    price: 14.99,
    inStock: 10,
    images: [
      "/images/candle-main.jpg",
      "/images/candle-side.jpg",
      "/images/candle-size.jpg",
    ],
    description:
      "A luxurious hand-poured candle made with natural soy wax and a sweet vanilla scent.",
    shipping:
      "Orders are processed within 5–7 business days. Free shipping on UK mainland orders.",
    care: "Trim wick to 5mm before lighting. Do not burn for more than 4 hours at a time.",
    reviews: [
      { id: 1, name: "Sophie", comment: "Smells amazing and lasts ages!" },
      { id: 2, name: "James", comment: "High-quality wax and beautiful packaging." },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left side: Gallery */}
      <ProductGallery images={product.images} />

      {/* Right side: Details and Tabs */}
      <div className="space-y-8">
        <ProductDetails product={product} />
        <ProductTabs product={product} />
      </div>
    </div>
  );
}
