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
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Form Data</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Age</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Phone Number</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Nationality</th>
            <th className="p-2 border">Government ID</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Postal Code</th>
            <th className="p-2 border">Country</th>
            <th className="p-2 border">Photo </th>
            <th className="p-2 border">Govermnet - ID</th>

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
              <td className="p-2 border">{data?.governmentId}</td>
              <td className="p-2 border">{data?.address}</td>
              <td className="p-2 border">{data?.postalCode}</td>
              <td className="p-2 border">{data?.country}</td>
              <td className="p-2 border">{data?.pdfUrl}</td>
              <td className="p-2 border">{data?.imageUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewFormData;
