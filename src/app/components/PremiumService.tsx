"use client";
import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import rectangle1 from '../../../public/assets/images/Home/Rectangle 1.png';
import rectangle2 from '../../../public/assets/images/Home/Rectangle2 .svg';
import rectangle3 from '../../../public/assets/images/Home/Rectangle 3.svg';
import rectangle4 from '../../../public/assets/images/Home/Rectangle 4.svg';

import passport from '../../../public/assets/images/Home/PsPassport.svg';
import visa from '../../../public/assets/images/Home/PSvisa.svg';
import greenCard from '../../../public/assets/images/Home/psGreenVard.svg';
import Image from 'next/image';

interface ServiceProps {
  title: string;
  imageUrl: string;
  iconUrl: string;
  altText: string;
}

const services: ServiceProps[] = [
  {
    title: "Visa",
    imageUrl: rectangle1,
    iconUrl: visa,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "Green Card",
    imageUrl: rectangle3,
    iconUrl: greenCard,
    altText: "Green card Services"
  },
  {
    title: "NRI",
    imageUrl: rectangle4,
    iconUrl: passport,
    altText: "NRI Services"
  },
  {
    title: "Visa",
    imageUrl: rectangle1,
    iconUrl: visa,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "Green Card",
    imageUrl: rectangle3,
    iconUrl: greenCard,
    altText: "Green card Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  {
    title: "NRI",
    imageUrl: rectangle4,
    iconUrl: passport,
    altText: "NRI Services"
  },
  {
    title: "Visa",
    imageUrl: rectangle1,
    iconUrl: visa,
    altText: "Visa Services"
  },
  {
    title: "Passport",
    imageUrl: rectangle2,
    iconUrl: passport,
    altText: "Passport Services"
  },
  
  // Add more services as needed
];


const ServiceCard: React.FC<ServiceProps> = ({ title, imageUrl, iconUrl, altText }) => (
  <div className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="aspect-w-4 aspect-h-3 relative">
      <div className="w-full h-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={altText}
          width={300}
          height={225}
          className="w-full h-full object-cover scale-125 transform transition-transform duration-300 group-hover:scale-135"
        />
      </div>
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 bg-white rounded-full p-2" />
          <div className="relative bg-blue-600 rounded-full p-4">
            <Image
              src={iconUrl}
              alt={`${title} icon`}
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="pt-8 pb-4 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

const PremiumServices: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;
  const totalPages = Math.ceil(services.length / cardsPerPage);

  const visibleServices = services.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

  return (
    <div className="px-[10vw] mx-auto lg:py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Premium services</h2>
      
      {/* Cards Grid */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto ">
          {visibleServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
      
      {/* Navigation Bullets */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`transition-all duration-300 rounded-full ${
              currentPage === index
                ? 'w-4 h-4 bg-primary'
                : 'w-2 h-2 bg-primary hover:bg-blue-400'
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
          disabled={currentPage === 0}
          className="p-2 text-primary disabled:opacity-50"
        >
        </button>
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
          disabled={currentPage === totalPages - 1}
          className="p-2 text-primary disabled:opacity-50"
        >
        </button>
      </div>
    </div>
  );
};


export default PremiumServices;