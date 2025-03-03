"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import HeroFemale from "../../../../public/assets/images/Home/heroFemale.png";
import heroIcon from "../../../../public/assets/images/Home/BestAccuracy.svg";
import hero_delivered from "../../../../public/assets/images/Home/hero_deliverdIcon.svg";
import hero_IconAwsomeLock from "../../../../public/assets/images/Home/Icon-awesome-user-lock.svg";
import useClickOutside from "../../hooks/useClickOutside";
import GetStartedButton from "../GetStartedButton";
import { useRouter } from "next/navigation";

import { Dropdown, DocumentTypeButton, MoreDropdown } from "./HeroComponents";
import {
  documentTypes,
  moreOptions,
  locations,
  DocumentType,
  Location,
} from "../../constants/heroData";

const HeroSection = () => {
  const [selectedDoc, setSelectedDoc] = useState<DocumentType | null>(
    documentTypes[0]
  );
  const [moreSelectedDoc, setMoreSelectedDoc] = useState<DocumentType | null>(
    null
  );
  const [citizenship, setCitizenship] = useState<Location | null>(null);
  const [applyingFrom, setApplyingFrom] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [error, setError] = useState<string>(""); // Store error message

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));
  const router = useRouter();

  const handleGetStarted = () => {
    setError(""); // Reset error before validation

    // Validate required fields
    if (!citizenship || !applyingFrom || !destination) {
      setError("Please fill all 3 details to proceed.");
      return;
    }
    if (!selectedDoc && !moreSelectedDoc) {
      setError("Please select a document type to proceed.");
      return;
    }

    if (applyingFrom.name === destination.name) {
      setError(
        "Applying From and Destination cannot be the same. Please select different locations."
      );
      return;
    }

    // Format destination name (lowercase, no spaces)
    const formattedDestination = destination.name
      .toLowerCase()
      .replace(/\s+/g, "-");

    // Create query parameters for form data
    const queryParams = new URLSearchParams({
      citizenship: citizenship.name,
      applyingFrom: applyingFrom.name,
      destination: destination.name,
      selectedDoc: selectedDoc?.name || moreSelectedDoc?.name || "",
    }).toString();

    // Redirect to dynamic package page with query parameters
    router.push(`/packages/${formattedDestination}?${queryParams}`);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-[8vw] bg-secondary py-8 lg:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Side - Content */}
        <div className="space-y-6 lg:space-y-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Explore visa info
            <br />
            for all nations & <span className="text-primary">apply</span>
            <br />
            <span className="text-primary">today.</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Focus on your journey, not paperwork. Let us help you get your
            travel documents easily.
          </p>

          <div className="space-y-4 lg:space-y-6">
            {/* Dropdown Container */}
            <div ref={dropdownRef} className="relative">
              <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar">
                {documentTypes.map((type) => (
                  <DocumentTypeButton
                    key={type.id}
                    type={type}
                    isSelected={selectedDoc?.id === type.id}
                    onClick={() => {
                      setSelectedDoc(type);
                      setMoreSelectedDoc(null);
                    }}
                  />
                ))}
                <MoreDropdown
                  moreSelectedDoc={moreSelectedDoc}
                  onSelect={(selectedOption) => {
                    setMoreSelectedDoc(selectedOption);
                    setSelectedDoc(null); // Unselect regular dropdown
                  }}
                  isOpen={isDropdownOpen}
                  setIsOpen={setIsDropdownOpen}
                  width="150px"
                />
              </div>
              <hr className="relative bottom-[2px] w-full h-[2px] bg-gray-300 z-30" />

              {/* Dropdowns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
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

            {/* Show error message above the button */}
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <GetStartedButton onClick={handleGetStarted} />
          </div>
        </div>

        {/* Right Side - Image & Badges */}
        <div className="relative flex justify-center mt-8 lg:mt-0">
          <Image
            src={HeroFemale}
            alt="Hero female"
            className="rounded-full w-[300px] h-[300px] lg:w-[460px] lg:h-[460px] z-30"
          />
          {/* Lock Icon */}
          <div className="absolute top-4 lg:top-8 right-4 lg:right-14 bg-white p-3 lg:p-5 rounded-2xl lg:rounded-3xl shadow-lg z-40">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
              <Image src={hero_IconAwsomeLock} alt="Hero Icon" />
            </div>
          </div>

          {/* Best Accuracy */}
          <div className="absolute bottom-40 lg:bottom-56 -left-4 lg:-left-10 bg-white pl-3 pr-4 lg:pl-6 lg:pr-8 py-2 lg:py-4 rounded-t-2xl lg:rounded-t-3xl rounded-bl-2xl lg:rounded-bl-3xl shadow-lg flex items-center gap-2 lg:gap-3 z-40">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-full flex items-center justify-center">
              <Image src={heroIcon} alt="Hero Icon" />
            </div>
            <div>
              <p className="text-base lg:text-xl font-bold text-primary mb-0">
                Best
              </p>
              <p className="text-sm lg:text-lg font-bold text-primary mt-0">
                Accuracy
              </p>
            </div>
          </div>

          {/* Delivered On-Time */}
          <div className="absolute bottom-4 lg:bottom-6 right-4 lg:right-6 bg-white pl-3 pr-4 lg:pl-6 lg:pr-8 py-2 lg:py-4 rounded-tl-2xl lg:rounded-tl-3xl rounded-r-2xl lg:rounded-r-3xl shadow-lg flex items-center gap-2 lg:gap-3 z-40">
            <div className="w-5 h-5 lg:w-8 lg:h-8 bg-green-100 rounded-full flex items-center justify-center">
              <Image src={hero_delivered} alt="Hero Icon" />
            </div>
            <div>
              <p className="text-base lg:text-xl font-bold text-primary">
                Delivered
              </p>
              <p className="text-sm lg:text-lg font-bold text-primary">
                On-Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
