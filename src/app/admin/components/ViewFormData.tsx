"use client";
import React, { useEffect, useState } from "react";

const ViewFormData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/form-data");
        const data = await response.json();
        setFormData(data);
      } catch (err) {
        console.error("Error fetching form data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Form Data</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Age</th>
              <th className="p-2 border">Gender</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Nationality</th>
              <th className="p-2 border">Address</th>
              <th className="p-2 border">Country</th>
              <th className="p-2 border">Photo</th>
              <th className="p-2 border">Gov. ID</th>
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
                <td className="p-2 border">
                  <a href={data?.imageUrl} target="_blank" className="text-blue-500">
                    View Photo
                  </a>
                </td>
                <td className="p-2 border">
                  <a href={data?.pdfUrl} target="_blank" className="text-blue-500">
                    View Gov. ID
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewFormData;
