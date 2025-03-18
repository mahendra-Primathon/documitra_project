// components/MyPackages.tsx

"use client";
import React, { useState, useEffect } from "react";
import { Clock, Users, Package2, FileText, MessageSquare } from "lucide-react";
import Link from "next/link";
import { PackageData , getPackages } from "../constants/dashbordData";

const MyPackages: React.FC = () => {
  const [packages, setPackages] = useState<PackageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setIsLoading(true);
        const data = await getPackages();
        setPackages(data);
        setError(null);
      } catch (err) {
        setError("Failed to load packages. Please try again later.");
        console.error("Error fetching packages:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 my-4">
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-2 text-red-600 hover:text-red-800 underline"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (packages.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow my-4">
        <h2 className="text-xl font-semibold mb-2">No Packages Found</h2>
        <p className="text-gray-600 mb-4">You haven't purchased any packages yet.</p>
        <Link 
          href="/packages" 
          className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        >
          Browse Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-secondary max-w-7xl ">
      <h1 className="text-2xl font-bold mb-8">My Packages</h1>
      
      {packages.map((pkg) => (
        <div key={pkg.id} className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div>
              <span className={`inline-block px-3 py-1 rounded-md text-sm font-medium mb-2 ${
                pkg.status === "Not Purchased" ? "bg-yellow-200 text-yellow-800" :
                pkg.status === "Purchased" ? "bg-green-200 text-green-800" :
                pkg.status === "Processing" ? "bg-blue-200 text-blue-800" :
                pkg.status === "Approved" ? "bg-emerald-200 text-emerald-800" :
                "bg-red-200 text-red-800"
              }`}>
                {pkg.status}
              </span>
              <p className="text-gray-600 text-sm">Order ID: {pkg.id}</p>
            </div>
            {pkg.createdAt && (
              <p className="text-gray-500 text-sm mt-2 md:mt-0">
                Created on: {new Date(pkg.createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
          
          <h2 className="text-xl font-bold mb-6">{pkg.type}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center">
              <Package2 className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">{pkg.entries}</p>
                <p className="text-gray-500 text-sm">Number of entries</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-primary mr-2" />
              <div>
                <p className="text-primary font-medium">{pkg.validity}</p>
                <p className="text-gray-500 text-sm">Validity</p>
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
          
          <div className="border-t pt-6">
            {pkg.members.map((member, index) => (
              <div 
                key={index} 
                className="border rounded-lg p-4 mb-4"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="mb-4 md:mb-0">
                    <h3 className="font-medium mb-2">{member.name}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center text-primary text-sm">
                      <span className="mb-2 sm:mb-0 sm:mr-4">
                        <span className="inline-flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          Status: {member.status}
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
                    href={`/form?member=${encodeURIComponent(member.name)}&packageId=${encodeURIComponent(pkg.id)}`} 
                    className="bg-primary hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-200"
                  >
                    Fill Form
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyPackages;