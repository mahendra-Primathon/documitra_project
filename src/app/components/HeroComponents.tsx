"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "../hooks/useClickOutside";
import { documentTypes, moreOptions, locations } from "../constants/heroData";
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
    <span>{type.name}</span>
    {isSelected && (
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
    )}
  </button>
);

// More Dropdown Component
export const MoreDropdown = ({ options, selectedDoc, onSelect, isOpen, setIsOpen }) => {
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  // Main document types that should keep "More" label
  const mainDocumentTypes = ["OCI", "VISA", "PASSPORT", "PANCARD"];

  // Determine button label
  const buttonLabel = mainDocumentTypes.includes(selectedDoc?.name) ? "More" : selectedDoc?.name || "More";

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-gray-600"
      >
        <span>More</span>
        {/* <span>{buttonLabel}</span> */}
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {isOpen &&
        createPortal(
          <div
            ref={dropdownRef}
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              width: position.width,
              zIndex: 1000,
            }}
            className="mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="py-1">
              {options?.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  className="flex  gap-2 px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  {option.icon}
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};