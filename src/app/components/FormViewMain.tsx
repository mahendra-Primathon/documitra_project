"use client";
import React, { useState } from "react";
import FormViewDocuments from "./FormViewDocuments";
import FormViewForms from "./FormViewForms";
import FormViewRemarks from "./FormViewRemarks";
import { FORM_VIEW_SECTIONS } from "../constants/formView";
import { ChevronDown, ChevronUp } from "lucide-react"; // Import icons for accordion toggle

const FormViewMain: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(
    FORM_VIEW_SECTIONS.REMARKS
  );

  const toggleSection = (section: string) => {
    // Prevent closing the currently active section if it's the only one open
    if (
      activeSection === section &&
      sections.some((s) => s.value === activeSection)
    ) {
      return;
    }
    setActiveSection(section);
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
            <div className="bg-secondary">
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
            <div className="bg-secondary rounded-lg shadow-sm border-2 mt-2 pt-2">


              {/* Accordion for Remarks */}
              <div className=" rounded-full mb-3 ">
                <button
                  onClick={() => toggleSection(FORM_VIEW_SECTIONS.REMARKS)}
                  className="w-full flex justify-between items-center p-4 bg-gray-200 rounded-3xl  "
                >
                  <span>Remarks</span>
                  {activeSection === FORM_VIEW_SECTIONS.REMARKS ? (
                    <ChevronUp className="w-5 h-5 cursor-pointer   " />
                  ) : (
                    <ChevronDown className="w-5 h-5 cursor-pointer " />
                  )}
                </button>
                {activeSection === FORM_VIEW_SECTIONS.REMARKS && (
                  <div className="p-4 ">
                    <FormViewRemarks />
                  </div>
                )}
              </div>

              {/* Accordion for Forms */}
              <div className=" mb-3 ">
                <button
                  onClick={() => toggleSection(FORM_VIEW_SECTIONS.FORMS)}
                  className="w-full flex justify-between items-center p-4 bg-gray-200 rounded-3xl "
                >
                  <span>Forms</span>
                  {activeSection === FORM_VIEW_SECTIONS.FORMS ? (
                    <ChevronUp className="w-5 h-5 cursor-pointer " />
                  ) : (
                    <ChevronDown className="w-5 h-5 cursor-pointer " />
                  )}
                </button>
                {activeSection === FORM_VIEW_SECTIONS.FORMS && (
                  <div className="p-4">
                    <FormViewForms />
                  </div>
                )}
              </div>

              {/* Accordion for Documents */}
              <div className="border-b mb-3 ">
                <button
                  onClick={() => toggleSection(FORM_VIEW_SECTIONS.DOCUMENTS)}
                  className="w-full flex justify-between items-center p-4 bg-gray-200 rounded-3xl "
                >
                  <span>Documents</span>
                  {activeSection === FORM_VIEW_SECTIONS.DOCUMENTS ? (
                    <ChevronUp className="w-5 h-5 cursor-pointer " />
                  ) : (
                    <ChevronDown className="w-5 h-5 cursor-pointer " />
                  )}
                </button>
                {activeSection === FORM_VIEW_SECTIONS.DOCUMENTS && (
                  <div className="p-4">
                    <FormViewDocuments />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormViewMain;
