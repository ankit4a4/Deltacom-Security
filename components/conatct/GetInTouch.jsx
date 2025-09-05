import React, { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".get-touch-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".get-touch-header",
            start: "top 85%",
          },
        }
      );

      // Animate cards with stagger
      gsap.fromTo(
        ".get-touch-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(703) 345-1012",
      subtitle: "Call for immediate assistance",
      gradient: "from-green-500 to-green-700",
    },
    {
      icon: Mail,
      title: "Email",
      details: "support@deltacomsecurity.com",
      subtitle: "Get a response within 24 hours",
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "Washington, DC Metro Area",
      subtitle: "Virginia, DC, Maryland, United states",
      gradient: "from-orange-500 to-orange-700",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 8AM - 6PM",
      subtitle: "24/7 Emergency Support Available",
      gradient: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16 get-touch-header">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#013a63] mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Multiple ways to reach us. Choose what&apos;s most convenient for
            you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div key={index} className="get-touch-card">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
                  <div className="p-4 bg-[#427DF6] rounded-2xl inline-flex mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#013a63] mb-2">
                    {info.title}
                  </h3>
                  <p className="text-lg font-semibold text-slate-700 mb-2">
                    {info.details}
                  </p>
                  <p className="text-sm text-slate-500">{info.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* False Alarm Notice */}
       {/* False Alarm Notice */}
<div className="mt-16 bg-[#E5EDFF] border-l-4 border-[#427DF6] text-[#1F3C88] p-6 rounded-xl shadow-md max-w-3xl mx-auto" role="alert">
  <h3 className="text-xl font-semibold mb-2">To Cancel a False Alarm:</h3>
  <p className="text-base">
    Call <a href="tel:18006332677" className="underline font-medium">1-800-633-2677</a>, select option 1,
    and then select your monitoring station to cancel the false alarm.
  </p>
</div>

      </div>
    </section>
  );
};

export default GetInTouch;
