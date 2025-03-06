import React from "react";
import Link from "next/link";

const FAQHeader: React.FC = () => {
  const FAQ_HEADER_CONSTANTS = {
    TITLE: "Got Questions? We've got Answers",
    SUBTITLE: "Frequently Asked Questions",
  };

  return (
    <div className="max-w-7xl mx-auto pt-4 pb-2 bg-secondary border-b-2 border-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="flex items-center text-sm text-gray-600">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap gap-1">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/faqs" className="hover:underline">
            FAQ
          </Link>
        </nav>
      </div>

      <div className="text-center pt-6 sm:pt-8 pb-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          {FAQ_HEADER_CONSTANTS.TITLE}
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          {FAQ_HEADER_CONSTANTS.SUBTITLE}
        </p>
      </div>
    </div>
  );
};

export default FAQHeader;
