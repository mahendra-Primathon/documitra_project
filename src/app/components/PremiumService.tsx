"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { services, ServiceProps } from "../constants/premiumServiceData";
import { motion } from "framer-motion";

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
            <Image src={iconUrl} alt={`${title} icon`} width={24} height={24} className="w-6 h-6" />
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000); // Auto-scroll every 4 seconds
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <div className="px-[10vw] mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Premium Services</h2>

      {/* Cards Grid */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {services
            .slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)
            .map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
        </motion.div>
      </div>

      {/* Navigation Bullets */}
      <div className="flex justify-center items-center gap-4 mt-8">
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`transition-all duration-300 rounded-full ${
              currentPage === index ? "w-4 h-4 bg-primary" : "w-2 h-2 bg-primary hover:bg-blue-400"
            }`}
            aria-label={`Go to page ${index + 1}`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default PremiumServices;
