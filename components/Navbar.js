import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Shop Now</Link></li>
        <li><Link href="/markets">Market & Pop-up Dates</Link></li>
        <li><Link href="/wholesale">Shop Wholesale</Link></li>
        <li><Link href="/newsletter">Newsletter Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
