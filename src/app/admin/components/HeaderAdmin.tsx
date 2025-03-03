"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Header = ({ activeTab, setActiveTab }) => {
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("isAdmin"); // Clear admin authentication
    router.push("/"); // Redirect to home
  };

  return (
    <header className="bg-blue-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setActiveTab("home")}
                className={`hover:text-blue-300 ${activeTab === "home" ? "underline" : ""}`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("formData")}
                className={`hover:text-blue-300 ${activeTab === "formData" ? "underline" : ""}`}
              >
                Form Data
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("members")}
                className={`hover:text-blue-300 ${activeTab === "members" ? "underline" : ""}`}
              >
                Members
              </button>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};

export default Header;