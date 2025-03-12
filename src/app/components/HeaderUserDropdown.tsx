"use client"; // Required for Next.js client-side components

import React, { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
import { UserIconSvg } from "./SvgIconsData";

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
        <UserIconSvg />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-0 w-48 bg-white shadow-xl rounded-lg  z-50 ">
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
