import React, { useEffect, useRef } from "react";
import Link from "next/link"; // or 'react-router-dom' ka Link agar use ho raha ho
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-cta",
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
    <div ref={sectionRef}>
      <section className="py-10 md:py-[120px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6 animate-cta">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-[#013a63] mb-8 animate-cta">
            {`Let's discuss how our experience and expertise can help secure your business.`}
          </p>
          <Link
            href="/contact"
            className="bg-white border border-gray-200  px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block shadow-md animate-cta"
          >
            <span className="bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent">
              Get Your Free Consultation
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutCTA;
