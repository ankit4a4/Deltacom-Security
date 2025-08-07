import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Clock, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SecondCounts = () => {
  const sectionRef = useRef(null);

  const fireStats = [
    {
      number: "60",
      unit: "seconds",
      description: "Fire doubles in size every minute",
    },
    {
      number: "3-5",
      unit: "minutes",
      description: "Average time for fire to become deadly",
    },
    {
      number: "30",
      unit: "seconds",
      description: "Time to evacuate once alarm sounds",
    },
  ];

  useEffect(() => {
    const sections = sectionRef.current.querySelectorAll(".animate-section");

    sections.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white animate-sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <Clock className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Every Second Counts
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Fire emergencies develop rapidly. Understanding the timeline is
            critical to effective fire protection planning.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fireStats.map((stat, index) => (
              <div key={index} className="animate-section">
                <div className="border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl lg:text-5xl font-bold text-[#427DF6] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-black mb-3">
                    {stat.unit}
                  </div>
                  <div className="text-slate-600">{stat.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-section bg-[#0F172A] rounded-3xl p-8 lg:p-12 text-center text-white">
          <ShieldAlert className="h-16 w-16 mx-auto mb-6 text-orange-200" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Rapid Response Fire Protection
          </h3>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our fire protection systems are designed for the fastest possible
            detection and response, giving you precious extra seconds to save
            lives and protect property.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondCounts;
