"use client";
import React, { useState, useEffect } from "react";
import { DEFAULT_FORM_DATA, FormData } from "../constants/formView";

const FormViewForms: React.FC = () => {
  const [formData, setFormData] = useState<FormData[]>([DEFAULT_FORM_DATA]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/form-data");
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setFormData(data.length > 0 ? data : [DEFAULT_FORM_DATA]);
    } catch (err) {
      setError("Failed to load form data");
      setFormData([DEFAULT_FORM_DATA]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading form data...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  // Display only the first form data entry
  const data = formData[0];

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Form Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Name</p>
          <p className="font-medium">{data.name}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Age</p>
          <p className="font-medium">{data.age}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Gender</p>
          <p className="font-medium">{data.gender}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Phone</p>
          <p className="font-medium">{data.phoneNumber}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Email</p>
          <p className="font-medium">{data.email}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Nationality</p>
          <p className="font-medium">{data.nationality}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Address</p>
          <p className="font-medium">{data.address}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Country</p>
          <p className="font-medium">{data.country}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Package Unique ID</p>
          <p className="font-medium">{data.packageUniqueId}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Package Country</p>
          <p className="font-medium">{data.packageCountry}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Photo</p>
          <a 
            href={data.imageUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            View Photo
          </a>
        </div>
        <div className="p-3 bg-gray-50 rounded-md">
          <p className="text-sm font-medium text-gray-500">Gov. ID</p>
          <a 
            href={data.pdfUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            View Gov. ID
          </a>
        </div>
      </div>
    </div>
  );
};

export default FormViewForms;