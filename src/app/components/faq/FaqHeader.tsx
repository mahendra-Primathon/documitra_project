import React from "react";
import Link from "next/link";

const FAQHeader: React.FC = () => {
  const FAQ_HEADER_CONSTANTS = {
    TITLE: "Got Questions? We've got Answers",
    SUBTITLE: "Frequently Asked Questions",
  };

  return (
    <div className="max-w-7xl mx-auto pt-4 pb-2  bg-secondary border-b-2 border-gray-200 ">
      <div className="flex  items-center ">
        {/* Breadcrumb Navigation */}
        <nav className="text-gray-600 text-sm">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /
          <Link href="/faqs" className="hover:underline">
            FAQ
          </Link>
        </nav>
      </div>

      <div className="text-center pt-8 pb-1 ">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {FAQ_HEADER_CONSTANTS.TITLE}
        </h1>
        <p className="text-xl text-gray-600">{FAQ_HEADER_CONSTANTS.SUBTITLE}</p>
      </div>
    </div>
  );
};

export default FAQHeader;
