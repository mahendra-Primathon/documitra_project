"use client";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { FormData } from "../constants/formsData";
import { useState } from "react";

interface FormProps {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formUploadStatus: {
    image: boolean;
    pdf: boolean;
  };
  setIsConfirmed: (value: boolean) => void;
  fileUrls: {
    imageUrl?: string;
    pdfUrl?: string;
  };
}

export const ReviewForm = ({
  formData,
  setIsConfirmed,
  formUploadStatus,
}: FormProps) => {
  const [isPersonalOpen, setIsPersonalOpen] = useState(true);
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  // console.log("Image URL:", formData.imageUrl);
  // console.log("PDF URL:", formData.pdfUrl);
  // console.log("formUploadStatus :", formUploadStatus);

  return (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
        Review Your Information
      </h2>

      {/* Personal Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-3 md:p-4 text-sm md:text-base font-semibold bg-gray-100 rounded-t flex items-center"
          onClick={() => setIsPersonalOpen(!isPersonalOpen)}
        >
          {isPersonalOpen ? (
            <ChevronUp className="mr-2 w-4 h-4" />
          ) : (
            <ChevronDown className="mr-2 w-4 h-4" />
          )}
          Personal Details
        </button>
        {isPersonalOpen && (
          <div className="p-3 md:p-4 space-y-3 md:space-y-4">
            {Object.entries({
              Name: formData.name,
              Age: formData.age,
              "Phone Number": `${formData.countryCode} ${formData.phoneNumber}`,
              Email: formData.email,
              Nationality: formData.nationality,
              "Government ID": formData.governmentId,
            }).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
              >
                <span className="font-medium text-sm md:text-base">{key}</span>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-1.5 md:p-2 text-sm md:text-base border rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Address Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-3 md:p-4 text-sm md:text-base font-semibold bg-gray-100 rounded-t flex items-center"
          onClick={() => setIsAddressOpen(!isAddressOpen)}
        >
          {isAddressOpen ? (
            <ChevronUp className="mr-2 w-4 h-4" />
          ) : (
            <ChevronDown className="mr-2 w-4 h-4" />
          )}
          Address Details
        </button>
        {isAddressOpen && (
          <div className="p-3 md:p-4 space-y-3 md:space-y-4">
            {Object.entries({
              Address: formData.address,
              "Postal Code": formData.postalCode,
              Country: formData.country,
            }).map(([key, value]) => (
              <div
                key={key}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4"
              >
                <span className="font-medium text-sm md:text-base">{key}</span>
                <input
                  type="text"
                  value={value}
                  readOnly
                  className="p-1.5 md:p-2 text-sm md:text-base border rounded bg-gray-100"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* File Upload Details Section */}
      <div className="border rounded-lg">
        <button
          className="w-full text-left p-3 md:p-4 text-sm md:text-base font-semibold bg-gray-100 rounded-t flex items-center"
          onClick={() => setIsUploadOpen(!isUploadOpen)}
        >
          {isUploadOpen ? (
            <ChevronUp className="mr-2 w-4 h-4" />
          ) : (
            <ChevronDown className="mr-2 w-4 h-4" />
          )}
          Uploaded Documents
        </button>
        {isUploadOpen && (
          <div className="p-3 md:p-4 space-y-3 md:space-y-4">
            {[
              {
                label: "Photo",
                fileName: formData.imageUrl?.split("/").pop(),
                fileUrl: formData.imageUrl,
              },
              {
                label: "Government ID",
                fileName: formData.pdfUrl?.split("/").pop(),
                fileUrl: formData.pdfUrl,
              },
            ].map(({ label, fileName, fileUrl }) => (
              <div
                key={label}
                className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center"
              >
                <span className="font-medium text-sm md:text-base">
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-700 text-sm md:text-base truncate">
                    {fileName || "Not Uploaded"}
                  </span>
                  {fileUrl && (
                    <button
                      onClick={() => window.open(`${fileUrl}`, "_blank")}
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="hidden md:inline">Click to View</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Checkbox */}
      <div className="flex items-start space-x-2 border-t pt-4">
        <input
          type="checkbox"
          id="confirm"
          onChange={(e) => setIsConfirmed(e.target.checked)}
          className="w-4 h-4 mt-1 md:mt-0"
        />
        <label htmlFor="confirm" className="text-xs md:text-sm">
          I confirm that all the information above is correct.
        </label>
      </div>
    </div>
  );
};
