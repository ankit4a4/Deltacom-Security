'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CTASection from '@/components/CTASection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      gsap.fromTo('.page-content', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="page-content">
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  );
}