"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  Users,
  Package2,
  Globe,
  FileText,
  MessageSquare,
} from "lucide-react";
import { FormData } from "../constants/dashbordData";
import { packageCardUniqueId } from "../constants/dashbordData";
import Link from "next/link";

const MyPackages: React.FC = () => {
  const [formData, setFormData] = useState<FormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      setIsLoading(false);
    }
  };

  const groupFormDataByPackageId = () => {
    const groupedData: { [key: string]: FormData[] } = {};

    formData.forEach((data) => {
      if (!groupedData[data.packageUniqueId]) {
        groupedData[data.packageUniqueId] = [];
      }
      groupedData[data.packageUniqueId].push(data);
    });

    return groupedData;
  };

  const renderPackageCard = (packageUniqueId: string, names: FormData[]) => {
    const packageDetails =
      packageCardUniqueId[
        packageUniqueId as keyof typeof packageCardUniqueId
      ]?.[0];
    if (!packageDetails)
      return <p className="text-red-500">No package details found</p>;

    return (
      <div key={packageUniqueId} className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6">
          <div className="mb-4 flex justify-between">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-2 ${
                  packageDetails.isPurchased
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {packageDetails.isPurchased ? "Purchased" : "Not Purchased"}
              </span>
              <p className="text-gray-600 text-sm">
                Order ID: {packageDetails?.id || "Loading..."}
              </p>
            </div>
            {packageDetails.country && (
              <div className="flex items-center text-gray-600">
                <Globe className="h-4 w-4 mr-1" />
                <span className="capitalize">{packageDetails.country}</span>
              </div>
            )}
          </div>

          <h2 className="text-xl font-bold mb-6">{packageDetails.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <Package2 className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">
                  {packageDetails.numberOfEntries}
                </p>
                <p className="text-gray-500 text-sm">Number of entries</p>
              </div>
            </div>

            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">
                  {packageDetails.duration}
                </p>
                <p className="text-gray-500 text-sm">Duration</p>
              </div>
            </div>

            <div className="flex items-center">
              <Users className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">1</p>
                <p className="text-gray-500 text-sm">Members</p>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            {names.map((data, index) => (
              <div
                key={data.id || index}
                className="border rounded-lg p-4 mb-4"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-medium mb-2">{data.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-primary text-sm">
                      <span className="mb-2 sm:mb-0 sm:mr-4">
                        <span className="inline-flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          Status: Form Incomplete
                        </span>
                      </span>
                      <span>
                        <span className="inline-flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />
                          Remarks: 0
                        </span>
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/form-filled`}
                    className="bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
                  >
                    Edit Form
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const groupedData = groupFormDataByPackageId();

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 bg-secondary">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Packages</h1>
        <button className="flex items-center text-gray-600 hover:text-primary">
          Filters <span className="ml-1">▼</span>
        </button>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        Object.entries(groupedData).map(([packageUniqueId, names]) => (
          <div key={packageUniqueId}>
            {renderPackageCard(packageUniqueId, names)}
          </div>
        ))
      )}
    </div>
  );
};

export default MyPackages;
