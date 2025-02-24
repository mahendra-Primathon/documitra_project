"use client";
import { ChevronDown, ChevronUp, CheckCircle } from "lucide-react";
import { FormData } from "../../constants/formsData";
import { useState } from "react";

interface FormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Record<string, string>;
  formUploadStatus: {
    image: false;
    pdf: false;
    selectedCategory: "";
  };
  setIsConfirmed: (value: boolean) => void;
}

export const ReviewForm = ({
  formData,
  setIsConfirmed,
  formUploadStatus,
}: FormProps) => {
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Review Your Information</h2>

      {/* Personal Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t flex flex-row"
          onClick={() => setIsPersonalOpen(!isPersonalOpen)}
        >
          {isPersonalOpen ? (
            <ChevronUp className="mr-2" />
          ) : (
            <ChevronDown className="mr-2" />
          )}
          Personal Details
        </button>
        {isPersonalOpen && (
          <div className="p-4 space-y-4">
            {Object.entries({
              Name: formData.name,
              Age: formData.age,
              "Phone Number": `${formData.countryCode} ${formData.phoneNumber}`,
              Email: formData.email,
              Nationality: formData.nationality,
              "Government ID": formData.governmentId,
            }).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-4">
                <span className="font-medium">{key}</span>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-2 border rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Address Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t flex flex-row"
          onClick={() => setIsAddressOpen(!isAddressOpen)}
        >
          {isAddressOpen ? (
            <ChevronUp className="mr-2" />
          ) : (
            <ChevronDown className="mr-2" />
          )}
          Address Details
        </button>
        {isAddressOpen && (
          <div className="p-4 space-y-4">
            {Object.entries({
              Address: formData.address,
              "Postal Code": formData.postalCode,
              Country: formData.country,
            }).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-4">
                <span className="font-medium">{key}</span>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-2 border rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* File Upload Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-4 font-semibold bg-gray-100 rounded-t flex flex-row"
          onClick={() => setIsUploadOpen(!isUploadOpen)}
        >
          {isUploadOpen ? (
            <ChevronUp className="mr-2" />
          ) : (
            <ChevronDown className="mr-2" />
          )}
          Uploaded Documents
        </button>
        {isUploadOpen && (
          <div className="p-4 space-y-4">
            {Object.entries({
              "Image Upload Status": formUploadStatus?.image
                ? "Uploaded"
                : "Not Uploaded",
              "PDF Upload Status": formUploadStatus?.pdf
                ? "Uploaded"
                : "Not Uploaded",
            }).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-4">
                <span className="font-medium">{key}</span>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={value}
                    readOnly
                    className="p-2 border rounded bg-gray-100"
                  />
                  {value === "Uploaded" && (
                    <CheckCircle className="text-green-500" size={24} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-center space-x-2 border-t pt-4">
        <input
          type="checkbox"
          id="confirm"
          onChange={(e) => setIsConfirmed(e.target.checked)} // Update parent state
          className="w-5 h-5"
        />
        <label htmlFor="confirm" className="text-sm">
          I confirm that all the information above is correct.
        </label>
      </div>
    </div>
  );
};
