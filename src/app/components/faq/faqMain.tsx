// src/components/GovernmentServicesPage.jsx
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SIDEBAR_ITEMS, GOVERNMENT_SERVICES } from '../constants/governmentServicesData';

const faqMain = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState(SIDEBAR_ITEMS[0]);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [showAllQuestions, setShowAllQuestions] = useState(false);

  // Get questions for the active sidebar item
  const currentTopicQuestions = GOVERNMENT_SERVICES[activeSidebarItem]?.questions || [];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const handleReadMore = () => {
    setShowAllQuestions(true);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => (
          <div 
            key={item} 
            className={`p-2 cursor-pointer ${
              activeSidebarItem === item 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-200'
            }`}
            onClick={() => {
              setActiveSidebarItem(item);
              setOpenAccordion(0);
              setShowAllQuestions(false);
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">{activeSidebarItem} Services</h1>
        
        {/* Accordion Section */}
        <div className="space-y-4">
          {(showAllQuestions 
            ? currentTopicQuestions 
            : currentTopicQuestions.slice(0, 5)
          ).map((question, index) => (
            <div 
              key={index} 
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <div 
                className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleAccordion(index)}
              >
                <h2 className="font-semibold text-gray-800">{question.title}</h2>
                {openAccordion === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              
              {openAccordion === index && (
                <div className="p-4 bg-white text-gray-700">
                  {question.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Read More Button */}
        {!showAllQuestions && currentTopicQuestions.length > 5 && (
          <button 
            onClick={handleReadMore} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            View All Questions
          </button>
        )}

        {/* Chat Button */}
        <button 
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center hover:bg-green-600 transition-colors"
        >
          <span className="mr-2">Chat with us</span>
          <span>💬</span>
        </button>
      </div>
    </div>
  );
};

export default faqMain;