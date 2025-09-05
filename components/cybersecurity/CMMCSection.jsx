import React from "react";

const CMMCSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Deltacom is a CMMC-certified cybersecurity provider, delivering
            compliance and readiness services to support Department of Defense
            contractors and subcontractors.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-[#013a63] mb-4">
            Readiness Assessments
          </h3>
          <p className="text-slate-600 leading-relaxed">
            We evaluate your current cybersecurity posture against CMMC
            requirements (Level 1–2), identify gaps, and provide a clear roadmap
            to compliance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CMMCSection;
