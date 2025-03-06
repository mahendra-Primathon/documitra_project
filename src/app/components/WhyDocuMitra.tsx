// components/WhyDocuMitra/WhyDocuMitra.tsx
import React from "react";
import { Shield, Clock, Check, Home } from "lucide-react";
import whyDocuMitra1 from "../../../public/assets/images/Home/whyDocmitra1.svg";
import whyDocuMitra2 from "../../../public/assets/images/Home/whyDocmitra2.svg";
import whyDocuMitra3 from "../../../public/assets/images/Home/whyDocmitra3.svg";
import whyDocuMitra4 from "../../../public/assets/images/Home/whyDocmitra4.svg";
import Image from "next/image";
import GetStartedButton from "./GetStartedButton";
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg  ">
    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
      <div className="text-primary">{icon}</div>
    </div>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const WhyDocuMitra = () => {
  const features = [
    {
      icon: whyDocuMitra1,
      title: "Speed & Simplicity",
      description: "Swift documentation process with streamlined procedures",
    },
    {
      icon: whyDocuMitra2,
      title: "100% Security",
      description: "Your data is fully secured and protected at all steps",
    },
    {
      icon: whyDocuMitra3,
      title: "95% Approvals",
      description: "High success rate across various document applications",
    },
    {
      icon: whyDocuMitra4,
      title: "Comfort from home",
      description: "Complete all processes from the comfort of your home",
    },
  ];

  return (
    <div className="px-[10vw]  lg:py-20 bg-[#f4f8fc] py-10">
      <h2 className="text-3xl font-bold text-center my-12">Why Documitra?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 py-8 my-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col text-left p-8 bg-white rounded-3xl shadow-lg max-w-xs mx-auto"
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <div className=" pb-7">
                <Image src={feature.icon} alt="icon" />
              </div>
            </div>
            <div className="w-12 h-1 bg-gray-300  my-6 "></div>
            <div className=" pr-3 text-lg gap-3 mt-6 ">
              <h3 className="font-semibold text-2xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="text-center justify-center mx-auto ">
        <GetStartedButton/>
        </div>
    </div>
  );
};

export default WhyDocuMitra;
