import React from "react";
import Header from "../components/Header";
import { Suspense } from "react";
import DashboardMyPackages from "../components/DashboardMyPackages";
import DashboardServices from "../components/DashboardServices";
import Footer from "../components/Footer";
import DashboardSampleSection from "../components/DashboardSampleSection";
// import DashboardForms from "../components/DashboardSampleSection";

export default function Dashboard() {
  return (
    
      <div className="">
        <Header />
        <div className="bg-secondary">
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardMyPackages />
          </Suspense>
          <DashboardSampleSection/>
          <DashboardServices/>
        </div>
        <Footer/>
      </div>
    
  );
}
