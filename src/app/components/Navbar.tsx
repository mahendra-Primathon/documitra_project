"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="bg-primary text-white px-1 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Toll-Free Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Icon - Always Visible */}
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />

            {/* Toll-Free Text - Hidden on Small Screens */}
            <span className="font-semibold hidden md:inline">Toll Free- </span>

            {/* Mobile Number - Visible on All Screens */}
            <span className="font-semibold ">1800-000-0000</span>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Facebook Icon - Always Visible */}
            <Link href="/" className="hover:text-blue-200 hidden sm:inline ">
              <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
            </Link>

            {/* Message Icon - Always Visible */}
            <Link href="/" className="hover:text-blue-200">
              <FontAwesomeIcon icon={faMessage} className="w-6 h-6" />
            </Link>

            {/* Envelope Icon - Always Visible */}
            <Link href="/" className="hover:text-blue-200">
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </Link>

            {/* WhatsApp Section - Hidden on Small Screens */}
            <Link href="/" className="hover:text-blue-200  items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 mr-1" />
              <span className="font-semibold hidden md:inline ">Chat with us</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;