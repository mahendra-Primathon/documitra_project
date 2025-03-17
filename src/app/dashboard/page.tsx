import React from "react";
import Header from "../components/Header";
import { Suspense } from "react";
import DashboardMyPackages from "../components/DashboardMyPackages";

export default function Dashboard() {
  return (
    <div className=" ">
      <div className="">
        <Header />
        <div className="bg-secondary">
          <Suspense fallback={<div>Loading...</div>}>
            <DashboardMyPackages />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
