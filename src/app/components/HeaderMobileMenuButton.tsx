"use client"; // Required for Next.js client-side components

import React from "react";

const HeaderMobileMenuButton = ({ isOpen, setIsOpen }) => (
  <button
    className="lg:hidden p-2"
    onClick={() => setIsOpen(!isOpen)}
    aria-label="Toggle mobile menu"
    aria-expanded={isOpen}
  >
    {isOpen ? (
      <div className="relative w-6 h-6">
        <div className="absolute w-6 h-0.5 bg-gray-600 transform rotate-45"></div>
        <div className="absolute w-6 h-0.5 bg-gray-600 transform -rotate-45"></div>
      </div>
    ) : (
      <>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
        <div className="w-6 h-0.5 bg-gray-600"></div>
      </>
    )}
  </button>
);

export default HeaderMobileMenuButton;