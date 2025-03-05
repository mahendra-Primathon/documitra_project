"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, MessageCircleMore } from "lucide-react";
import { FAQ_ACCORDION_DATA } from "@/app/constants/faqPage";

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

  const toggleAccordion = (id: string) => {
    // Close all other accordions
    const newVisibleQuestionsMap: { [key: string]: number } = {};
    const newOpenQuestions: { [key: string]: boolean[] } = {};

    FAQ_ACCORDION_DATA.forEach((service) => {
      newVisibleQuestionsMap[service.id] = service.id === id ? 5 : 5;
      newOpenQuestions[service.id] = new Array(5).fill(false);
    });

    setActiveAccordion(id);
    setVisibleQuestionsMap(newVisibleQuestionsMap);
    setOpenQuestions(newOpenQuestions);
  };

  const toggleQuestion = (serviceId: string, questionIndex: number) => {
    // Reset all questions in this service first
    setOpenQuestions((prev) => {
      const currentService = prev[serviceId] || [];
      const updatedQuestions = new Array(currentService.length).fill(false);
      updatedQuestions[questionIndex] = true;

      return {
        ...prev,
        [serviceId]: updatedQuestions,
      };
    });
  };

  const handleReadMore = (id: string) => {
    setVisibleQuestionsMap((prev) => ({
      ...prev,
      [id]:
        FAQ_ACCORDION_DATA.find((item) => item.id === id)?.questions.length ||
        5,
    }));

    // Initialize open questions for all questions, keeping only first closed
    setOpenQuestions((prev) => ({
      ...prev,
      [id]: new Array(
        FAQ_ACCORDION_DATA.find((item) => item.id === id)?.questions.length || 5
      ).fill(false),
    }));
  };

  // Ensure OCI is open by default
  useEffect(() => {
    setActiveAccordion("oci");
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6  bg-secondary ">
      <div className="grid grid-cols-12 gap-4">
        {/* Sidebar Navigation */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2 space-y-2 mt-2 md:mt-10">
          {FAQ_ACCORDION_DATA.map((service) => (
            <button
              key={service.id}
              onClick={() => toggleAccordion(service.id)}
              className={`w-full text-left pr-8 py-2 transition-colors border-b-2 ${
                activeAccordion === service.id
                  ? "text-primary font-extrabold border-b-primary"
                  : "text-black border-b-gray-200 "
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Accordion Content */}
        <div className="col-span-12 md:col-span-9  lg:col-span-10">
          {FAQ_ACCORDION_DATA.map(
            (service) =>
              activeAccordion === service.id && (
                <div key={service.id} className="rounded-lg p-6">
                  {/* <h2 className="text-2xl font-bold mb-4">{service.title}</h2> */}
                  <div className="gap-4">
                    {service.questions
                      .slice(0, visibleQuestionsMap[service.id] || 5)
                      .map((item, index) => (
                        <div key={index} className="pb-2">
                          <div className="border-b py-4 px-4 mb-1 rounded-t-3xl shadow-lg last:border-b-0 bg-white">
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleQuestion(service.id, index)}
                            >
                              <h3 className="font-semibold flex-grow">
                                {item.question}
                              </h3>
                              {openQuestions[service.id]?.[index] ? (
                                <ChevronUp className="text-primary" />
                              ) : (
                                <ChevronDown className="text-primary" />
                              )}
                            </div>

                            {openQuestions[service.id]?.[index] && (
                              <p className="mt-2 text-gray-600">
                                {item.answer}
                              </p>
                            )}
                          </div>
                          {openQuestions[service.id]?.[index] && (
                            <div className="flex justify-between mx-3 mr-10 pb-10 mt-3">
                              <button className="px-10 py-1 ml-5 bg-primary text-white rounded-full hover:bg-primary transition-colors">
                                Get Started
                              </button>
                              <p className="flex flex-row gap-1">
                                <MessageCircleMore />
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
                        className="text-blue-600 hover:underline"
                      >
                        {visibleQuestionsMap[service.id] === 5
                          ? "Show All Questions"
                          : "Show Less Questions"}
                      </button>
                      <span className="text-gray-500">
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
    </div>
  );
};

export default FaqMain;
