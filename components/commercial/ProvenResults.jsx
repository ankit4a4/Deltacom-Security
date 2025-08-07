import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProvenResults = () => {
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
    <div ref={sectionRef}>
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-section">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Our commercial installations have helped organizations improve
              security, reduce incidents, and ensure compliance across the
              Washington, DC Metro Area.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[  
                { value: "500+", label: "Commercial Installations" },
                { value: "99.9%", label: "System Uptime" },
                { value: "24/7", label: "Monitoring & Support" },
              ].map((item, index) => (
                <div key={index} className="glass-dark rounded-2xl p-8 text-center animate-section">
                  <div className="text-4xl font-bold text-white mb-2">{item.value}</div>
                  <div className="text-gray-400 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvenResults;
