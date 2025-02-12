import React from "react";
import Image from "next/image";
import { steps } from "../constants/processDAta";

interface ProcessStepProps {
  imageSrc: string;
  title: string;
  isLast?: boolean;
}

const ProcessStep = ({ imageSrc, title, isLast = false }: ProcessStepProps) => (
  <div className="flex items-start">
    {/* Icon Circle */}
    <div className="relative">
      {isLast ? (
        <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
          <Image src={imageSrc} alt={title} width={24} height={24} />
        </div>
      ) : (
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
          <Image src={imageSrc} alt={title} width={24} height={24} />
        </div>
      )}

      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute top-[52px] left-1/2 w-1 h-[25px] bg-gray-400 -ml-[1px]" />
      )}
    </div>

    <div className="ml-4 flex items-center pb-12 mt-4">
      {isLast ? (
        <h4 className="font-bold text-lg text-green-500 leading-none">{title}</h4>
      ) : (
        <h4 className="font-bold text-lg leading-none">{title}</h4>
      )}
    </div>
  </div>
);

const ProcessSection = () => {
 

  return (
    <div className="bg-secondary py-16">
      <div className="px-[10vw] mx-auto lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div>
            <h2 className="text-5xl font-bold mb-4">How it works?</h2>
            <p className="text-gray-600 mb-8">
              Effortless Visa and Passport Assistance in Three Simple Steps
            </p>

            <div className="space-y-0 gap-4">
              {steps.map((step, index) => (
                <ProcessStep
                  key={index}
                  imageSrc={step.imageSrc}
                  title={step.title}
                  isLast={step.isLast}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative mt-16">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/Home/Video.png"
                alt="Process Video"
                width={800}
                height={450}
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;