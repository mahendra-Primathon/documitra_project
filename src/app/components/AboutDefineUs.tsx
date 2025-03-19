'use client';

import React from 'react';
import Image from 'next/image';
import { aboutData } from "../constants/aboutData";

const AboutDefineUs: React.FC = () => {
  const { definesUs } = aboutData;

  return (
    <section className="py-24 pb-32 px-4 bg-gray-50 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center mb-12">{definesUs.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {definesUs.features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4 p-3 bg-secondary ">
            <div className="flex-shrink-0 rounded-lg overflow-hidden ">
              <Image 
                src={feature.image} 
                alt={feature.title} 
                width={150} 
                height={150} 
                className="object-cover"
              />
            </div>
            <div className='justify-center py-auto text-left pt-8' >
              <h3 className="text-xl font-medium font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutDefineUs;