import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroImage from "@/public/images/commercial/HeroSectionIMage.jpg";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // ensure you're using lucide icons
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CommercialHero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-hero",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-[115px] h-[400px] flex flex-col items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          width={100}
          height={100}
          src={HeroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-hero">
            <span>Commercial</span> Security Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 animate-hero">
            Comprehensive security systems designed for businesses, government facilities, and commercial properties
            throughout the Washington, DC Metro Area.
          </p>
          <Link
            href="/contact"
            className="text-black bg-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center animate-hero"
          >
            <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
              Get Free Assessment
            </span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommercialHero;
