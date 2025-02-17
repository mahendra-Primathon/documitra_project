"use client";
import React from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import TestimonialSection from "../../components/testimonial";
import FAQSection from "../../components/FaqSection";
import Footer from "../../components/Footer";
import StatesSection from "../../components/StatesSection";
import PackageForm from "../../components/packageForm";
import PackageCard from "../../components/packageCard";
import VisaProcess from "../../components/packageVisaProcess";
import ApplicationProcess from "../../components/packageApplicationProcess";
import ApplicationTimeline from "../../components/pacakgeApplicationTimeline";
import { packageData, packageCard, visaProcessSteps, applicationProcessData, visaTimelineData } from "../../constants/packageData";

const PackagesPage = () => {
  const params = useParams();
  const country = params?.country;

  if (!country) {
    return (
      <div>
        <Navbar />
        <Header />
        <h1 className="text-5xl">Loading.....</h1>
      </div>
    );
  }

  const countryData = packageData[country];
  const countryPackageCard = packageCard[country];
  const countryVisaProcessSteps = visaProcessSteps[country];
  const countryApplicationProcessData = applicationProcessData.find(data => data.title.toLowerCase().includes(country));
  const countryVisaTimelineData = visaTimelineData.filter(data => data.applicationType.toLowerCase().includes(country));

  return (
    <div>
      <Navbar />
      <Header />

      <PackageForm />
      <PackageCard country={country} />
      <StatesSection />
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