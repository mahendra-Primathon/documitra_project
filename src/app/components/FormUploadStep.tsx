"use client";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { CheckCircle, UploadCloud, Loader } from "lucide-react";

const FormUploadStep = ({
  uploadStatus,
  setUploadStatus,
  setFileUrls,
  setUploadError,
  fileUrls,
  setUploadedFiles, // Add setUploadedFiles to props
}: {
  uploadStatus: { image: boolean; pdf: boolean };
  setUploadStatus: React.Dispatch<
    React.SetStateAction<{ image: boolean; pdf: boolean }>
  >;
  setFileUrls: React.Dispatch<
    React.SetStateAction<{ imageUrl?: string; pdfUrl?: string }>
  >;
  setUploadError: React.Dispatch<React.SetStateAction<string>>;
  fileUrls: { imageUrl?: string; pdfUrl?: string };
  setUploadedFiles: React.Dispatch<
    React.SetStateAction<{ image: string | null; pdf: string | null }>
  >; // Add setUploadedFiles to props
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFilesState] = useState<{
    image: string | null;
    pdf: string | null;
  }>({
    image: fileUrls.imageUrl
      ? fileUrls.imageUrl.split("/").pop() || null
      : null,
    pdf: fileUrls.pdfUrl ? fileUrls.pdfUrl.split("/").pop() || null : null,
  });

  // References to clear the file input
  const imageInputRef = useRef<HTMLInputElement>(null);
  const pdfInputRef = useRef<HTMLInputElement>(null);

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
  // In FormUploadStep.jsx
  // Modify the handleUpload function
  const handleUpload = async (file: File, fileType: "image" | "pdf") => {
    const formData = new FormData();
    formData.append("file", file);
    setIsUploading(true);

    try {
      const response = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const uploadedUrl = `http://localhost:3000${response.data.filePath}`;

      // Update fileUrls in parent component
      setFileUrls((prev) => ({
        ...prev,
        [fileType === "image" ? "imageUrl" : "pdfUrl"]: uploadedUrl,
      }));

      // Update uploadStatus in parent component
      setUploadStatus((prev) => ({
        ...prev,
        [fileType]: true,
      }));

      // Update local state
      setUploadedFilesState((prev) => ({
        ...prev,
        [fileType]: file.name,
      }));

      // Update the parent component's uploadedFiles state
      setUploadedFiles((prev) => ({
        ...prev,
        [fileType]: file.name, // Use file.name instead of uploadedUrl to be consistent
      }));

      setUploadError("");

      // Console log to debug
      console.log(`${fileType} uploaded successfully:`, uploadedUrl);
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
    let validImage = imageFile || uploadedFiles.image;
    let validPdf = pdfFile || uploadedFiles.pdf;
    let needsUpload = false;

    setErrorMessage("");
    setUploadError("");

    if (!validImage && !validPdf) {
      setErrorMessage("Please select both image and PDF files");
      setUploadError("Please select both image and PDF files");
      return;
    }

    if (!validImage) {
      setErrorMessage("Please select an image file");
      setUploadError("Please select an image file");
      return;
    }

    if (!validPdf) {
      setErrorMessage("Please select a PDF file");
      setUploadError("Please select a PDF file");
      return;
    }

    if (imageFile) {
      validImage = validateFile(imageFile, "image");
      if (validImage) {
        needsUpload = true;
        await handleUpload(imageFile, "image");
      } else {
        return;
      }
    }

    if (pdfFile) {
      validPdf = validateFile(pdfFile, "pdf");
      if (validPdf) {
        needsUpload = true;
        await handleUpload(pdfFile, "pdf");
      } else {
        return;
      }
    }

    // If we get here, both files are valid and uploaded
    if (!needsUpload) {
      // If we didn't need to upload any new files, make sure to update status
      setUploadStatus({
        image: true,
        pdf: true,
      });
    }
  };

  // Reset button state if files are changed
  useEffect(() => {
    if (imageFile || pdfFile) {
      setUploadStatus((prev) => ({
        ...prev,
        image: false,
        pdf: false,
      }));
    }
  }, [imageFile, pdfFile]);

  useEffect(() => {
    // Check if files are already uploaded and update the status accordingly
    if (fileUrls.imageUrl && fileUrls.pdfUrl) {
      setUploadStatus({
        image: true,
        pdf: true,
      });

      // Update the uploaded files state
      setUploadedFilesState({
        image: fileUrls.imageUrl.split("/").pop() || null,
        pdf: fileUrls.pdfUrl.split("/").pop() || null,
      });

      // Also update the parent's uploadedFiles state
      setUploadedFiles({
        image: fileUrls.imageUrl,
        pdf: fileUrls.pdfUrl,
      });
    }
  }, [fileUrls, setUploadStatus, setUploadedFiles]);

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
          {uploadStatus.image ? (
            <CheckCircle className="text-green-500" size={24} />
          ) : isUploading ? (
            <Loader className="animate-spin" size={24} />
          ) : (
            <UploadCloud size={24} />
          )}
        </div>
        {uploadedFiles.image && (
          <>
            <div className="flex flex-row">
              <p className="text-sm text-black"> Selected Image: </p>
              <p className="text-sm text-green-500 mx-2">
                {uploadedFiles.image}
              </p>
            </div>
          </>
        )}
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
          {uploadStatus.pdf ? (
            <CheckCircle className="text-green-500" size={24} />
          ) : isUploading ? (
            <Loader className="animate-spin" size={24} />
          ) : (
            <UploadCloud size={24} />
          )}
        </div>
        {uploadedFiles.pdf && (
          <>
            <div className="flex flex-row">
              <p className="text-sm text-black"> Selected PDF: </p>
              <p className="text-sm text-green-500 mx-2">{uploadedFiles.pdf}</p>
            </div>
          </>
        )}
      </div>

      {/* Error message */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* Upload Button */}
      <button
        onClick={handleSubmit}
        className={`upload-button ${
          isUploading
            ? "bg-primary text-white "
            : uploadStatus.image && uploadStatus.pdf
            ? "bg-blue-200 text-gray-600 "
            : "bg-primary text-white "
        }  px-4 py-2 rounded`}
        disabled={
          isUploading ||
          (uploadStatus.image && uploadStatus.pdf && !imageFile && !pdfFile)
        }
      >
        {isUploading
          ? "Uploading..."
          : uploadStatus.image && uploadStatus.pdf
          ? "Files Uploaded Successfully"
          : "Click to Upload Files"}
      </button>
      {/* Debug information
      <div className="mt-4 text-xs text-gray-500">
        <p>Image status: {uploadStatus.image ? "Uploaded" : "Not uploaded"}</p>
        <p>PDF status: {uploadStatus.pdf ? "Uploaded" : "Not uploaded"}</p>
      </div> */}
    </div>
  );
};

export default FormUploadStep;
