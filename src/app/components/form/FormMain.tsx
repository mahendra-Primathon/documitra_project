"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  INITIAL_FORM_DATA,
  FORM_STEPS,
  FormData,
} from "../../constants/formsData";
import FormSummaryCard from "./FormSummaryCard";
import { ReviewForm } from "./FormReviewForm";
import { AddressForm } from "./FormAddressForm";
import { PersonalDetailsForm } from "./FormPersonalDetailsForm";
import FormUploadStep from "./FormUploadStep";

import { v4 as uuidv4 } from "uuid";
import { ArrowLeft } from "lucide-react";
import { packageCard } from "../../constants/packageData";

enum FORM_STEP {
  STEP_ONE = 1,
  STEP_TWO = 2,
  STEP_THREE = 3,
  STEP_FOUR = 4,
}

const FormMain = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedStep, setCompletedStep] = useState(0); // ✅ Track completed steps
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formId, setFormId] = useState<string>("");
  const [formUploadStatus, setFormUploadStatus] = useState({
    image: false,
    pdf: false,
    selectedCategory: "",
  });
  const [uploadError, setUploadError] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<{
    image: string | null;
    pdf: string | null;
  }>({ image: null, pdf: null }); // Track uploaded file names

  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const packageId = searchParams.get("packageId");

  const [selectedPackage, setSelectedPackage] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined" && country && packageId) {
      const packages = packageCard[country];
      const pkg = packages.find((p) => p.id === parseInt(packageId));
      setSelectedPackage(pkg);
    }
  }, [country, packageId]);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    setFormId(uuidv4());
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Dynamically validate the field as the user types
    const newErrors = { ...errors };
    if (value) {
      delete newErrors[name]; // Clear the error if the field is filled
    } else {
      // Add the error if the field is empty
      if (currentStep === 1) {
        if (name === "name") newErrors.name = "Name is required";
        if (name === "phoneNumber")
          newErrors.phoneNumber = "Phone number is required";
        if (name === "email") {
          if (!value) {
            newErrors.email = "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            newErrors.email = "Invalid email format";
          }
        }
        if (name === "gender") newErrors.gender = "Gender is required";
        if (name === "age") newErrors.age = "Age is required";
        if (name === "nationality")
          newErrors.nationality = "Nationality is required";
        if (name === "governmentId")
          newErrors.governmentId = "Government ID is required";
      } else if (currentStep === 2) {
        if (name === "address") newErrors.address = "Address is required";
        if (name === "postalCode")
          newErrors.postalCode = "Pin code / Postal code is required";
        if (name === "country") newErrors.country = "Country name is required";
      }
    }

    setErrors(newErrors);
  };

  const validateStep = () => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
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
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.postalCode)
        newErrors.postalCode = "Pin code / Postal code is required";
      if (!formData.country) newErrors.country = "Country name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const saveAndContinue = () => {
    if (validateStep()) {
      localStorage.setItem("formData", JSON.stringify(formData));
      setCompletedStep((prev) => Math.max(prev, currentStep + 1)); // ✅ Track highest step reached
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    setCurrentStep((prev) => prev - 1);
    setCompletedStep((prev) => Math.max(prev, currentStep - 1)); // ✅ Prevent decreasing completedStep
  };

  const handleSubmit = async () => {
    if (!isConfirmed) return;

    try {
      const response = await fetch("http://localhost:5000/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // console.log("Form data submitted successfully");
        localStorage.removeItem("formData");
        window.location.href = "/";
      } else {
        console.error("Failed to submit form data");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  // Check if both files are uploaded
  // const isUploadStepValid = uploadedFiles.image && uploadedFiles.pdf;

  return (
    <div className="min-h-screen bg-secondary py-10 px-10 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Summary Card (Top on Mobile, Right on Larger Screens) */}
        <div className="lg:col-span-1 order-1 lg:order-2">
          <FormSummaryCard pkg={selectedPackage} />
        </div>

        {/* Form (Centered in larger screens) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl px-2 py-4 md:p-6 order-2 lg:order-1">
          {/* Progress Steps */}
          <div className="flex justify-center items-center max-w-sm mx-auto mb-4 my-4">
            <div className="flex justify-between items-center w-full">
              {FORM_STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`
            w-8 h-8 md:h-10 md:w-10 rounded-full flex items-center justify-center
            ${step.id <= currentStep ? "bg-primary" : "bg-gray-300"}
            text-white text-sm sm:text-base
          `}
                  >
                    {step.id}
                  </div>
                  {index < FORM_STEPS.length - 1 && (
                    <div
                      className={`h-1 mx-1 w-12 md:w-32 
                        ${step.id < currentStep ? "bg-primary" : "bg-gray-300"}
                        
                      `}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {currentStep === FORM_STEP.STEP_ONE && (
            <PersonalDetailsForm
              formData={formData}
              onChange={handleInputChange}
              errors={errors}
            />
          )}
          {currentStep === FORM_STEP.STEP_TWO && (
            <AddressForm
              formData={formData}
              onChange={handleInputChange}
              errors={errors}
            />
          )}
          {currentStep === FORM_STEP.STEP_THREE && formId && (
            <FormUploadStep
              formId={formId}
              uploadStatus={formUploadStatus}
              setUploadStatus={setFormUploadStatus}
              setFileUrls={setFormData}
              setUploadError={setUploadError}
              fileUrls={formData}
              setUploadedFiles={setUploadedFiles}
            />
          )}
          {currentStep === FORM_STEP.STEP_FOUR && (
            <ReviewForm
              formData={formData}
              setIsConfirmed={setIsConfirmed}
              formUploadStatus={formUploadStatus}
              onChange={(e) => {}}
              fileUrls={formData}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-14">
            {currentStep > 1 && (
              <button
                onClick={goToPrevious}
                className="px-4 py-2 rounded-md flex items-center space-x-2 bg-secondary text-black"
              >
                <ArrowLeft size={18} />
                <span>Previous</span>
              </button>
            )}

            <div className="flex-grow"></div>
            {currentStep < 4 ? (
              <button
                onClick={saveAndContinue}
                className={`px-4 py-2 rounded ${
                  Object.keys(errors).length === 0
                    ? "bg-primary text-white cursor-pointer"
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
                    ? "bg-green-500 text-white cursor-pointer"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
              >
                Final Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormMain;
