
"use client";
import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import TrustPilot  from '../../../public/assets/images/Home/TrustPilot.svg';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="flex items-center gap-2 border-r-5 ">
    <div className="flex flex-col ">
      <span className="font-semibold text-xl">{value}</span>
      <span className="text-sm text-gray-600">{label}</span>
    </div>
  </div>
);

interface TrustPilotRatingProps {
  rating: number;
  maxStars?: number;
}

const TrustPilotRating: React.FC<TrustPilotRatingProps> = ({ rating, maxStars = 5 }) => (
  <div className="flex items-center gap-2 flex-col">
    <Image 
      src={TrustPilot}
      alt="TrustPilot" 
      width={150} 
      height={30}
    /> 
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${index < rating ? 'fill-green-500 text-green-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  </div>
);

const StatesSection = () => {
  const stats = [
    { value: "10k+", label: "Applications" },
    { value: "100%", label: "On Time Delivery" },
    { value: "05yrs", label: "Experience" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-wrap justify-between items-center gap-8 ">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat}  />
        ))}
        <TrustPilotRating rating={5} />
      </div>
    </div>
  );
};

export default StatesSection;