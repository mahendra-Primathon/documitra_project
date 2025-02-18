"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { packageData } from "../constants/packageData";
import PackageDropdown from "./PackageDropdown";
// import packageDropdown from "./PackageDropdown";

const PackageForm = () => {
  const router = useRouter();
  const [currentPackage, setCurrentPackage] = useState("usa");
  const [citizenship, setCitizenship] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [applyingFrom, setApplyingFrom] = useState<{
    id: string;
    name: string;
  } | null>(null);
  const [destination, setDestination] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const data = packageData[currentPackage];

  const handleSubmit = () => {
    if (destination) {
      router.push(`/packages/${destination.name.toLowerCase()}`);
    }
  };

  return (
    <div className="px-[10vw] mx-auto lg:py-16 bg-secondary ">
      <div className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        /
        <Link href="/packages" className="hover:underline">
          {" "}
          Packages
        </Link>{" "}
        /{currentPackage.toUpperCase()}
      </div>

      <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-600 mb-8">
        {data.processedDocs} Travel Documents processed by Documitra
      </p>

      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {data.requirementFields.map((field, index) => (
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
          />
        ))}
      </div>
      <div className="mx-auto px-auto">
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

// Compare this snippet from src/app/components/packageCard.tsx: