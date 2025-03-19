"use client";
import React, { useState, useEffect } from "react";
import {
  Clock,
  Users,
  Package2,
  FileText,
  MessageSquare,
  Globe,
} from "lucide-react";
import Link from "next/link";
import { PackageData, getPackages, FormData } from "../constants/dashbordData";
import { packageCard } from "../constants/packageData";
import { packageCardUniqueId } from "../constants/dashbordData";

const MyPackages: React.FC = () => {
  interface FormData {
    name: string;
    packageUniqueId: keyof typeof packageCardUniqueId;
  }

  const [packages, setPackages] = useState<PackageData[]>([]);
  const [formData, setFormData] = useState<FormData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const packagesData = await getPackages();
        const formResponse = await fetch("http://localhost:5000/api/form-data");
        if (!formResponse.ok) throw new Error("Failed to fetch form data");
        const formDataResponse = await formResponse.json();

        setPackages(packagesData);
        setFormData(formDataResponse);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getFullPackageDetails = (
    packageCountry: string | undefined,
    packageId: string
  ) => {
    if (!packageCountry) return null;
    const country = packageCountry.toLowerCase();
    if (!packageCard[country]) return null;

    const numericId = (parseInt(packageId.split("/").pop() || "0", 10) % 3) + 1;
    return packageCard[country].find((pkg) => pkg.id === numericId) || null;
  };

  

  

  const renderPackageCard = (pkg: PackageData, isPurchased: boolean) => {
    const relatedFormData = formData.filter(
      (form) => form.packageId === pkg.id
    );
    const detailedPackage = getFullPackageDetails(pkg.country, pkg.id);

    return (
      <div key={pkg.id} className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6">
          <div className="mb-4 flex justify-between">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-2 ${
                  isPurchased
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {isPurchased ? "Purchased" : "Not Purchased"}
              </span>
              <p className="text-gray-600 text-sm">Order ID: {pkg.id}</p>
            </div>
            {pkg.country && (
              <div className="flex items-center text-gray-600">
                <Globe className="h-4 w-4 mr-1" />
                <span className="capitalize">{pkg.country}</span>
              </div>
            )}
          </div>

          <h2 className="text-xl font-bold mb-6">
            {isPurchased ? pkg.type : detailedPackage?.title}
          </h2>

          {detailedPackage && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center">
                <Package2 className="h-5 w-5 text-primary mr-2" />
                <div>
                  <p className="text-primary font-medium">
                    {detailedPackage.numberOfEntries}
                  </p>
                  <p className="text-gray-500 text-sm">Number of entries</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <div>
                  <p className="text-primary font-medium">
                    {detailedPackage.duration}
                  </p>
                  <p className="text-gray-500 text-sm">Duration</p>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                <div>
                  <p className="text-primary font-medium">{pkg.memberCount}</p>
                  <p className="text-gray-500 text-sm">Members</p>
                </div>
              </div>
            </div>
          )}

          <div className="border-t pt-6">
            {pkg.members.map((member, index) => {
              const memberFormData = relatedFormData.find(
                (form) => form.name === member.name
              );
              const formStatus = memberFormData
                ? "Forms Complete"
                : "Forms Incomplete";

              return (
                <div key={index} className="border rounded-lg p-4 mb-4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-medium mb-2">{member.name}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-primary text-sm">
                        <span className="mb-2 sm:mb-0 sm:mr-4">
                          <span className="inline-flex items-center">
                            <FileText className="w-4 h-4 mr-1" />
                            Status: {formStatus}
                          </span>
                        </span>
                        <span>
                          <span className="inline-flex items-center">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            Remarks: {member.remarks}
                          </span>
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/form?country=${pkg.country}&packageId=${pkg.id}`}
                      className="bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
                    >
                      {memberFormData ? "Edit Form" : "Fill Form"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-secondary">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Packages</h1>
        <button className="flex items-center text-gray-600 hover:text-primary">
          Filters <span className="ml-1">▼</span>
        </button>
      </div>
      

      {packages
        .filter((pkg) => pkg.status === "Purchased")
        .map((pkg) => renderPackageCard(pkg, true))}

      {packages
        .filter((pkg) => pkg.status === "Not Purchased")
        .map((pkg) => renderPackageCard(pkg, false))}
    </div>
  );
};

export default MyPackages;
