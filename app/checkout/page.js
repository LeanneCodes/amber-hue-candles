"use client";

import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const validatedCart = savedCart.map(item => ({
      ...item,
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 1,
    }));
    setCart(validatedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleRemove = (id) => {
    const updated = cart.filter(item => item.id !== id);
    updateCart(updated);
  };

  const handleQuantityChange = (id, newQty) => {
    const updated = cart.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, Number(newQty)) }
        : item
    );
    updateCart(updated);
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const vat = subtotal * 0.2;
  const shipping = subtotal === 0 ? 0 : subtotal < 50 ? 3 : 0;
  const total = subtotal + vat + shipping;

  // Stripe checkout function
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart }),
      });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      } else {
        alert("Failed to start checkout: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img src={item.images?.[0]} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-500">£{item.price.toFixed(2)} each</p>
                    <div className="flex items-center mt-2">
                      <label className="text-sm mr-2">Qty:</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="w-16 border rounded px-2 py-1 text-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <p className="font-medium">£{(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => handleRemove(item.id)} className="text-red-600 hover:underline text-sm">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t pt-6 space-y-2 text-right">
            <p><span className="font-medium">Subtotal:</span> £{subtotal.toFixed(2)}</p>
            <p><span className="font-medium">VAT (20%):</span> £{vat.toFixed(2)}</p>
            <p><span className="font-medium">Shipping:</span> {shipping === 0 ? "Free" : `£${shipping.toFixed(2)}`}</p>
            <p className="text-xl font-semibold pt-2 border-t mt-2">Total: £{total.toFixed(2)}</p>
          </div>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-all duration-200 w-full sm:w-auto ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </>
      )}
    </div>
  );
}
