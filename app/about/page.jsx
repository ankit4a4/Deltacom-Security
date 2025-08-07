'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Users, Award, MapPin, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import AboutHero from "@/components/about/AboutHero"
import OurMission from "@/components/about/OurMission"
import OurValues from "@/components/about/OurValues"
import OurJourney from "@/components/about/OurJourney"

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      gsap.fromTo('.page-content',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Stagger animations for sections
      gsap.fromTo('.animate-section',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.animate-sections',
            start: 'top 70%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

 

  

  return (
    <div ref={containerRef} className="page-content">
      {/* Hero Section */}
      <AboutHero />
      <OurMission />
      <OurValues />
      <OurJourney />


     

      {/* Core Values */}
   

      {/* Company History */}
     

      {/* Service Area */}
      <section className="py-20 bg-slate-900 animate-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-section">
            <MapPin className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Serving the Washington, DC Metro Area
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {`   Our local expertise and deep understanding of the region's unique security challenges 
              make us the preferred choice for businesses and government agencies throughout the metro area.`}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Washington, DC</h3>
                <p className="text-gray-300">Federal agencies, commercial buildings, and urban businesses</p>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Virginia</h3>
                <p className="text-gray-300">Tech companies, defense contractors, and corporate headquarters</p>
              </div>
              <div className="glass-dark rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-3">Maryland</h3>
                <p className="text-gray-300">Government facilities, healthcare systems, and educational institutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-[120px] ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-black mb-8">
            {`  Let's discuss how our experience and expertise can help secure your business.`}
          </p>
          <Link
            href="/contact"
            className="bg-white border border-gray-200  px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block shadow-md  "
          >
            <span className='bg-gradient-to-r from-[#427DF6] to-[#7826CF] bg-clip-text text-transparent'>
              Get Your Free Consultation
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}