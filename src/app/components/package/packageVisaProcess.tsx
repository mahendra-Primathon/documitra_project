"use client";
import React from "react";
import { visaProcessSteps } from "../../constants/packageData";

interface VisaProcessProps {
  country?: "usa" | "india" | "unitedKingdom";
}

const VisaProcess: React.FC<VisaProcessProps> = ({ country = "usa" }) => {
  const steps = visaProcessSteps[country];

  return (
    <div className="w-full py-12 px-[10vw] bg-secondary overflow-hidden">
      <h2 className="text-5xl font-bold mb-20 text-center">
        Visa application process
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps?.map((step) => (
          <div key={step.id} className="flex w-full items-stretch group">
            {/* Step Number Box (Blue) */}
            <div className="flex-shrink-0 flex items-center justify-center bg-blue-100 text-primary text-4xl font-bold w-20 px-6 rounded-l-3xl">
              {step.number}
            </div>

            {/* Description Box (White) - Expands Based on Content */}
            <div className="flex-grow bg-white p-6 text-xl leading-relaxed group-hover:text-primary transition-colors flex items-center min-h-[6rem]">
              {step.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaProcess;
