"use client";
import React, { useState, useEffect } from "react";
import { DEFAULT_REMARKS, Remark } from "../constants/formView";
import { ChevronRight } from "lucide-react";

const FormViewRemarks: React.FC = () => {
  const [remarks, setRemarks] = useState<Remark[]>(DEFAULT_REMARKS);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRemarks();
  }, []);

  const fetchRemarks = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/remarks");
      if (!response.ok) {
        // If API fails, use default data
        setRemarks(DEFAULT_REMARKS);
        return;
      }
      const data = await response.json();
      setRemarks(data.length > 0 ? data : DEFAULT_REMARKS);
    } catch (err) {
      setError("Failed to load remarks");
      setRemarks(DEFAULT_REMARKS);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center">Loading remarks...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Remarks</h2>
      <div className="space-y-3">
        {remarks.map((remark) => (
          <div 
            key={remark.id} 
            className="flex items-start bg-red-50 p-4 rounded-md border-l-4 border-red-500"
          >
            <div className="mr-2 text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-triangle">
                <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
                <path d="M12 9v4"/>
                <path d="M12 17h.01"/>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-red-700">{remark.message}</p>
              <p className="text-xs text-gray-500 mt-1">{remark.date}</p>
            </div>
            <div className="ml-2">
              <ChevronRight className="text-gray-400" size={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormViewRemarks;