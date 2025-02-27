"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { CheckCircle } from "lucide-react";


const FormUploadStep = ({
  // formId,
  uploadStatus,
  setUploadStatus,
  setFileUrls, // Add this prop to update the uploaded URLs
  setUploadError,
}: {
  formId: string;
  uploadStatus: { image: boolean; pdf: boolean };
  setUploadStatus: React.Dispatch<
    React.SetStateAction<{ image: boolean; pdf: boolean }>
  >;
  setFileUrls: React.Dispatch<
    React.SetStateAction<{ imageUrl?: string; pdfUrl?: string }>
  >;
  setUploadError: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // References to clear the file input
  const imageInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

  // Load files from local storage
  useEffect(() => {
    const savedImageFile = localStorage.getItem("imageFile");
    const savedPdfFile = localStorage.getItem("pdfFile");
    if (savedImageFile) setImageFile(JSON.parse(savedImageFile));
    if (savedPdfFile) setPdfFile(JSON.parse(savedPdfFile));
  }, []);

  // Save files to local storage
  useEffect(() => {
    if (imageFile) localStorage.setItem("imageFile", JSON.stringify(imageFile));
    if (pdfFile) localStorage.setItem("pdfFile", JSON.stringify(pdfFile));
  }, [imageFile, pdfFile]);

  // File validation
  const validateFile = (file: File, type: "image" | "pdf") => {
    if (type === "image") {
      const validTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!validTypes.includes(file.type)) {
        setErrorMessage(
          "Invalid image format. Only JPG, JPEG, or PNG allowed."
        );
        setUploadError("Invalid image format. Only JPG, JPEG, or PNG allowed.");
        return false;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("Image file size must be less than 2MB.");
        setUploadError("Image file size must be less than 2MB.");
        return false;
      }
    } else if (type === "pdf") {
      if (file.type !== "application/pdf") {
        setErrorMessage("Only PDF files are allowed for government ID.");
        setUploadError("Only PDF files are allowed for government ID.");
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("PDF file size must be less than 5MB.");
        setUploadError("PDF file size must be less than 5MB.");
        return false;
      }
    }
    setErrorMessage(""); // Clear errors if valid
    setUploadError("");
    return true;
  };

  // Upload handler
  // Log uploaded URLs whenever they change
  useEffect(() => {
    setFileUrls((fileUrls) => {
      console.log("Updated File URLs:", fileUrls);
      return fileUrls; // Return the unchanged state
    });
  }, [setFileUrls]);

  // Upload handler with console log after setting URLs
  const handleUpload = async (file: File, fileType: "image" | "pdf") => {
    const formData = new FormData();
    formData.append("file", file);
    setIsUploading(true);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Upload Response:", response.data);

      // Convert relative file path to full URL
      const uploadedUrl = `http://localhost:3000${response.data.filePath}`;

      setFileUrls((prev: { imageUrl?: string; pdfUrl?: string }) => {
        const updatedUrls = {
          ...prev,
          [fileType === "image" ? "imageUrl" : "pdfUrl"]: uploadedUrl,
        };
        console.log("New File URLs after Upload:", updatedUrls); // Log the URLs here
        return updatedUrls;
      });

      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: true,
      }));
      setUploadError("");
    } catch (error) {
      console.error("Upload Error:", error);
      setErrorMessage(`Failed to upload ${fileType.toUpperCase()}`);
      setUploadError(`Failed to upload ${fileType.toUpperCase()}`);
    } finally {
      setIsUploading(false);
    }
  };

  // Submit handler
  const handleSubmit = async () => {
    if (imageFile && validateFile(imageFile, "image"))
      await handleUpload(imageFile, "image");
    if (pdfFile && validateFile(pdfFile, "pdf"))
      await handleUpload(pdfFile, "pdf");
  };

  return (
    <div className="space-y-4 p-4 bg-white mb-40">
      <h2 className="text-2xl font-bold text-center">Upload the Documents</h2>

      {/* Upload Photo */}
      <div className="space-y-2">
        <label className="font-semibold">
          Upload the Photo{" "}
          <span className="text-xs text-zinc-400 font-serif italic">
            (JPG, JPEG, PNG - Image size must be less than 2MB)
          </span>
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
                if (imageInputRef.current) imageInputRef.current.value = "";
                setImageFile(null);
              }
            }}
            className="w-3/4 border rounded p-2"
          />
          {uploadStatus.image && (
            <CheckCircle className="text-green-500" size={24} />
          )}
        </div>
        {/* {imageFile && <p className="text-sm text-gray-500">Selected file: {imageFile.name}</p>} */}
      </div>

      {/* Upload Government ID */}
      <div className="space-y-2">
        <label className="font-semibold">
          Upload Government ID{" "}
          <span className="text-xs text-zinc-400 font-serif italic">
            (PDF - PDF size must be less than 5MB)
          </span>
        </label>
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
                if (pdfInputRef.current) pdfInputRef.current.value = "";
                setPdfFile(null);
              }
            }}
            className="w-3/4 border rounded p-2"
          />
          {uploadStatus.pdf && (
            <CheckCircle className="text-green-500" size={24} />
          )}
        </div>
        {/* {pdfFile && <p className="text-sm text-gray-500">Selected file: {pdfFile.name}</p>} */}
      </div>

      {/* Error message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Upload Button */}
      <button
        onClick={handleSubmit}
        className={`mx-auto px-4 py-2 rounded-lg text-white transition ${
          uploadStatus.image && uploadStatus.pdf
            ? "bg-primary cursor-not-allowed"
            : "bg-primary text-white hover:bg-blue-700"
        }`}
        disabled={isUploading || (uploadStatus.image && uploadStatus.pdf)}
      >
        {isUploading
          ? "Uploading..."
          : uploadStatus.image && uploadStatus.pdf
          ? "Upload"
          : "Click to Upload Files"}
      </button>
    </div>
  );
};

export default FormUploadStep;
