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
      <body>
        <HeaderBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
