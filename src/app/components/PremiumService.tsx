// components/PremiumServices/PremiumServices.tsx
import React from 'react';
import Image from 'next/image';
import { FileText } from 'lucide-react';
import rectangle1 from '../../../public/assets/images/Home/Rectangle 1.png';
import rectangle2 from '../../../public/assets/images/Home/Rectangle2 .svg';
import rectangle3 from '../../../public/assets/images/Home/Rectangle 3.svg';
import rectangle4 from '../../../public/assets/images/Home/Rectangle 4.svg';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  altText: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, altText }) => (
  <div className="relative group cursor-pointer">
    <div className="rounded-lg overflow-hidden">
      <Image
        src={imageUrl}
        alt={altText}
        width={300}
        height={200}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
    </div>
    <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg">
      <FileText className="w-5 h-5 text-blue-600" />
    </div>
  </div>
);

const ServicesGrid = () => {
  const services = [
    {
      title: "Visa",
      imageUrl: rectangle1,
      altText: "Visa Services"
    },
    {
      title: "Passport",
      imageUrl: rectangle2,
      altText: "Passport Services"
    },
    {
      title: "Green Card",
      imageUrl: rectangle3,
      altText: "Green Card Services"
    },
    {
      title: "OCI",
      imageUrl: rectangle4,
      altText: "OCI Services"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

const PremiumServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Premium services</h2>
      <ServicesGrid />
    </div>
  );
};

export default PremiumServices;