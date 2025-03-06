import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import useClickOutside from "@/app/hooks/useClickOutside";

interface Location {
  id: string;
  name: string;
}

// Document types supported by the popup
export type DocumentType =
  | "oci"
  | "visa"
  | "passport"
  | "pancard"
  | "driving-license"
  | "voter-id"
  | "aadhar-card";

interface DocumentServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  documentType: DocumentType;
  onApply: (params: {
    citizenship: string;
    applyingFrom: string;
    destination: string;
    documentType: DocumentType;
  }) => void;
}

const PackageGetStartedButton: React.FC<DocumentServicePopupProps> = ({
  isOpen,
  onClose,
  documentType,
  onApply,
}) => {
  // State for form fields
  const [citizenship, setCitizenship] = useState<Location | null>(null);
  const [applyingFrom, setApplyingFrom] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [error, setError] = useState<string>("");

  // Sample locations data (replace with your actual data)
  const locations: Location[] = [
    { id: "1", name: "India" },
    { id: "2", name: "USA" },
    { id: "3", name: "London" },
    { id: "4", name: "Canada" },
  ];

  // Handle dropdown selection
  const handleSelect = (
    type: "citizenship" | "applyingFrom" | "destination",
    location: Location
  ) => {
    switch (type) {
      case "citizenship":
        setCitizenship(location);
        break;
      case "applyingFrom":
        setApplyingFrom(location);
        break;
      case "destination":
        setDestination(location);
        break;
    }
    setError("");
  };

  // Handle apply button click
  const handleApply = () => {
    // Validation
    if (!citizenship || !applyingFrom || !destination) {
      setError("Please fill all fields to proceed.");
      return;
    }

    if (applyingFrom.name === destination.name) {
      setError("Applying From and Destination cannot be the same");
      return;
    }

    // Submit the form
    onApply({
      citizenship: citizenship.name,
      applyingFrom: applyingFrom.name,
      destination: destination.name,
      documentType: documentType,
    });
  };

  // Get appropriate icon based on document type
  const getDocumentIcon = () => {
    switch (documentType) {
      case "oci":
        return (
          <svg
            className="w-6 h-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
        );
      case "passport":
        return (
          <svg
            className="w-6 h-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
          </svg>
        );
      case "visa":
        return (
          <svg
            className="w-6 h-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-6 h-6 text-blue-700"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  // Dropdown component
  const Dropdown = ({
    label,
    selected,
    options,
    onSelect,
  }: {
    label: string;
    selected: Location | null;
    options: Location[];
    onSelect: (location: Location) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">{label}</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
          >
            <span className={selected ? "text-black" : "text-gray-400"}>
              {selected ? selected.name : "Select"}
            </span>
            {isOpen ? (
              <ChevronUp className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </button>

          {isOpen && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <div
                  key={option.id}
                  onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                  }}
                  className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {option.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="flex items-center justify-center gap-2 mb-6">
          {getDocumentIcon()}
          <h2 className="text-xl font-bold">{documentType} Service</h2>
        </div>

        <div className="space-y-4">
          <Dropdown
            label="Citizenship"
            selected={citizenship}
            options={locations}
            onSelect={(location) => handleSelect("citizenship", location)}
          />
          <Dropdown
            label="Applying From"
            selected={applyingFrom}
            options={locations}
            onSelect={(location) => handleSelect("applyingFrom", location)}
          />

          <Dropdown
            label="Destination"
            selected={destination}
            options={locations}
            onSelect={(location) => handleSelect("destination", location)}
          />

          {error && <p className="text-red-500 text-sm  ">{error}</p>}

          <button
            type="button"
            onClick={handleApply}
            className="w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors font-medium"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageGetStartedButton;
