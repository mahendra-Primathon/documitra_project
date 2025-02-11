"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { initialFaqData , additionalFaqData } from "../constants/faqData";

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
  <div className="mb-4 bg-white rounded-lg shadow-sm">
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
    <div className="w-full bg-secondary py-16">
      <div className=" px-[10vw] mx-auto  lg: py-16 flex flex-row">
        <div className=" my-auto mr-10 w-1/3">
          <h2 className="text-5xl font-bold mb-10">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Effortless Visa and Passport Assistance in <br /> Three Simple Steps
          </p>
        </div>
        <div className="l-5 m w-2/3">
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
