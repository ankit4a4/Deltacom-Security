import React, { useEffect, useRef } from "react";
import HeroSectionImage from "@/public/images/about/HeroImage.jpg";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); 

const AboutHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-content",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      gsap.fromTo(
        ".animate-section",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".animate-sections",
            start: "top 70%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative mt-[115px] h-[400px] flex flex-col items-center justify-center page-content"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          height={100}
          width={100}
          src={HeroSectionImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate-section">
          About <span className="">Deltacom Security</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-section">
          {`For over a decade, we've been the Washington, DC Metro Area's most trusted security provider, 
          delivering innovative solutions that protect what matters most.`}
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
