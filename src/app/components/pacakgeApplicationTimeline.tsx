"use client";
import React from "react";
import { visaTimelineData } from "../constants/packageData";

const ApplicationTimeline = () => {
  return (
    <div className="w-full py-12 px-[10vw] bg-white">
      <h2 className="text-4xl font-bold mb-8">Visa Application Timeline</h2>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-spacing-2">
          <thead>
            <tr>
              <th className="bg-primary text-white p-4 text-left border-b border-l border-gray-300">
                Application Type
              </th>
              <th className="bg-primary text-white p-4 text-left border-b border-gray-300">
                Application Submission
              </th>
              <th className="bg-primary text-white p-4 text-left border-b border-gray-300">
                Biometrics Submitted
              </th>
              <th className="bg-primary text-white p-4 text-left border-b border-gray-300">
                Passport Request Received
              </th>
              <th className="bg-primary text-white p-4 text-left border-b border-gray-300">
                Visa Received
              </th>
            </tr>
          </thead>
          <tbody>
            {visaTimelineData.map((entry) => (
              <tr
                key={entry.id}
                className="border-b border-l border-r border-gray-300 hover:bg-gray-50"
              >
                <td className="p-4">{entry.applicationType}</td>
                <td className="p-4">{entry.applicationSubmission}</td>
                <td className="p-4">{entry.biometricsSubmitted}</td>
                <td className="p-4">{entry.passportRequestReceived}</td>
                <td className="p-4">{entry.visaReceived}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {visaTimelineData.map((entry) => (
          <div key={entry.id} className="bg-white rounded-lg shadow-md p-4">
            <div className="font-semibold text-lg mb-2">
              {entry.applicationType}
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-gray-600">Application Submission:</span>
                <span className="ml-2">{entry.applicationSubmission}</span>
              </div>
              <div>
                <span className="text-gray-600">Biometrics Submitted:</span>
                <span className="ml-2">{entry.biometricsSubmitted}</span>
              </div>
              <div>
                <span className="text-gray-600">Passport Request:</span>
                <span className="ml-2">{entry.passportRequestReceived}</span>
              </div>
              <div>
                <span className="text-gray-600">Visa Received:</span>
                <span className="ml-2">{entry.visaReceived}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationTimeline;
