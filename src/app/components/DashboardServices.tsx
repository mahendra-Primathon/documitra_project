"use client";
import React, { useState } from "react";
// import PremiumServices from "./PremiumService";
import { PREMIUM_SERVICES } from "../constants/dashbordData";
// import PackageGetStartedButton, { DocumentType } from "./PackageGetStartedButton";
import PackageGetStartedButton, {
  DocumentType,
} from "./PopUpPackageGetStartedButton";
import Image from "next/image";

const DashboardServices: React.FC = () => {
  const [activePopup, setActivePopup] = useState<{
    isOpen: boolean;
    documentType: DocumentType | null;
  }>({
    isOpen: false,
    documentType: null,
  });

  const handleServiceClick = (serviceId: DocumentType) => {
    setActivePopup({
      isOpen: true,
      documentType: serviceId,
    });
  };

  const handleClosePopup = () => {
    setActivePopup({
      isOpen: false,
      documentType: null,
    });
  };

  const handleApply = (params: {
    citizenship: string;
    applyingFrom: string;
    destination: string;
    documentType: DocumentType;
  }) => {
    // Handle the apply action (redirect, API call, etc.)
    console.log("Applied with params:", params);
    handleClosePopup();
    // Additional logic...
  };

  return (
    <div className="bg-secondary py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Premium Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PREMIUM_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 flex items-center cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50} // Set appropriate width
                  height={50} // Set appropriate height
                  className="object-contain invert"
                />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
          ))}
        </div>

        {activePopup.isOpen && activePopup.documentType && (
          <PackageGetStartedButton
            isOpen={activePopup.isOpen}
            onClose={handleClosePopup}
            documentType={activePopup.documentType}
            onApply={handleApply}
          />
        )}
      </div>
    </div>
  );
};

export default DashboardServices;
