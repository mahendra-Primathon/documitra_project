// components/HeroSection.tsx
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import HeroFemale from "../../../public/assets/images/Home/heroFemale.png";
import heroIcon from "../../../public/assets/images/Home/BestAccuracy.svg";
import hero_delivered from '../../../public/assets/images/Home/hero_deliverdIcon.svg'
import hero_IconAwsomeLock from '../../../public/assets/images/Home/Icon-awesome-user-lock.svg'

import {
  DocumentType,
  Location,
  documentTypes,
  moreOptions,
  locations,
  Dropdown,
  DocumentTypeButton,
  MoreDropdown,
} from "./HeroComponents";

const HeroSection = () => {
  const [selectedDoc, setSelectedDoc] = useState(documentTypes[0]);
  const [citizenship, setCitizenship] = useState<Location | null>(null);
  const [applyingFrom, setApplyingFrom] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);

  // Client-side rendering handler
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-bgBlue "
    
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Explore visa info
              <br />
              for all nations & <span className="text-blue-600">apply</span>
              <br />
              <span className="text-blue-600">today.</span>
            </h1>
            <p className="text-gray-600">
              Focus on your journey, not paperwork. Let us help you get your
              travel documents easily.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-2 no-scrollbar">
              {documentTypes.map((type) => (
                <DocumentTypeButton
                  key={type.id}
                  type={type}
                  isSelected={selectedDoc.id === type.id}
                  onClick={setSelectedDoc}
                />
              ))}
              <MoreDropdown options={moreOptions} onSelect={setSelectedDoc} />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Dropdown
                label="Citizenship"
                options={locations}
                value={citizenship?.name}
                onChange={setCitizenship}
              />
              <Dropdown
                label="Applying From"
                options={locations}
                value={applyingFrom?.name}
                onChange={setApplyingFrom}
              />
              <Dropdown
                label="Destination"
                options={locations}
                value={destination?.name}
                onChange={setDestination}
              />
            </div>

            <button className="px-16 py-3 bg-primary text-white rounded-full hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={HeroFemale}
            alt="Hero female"
            className="rounded-full w-full"
          />
          <div className="absolute top-14 right-8 bg-white p-3 rounded-t-lg rounded-br-lg shadow-2xl">
            {/* <User className="w-6 h-6 text-primary" /> */}
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <Image src={hero_IconAwsomeLock} alt="Hero Icon" />
            </div>
          </div>

          <div className="absolute bottom-64 -left-12 bg-white p-2 rounded-t-lg rounded-bl-lg shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={heroIcon} alt="Hero Icon" />
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">Best</p>
              <p className="text-xl text-primary">Accuracy</p>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 bg-white p-2 rounded-t-lg rounded-br-lg shadow-lg flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              {/* <div className="w-4 h-4 text-primary"></div> */}
          
            <Image src={hero_delivered} alt="Hero Icon" />
            </div>
            <div>
              <p className="font-large text-2xl font-bold text-primary ">
                Delivered
              </p>
              <p className="text-xl text-primary">On-Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
