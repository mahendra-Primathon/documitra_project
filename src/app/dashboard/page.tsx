import React from "react";
import Header from "../components/Header";
import { Suspense } from "react";
import DashboardMyPackages from "../components/DashboardMyPackages";
import DashboardServices from "../components/DashboardServices";
import Footer from "../components/Footer";
import DashboardSampleSection from "../components/DashboardSampleSection";
import Link from "next/link";
// import DashboardForms from "../components/DashboardSampleSection";

export default function Dashboard() {
  return (
    <div className="">
      <Header />
      <div className="bg-secondary">
        <div className="mb-4 max-w-7xl py-4  mx-auto px-4 ">
          <nav className="flex">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-500">Dashboard</span>
          </nav>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <DashboardMyPackages />
        </Suspense>
        <DashboardSampleSection />
        <DashboardServices />
      </div>
      <Footer />
    </div>
  );
}
