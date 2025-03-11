"use client"; // Required for Next.js client-side components

import React, { useState, useRef } from "react";
import useClickOutside from "../hooks/useClickOutside";
// import { notificationBellIcon, clockIcon } from "../constants/svgData";\
import { NotificationBellIcon, ClockIcon } from "./SvgIconsData";
import { notifications } from "../constants/headerData";

const HeaderNotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  // Filter unread notifications
  const unreadNotifications = notifications.filter(
    (notification) => !notification.isRead
  );

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-600 hover:text-primary"
      >
        <NotificationBellIcon />
        {unreadNotifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            {unreadNotifications.length}
          </span>
        )}
      </button>
      {isOpen && (
        <div className="absolute -right-16  md:left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 max-h-60 overflow-y-auto">
          <div className="mt-2 space-y-2">
            {notifications.slice(0, 4).map((notification) => (
              <div
                key={notification.id}
                className={`flex items-center gap-2 p-2 rounded-lg ${
                  notification.isRead ? "bg-gray-50" : "bg-primary-50"
                }`}
              >
                <ClockIcon />
                <div>
                  <p className="text-sm text-gray-600">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-400">
                    {notification.timestamp}
                  </p>
                </div>
                {!notification.isRead && (
                  <span className="ml-auto w-2 h-2 bg-primary rounded-full"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderNotificationDropdown;
