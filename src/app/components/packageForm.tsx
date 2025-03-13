"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { packageData } from "../constants/packageData";
import PackageDropdown from "./PackageDropdown";
import PackageGetStartedButton from "./PopUpPackageGetStartedButton";

const PackageForm = ({ country }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract query parameters
  const queryCitizenship = searchParams.get("citizenship") || "";
  const queryApplyingFrom = searchParams.get("applyingFrom") || "";
  const queryDestination = searchParams.get("destination") || "";
  const querySelectedDoc = searchParams.get("selectedDoc") || "";

  // Initialize state with query params (pre-filled)
  const [citizenship, setCitizenship] = useState(queryCitizenship);
  const [applyingFrom, setApplyingFrom] = useState(queryApplyingFrom);
  const [destination, setDestination] = useState(queryDestination);
  const [selectedDoc, setSelectedDoc] = useState(querySelectedDoc);
  const [error, setError] = useState("");
  const [isEditable, setIsEditable] = useState(false); // State to control editability
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  // Update state when query params change
  useEffect(() => {
    setCitizenship(queryCitizenship);
    setApplyingFrom(queryApplyingFrom);
    setDestination(queryDestination);
    setSelectedDoc(querySelectedDoc);
  }, [queryCitizenship, queryApplyingFrom, queryDestination, querySelectedDoc]);

  const currentPackage = destination ? destination.toLowerCase() : "";
  const data = packageData[currentPackage] || {};

  const handleSubmit = () => {
    setError(""); // Reset error before validation

    // Validate required fields
    if (!citizenship || !applyingFrom || !destination) {
      setError("Please fill all 3 details to proceed.");
      return;
    }

    if (applyingFrom === destination) {
      setError("Applying From and Destination cannot be the same.");
      return;
    }

    // Format destination name (lowercase, no spaces)
    const formattedDestination = destination.toLowerCase().replace(/\s+/g, "-");

    // Create query parameters
    const queryParams = new URLSearchParams({
      citizenship,
      applyingFrom,
      destination,
      selectedDoc: selectedDoc || "",
    }).toString();

    // Redirect to the package page
    router.push(`/packages/${formattedDestination}?${queryParams}`);
  };

  const handleApply = (data) => {
    // Handle the apply logic here
    setCitizenship(data.citizenship);
    setApplyingFrom(data.applyingFrom);
    setDestination(data.destination);
    setSelectedDoc(data.documentType);
    setIsPopupOpen(false); // Close the popup after applying
  };

  return (
    <div className="px-[10vw] mx-auto lg:py-16 bg-secondary">
      <div className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /
        <Link href="/packages" className="hover:underline">
          {" "}
          Packages
        </Link>{" "}
        /{country.toUpperCase()}
      </div>

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-8">
        {data.processedDocs} Travel Documents processed by Documitra
      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {data?.requirementFields?.map((field, index) => (
          <PackageDropdown
            key={index}
            label={field.label}
            options={field.options.map((option) => ({
              id: option,
              name: option,
            }))}
            value={
              field.label === "Citizenship"
                ? citizenship
                : field.label === "Applying From"
                ? applyingFrom
                : field.label === "Destination"
                ? destination
                : null
            }
            onChange={(option) => {
              if (field.label === "Citizenship") setCitizenship(option);
              if (field.label === "Applying From") setApplyingFrom(option);
              if (field.label === "Destination") setDestination(option);
            }}
            disabled={!isEditable} // Disable dropdowns based on isEditable state
          />
        ))}
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="mx-auto px-auto">
        <button
          onClick={() => {
            if (isEditable) {
              setIsEditable(false);
            } else {
              setIsPopupOpen(true); // Open the popup
            }
          }} // Toggle editability or open popup
          className="mt-6 bg-primary text-white py-3 px-4 rounded-full hover:bg-blue-800 transition-colors font-medium align-center"
        >
          {isEditable ? "Save Details" : "Edit the Details"}
        </button>
      </div>

      {/* Render the popup */}
      <PackageGetStartedButton
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        documentType={selectedDoc}
        onApply={handleApply}
      />
    </div>
  );
};

export default PackageForm;