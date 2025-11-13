import './globals.css';
import { CartProvider } from "@/components/CartContext";
import { Toaster } from "react-hot-toast";
import HeaderBanner from '@/components/HeaderBanner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Amber Hue Candles',
  description: 'Handcrafted candles with a warm, amber glow.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <CartProvider>
          <header>
            <HeaderBanner />
            <Navbar />
          </header>
          <main className="grow">
            {children}
            <Toaster position="top-right" />
          </main>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
