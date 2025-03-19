"use client";
import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const ViewFormData = () => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/form-data");
      if (!response.ok) throw new Error("Failed to fetch data");

      const data = await response.json();
      setFormData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this entry?")) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/form-data/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Failed to delete entry");

      // Remove deleted entry from UI
      setFormData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (err) {
      alert("Error deleting entry: " + err.message);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Form Data</h1>

      {loading ? (
        <p className="text-gray-600">Loading form data...</p>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : formData.length === 0 ? (
        <p className="text-gray-600">No form data available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                {[
                  "Name",
                  "Age",
                  "Gender",
                  "Phone",
                  "Email",
                  "Nationality",
                  "Address",
                  "Country",
                  "package Unique Id",
                  "Package Country",
                  "Photo",
                  "Gov. ID",
                  "Actions",
                ].map((header) => (
                  <th key={header} className="p-2 border">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-2 border">{data?.name}</td>
                  <td className="p-2 border">{data?.age}</td>
                  <td className="p-2 border">{data?.gender}</td>
                  <td className="p-2 border">{data?.phoneNumber}</td>
                  <td className="p-2 border">{data?.email}</td>
                  <td className="p-2 border">{data?.nationality}</td>
                  <td className="p-2 border">{data?.address}</td>
                  <td className="p-2 border">{data?.country}</td>
                  <td className="p-2 border">{data?.packageUniqueId}</td>
                  <td className="p-2 border">{data?.packageCountry}</td>
                  <td className="p-2 border">
                    <a
                      href={data?.imageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Photo
                    </a>
                  </td>
                  <td className="p-2 border">
                    <a
                      href={data?.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Gov. ID
                    </a>
                  </td>
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewFormData;
