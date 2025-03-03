"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ViewFormData from "./components/ViewFormData";
import ViewMembers from "./components/ViewMembers";
import AdminLogin from "./components/AdminLogin";
import Header from "../components/Header";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("formData");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin === "true") {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      setShowLogin(true);
    }
  }, []);

  const handleSuccess = () => {
    setIsAuthenticated(true);
    setShowLogin(false);
  };

  if (!isAuthenticated) {
    return <AdminLogin isOpen={showLogin} onClose={() => setShowLogin(false)} onSuccess={handleSuccess} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header/>
      <h1 className="text-2xl font-bold text-center mb-6">Admin Dashboard</h1>

    
      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeTab === "formData" ? "bg-blue-600 text-white" : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
          onClick={() => setActiveTab("formData")}
        >
          Form Data
        </button>
        <button
          className={`px-6 py-2 rounded-lg transition-colors ${
            activeTab === "members" ? "bg-blue-600 text-white" : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
          onClick={() => setActiveTab("members")}
        >
          Members
        </button>
      </div>

      {/* Display Selected Component */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {activeTab === "formData" ? <ViewFormData /> : <ViewMembers />}
      </div>

      {/* Logout Button */}
      <div className="flex justify-center mt-6">
        <button
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          onClick={() => {
            localStorage.removeItem("isAdmin");
            setIsAuthenticated(false);
            setShowLogin(false);
            router.push("/");

          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
