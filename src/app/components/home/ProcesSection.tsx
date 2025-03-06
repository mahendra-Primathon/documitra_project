"use client";
import React, { useState } from "react";
import Image from "next/image";
import { steps } from "../../constants/processDAta";
import YTvideo from "../../../../public/assets/images/Home/Video.png";

interface ProcessStepProps {
  imageSrc: string;
  title: string;
  isLast?: boolean;
}

const ProcessStep = ({ imageSrc, title, isLast = false }: ProcessStepProps) => (
  <div className="flex items-start">
    <div className="relative">
      <div className={`w-12 h-12 rounded-full ${isLast ? "bg-green-500" : "bg-primary"} flex items-center justify-center text-white`}>
        <Image src={imageSrc} alt={title} width={24} height={24} />
      </div>
      {!isLast && <div className="absolute top-[52px] left-1/2 w-1 h-[25px] bg-gray-400 -ml-[1px]" />}
    </div>

    <div className="ml-4 flex items-center pb-12 mt-4">
      <h4 className={`font-bold text-lg leading-none ${isLast ? "text-green-500" : ""}`}>{title}</h4>
    </div>
  </div>
);

const ProcessSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  return (
    <div className="bg-secondary py-16">
      <div className="px-[5vw] mx-auto lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Steps */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">How it works?</h2>
            <p className="text-gray-600 mb-10">
              Effortless Visa and Passport Assistance in Three Simple Steps
            </p>

            <div className="space-y-0 gap-8">
              {steps.map((step, index) => (
                <ProcessStep key={index} imageSrc={step.imageSrc} title={step.title} isLast={step.isLast} />
              ))}
            </div>
          </div>

          {/* Right Column - Video/Image */}
          <div className="relative mt-1 lg:mt-2">
            {/* Thumbnail */}
            {!isVideoPlaying && (
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="w-full h-auto relative"
              >
                <Image
                  src={YTvideo}
                  alt="Process Video"
                  className="object-cover rounded-3xl w-full h-auto"
                />
              </button>
            )}

            {/* Video (Now Responsive & Properly Aligned) */}
            {isVideoPlaying && (
              <div className="relative w-full mt-4  ">
                <iframe
                  className="w-full aspect-video rounded-3xl shadow-lg"
                  src="https://www.youtube-nocookie.com/embed/vZE0j_WCRvI?si=HBs0dXI2qd4eEbYj&controls=0&start=78"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
