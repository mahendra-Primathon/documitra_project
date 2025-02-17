"use client";
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { packageData } from '../constants/packageData';
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "../hooks/useClickOutside";

// Dropdown Component
const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative w-full flex flex-col" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-1 text-left bg-white rounded-2xl shadow-sm border flex flex-col items-start justify-between"
      >
        <p className="text-sm text-gray-600 mb-1">{label}</p>
        <div className="flex items-center justify-between w-full">
          <span className="text-gray-500">{value?.name || "Select"}</span>
          {isOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-50">
          {options?.map((option) => (
            <button
              key={option.id}
              className="w-full px-4 py-2 text-left hover:bg-gray-50"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const PackageForm = () => {
  const router = useRouter();
  const [currentPackage, setCurrentPackage] = useState('usa');
  const [citizenship, setCitizenship] = useState(null);
  const [applyingFrom, setApplyingFrom] = useState(null);
  const [destination, setDestination] = useState(null);

  const data = packageData[currentPackage];

  const handleSubmit = () => {
    if (destination) {
      router.push(`/packages/${destination.name.toLowerCase()}`);
    }
  };

  return (
    <div className="px-[10vw] mx-auto lg:py-16 bg-secondary ">
      <div className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:underline">Home</Link> / 
        <Link href="/packages" className="hover:underline"> Packages</Link> / 
        {currentPackage.toUpperCase()}
      </div>
      
      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-8">
        {data.processedDocs} Travel Documents processed by Documitra
      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {data.requirementFields.map((field, index) => (
          <Dropdown
            key={index}
            label={field.label}
            options={field.options.map(option => ({ id: option, name: option }))}
            value={
              field.label === "Citizenship" ? citizenship :
              field.label === "Applying From" ? applyingFrom :
              field.label === "Destination" ? destination : null
            }
            onChange={(option) => {
              if (field.label === "Citizenship") setCitizenship(option);
              if (field.label === "Applying From") setApplyingFrom(option);
              if (field.label === "Destination") setDestination(option);
            }}
          />
        ))}
      </div>
      <div className='mx-auto px-auto' >
        <button
          onClick={handleSubmit}
          className="mt-6 bg-primary text-white py-3 px-4 rounded-full hover:bg-blue-800 transition-colors font-medium align-center justify-centers"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default PackageForm;