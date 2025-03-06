// components/ApplicationProcess.tsx
"use client";
import React from "react";
import { applicationProcessData } from "../../constants/packageData";

const ApplicationProcess = () => {
  return (
    <div className="w-full py-8 md:py-12 px-4 md:px-[10vw] bg-secondary">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
        Application Process
      </h2>

      <div className="gap-4 md:gap-6">
        {applicationProcessData.map((process) => (
          <div key={process.id} className="my-4 md:my-6">
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4">
              {process.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              {process.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProcess;