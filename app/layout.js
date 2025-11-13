import './globals.css';
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
        <header>
          <HeaderBanner />
          <Navbar />
        </header>
        <main className="grow">
          {children}
        </main>
        <footer className="mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
