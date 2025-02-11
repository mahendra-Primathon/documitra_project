"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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

  const initialFaqData = [
    {
      question: "1. What services does Documitra offer?",
      answer:
        "Documitra provides comprehensive visa and passport assistance services, including document processing, application support, and expert guidance throughout your journey.",
    },
    {
      question: "2. How does the Documitra process work?",
      answer:
        "Our streamlined process involves three simple steps: document submission, verification, and processing. Our experts guide you through each phase to ensure a smooth experience.",
    },
    {
      question: "3. Is Documitra a government agency?",
      answer:
        "No, Documitra is an independent service provider that specializes in visa and passport assistance. We work alongside government agencies to facilitate your application process.",
    },
    {
      question: "4. Is my personal information secure with Documitra?",
      answer:
        "Yes, we maintain the highest standards of data security. All personal information is encrypted and protected according to international privacy regulations.",
    },
    {
      question:
        "5. How long does it take to process a visa or passport application with Documitra?",
      answer:
        "Processing times vary depending on the type of application and the government's processing speed. We strive to expedite the process, but specific timelines may differ based on individual circumstances and government requirements.",
    },
  ];

  const additionalFaqData = [
    {
      question: "6. What documents do I need to provide?",
      answer:
        "Required documents vary by application type. We'll provide a detailed checklist based on your specific needs and guide you through the collection process.",
    },
    {
      question: "7. Do you offer expedited services?",
      answer:
        "Yes, we offer expedited processing for urgent applications, subject to availability and additional fees. Contact us to learn more about rush service options.",
    },
    {
      question: "8. What countries do you service?",
      answer:
        "We assist with visa and passport applications for most major countries. Contact our team to confirm availability for your specific destination.",
    },
  ];

  const displayedFAQs = showAllFAQs
    ? [...initialFaqData, ...additionalFaqData]
    : initialFaqData;

  return (
    <div className="w-full bg-bgBlue py-16">
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
            {displayedFAQs.map((faq, index) => (
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
