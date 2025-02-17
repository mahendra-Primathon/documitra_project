// components/VisaProcess.tsx
"use client";
import React from 'react';
import { visaProcessSteps } from '../constants/packageData';

interface VisaProcessProps {
  country?: 'usa' | 'india' | 'unitedKingdom';
}
// packageVisaProcess

const VisaProcess: React.FC<VisaProcessProps> = ({ country = 'usa' }) => {
  const steps = visaProcessSteps[country];

  return (
    <div className="w-full py-12 px-[10vw] bg-secondary">
      <h2 className="text-5xl font-bold mb-20 ">Visa application process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps?.map((step) => (
          <div 
            key={step.id}
            className="flex gap-0 items-start group"
          >
            <div className="flex-shrink-0 ">
              <div className="w-16 h-32 bg-blue-100 rounded-l-3xl flex items-center justify-center  px-10">
                <span className="text-primary text-4xl font-bold">
                  {step.number}
                </span>
              </div>
            </div>
            
            <div className="flex-grow">
              <p className="text-gray-600 h-32 py-auto   px-10 bg-white text-xl leading-relaxed group-hover:text-primary transition-colors flex items-center ">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaProcess;