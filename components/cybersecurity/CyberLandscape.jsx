import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Lock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CyberLandscape = () => {
  const sectionRef = useRef(null);

  const threats = [
    {
      name: "Ransomware",
      percentage: "41%",
      description: "of attacks target small businesses",
    },
    {
      name: "Phishing",
      percentage: "83%",
      description: "of organizations experienced attacks",
    },
    {
      name: "Data Breach",
      percentage: "$4.35M",
      description: "average cost per breach",
    },
    {
      name: "Downtime",
      percentage: "23 days",
      description: "average recovery time",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-element", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 gsap-element">
          <Shield className="h-16 w-16 text-[#427DF6] mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            The Cyber Threat Landscape
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Cyber threats are constantly evolving and becoming more
            sophisticated. Understanding the risks is the first step in building
            effective defenses.
          </p>
        </div>

        {/* Threats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {threats.map((threat, index) => (
            <div key={index} className="gsap-element">
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-2">
                  {threat.percentage}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {threat.name}
                </div>
                <div className="text-sm text-gray-500">
                  {threat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box */}
        <div className="gsap-element bg-[#0F172A] rounded-3xl p-8 lg:p-12 text-center text-white mt-16">
          <Lock className="h-16 w-16 mx-auto mb-6 text-purple-200" />
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Proactive Cybersecurity Defense
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            Fortify your digital infrastructure with industry-leading
            cybersecurity solutions. Learn how integrated surveillance, AI
            analytics, and cloud protection keep threats at bay
          </p>
        </div>
      </div>
    </section>
  );
};

export default CyberLandscape;
