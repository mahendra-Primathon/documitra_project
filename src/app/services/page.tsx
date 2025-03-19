// src/app/packages/page.tsx
"use client";
import DashboardServices from "../components/DashboardServices";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Dashboard from "../dashboard/page";

 // Ensure this runs on the client side


const ServicePage = () => {


  return (
    <>
    <Header/>
    <div className=" bg-secondary h-[80vh] ">

      <DashboardServices/>
    </div>

    <Footer/>
    
    </>
  )
};

export default ServicePage;
