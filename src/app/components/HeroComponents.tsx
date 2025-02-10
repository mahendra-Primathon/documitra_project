// components/DocumentComponents.tsx
"use client";
import React, { useState } from 'react';
import { ChevronDown, GlobeIcon, FileText, User, CreditCard, MoreHorizontal } from 'lucide-react';

// Types
export interface DocumentType {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface Location {
  id: string;
  name: string;
}

// Constants
export const documentTypes: DocumentType[] = [
  { id: 'oci', name: 'OCI', icon: <GlobeIcon className="w-5 h-5" /> },
  { id: 'visa', name: 'Visa', icon: <FileText className="w-5 h-5" /> },
  { id: 'passport', name: 'Passport', icon: <User className="w-5 h-5" /> },
  { id: 'pancard', name: 'Pan Card', icon: <CreditCard className="w-5 h-5" /> },
];

export const moreOptions: DocumentType[] = [
  { id: 'driving', name: 'Driving License', icon: <FileText className="w-5 h-5" /> },
  { id: 'voter', name: 'Voter ID', icon: <FileText className="w-5 h-5" /> },
  { id: 'aadhar', name: 'Aadhar Card', icon: <FileText className="w-5 h-5" /> },
];

export const locations: Location[] = [
  { id: 'ind', name: 'India' },
  { id: 'usa', name: 'USA' },
  { id: 'uk', name: 'United Kingdom' },
];

// Dropdown Component
export const Dropdown = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full">
      <p className="text-sm text-gray-600 mb-2">{label}</p>
      <button
      
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-white rounded-lg shadow-sm border flex items-center justify-between"
      >
        <span className="text-gray-500">{value || 'Select'}</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg">
          {options.map((option) => (
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

// Document Type Button Component
export const DocumentTypeButton = ({ type, isSelected, onClick }) => (
  <button
    onClick={() => onClick(type)}
    className={`flex items-center gap-2 px-4 py-2 relative ${
      isSelected ? 'text-blue-600' : 'text-gray-600'
    }`}
  >
    {type.icon}
    <span>{type.name}</span>
    {isSelected && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
    )}
  </button>
);

// More Dropdown Component
export const MoreDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-600"
      >
        {/* <MoreHorizontal className="w-5 h-5" /> */}
        <span>More</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isOpen && (
        <div className="absolute z-20 w-48 mt-1 bg-white border rounded-lg shadow-lg">
          {options.map((option) => (
            <button
              key={option.id}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
              onClick={() => {
                onSelect(option);
                setIsOpen(false);
              }}
            >
              {option.icon}
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};