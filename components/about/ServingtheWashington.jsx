import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServingtheWashington = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate all elements with class 'animate-section'
      gsap.fromTo('.animate-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-[#013a63] via-[#01497c] to-[#013a63] animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center animate-section">
          <MapPin className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Serving the Washington, DC Metro Area & Across the USA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {`Our local expertise and deep understanding of the region's unique security challenges 
            make us the preferred choice for businesses and government agencies throughout the metro area.`}
          </p>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass-dark rounded-2xl p-6 animate-section">
              <h3 className="text-xl font-bold text-white mb-3">Washington, DC</h3>
              <p className="text-gray-300">Federal agencies, commercial buildings, and urban businesses</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 animate-section">
              <h3 className="text-xl font-bold text-white mb-3">Virginia</h3>
              <p className="text-gray-300">Tech companies, defense contractors, and corporate headquarters</p>
            </div>
            <div className="glass-dark rounded-2xl p-6 animate-section">
              <h3 className="text-xl font-bold text-white mb-3">Maryland</h3>
              <p className="text-gray-300">Government facilities, healthcare systems, and educational institutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServingtheWashington;
