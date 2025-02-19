"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { initialFaqData, additionalFaqData } from "../constants/faqData";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => (
  <div className="mb-4 bg-white rounded-lg shadow-sm w-full">
    <button
      className="w-full px-6 py-4 flex justify-between items-center text-left rounded-lg hover:bg-gray-50"
      onClick={onClick}
    >
      <span className="font-medium text-gray-900">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="px-6 pb-4 text-gray-600">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false);

  const displayedFAQs = showAllFAQs
    ? [...initialFaqData, ...additionalFaqData]
    : initialFaqData;

  return (
    <div className="w-full bg-secondary py-16 px-6 md:px-[10vw] overflow-hidden">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section (Moves to Top on Small Screens) */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10">
            Frequently Asked <br className="hidden md:block" /> Questions
          </h2>
          <p className="text-gray-600 mb-6 md:mb-8">
            Effortless Visa and Passport Assistance in <br className="hidden md:block" /> Three Simple Steps
          </p>
        </div>

        {/* Right Section (Expands on Larger Screens) */}
        <div className="md:w-2/3">
          <div className="space-y-2">
            {displayedFAQs?.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>

          <button
            onClick={() => setShowAllFAQs(!showAllFAQs)}
            className="mt-8 text-blue-600 hover:text-blue-700 font-medium"
          >
            {showAllFAQs ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
