import React from "react";
import Image from "next/image";
import step1 from "../../../public/assets/images/Home/step1.svg";
import step2 from "../../../public/assets/images/Home/step2.svg";
import step3 from "../../../public/assets/images/Home/step3.svg";
import step4 from "../../../public/assets/images/Home/step4.svg";

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
        <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center text-white">
          <Image src={imageSrc} alt={title} width={24} height={24} />
        </div>
      ) : (
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
          <Image src={imageSrc} alt={title} width={24} height={24} />
        </div>
      )}

      {/* <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white">
        <Image src={imageSrc} alt={title} width={24} height={24} />
      </div> */}
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute top-12 left-1/2 w-0.5 h-12 bg-gray-200 -ml-[1px]" />
      )}
    </div>

    <div className="ml-4 flex items-center justify-center  pb-12">
      {isLast ? (
        <h4 className="font-bold text-lg text-green-500">{title}</h4>
      ) : (
        <h4 className="font-bold text-lg">{title}</h4>
      )}
    </div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      title: "Step 01",
      imageSrc: step1,
      isLast: false,
    },
    {
      title: "Step 02",
      imageSrc: step2,
      isLast: false,
    },
    {
      title: "Step 03",
      imageSrc: step3,
      isLast: false,
    },
    {
      title: "Get Delivered at Your doorstep",
      imageSrc: step4,
      isLast: true,
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div>
            <h2 className="text-5xl font-bold mb-4">How it works?</h2>
            <p className="text-gray-600 mb-8">
              Effortless Visa and Passport Assistance in Three Simple Steps
            </p>

            <div className="space-y-0">
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
          <div className="relative mt-16 ">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden ">
              <Image
                src="/assets/images/Home/Video.png"
                alt="Process Video"
                width={800}
                height={450}
                className="object-cover rounded-2xl"
              />
              {/* Play Button Overlay */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
