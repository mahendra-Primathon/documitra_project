// components/FAQ/FAQSection.tsx
"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full py-4 flex justify-between items-center text-left"
      onClick={onClick}
    >
      <span className="font-medium text-gray-900">{question}</span>
      {isOpen ? (
        <ChevronUp className="w-5 h-5 text-gray-500" />
      ) : (
        <ChevronDown className="w-5 h-5 text-gray-500" />
      )}
    </button>
    {isOpen && (
      <div className="pb-4 text-gray-600">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What services does Documitra offer?",
      answer: "Documitra offers comprehensive visa and passport assistance services, including document processing, application support, and guidance throughout the entire process."
    },
    {
      question: "How does the Documitra process work?",
      answer: "Our process involves simple steps: submitting your application, document verification, processing, and delivery. We guide you through each step to ensure a smooth experience."
    },
    {
      question: "Is Documitra a government agency?",
      answer: "No, Documitra is not a government agency. We are a private service provider that assists with document processing and visa applications."
    },
    {
      question: "Is my personal information secure with Documitra?",
      answer: "Yes, we implement strict security measures to protect your personal information. All data is encrypted and handled according to privacy regulations."
    },
    {
      question: "How long does it take to process a visa or passport application with Documitra?",
      answer: "Processing times vary depending on the type of application and the government's processing speed. We strive to expedite the process, but specific timelines may differ based on individual circumstances and government requirements."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8">
          Effortless Visa and Passport Assistance in Three Simple Steps
        </p>
        
        <div className="space-y-2">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <button className="mt-8 text-blue-600 hover:text-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default FAQSection;