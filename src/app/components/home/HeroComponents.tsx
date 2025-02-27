"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "../../hooks/useClickOutside";
import { createPortal } from "react-dom";

// Dropdown Component
export const Dropdown = ({ label, options, value, onChange }) => {
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
          <span className="text-gray-500">{value || "Select"}</span>
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

// Document Type Button Component
export const DocumentTypeButton = ({ type, isSelected, onClick }) => (
  <button
    onClick={() => onClick(type)}
    className={`flex items-center gap-2 px-4 py-2 relative ${
      isSelected ? "text-blue-600" : "text-gray-600"
    }`}
  >
    {type.icon}
    <span className="text-nowrap">{type.name}</span>
    {isSelected && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 z-40 " />
    )}
  </button>
);

// More Dropdown Component

export const MoreDropdown = ({
  moreSelectedDoc,
  onSelect,
  isOpen,
  setIsOpen,
  width,
}) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [selectedOption, setSelectedOption] = useState(moreSelectedDoc);

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
  }, [isOpen]);

  const handleSelect = (option) => {
    console.log("handleSelect called with option:", option.name);
    setSelectedOption(option.name);
    onSelect(option);
    setIsOpen(false);
  };

  const options = [
    {
      id: "driving",
      name: "Driving License",
      // icon: React.createElement(FileText, { className: "w-5 h-5" }),
    },
    {
      id: "voter",
      name: "Voter ID",
      // icon: React.createElement(FileText, { className: "w-5 h-5" }),
    },
    {
      id: "aadhar",
      name: "Aadhar Card",
      // icon: React.createElement(FileText, { className: "w-5 h-5" }),
    },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={`flex items-center px-4 py-2 text-nowrap relative transition-all ${
          moreSelectedDoc ? "text-blue-600" : "text-gray-600"
        }`}
      >
        <span>{moreSelectedDoc?.name || "More"}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}

        {/* Underline effect when something is selected */}
        {moreSelectedDoc && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 z-40" />
        )}
      </button>

      {isOpen &&
        createPortal(
          <div className="portal-dropdown">
            <div
              ref={dropdownRef}
              style={{
                position: "absolute",
                top: position.top,
                left: position.left,
                width: width || "auto",
                zIndex: 1000,
              }}
              className="mt-2 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option)}
                    className={`flex gap-2 px-4 py-2 text-sm w-full text-left whitespace-nowrap 
                      ${
                        selectedOption === option.name
                          ? "text-blue-600 "
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                  >
                    <span>{option.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
