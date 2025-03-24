"use client";
import React, { useState, useRef } from "react";
import { Document, DocumentSection } from "../constants/formView";
import { ChevronDown, ChevronUp, Trash2, X, Maximize2, FileText } from "lucide-react";
import Image from "next/image";
import useClickOutside from "../hooks/useClickOutside";

interface FormViewUploadProps {
  section: DocumentSection;
  onUpload: (files: File[]) => void;
  onDelete: (documentId: string) => void;
}

const FormViewUpload: React.FC<FormViewUploadProps> = ({ 
  section, 
  onUpload, 
  onDelete 
}) => {
  const [isExpanded, setIsExpanded] = useState(section.id === "passport");
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const uploadCount = section.documents.length;
  const remainingCount = section.maxFiles - uploadCount;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const filesToUpload = Array.from(e.dataTransfer.files).slice(0, remainingCount);
      onUpload(filesToUpload);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesToUpload = Array.from(e.target.files).slice(0, remainingCount);
      onUpload(filesToUpload);
      
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const openImagePreview = (document: Document) => {
    if (document.file instanceof File) {
      const objectUrl = URL.createObjectURL(document.file);
      setPreviewImage(objectUrl);
    } else if (typeof document.file === 'string') {
      setPreviewImage(document.file);
    }
  };

  const closeImagePreview = () => {
    setPreviewImage(null);
  };

  // Use the useClickOutside hook to close the modal when clicking outside
  useClickOutside(modalRef, closeImagePreview);

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      {/* Section Header */}
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleExpand}
      >
        <div className="font-medium flex items-center">
          {section.name} ({uploadCount}/{section.maxFiles})
          {uploadCount === section.maxFiles && (
            <div className="ml-2 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          )}
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-gray-500" />
        ) : (
          <ChevronDown size={20} className="text-gray-500" />
        )}
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t">
          {/* Instructions */}
          <div className="p-4 pb-2">
            <p className="text-xs text-gray-500">
              {section.instructions}
            </p>
          </div>

          {/* Upload Area */}
          {remainingCount > 0 && (
            <div 
              className={`m-4 p-6 border-2 border-dashed rounded-lg flex flex-col items-center justify-center transition-colors ${
                isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
              </div>
              <p className="text-center mb-1">Drag & Drop your files</p>
              <p className="text-xs text-gray-500 text-center mb-2">
                Supported formats: PDF, Jpeg & PNG
              </p>
              <p className="text-xs text-gray-400 text-center">or</p>
              
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileInputChange}
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
              />
              
              <button 
                className="mt-2 bg-blue-600 text-white text-sm px-4 py-2 rounded-md"
                onClick={handleUploadClick}
              >
                Upload files
              </button>
            </div>
          )}

          {/* Uploaded Documents */}
          {section.documents.length > 0 && (
            <div className="px-4 pb-4 space-y-4">
              {section.documents.map((document) => (
                <div key={document.id} className="border rounded-md">
                  <div className="flex items-center p-3">
                    <div className="w-12 h-12 bg-gray-100 rounded-md overflow-hidden mr-3 flex items-center justify-center relative">
                      {document.name.toLowerCase().endsWith('.pdf') ? (
                        <FileText size={24} className="text-gray-500" />
                      ) : (
                        <>
                          <Image 
                            src={document.file instanceof File ? URL.createObjectURL(document.file) : (typeof document.file === 'string' ? document.file : "/document-placeholder.svg")}
                            alt={document.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = "/document-placeholder.svg";
                            }}
                            width={200}
                            height={200}
                          />
                          <button 
                            className="absolute right-0 bottom-0 bg-white bg-opacity-75 p-0.5 rounded-sm"
                            onClick={() => openImagePreview(document)}
                          >
                            <Maximize2 size={12} />
                          </button>
                        </>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-medium text-sm">{document.name}</p>
                      <p className="text-xs text-gray-500">{document.date} | {document.size}</p>
                      <p className="text-xs text-green-500">{document.uploaded ? "Uploaded" : ""}</p>
                    </div>
                    
                    <button 
                      className="p-2 text-gray-400 hover:text-red-500"
                      onClick={() => onDelete(document.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  
                  {!document.isValid && document.errorMessage && (
                    <div className="flex items-center p-3 bg-red-50 text-red-700 text-sm border-t">
                      <div className="mr-2 text-red-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                          <path d="M12 9v4"/>
                          <path d="M12 17h.01"/>
                        </svg>
                      </div>
                      <div className="flex-1">{document.errorMessage}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div 
            className="relative max-w-3xl max-h-screen p-4"
            ref={modalRef} // Attach the ref to the modal container
          >
            <button 
              onClick={closeImagePreview}
              className="absolute top-2 right-2 bg-white rounded-full p-1"
            >
              <X size={24} />
            </button>
            <Image 
              src={previewImage} 
              alt="Preview" 
              className="max-w-full max-h-[calc(100vh-40px)] object-contain"
              width={500}
              height={500}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FormViewUpload;