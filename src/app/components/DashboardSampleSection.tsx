"use client";
import React from "react";
import { hardcodedPurchasedPackage } from "../constants/dashbordData";
import {
  Clock,
  Users,
  Package2,
  Globe,
  FileText,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const DashboardSampleSection = () => {
  const hardcodedNotPurchasedPackage = {
    isPurchased: true,
    title: "12 Months Package for India",
    numberOfEntries: "Multiple",
    duration: "12 Months",
    governmentFees: "$29",
    documitraFees: "$19",
    validityPeriod: "3 Months",
    country: "India",
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-secondary max-w-7xl ">
      <div className="bg-white rounded-lg shadow-md mb-6">
        <div className="p-6">
          <div className="mb-4 flex justify-between">
            <div>
              <span
                className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-2 ${
                  hardcodedNotPurchasedPackage.isPurchased
                    ? "bg-green-200 text-green-800"
                    : "bg-yellow-200 text-yellow-800"
                }`}
              >
                {hardcodedNotPurchasedPackage.isPurchased
                  ? "Purchased"
                  : "Not Purchased"}
              </span>
              <p className="text-gray-600 text-sm">
                Order ID: {Math.floor(Math.random() * 90000) + 10000}
              </p>
            </div>
            {hardcodedNotPurchasedPackage.country && (
              <div className="flex items-center text-gray-600">
                <Globe className="h-4 w-4 mr-1" />
                <span className="capitalize">
                  {hardcodedNotPurchasedPackage.country}
                </span>
              </div>
            )}
          </div>

          <h2 className="text-xl font-bold mb-6">
            {hardcodedNotPurchasedPackage.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <Package2 className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">
                  {hardcodedNotPurchasedPackage.numberOfEntries}
                </p>
                <p className="text-gray-500 text-sm">Number of entries</p>
              </div>
            </div>

            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">
                  {hardcodedNotPurchasedPackage.duration}
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
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-medium mb-2">Jagdish</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center text-primary text-sm">
                    <span className="mb-2 sm:mb-0 sm:mr-4">
                      <span className="inline-flex items-center">
                        <FileText className="w-4 h-4 mr-1" />
                        Status: Form Complete
                      </span>
                    </span>
                    <span>
                      <span className="inline-flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Remarks: 2
                      </span>
                    </span>
                  </div>
                </div>
                <Link
                  href={`#`}
                  className="bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
                >
                  View Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSampleSection;
