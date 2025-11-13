// components/CartContext.jsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // { id, name, price, images, quantity }
  const [toast, setToast] = useState({ show: false, item: null });

  // load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart");
      if (raw) setCart(JSON.parse(raw));
    } catch (e) { console.error(e); }
  }, []);

  // persist to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, images: product.images, quantity }];
    });
    // show toast
    setToast({ show: true, item: { id: product.id, name: product.name, price: product.price, images: product.images, quantity } });
    // auto-hide after 3s
    setTimeout(() => setToast({ show: false, item: null }), 3000);
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: Math.max(1, qty) } : p))
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((s, p) => s + p.quantity, 0);
  const totalPrice = cart.reduce((s, p) => s + p.price * p.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice, toast }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
