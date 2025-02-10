// components/WhyDocuMitra/WhyDocuMitra.tsx
import React from 'react';
import { Shield, Clock, Check, Home } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg m-0z bg-gray-100">
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
      icon: <Clock className="w-6 h-6" />,
      title: "Speed & Simplicity",
      description: "Swift documentation process with streamlined procedures"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Security",
      description: "Your data is fully secured and protected at all steps"
    },
    {
      icon: <Check className="w-6 h-6" />,
      title: "95% Approvals",
      description: "High success rate across various document applications"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Comfort from home",
      description: "Complete all processes from the comfort of your home"
    }
  ];

  return (
    <div 
    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" 
    style={{ backgroundColor: '#f4f8fc'}}  >
      <h2 className="text-3xl font-bold text-center mb-12">Why DocuMitra?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  " >
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-24 py-3 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WhyDocuMitra;