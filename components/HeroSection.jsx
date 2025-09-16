"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Import Swiper components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const tagsRef = useRef([]);
  const cardRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const backgroundImages = [
    "/images/hero/7.jpg",
    "/images/newImags/image1.png",
    "/images/newImags/image2.png",
    "/images/newImags/image3.png",

  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animations
      gsap.fromTo(
        headingRef.current,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        subheadingRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.6 }
      );

      // Animate tags with stagger
      gsap.fromTo(
        tagsRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.9,
        }
      );

      // Animate floating card
      gsap.fromTo(
        cardRef.current,
        { x: 100, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 1.2,
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative mt-24 py-5 overflow-hidden">
      {/* Swiper Background Images */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full h-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/50 via-black/50 to-gray-100/10"></div>

      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Large Circle */}
        <div className="floating-element absolute top-20 right-20 w-96 h-96 rounded-full  bg-gradient-to-br from-white/5 to-gray-100/20 backdrop-blur-sm"></div>

        {/* Medium Circle */}
        <div
          className="floating-element absolute top-40 right-40 w-64 h-64 rounded-full  bg-gradient-to-br from-gray-50/10 to-white/5 backdrop-blur-sm"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Small floating elements */}
        <div className="floating-element absolute top-60 left-20 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-100/40 to-gray-200/40 backdrop-blur-sm rotate-12"></div>

        {/* Vertical lines pattern */}
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/50 to-transparent"></div>
        <div className="absolute left-20 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200/30 to-transparent"></div>
        <div className="absolute left-32 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 flex items-center h-[95vh] px-4 lg:px-8">
        <div className="max-w-[90rem] mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Service Tags */}
            <div className="flex flex-wrap gap-3">
              <span
                ref={(el) => (tagsRef.current[0] = el)}
                className="px-4 py-2 bg-[#01497c] text-white text-xs md:text-sm rounded-full"
              >
                Security Systems
              </span>
              <span
                ref={(el) => (tagsRef.current[1] = el)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-xs md:text-sm rounded-full border border-gray-200"
              >
                CCTV Surveillance
              </span>
              <span
                ref={(el) => (tagsRef.current[2] = el)}
                className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 text-xs md:text-sm rounded-full border border-gray-200"
              >
                Access Control
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1
                ref={headingRef}
                className="text-6xl lg:text-7xl font-bold text-gray-100 leading-tight"
              >
                The Most Reliable
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-200">
                  Security System
                </span>
              </h1>

              <p
                ref={subheadingRef}
                className="text-lg lg:text-xl text-gray-200 max-w-lg leading-relaxed"
              >
                Protecting the Washington DC, Maryland, and Virginia with smart, end-to-end security solutions that safeguard your people, property, and
                operations.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="px-8 py-4 bg-[#01497c] text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => router.push('/contact')}
              >
                Get Free Consultation
              </button>
              <button
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 rounded-2xl border border-gray-200 hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => router.push('/about')}
              >
                Explore Our Journey
              </button>
            </div>

            {/* Trust Indicator */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-200">
                  Trusted by government & enterprise clients
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#01497c]/95 backdrop-blur-sm lg:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-white">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <a
              href="/about"
              className="text-2xl hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="/commercial"
              className="text-2xl hover:text-gray-300 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-2xl hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
            <button className="mt-8 px-8 py-4 bg-white text-[#01497c] rounded-2xl hover:bg-gray-100 transition-colors">
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
