"use client";
import React, { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "../hooks/useClickOutside";
import { useSearchParams } from "next/navigation";

interface DropdownProps {
  label: string;
  options: { id: string; name: string }[];
  value: { id: string; name: string } | null;
  onChange: (option: { id: string; name: string }) => void;
  disabled?: boolean; // Add a disabled prop
}

const PackageDropdown: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  onChange,
  disabled,
}) => {
  const searchParams = useSearchParams();
  const queryCitizenship = searchParams.get("citizenship") || "";
  const queryApplyingFrom = searchParams.get("applyingFrom") || "";
  const queryDestination = searchParams.get("destination") || "";
  const querySelectedDoc = searchParams.get("selectedDoc") || "";

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsOpen(false));

  const getDefaultValue = () => {
    if (label === "Citizenship") return queryCitizenship;
    if (label === "Applying From") return queryApplyingFrom;
    if (label === "Destination") return queryDestination;
    return "Select";
  };

  return (
    <div className="relative w-full flex flex-col" ref={dropdownRef}>
      <button
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-3 py-1 text-left bg-white rounded-2xl shadow-sm border flex flex-col items-start justify-between"
        disabled={disabled} // Add the disabled prop to the button
      >
        <p className="text-sm text-gray-600 mb-1">{label}</p>
        <div className="flex items-center justify-between w-full">
          <span className="text-gray-500">
            {value?.name || getDefaultValue()}
          </span>
          {/* {isOpen ? (
            <ChevronUp className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-400" />
          )} */}
        </div>
      </button>

      {false && (
        // {isOpen && (
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

export default PackageDropdown;
