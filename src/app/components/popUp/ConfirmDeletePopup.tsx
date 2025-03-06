"use client";
import React, { useRef } from "react";
import useClickOutside from "@/app/hooks/useClickOutside";

interface ConfirmDeletePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDeletePopup: React.FC<ConfirmDeletePopupProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const popupRef = useRef(null);

  useClickOutside(popupRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div
        ref={popupRef}
        className="bg-secondary rounded-lg p-6 sm:p-8 max-w-md w-full text-center relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
          Are you sure you want to remove this user?
        </h2>

        {/* Buttons */}
        <div className="flex justify-center space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded-md text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-primary text-white rounded-md text-sm sm:text-base cursor-pointer "
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeletePopup;
