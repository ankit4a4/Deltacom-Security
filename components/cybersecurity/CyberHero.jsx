import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, ArrowRight } from "lucide-react";
import HeroImage from "../../public/images/cyber.jpg";

gsap.registerPlugin(ScrollTrigger);

const CyberHero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cyber-animate",
      {
        opacity: 0,
        y: 60,
      },
      {
        scrollTrigger: {
          trigger: ".cyber-animate-wrapper",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="relative md:mt-[120px] mt-20 py-20 cyber-animate-wrapper">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          height={100}
          width={100}
          src={HeroImage}
          alt="Cybersecurity Background"
          className="w-full h-full object-cover"
        />
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="cyber-animate inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6 opacity-0 translate-y-12">
          <AlertTriangle className="h-5 w-5 text-white mr-2" />
          <span className="text-white font-medium">
            Cyber Threats Are Increasing
          </span>
        </div>

        {/* Heading */}
        <h1 className="cyber-animate text-4xl lg:text-6xl font-bold text-white mb-6 opacity-0 translate-y-12">
          <span className="text-white">Cybersecurity</span> & IT Services
        </h1>

        {/* Paragraph */}
        <p className="cyber-animate text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8 opacity-0 translate-y-12">
          Comprehensive cybersecurity solutions including network security,
          endpoint protection, and IT infrastructure services designed to
          protect your digital assets and operations.
        </p>

        {/* Button */}
        <Link
          href="/contact"
          className="cyber-animate bg-white text-[#013a63] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center opacity-0 translate-y-12"
        >
          <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
            Get Security Assessment
          </span>
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
};

export default CyberHero;
