import React from 'react';
import HeroSlider from '@/components/HeroSlider';
import TrustpilotButton from '@/components/TrustpilotButton';
import CategoryGrid from '@/components/CategoryGrid';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import AsSeenInCarousel from '@/components/AsSeenInCarousel';
import NewsletterSignup from '@/components/NewsletterSignup';

const page = () => {
  return (
    <main>
      <HeroSlider />
      <TrustpilotButton />
      <CategoryGrid />
      <AboutSection />
      <BlogSection />
      <AsSeenInCarousel />
      <NewsletterSignup />
    </main>
  );
};

export default page;
