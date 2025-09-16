import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Users, ShieldCheck, Award, Hotel } from "lucide-react";
import { Cross } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const IndustriesWeServe = () => {
  const sectionRef = useRef(null);

  const industries = [
    {
      name: "Government Facilities",
      description:
        "Federal, state, and local government buildings requiring the highest security standards.",
      icon: Building2,
    },
    {
      name: "Corporate Offices",
      description:
        "Business headquarters and office buildings needing comprehensive security solutions.",
      icon: Users,
    },
    {
      name: "Healthcare Systems",
      description:
        "Hospitals and medical facilities requiring HIPAA-compliant security measures.",
      icon: ShieldCheck,
    },
    {
      name: "Educational Institutions",
      description:
        "Schools and universities focusing on safety and emergency response capabilities.",
      icon: Award,
    },
    {
      name: "Church’s",
      description: "Deltacom specializes in designing and implementing tailored security systems for churches, providing solutions that protect congregations, staff, and property while maintaining a welcoming environment.",
      icon: Cross,
    },
    {
      name: "Commercial & Institutional Security",
      description: "From offices to retail stores, healthcare facilities, banks, schools, and government buildings, we provide tailored security solutions that fit your environment and budget.",
      icon: Hotel,
    }

  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-section", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-slate-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Industries We Serve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Specialized security solutions tailored to the unique requirements
            of different commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div key={index} className="animate-section">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className="p-3 bg-[#396AE9] rounded-2xl mr-6 flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#013a63] mb-3">
                        {industry.name}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Button at Bottom */}
        <div className="text-center mt-12 animate-section">
          <a
            href="/about"
            className="inline-block text-white bg-[#396AE9] px-6 py-3 rounded-xl font-medium text-lg hover:bg-[#2c56c2] transition duration-300"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
