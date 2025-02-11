"use client";
import React from "react";
import Link from "next/link";
import whatsappLogo from "../../../public/assets/images//Home/whatsapp.svg";
import facebookLogo from "../../../public/assets/images//Home/Facebook.svg";
import emailLogo from "../../../public/assets/images//Home/Email-2.svg";
import messageLogo from "../../../public/assets/images//Home/Chat.svg";
import phoneLogo from "../../../public/assets/images//Home/phone.svg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div>
      <nav className="bg-primary text-white px-1 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Toll-Free Section */}
          <div className="flex items-center gap-2 ml-20 ">
            {/* Mobile Icon - Always Visible */}
            <Image src={phoneLogo} alt="Facebook" className="w-6 h-6 " />

            {/* Toll-Free Text - Hidden on Small Screens */}
            <span className="font-semibold hidden md:inline">Toll Free- </span>

            {/* Mobile Number - Visible on All Screens */}
            <span className="font-semibold ">1800-000-0000</span>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center space-x-4">
            {/* Facebook Icon - Always Visible */}
            <Link href="/" className="hover:text-blue-200 hidden sm:inline ">
              <Image src={facebookLogo} alt="Facebook" className="w-6 h-6" />
            </Link>

            {/* Message Icon - Always Visible */}
            <Link href="/" className="hover:text-blue-200">
              <Image src={messageLogo} alt="message" className="w-6 h-6" />
            </Link>

            {/* Envelope Icon - Always Visible */}
            <Link href="/" className="hover:text-blue-200">
              <Image src={emailLogo} alt="email" className="w-6 h-6" />
            </Link>
            <Link href="/" className="hover:text-blue-200 flex flex-row gap-1 ">
              <Image src={whatsappLogo} alt="whatsapp" className="w-5 h-5 " />
              <span className="font-semibold hidden md:inline-flex items-center justify-center  underline">
                Chat with us
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
