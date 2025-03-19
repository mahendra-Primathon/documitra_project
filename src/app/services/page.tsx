// src/app/packages/page.tsx
"use client";
import DashboardServices from "../components/DashboardServices";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import Dashboard from "../dashboard/page";
import Link from "next/link";

// Ensure this runs on the client side

const ServicePage = () => {
  return (
    <>
      <Header />
      <div className=" bg-secondary  mb-2 ">
        <div className="  w-full  md:pl-[14vw]  pt-4 pb-1  mx-auto px-4  bg-secondary  ">
          <nav className="flex text-md ">
            <Link href="/" className="text-gray-500 hover:text-primary">
              Home
            </Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-500">Services</span>
          </nav>
        </div>

        <DashboardServices />
      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
