// components/ContactUs.tsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaComments,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import {
  COUNTRY_CODES,
  REASON_OPTIONS,
  CONTACT_INFO,
} from "../constants/contactData";
import useClickOutside from "../hooks/useClickOutside";

interface FormData {
  reason: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  message: string;
}

interface DropdownState {
  reason: boolean;
  countryCode: boolean;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    reason: "",
    firstName: "",
    lastName: "",
    countryCode: "+91 (India)", // Default to India
    mobileNumber: "",
    email: "",
    message: "",
  });

  const [dropdownOpen, setDropdownOpen] = useState<DropdownState>({
    reason: false,
    countryCode: false,
  });

  // Refs for dropdown containers
  const reasonDropdownRef = useRef<HTMLDivElement>(null);
  const countryCodeDropdownRef = useRef<HTMLDivElement>(null);

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      countryCode: "+91 (India)",
    }));
  }, []);

  // Use the click outside hook for each dropdown
  useClickOutside(reasonDropdownRef, () => {
    if (dropdownOpen.reason) {
      setDropdownOpen((prev) => ({ ...prev, reason: false }));
    }
  });

  useClickOutside(countryCodeDropdownRef, () => {
    if (dropdownOpen.countryCode) {
      setDropdownOpen((prev) => ({ ...prev, countryCode: false }));
    }
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdown]: !prev[dropdown],
    }));
  };

  // Map social media icons to components
  const socialIcons = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    youtube: FaYoutube,
    linkedin: FaLinkedin,
  };

  return (
    <section className="container max-w-7xl mx-auto px-4 py-6 bg-secondary ">
      <div className="mx-auto ">
        <div className="flex flex-col md:flex-row bg-secondary  overflow-hidden ">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-2/5  p-8">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-gray-600 mb-8">
              We are delighted to connect with you. Please feel free to share
              any questions or concerns you may have.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 text-primary">
                  <FaEnvelope className="w-5 h-5" />
                </div>
                <span className="ml-2">{CONTACT_INFO.email}</span>
              </div>

              <div>
                <div className="flex items-center">
                  <div className="w-8 text-primary">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <span className="ml-2">{CONTACT_INFO.phones[0]}</span>
                </div>
                <div className="ml-10">{CONTACT_INFO.phones[1]}</div>
              </div>

              <div className="flex items-center">
                <div className="w-8 text-primary">
                  <FaComments className="w-5 h-5" />
                </div>
                <span className="ml-2">{CONTACT_INFO.chat}</span>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-semibold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                {CONTACT_INFO.socialMedia.map((social, index) => {
                  const SocialIcon = socialIcons[social.platform];
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-primary text-white p-2 rounded-md"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <SocialIcon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-3/5 bg-white p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-1">
                  Reason for contact <span className="text-red-500">*</span>
                </label>
                {isClient && (
                  <div className="relative" ref={reasonDropdownRef}>
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-left border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex justify-between items-center"
                      onClick={() => toggleDropdown("reason")}
                    >
                      {formData.reason || "Enter"}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {dropdownOpen.reason && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
                        {REASON_OPTIONS.map((option, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              handleChange({
                                target: { name: "reason", value: option },
                              });
                              setDropdownOpen((prev) => ({
                                ...prev,
                                reason: false,
                              }));
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-gray-700 text-sm mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="w-full md:w-1/3">
                  <label className="block text-gray-700 text-sm mb-1">
                    Country Code
                  </label>
                  <div className="relative" ref={countryCodeDropdownRef}>
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-left border rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex justify-between items-center"
                      onClick={() => toggleDropdown("countryCode")}
                    >
                      {formData.countryCode || "Enter"}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {dropdownOpen.countryCode && (
                      <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
                        {COUNTRY_CODES.map((country, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              handleChange({
                                target: {
                                  name: "countryCode",
                                  value: country.code,
                                },
                              });
                              setDropdownOpen((prev) => ({
                                ...prev,
                                countryCode: false,
                              }));
                            }}
                          >
                            {country.code} ({country.country})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <label className="block text-gray-700 text-sm mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter"
                  rows={3}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-y"
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-900 text-white font-semibold py-2 px-12 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
