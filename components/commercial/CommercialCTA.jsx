import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CommercialCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".animate-section");
    sections.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-10 md:py-[120px] bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6 animate-section">
          Secure Your Commercial Property Today
        </h2>
        <p className="text-xl text-gray-600 mb-8 animate-section">
          Let our experts design a comprehensive security solution tailored to
          your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-section">
          <Link
            href="/contact"
            className="bg-white border shadow-sm text-black px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
          >
            <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
              Schedule Free Assessment
            </span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommercialCTA;
