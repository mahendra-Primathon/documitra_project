"use client";
import { useState, useRef } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";

const FormUploadStep = ({ formId }: { formId: string }) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<{ image: boolean; pdf: boolean }>({
    image: false,
    pdf: false,
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  // References to clear the file input
  const imageInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  // File validation
  const validateFile = (file: File, type: "image" | "pdf") => {
    if (type === "image") {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setErrorMessage("Invalid image format. Only JPG, JPEG, or PNG allowed.");
        return false;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("Image file size must be less than 2MB.");
        return false;
      }
    } else if (type === "pdf") {
      if (file.type !== "application/pdf") {
        setErrorMessage("Only PDF files are allowed for government ID.");
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("PDF file size must be less than 5MB.");
        return false;
      }
    }
    setErrorMessage(""); // Clear errors if valid
    return true;
  };

  // Upload handler
  const handleUpload = async (file: File, fileType: "image" | "pdf") => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post("/api/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response.data);
    setUploadStatus((prev) => ({ ...prev, [fileType]: true }));
  } catch (error) {
    console.error("Upload Error:", error);
    setErrorMessage(`Failed to upload ${fileType.toUpperCase()}`);
  }
};
  

  // Submit handler
  const handleSubmit = async () => {
    if (imageFile && validateFile(imageFile, "image")) await handleUpload(imageFile, "image");
    if (pdfFile && validateFile(pdfFile, "pdf")) await handleUpload(pdfFile, "pdf");
  };

  return (
    <div className="space-y-4 p-4   bg-white mb-40 ">
      <h2 className="text-2xl font-bold text-center">Upload the Documents</h2>

      {/* Upload Photo */}
      <div className="space-y-2">
        <label className="font-semibold">
          Upload the Photo <span className="text-xs text-zinc-400 font-serif italic " >(JPG, JPEG, PNG - Image size must be less then 2MB)</span>
        </label>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            ref={imageInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              if (file && validateFile(file, "image")) {
                setImageFile(file);
              } else {
                // Clear the file input if invalid
                if (imageInputRef.current) imageInputRef.current.value = "";
                setImageFile(null);
              }
            }}
            className="w-full border rounded p-2"
          />
          {/* {imageFile && (
            <span className="text-sm text-gray-600">{imageFile.name}</span>
          )} */}
          {uploadStatus.image && <CheckCircle className="text-green-500" size={24} />}
        </div>
      </div>

      {/* Upload Government ID */}
      <div className="space-y-2">
        <label className="font-semibold">Upload Government ID  <span className="text-xs text-zinc-400 font-serif italic" >(PDF - pdf size must be less then 5MB)</span></label>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="application/pdf"
            ref={pdfInputRef}
            onChange={(e) => {
              const file = e.target.files?.[0] || null;
              if (file && validateFile(file, "pdf")) {
                setPdfFile(file);
              } else {
                // Clear the file input if invalid
                if (pdfInputRef.current) pdfInputRef.current.value = "";
                setPdfFile(null);
              }
            }}
            className="w-full border rounded p-2"
          />
          {/* {pdfFile && (
            <span className="text-sm text-gray-600">{pdfFile.name}</span>
          )} */}
          {uploadStatus.pdf && <CheckCircle className="text-green-500" size={24} />}
        </div>
      </div>

      {/* Error message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Upload Button */}
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition"
      >
        Upload Files
      </button>
    </div>
  );
};

export default FormUploadStep;
