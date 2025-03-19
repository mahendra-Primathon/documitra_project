import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqMain from "../components/FaqMain";
import FAQHeader from "../components/FaqHeader";
import PremiumServices from "../components/PremiumService";
import TestimonialSection from "../components/testimonial";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className="bg-secondary">
        <Header />
        
        <div className="mb-1 max-w-7xl pt-4 pb-1  mx-auto px-4 ">
          <nav className="flex text-md ">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-500">FAQ</span>
          </nav>
        </div>

        <FAQHeader />
        <FaqMain />
        <div className="hidden lg:block">
          <PremiumServices />
        </div>
        <TestimonialSection />
        <Footer />
      </div>
    </div>
  );
}

export default page;
