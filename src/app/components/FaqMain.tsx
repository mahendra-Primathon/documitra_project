"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, MessageCircleMore } from "lucide-react";
import { FAQ_ACCORDION_DATA } from "@/app/constants/faqPage";
import PackageGetStartedButton from "./popUp/PackageGetStartedButton";
import { useRouter } from "next/navigation";

type DocumentType =
  | "oci"
  | "visa"
  | "passport"
  | "pancard"
  | "driving-licence"
  | "voter-id"
  | "aadhar-card";

const FaqMain: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>("oci");
  const [visibleQuestionsMap, setVisibleQuestionsMap] = useState<{
    [key: string]: number;
  }>({
    oci: 5, // Default to 5 questions for OCI
  });

  const [openQuestions, setOpenQuestions] = useState<{
    [key: string]: boolean[];
  }>({
    oci: new Array(5).fill(false),
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const toggleAccordion = (id: string) => {
    setActiveAccordion(id);
    setVisibleQuestionsMap({ [id]: 5 });
    setOpenQuestions({ [id]: new Array(5).fill(false) });
    if (isPopupOpen) {
      setIsPopupOpen(false);
    }
  };

  const toggleQuestion = (serviceId: string, questionIndex: number) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [serviceId]: prev[serviceId]?.map((_, i) => i === questionIndex),
    }));
  };

  const handleReadMore = (id: string) => {
    setVisibleQuestionsMap((prev) => ({
      ...prev,
      [id]:
        FAQ_ACCORDION_DATA.find((item) => item.id === id)?.questions.length ||
        5,
    }));

    setOpenQuestions((prev) => ({
      ...prev,
      [id]: new Array(
        FAQ_ACCORDION_DATA.find((item) => item.id === id)?.questions.length || 5
      ).fill(false),
    }));
  };

  const handleWhatsappLink = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const handleGetStarted = () => {
    setIsPopupOpen(true);
  };

  // Function to handle form submission from popup
  const handleApply = (data: {
    citizenship: string;
    applyingFrom: string;
    destination: string;
    documentType: DocumentType;
  }) => {
    // Format destination name (lowercase, no spaces)
    const formattedDestination = data.destination
      .toLowerCase()
      .replace(/\s+/g, "-");

    // Create query parameters for form data
    const queryParams = new URLSearchParams({
      citizenship: data.citizenship,
      applyingFrom: data.applyingFrom,
      destination: data.destination,
      selectedDoc: data.documentType,
    }).toString();

    // Close the popup
    setIsPopupOpen(false);

    // Redirect to dynamic package page with query parameters
    router.push(`/packages/${formattedDestination}?${queryParams}`);
  };

  const getDocumentType = (): DocumentType => {
    console.log("Current activeAccordion:", activeAccordion);
    switch (activeAccordion) {
      case "oci":
        return "OCI";
      case "visa":
        return "Visa";
      case "passport":
        return "Passport";
      case "pancard":
        return "Pan Card";
      case "driving-licence":
        return "Driving License";
      case "voter-id":
        return "Voter ID";
      case "aadhar-card":
        return "Aadhar Card";
      default:
        return "OCI"; // Default document type
    }
  };

  const router = useRouter();

  useEffect(() => {
    setActiveAccordion("oci");
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 bg-secondary">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar for larger screens, Dropdown for Mobile */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2 mt-2 md:mt-10">
          <div className="md:hidden mb-4">
            <select
              className="w-full p-2 border  rounded-lg"
              value={activeAccordion || ""}
              onChange={(e) => toggleAccordion(e.target.value)}
            >
              {FAQ_ACCORDION_DATA.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:block space-y-2">
            {FAQ_ACCORDION_DATA.map((service) => (
              <button
                key={service.id}
                onClick={() => toggleAccordion(service.id)}
                className={`w-full text-left pr-8 py-2 transition-colors border-b-2 ${
                  activeAccordion === service.id
                    ? "text-primary font-extrabold border-b-primary"
                    : "text-black border-b-gray-200"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Content */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          {FAQ_ACCORDION_DATA.map(
            (service) =>
              activeAccordion === service.id && (
                <div key={service.id} className="rounded-lg p-4 md:p-6">
                  <div className="gap-4">
                    {service.questions
                      .slice(0, visibleQuestionsMap[service.id] || 5)
                      .map((item, index) => (
                        <div key={index} className="pb-2">
                          <div className="border-b py-4 px-3 md:px-4 mb-1 rounded-t-3xl shadow-lg last:border-b-0 bg-white">
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleQuestion(service.id, index)}
                            >
                              <h3 className="font-semibold flex-grow text-sm md:text-base">
                                {item.question}
                              </h3>
                              {openQuestions[service.id]?.[index] ? (
                                <ChevronUp className="text-primary" />
                              ) : (
                                <ChevronDown className="text-primary" />
                              )}
                            </div>

                            {openQuestions[service.id]?.[index] && (
                              <p className="mt-2 text-gray-600 text-sm md:text-base">
                                {item.answer}
                              </p>
                            )}
                          </div>
                          {openQuestions[service.id]?.[index] && (
                            <div className="flex flex-row items-center justify-between mx-2 pb-3 mt-0">
                              <button
                                className="px-4 py-1.5 bg-primary text-white rounded-full hover:bg-primary transition-colors text-xs cursor-pointer "
                                onClick={handleGetStarted}
                              >
                                Get Started
                              </button>
                              <p
                                className="flex flex-row items-center gap-0.5 text-sm text-primary -translate-y-1"
                                onClick={handleWhatsappLink}
                              >
                                <MessageCircleMore size={14} />
                                Chat with us
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>

                  {service.questions.length > 5 && (
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() =>
                          visibleQuestionsMap[service.id] === 5
                            ? handleReadMore(service.id)
                            : toggleAccordion(service.id)
                        }
                        className="text-primary hover:underline text-sm md:text-base"
                      >
                        {visibleQuestionsMap[service.id] === 5
                          ? "Show All Questions"
                          : "Show Less Questions"}
                      </button>
                      <span className="text-gray-500 text-sm md:text-base">
                        {visibleQuestionsMap[service.id] || 5} of{" "}
                        {service.questions.length} questions
                      </span>
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>

      {/* Document Service Popup */}
      <PackageGetStartedButton
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        documentType={getDocumentType()}
        onApply={handleApply}
      />
    </div>
  );
};

export default FaqMain;
