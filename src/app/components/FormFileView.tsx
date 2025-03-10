"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Document, Page } from "react-pdf";
import Image from "next/image";

const FileViewer = ({ formId }: { formId: string }) => {
  const [files, setFiles] = useState<{ fileUrl: string; fileType: string }[]>(
    []
  );

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get(`/api/get-files?formId=${formId}`);
        setFiles(response.data.files);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };

    fetchFiles();
  }, [formId]);

  return (
    <div className="space-y-4">
      {files.map((file, index) => (
        <div key={index} className="border rounded-lg p-4">
          {file.fileType === "pdf" ? (
            <Document file={file.fileUrl}>
              <Page pageNumber={1} />
            </Document>
          ) : (
            <Image
              src={file.fileUrl}
              alt="Uploaded Image"
              width={300}
              height={200}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FileViewer;
