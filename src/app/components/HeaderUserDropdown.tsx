"use client"; // Required for Next.js client-side components

import React, { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";

interface HeaderUserDropdownProps {
  onProfileClick: () => void;
  onSignOutClick: () => void;
}

const HeaderUserDropdown: React.FC<HeaderUserDropdownProps> = ({
  onProfileClick,
  onSignOutClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-primary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-0 w-48 bg-white shadow-xl rounded-lg p-2">
          <button
            onClick={onProfileClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-primary"
          >
            User Profile
          </button>
          <button
            onClick={onSignOutClick}
            className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-200 hover:text-primary"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default HeaderUserDropdown;
