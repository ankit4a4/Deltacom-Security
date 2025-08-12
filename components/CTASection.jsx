"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CTASection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-100 to-gray-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0  opacity-50"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={contentRef}>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#013a63]  mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-black/80 mb-8 leading-relaxed">
            Get a free security assessment and discover how we can protect your
            people, property, and operations with cutting-edge solutions
            tailored to your needs.
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <div className="flex items-center text-[#01497c] ">
              <Phone className="h-6 w-6 mr-3 text-black/70" />
              <span className="text-lg font-semibold"> (703) 345-1012</span>
            </div>
            <div className="flex items-center text-[#01497c]">
              <Mail className="h-6 w-6 mr-3 text-black/70" />
              <span className="text-lg font-semibold text-[#01497c]">
                support@deltacomsecurity.com
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group bg-blue-50 text-[#013a63]  px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="border-2 border-black/50 text-black/80 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#013a63]  transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-blue-500/50">
            <p className="text-black/80 mb-4">
              Trusted by Government Agencies & Fortune 500 Companies
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-black/60 text-sm">
              <span>✓ Licensed & Insured</span>
              <span>✓ 25+ Years Experience</span>
              <span>✓ 24/7 Support</span>
              <span>✓ Free Assessments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
