import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IndustrySpecific = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".animate-section");
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const industries = [
    {
      name: "Government Agencies",
      description:
        "Meeting strict security requirements and compliance standards for federal, state, and local government.",
      requirements: ["FISMA compliance", "NIST framework", "FedRAMP standards"],
    },
    {
      name: "Healthcare Organizations",
      description:
        "HIPAA-compliant cybersecurity solutions protecting sensitive patient data and medical systems.",
      requirements: [
        "HIPAA compliance",
        "Medical device security",
        "Patient data protection",
      ],
    },
    {
      name: "Financial Services",
      description:
        "Robust security measures for banks, credit unions, and financial institutions handling sensitive data.",
      requirements: [
        "PCI DSS compliance",
        "Financial regulations",
        "Fraud prevention",
      ],
    },
    {
      name: "Legal Firms",
      description:
        "Attorney-client privilege protection with secure communication and document management systems.",
      requirements: [
        "Client confidentiality",
        "Secure communications",
        "Data retention policies",
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-section">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Industry-Specific Cybersecurity
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored cybersecurity solutions that meet the unique compliance
            requirements and security challenges of different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="animate-section">
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-[#013a63] mb-4">
                  {industry.name}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {industry.description}
                </p>
                <div className="space-y-2">
                  {industry.requirements.map((req, reqIndex) => (
                    <div
                      key={reqIndex}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySpecific;
