// src/app/packages/page.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import TestimonialSection from "../components/testimonial";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";
import StatesSection from "../components/StatesSection";
import PackageForm from "../components/packageForm";
import PackageCard from "../components/packageCard";
import VisaProcess from "../components/packageVisaProcess";

const PackagesPage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>

        <PackageForm/>
        <PackageCard country="usa" />
        <StatesSection />
        <VisaProcess country="usa" />


        <TestimonialSection/>
        <FAQSection/>
        <Footer/>

     
    </div>
  );
};

export default PackagesPage;
