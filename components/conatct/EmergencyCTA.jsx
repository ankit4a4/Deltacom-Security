import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EmergencyCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#013a63] mb-4">
          Need Emergency Security Support?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Our emergency support team is available 24/7 for existing clients
          experiencing security system issues.
        </p>
        <a
          href="tel:+(703)345-1012"
          className="bg-white border border-gray-100 text-[#013a63] px-8 py-3 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
        >
          <Phone className="mr-2 h-5 w-5" />
          <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
            Call Emergency Support
          </span>
        </a>
      </div>
    </section>
  );
};

export default EmergencyCTA;
