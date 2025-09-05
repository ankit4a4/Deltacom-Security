import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Clock, Award, Users, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const BusinessesDeltacom = () => {
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

  const benefits = [
    {
      icon: Clock,
      title: "Minimal Downtime",
      description:
        "Our efficient installation process ensures your business operations continue with minimal interruption.",
    },
    {
      icon: Award,
      title: "Compliance Assured",
      description:
        "All installations meet industry standards and regulatory requirements for your sector.",
    },
    {
      icon: Users,
      title: "Scalable Solutions",
      description:
        "Systems designed to grow with your business, from single locations to enterprise-wide deployments.",
    },
    {
      icon: ShieldCheck,
      title: "Integrated Security",
      description:
        "All security systems work together seamlessly for comprehensive protection and monitoring.",
    },
  ];

  return (
    <section className="py-20 bg-white animate-sections" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Why Businesses Choose Deltacom
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our commercial clients rely on us for professional installations,
            ongoing support, and security expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="animate-section text-center">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl inline-flex mb-6">
                  <IconComponent className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#013a63] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessesDeltacom;
