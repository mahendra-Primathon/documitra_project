"use client";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import TestimonialSection from "../../components/testimonial";
import FAQSection from "@/app/components/FaqSection";
import Footer from "../../components/Footer";
import StatesSection from "../../components/StatesSection";
import PackageForm from "../../components/packageForm";
import PackageCard from "../../components/packageCard";
import VisaProcess from "../../components/packageVisaProcess";
import ApplicationProcess from "../../components/packageApplicationProcess";
import ApplicationTimeline from "@/app/components/pacakgeApplicationTimeline";

const PackagesPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params?.country;

  const [formData, setFormData] = useState({
    citizenship: "",
    applyingFrom: "",
    destination: "",
    selectedDoc: "",
  });

  useEffect(() => {
    setFormData({
      citizenship: searchParams.get("citizenship") || "",
      applyingFrom: searchParams.get("applyingFrom") || "",
      destination: searchParams.get("destination") || "",
      selectedDoc: searchParams.get("selectedDoc") || "",
    });
  }, [searchParams]);

  if (!country) {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <div className="flex items-center space-x-2 animate-bounce">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mt-4">
            Form data is Loading...
          </h1>
        </div>
        <StatesSection />
        <TestimonialSection />
        <FAQSection />
        <Footer />
      </div>
    );
  }

  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <PackageForm country={country} formData={formData} />
      <PackageCard country={country} />
      <VisaProcess country={country} />
      <ApplicationProcess />
      <TestimonialSection />
      <ApplicationTimeline />
      <FAQSection />
      <Footer />
    </div>
  );
};
export default PackagesPage;
