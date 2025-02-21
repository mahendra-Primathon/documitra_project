// components/MultiStepForm.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  INITIAL_FORM_DATA,
  FORM_STEPS,
  FormData,
} from "../constants/formsData";
import { ReviewForm, AddressForm, PersonalDetailsForm } from "./FormComponents";
import { ArrowLeft, Package2, Calendar, Coins } from "lucide-react";

const FormMain = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load saved form data from localStorage if exists
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      // Validate Personal Details
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.phoneNumber)
        newErrors.phoneNumber = "Phone number is required";
      if (!formData.email) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.nationality)
        newErrors.nationality = "Nationality is required";
      if (!formData.governmentId)
        newErrors.governmentId = "Government ID is required";
    } else if (currentStep === 2) {
      // Validate Address Details
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.postalCode)
        newErrors.postalCode = "Pin code / Postal code is required";
      if (!formData.country) newErrors.country = "Country name  is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const saveAndContinue = () => {
    if (validateStep()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    if (!isConfirmed) return; // Prevent submission if not confirmed
    console.log("Final Form Data:", formData);
    localStorage.removeItem("formData");
    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-secondary py-10 px-10 sm:px-6 lg:px-8">
      {/* Progress Steps */}
      <div className="max-w-md mx-auto mb-8">
        <div className="flex justify-between items-center">
          {FORM_STEPS.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${currentStep >= step.id ? "bg-primary" : "bg-gray-300"}
                text-white
              `}
              >
                {step.id}
              </div>
              {index < FORM_STEPS.length - 1 && (
                <div
                  className={`
                  w-44 h-1 mx-0
                  ${currentStep > step.id ? "bg-primary" : "bg-gray-300"}
                `}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow-2xl p-6">
          {currentStep === 1 && (
            <PersonalDetailsForm
              formData={formData}
              onChange={handleInputChange}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <AddressForm
              formData={formData}
              onChange={handleInputChange}
              errors={errors}
            />
          )}
          {currentStep === 3 && (
            <ReviewForm formData={formData} setIsConfirmed={setIsConfirmed} />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                onClick={goToPrevious}
                className="px-4 py-2 rounded flex items-center space-x-2 bg-secondary text-black"
              >
                <ArrowLeft size={18} />
                <span>Previous</span>
              </button>
            )}
            <div className="flex-grow"></div>
            {currentStep < 3 ? (
              <button
              onClick={() => {
                if (validateStep()) {
                  saveAndContinue();
                }
              }}
              className={`px-4 py-2 rounded ${
                Object.keys(errors).length === 0
                  ? "bg-primary text-white"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
            >
              Save & Continue
            </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!isConfirmed}
                className={`px-4 py-2 rounded ${
                  isConfirmed
                    ? "bg-green-500 text-white"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                Final Submit
              </button>
            )}
          </div>
        </div>

        {/* Summary Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 w-full sm:w-[24rem] md:w-[26rem] lg:w-[27rem] hover:shadow-xl transition-shadow mx-auto self-start">
          <h3 className="text-2xl font-semibold mb-6">Summary</h3>

          <div className="space-y-4">
            {/* Number of Entries */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Package2 className="w-5 h-5 text-primary" />
                <span>Number of entries</span>
              </div>
              <span className="font-medium">Multiple</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            {/* Duration */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Duration</span>
              </div>
              <span className="font-medium">2 Months</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            {/* Documentation Fees */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Coins className="w-5 h-5 text-primary" />
                <span>Documentation Fees</span>
              </div>
              <span className="font-medium">$19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMain;
