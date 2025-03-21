"use client";
import React, { useState, useEffect } from "react";
import { DEFAULT_DOCUMENT_SECTIONS } from "../constants/formView";
import FormViewUpload from "./FormViewUplaod";

const FormViewDocuments: React.FC = () => {
  const [documentSections, setDocumentSections] = useState(DEFAULT_DOCUMENT_SECTIONS);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("User 01");

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/documents");
      if (!response.ok) {
        // If API fails, use default data
        setDocumentSections(DEFAULT_DOCUMENT_SECTIONS);
        return;
      }
      const data = await response.json();
      if (data && data.sections) {
        setDocumentSections(data.sections);
      }
      
      // Fetch user name if available
      if (data && data.userName) {
        setUserName(data.userName);
      }
    } catch (err) {
      setError("Failed to load documents");
      setDocumentSections(DEFAULT_DOCUMENT_SECTIONS);
    } finally {
      setLoading(false);
    }
  };

  // Handle file upload for a specific document section
  const handleFileUpload = (sectionId: string, files: File[]) => {
    // In a real application, you'd upload the files to your server here
    // For now, we'll just update the state to reflect the upload
    
    setDocumentSections(prevSections => 
      prevSections.map(section => {
        if (section.id === sectionId) {
          // Create new document entries for the uploaded files
          const newDocuments = files.map(file => ({
            id: `doc-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            name: file.name,
            date: new Date().toLocaleDateString(),
            size: `${Math.round(file.size / 1024)}kb`,
            isValid: true,
            file: file,
            uploaded: true
          }));
          
          // Add new documents (up to the max allowed)
          const updatedDocuments = [...section.documents, ...newDocuments].slice(0, section.maxFiles);
          
          return {
            ...section,
            documents: updatedDocuments
          };
        }
        return section;
      })
    );
  };

  // Handle file deletion
  const handleDeleteFile = (sectionId: string, documentId: string) => {
    setDocumentSections(prevSections => 
      prevSections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            documents: section.documents.filter(doc => doc.id !== documentId)
          };
        }
        return section;
      })
    );
  };

  if (loading) {
    return <div className="p-6 text-center">Loading documents...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Documents</h2>
          <p className="text-sm text-gray-500">{userName}</p>
        </div>

        <div className="space-y-4">
          {documentSections.map(section => (
            <FormViewUpload 
              key={section.id}
              section={section}
              onUpload={(files) => handleFileUpload(section.id, files)}
              onDelete={(documentId) => handleDeleteFile(section.id, documentId)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormViewDocuments;