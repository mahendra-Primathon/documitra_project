"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeroFemale from "../../../public/assets/images/Home/heroFemale.png";
import heroIcon from "../../../public/assets/images/Home/BestAccuracy.svg";
import hero_delivered from "../../../public/assets/images/Home/hero_deliverdIcon.svg";
import hero_IconAwsomeLock from "../../../public/assets/images/Home/Icon-awesome-user-lock.svg";
import useClickOutside from "../hooks/useClickOutside";
import GetStartedButton from "./GetStartedButton";

import { Dropdown, DocumentTypeButton, MoreDropdown } from "./HeroComponents";
import { documentTypes, moreOptions, locations, DocumentType, Location } from "../constants/heroData";

const HeroSection = () => {
  const [selectedDoc, setSelectedDoc] = useState(documentTypes[0]);
  const [citizenship, setCitizenship] = useState<Location | null>(null);
  const [applyingFrom, setApplyingFrom] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

  // Client-side rendering handler
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className=" px-[10vw]  bg-secondary  lg:py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10">
          <div>
            <h1 className="text-5xl font-bold mb-5">
              Explore visa info
              <br />
              for all nations & <span className="text-primary">apply</span>
              <br />
              <span className="text-primary">today.</span>
            </h1>
            <p className="text-gray-600">
              Focus on your journey, not paperwork. Let us help you get your
              travel documents easily.
            </p>
          </div>

          <div className="space-y-6">
            {/* Dropdown Container */}
            <div ref={dropdownRef} className="relative">
              <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar">
                {documentTypes.map((type) => (
                  <DocumentTypeButton
                    key={type.id}
                    type={type}
                    isSelected={selectedDoc.id === type.id}
                    onClick={setSelectedDoc}
                  />
                ))}
                <MoreDropdown
                  options={moreOptions}
                  onSelect={setSelectedDoc}
                  isOpen={isDropdownOpen}
                  setIsOpen={setIsDropdownOpen}
                />
              </div>

              {/* Dropdowns */}
              <div className="grid md:grid-cols-3 gap-5 mt-5">
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
            </div>

            <GetStartedButton />
          </div>
        </div>

        {/* Right Side - Image & Badges */}
        <div className="relative flex justify-center">
          <Image
            src={HeroFemale}
            alt="Hero female"
            className="rounded-full w-[460px] h-[460px]"
          />
          <div className="absolute top-8 right-14 bg-white p-5 rounded-3xl shadow-2xl">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={hero_IconAwsomeLock} alt="Hero Icon" />
            </div>
          </div>

          {/* Best Accuracy */}
          <div className="absolute bottom-56 -left-10 bg-white pl-6 pr-8 py-4 rounded-t-3xl rounded-bl-3xl shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={heroIcon} alt="Hero Icon" />
            </div>
            <div>
              <p className="text-xl font-bold text-primary mb-0">Best</p>
              <p className="text-lg font-bold text-primary mt-0">Accuracy</p>
            </div>
          </div>

          {/* Delivered On-Time */}
          <div className="absolute bottom-6 right-6 bg-white pl-6 pr-8 py-4 rounded-tl-3xl rounded-r-3xl shadow-lg flex items-center gap-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Image src={hero_delivered} alt="Hero Icon" />
            </div>
            <div>
              <p className="text-xl font-bold text-primary">Delivered</p>
              <p className="text-lg font-bold text-primary">On-Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;