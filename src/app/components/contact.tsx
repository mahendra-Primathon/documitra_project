"use client";
import { useState, FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { categoryOptions,
  reasonOptions,
  countryOptions,} from "../constants/contactData";


interface FormData {
  category: string;
  reason: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  mobileNumber: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    reason: "",
    firstName: "",
    lastName: "",
    countryCode: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.category) newErrors.category = "Please select a category";
    if (!formData.reason) newErrors.reason = "Please select a reason";
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.countryCode)
      newErrors.countryCode = "Country code is required";

    // Mobile validation
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Add your form submission logic here
        console.log("Form submitted:", formData);
        // Reset form after successful submission
        setFormData({
          category: "",
          reason: "",
          firstName: "",
          lastName: "",
          countryCode: "",
          mobileNumber: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left side - Contact Information */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="text-gray-600">
              We are delighted to connect with you. Please feel free to share
              any questions or concerns you may have.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:info@documitra.com"
                  className="text-blue-600 hover:underline"
                >
                  info@documitra.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:+18771291311"
                  className="text-blue-600 hover:underline"
                >
                  +1-877-129-1311
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h2 className="text-lg font-semibold mb-4">Follow us</h2>
              <div className="flex space-x-4">
                <Link href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Link>
                {/* Add other social media links similarly */}
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  I am: <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.category && (
                  <p className="text-red-500 text-sm mt-1">{errors.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Reason for contact <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.reason}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select reason</option>
                  {reasonOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.reason && (
                  <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Country Code <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.countryCode}
                    onChange={(e) =>
                      setFormData({ ...formData, countryCode: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select country</option>
                    {countryOptions.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name} {country.code}
                      </option>
                    ))}
                  </select>
                  {errors.countryCode && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.countryCode}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, mobileNumber: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    maxLength={10}
                  />
                  {errors.mobileNumber && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.mobileNumber}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
