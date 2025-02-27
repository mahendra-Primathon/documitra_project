"use client";
import React from "react";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { packageCard } from "../../constants/packageData";
import { Calendar, Package2, Coins } from "lucide-react";

const PackageCard = ({ country = "usa" }) => {
  const packages = packageCard[country];
  const router = useRouter();

  const handleApply = (packageId) => {
    console.log(`Applying for package ${packageId}`);
    router.push(`/form`);
  };

  return (
    <div className="w-full py-16 px-6 md:px-[10vw] bg-secondary overflow-hidden">
      <h2 className="text-4xl font-bold my-8 text-center">
        Select Your Package
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages?.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-3xl shadow-lg p-6 max-w-full w-full sm:w-[24rem] md:w-[26rem] lg:w-[27rem] hover:shadow-xl transition-shadow mx-auto"
          >
            <h3 className="text-2xl font-semibold mb-6 min-h-[4rem]">
              {pkg.title}
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Package2 className="w-5 h-5 text-primary" />
                  <span>Number of entries</span>
                </div>
                <span className="font-medium">{pkg.numberOfEntries}</span>
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Duration</span>
                </div>
                <span className="font-medium">{pkg.duration}</span>
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Coins className="w-5 h-5 text-primary" />
                  <span>Government Fees</span>
                </div>
                <span className="font-medium">₹{pkg.governmentFees}</span>
              </div>

              <hr className="border-t border-gray-300 my-4" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Coins className="w-5 h-5 text-primary" />
                  <span>Documitra Fees</span>
                </div>
                <span className="font-medium">₹{pkg.documitraFees}</span>
              </div>
            </div>

            <button
              onClick={() => handleApply(pkg.id)}
              className="w-full mt-6 bg-primary text-white py-3 px-4 rounded-full hover:bg-blue-800 transition-colors font-medium"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCard;
