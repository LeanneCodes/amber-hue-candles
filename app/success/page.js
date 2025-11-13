"use client";

import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const params = new URLSearchParams(window.location.search);
      const session_id = params.get("session_id");
      if (!session_id) return;

      try {
        const res = await fetch(`/api/session?session_id=${session_id}`);
        const data = await res.json();
        setSession(data);
      } catch (error) {
        console.error("Error fetching session:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading your order details...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Could not load your order. Please contact support.</p>
      </div>
    );
  }

  const { amount_total, customer_email, line_items } = session;
  const total = (amount_total / 100).toFixed(2);

  return (
    <div className="max-w-3xl mx-auto p-8 text-center space-y-6">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="text-gray-700">
        Thank you for your purchase, <span className="font-medium">{customer_email}</span>!
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">Order Summary</h2>
      <div className="space-y-4 border rounded-md p-6 bg-gray-50">
        {line_items?.data?.map((item, idx) => (
          <div key={idx} className="flex justify-between text-left">
            <div>
              <p className="font-medium">{item.description}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
            </div>
            <p>£{(item.amount_total / 100).toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="text-lg font-semibold mt-6">
        Total Paid: £{total}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        A confirmation email has been sent to <strong>{customer_email}</strong>.
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all duration-200"
      >
        Continue Shopping
      </button>
    </div>
  );
}
