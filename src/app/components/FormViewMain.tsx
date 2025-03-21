"use client";
import React, { useState } from "react";
import FormViewDocuments from "./FormViewDocuments";
import FormViewForms from "./FormViewForms";
import FormViewRemarks from "./FormViewRemarks";
import { FORM_VIEW_SECTIONS } from "../constants/formView";

const FormViewMain: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(
    FORM_VIEW_SECTIONS.REMARKS
  );

  const toggleSection = (section: string) => {
    setActiveSection(section === activeSection ? "" : section);
  };
  const sections = [
    { label: "Remarks", value: FORM_VIEW_SECTIONS.REMARKS },
    { label: "Forms", value: FORM_VIEW_SECTIONS.FORMS },
    { label: "Documents", value: FORM_VIEW_SECTIONS.DOCUMENTS },
  ];

  return (
    <div className="min-h-screen bg-secondary p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 lg:w-1/5">
            <div className="bg-secondary ">
              {sections.map((section) => (
                <button
                  key={section.value}
                  onClick={() => toggleSection(section.value)}
                  className={`w-full text-left pr-8 py-2 transition-colors border-b-2 ${
                    activeSection === section.value
                      ? "text-primary font-extrabold border-b-primary"
                      : "text-black border-b-gray-200"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full md:w-3/4 lg:w-4/5">
            <div className="bg-white rounded-lg shadow-sm">
              {activeSection === FORM_VIEW_SECTIONS.REMARKS && (
                <FormViewRemarks />
              )}
              {activeSection === FORM_VIEW_SECTIONS.FORMS && <FormViewForms />}
              {activeSection === FORM_VIEW_SECTIONS.DOCUMENTS && (
                <FormViewDocuments />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormViewMain;
