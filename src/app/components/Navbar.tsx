"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Mobile menu icons

import whatsappLogo from "../../../public/assets/images/Home/whatsapp.svg";
import facebookLogo from "../../../public/assets/images/Home/Facebook.svg";
import emailLogo from "../../../public/assets/images/Home/Email-2.svg";
import messageLogo from "../../../public/assets/images/Home/Chat.svg";
import phoneLogo from "../../../public/assets/images/Home/phone.svg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen]);

  return (
    <nav className="bg-primary text-white py-4 w-full overflow-x-hidden">
      <div className="container mx-auto max-w-[1440px] xl:max-w-[1920px] px-4 md:px-6 lg:px-10 xl:px-16 flex justify-between items-center">
        {/* Toll-Free Section */}
        <div className="flex items-center gap-2">
          {/* Phone Icon */}
          <Image src={phoneLogo} alt="Phone" className="w-6 h-6" />
          {/* Toll-Free Number */}
          <span className="font-semibold hidden md:inline">Toll Free -</span>
          <span className="font-semibold">1800-000-0000</span>
        </div>

        {/* Mobile Menu Toggle (Only on small screens) */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Social Icons - Desktop View */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-blue-200">
            <Image src={facebookLogo} alt="Facebook" className="w-7 h-7" />
          </Link>
          <Link href="/" className="hover:text-blue-200">
            <Image src={messageLogo} alt="Message" className="w-7 h-7" />
          </Link>
          <Link href="/" className="hover:text-blue-200">
            <Image src={emailLogo} alt="Email" className="w-7 h-7" />
          </Link>
          <Link href="/" className="hover:text-blue-200 flex flex-row gap-2">
            <Image src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
            <span className="font-semibold hidden xl:inline-flex items-center underline">
              Chat with us
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Appears when isOpen is true */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-primary p-6 z-50 flex flex-col items-center space-y-4 mt-3">
          <Link href="/" className="hover:text-blue-200">
            <Image src={facebookLogo} alt="Facebook" className="w-6 h-6" />
          </Link>
          <Link href="/" className="hover:text-blue-200">
            <Image src={messageLogo} alt="Message" className="w-6 h-6" />
          </Link>
          <Link href="/" className="hover:text-blue-200">
            <Image src={emailLogo} alt="Email" className="w-6 h-6" />
          </Link>
          <Link href="/" className="hover:text-blue-200 flex flex-row gap-1">
            <Image src={whatsappLogo} alt="WhatsApp" className="w-5 h-5" />
            <span className="font-semibold underline">Chat with us</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;