import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqMain from "../components/faq/FaqMain";
import FAQHeader from "../components/faq/FaqHeader";
import Navbar from "../components/home/Navbar";

function page() {
  return (
    <div>
      <div className="bg-secondary">
        <Navbar />
        <Header />
        <FAQHeader />
        <FaqMain />
        <Footer />
      </div>
    </div>
  );
}

export default page;
