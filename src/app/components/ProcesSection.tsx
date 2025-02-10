// components/Process/ProcessSection.tsx
import React from 'react';
import Image from 'next/image';
import videoImage from '../../..//public/assets/images/Home/Video.png';
import step1 from '../../../public/assets/images/Home/step1.svg';
import step2 from '../../../public/assets/images/Home/step2.svg';
import step3 from '../../../public/assets/images/Home/step3.svg';
import step4 from '../../../public/assets/images/Home/step4.svg';

interface ProcessStepProps {
  stepNumber: number;
  title: string;
  isCompleted?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ stepNumber, title, isCompleted = false }) => (
  <div className="flex items-start gap-4">
    <div className={`
      w-8 h-8 rounded-full flex items-center justify-center
      ${isCompleted ? 'bg-green-100 text-green-600' : 'bg-primary text-'}
    `}>
      {isCompleted ? '✓' : stepNumber}
    </div>
    <div>
      <h4 className="font-medium">Step {stepNumber}</h4>
      <p className="text-gray-600">{title}</p>
    </div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    { title: "Fill out the required information" },
    { title: "Submit your documents" },
    { title: "Track your application" },
    { title: "Receive document at your doorstep", isCompleted: true }, 
  ];

  return (
    <div className="  px-[10vw]  bg-bgBlue  lg:py-16 ">
      <h2 className="text-3xl font-bold mb-12">How it works?</h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              stepNumber={index + 1}
              title={step.title}
              isCompleted={step.isCompleted}
            />
          ))}
        </div>
        
        <div className="relative">
          <Image
            src={videoImage}
            alt="Process illustration"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;