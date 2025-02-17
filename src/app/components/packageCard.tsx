"use client";
import React from 'react';
import { packageCard } from '../constants/packageData';
import { Calendar, Package2, Coins } from 'lucide-react';

const PackageCard = ({ country = 'usa' }) => {
  const packages = packageCard[country];

  const handleApply = (packageId) => {
    console.log(`Applying for package ${packageId}`);
    // Add your application logic here
  };

  return (
    // px-[10vw] mx-auto lg:py-16 bg-secondary
    <div className=" w-[80vw] pl-48  py-6 bg-secondary px[10vw] ">
      <h2 className="text-4xl font-bold my-8 left-0  ">Select Your Package</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80vw] mx-auto">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-6">{pkg.title}</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Package2 className="w-5 h-5" />
                  <span>Number of entries</span>
                </div>
                <span className="font-medium">{pkg.numberOfEntries}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-5 h-5" />
                  <span>Duration</span>
                </div>
                <span className="font-medium">{pkg.duration}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Coins className="w-5 h-5" />
                  <span>Government Fees</span>
                </div>
                <span className="font-medium">${pkg.governmentFees}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-600">
                  <Coins className="w-5 h-5" />
                  <span>Documitra Fees</span>
                </div>
                <span className="font-medium">${pkg.documitraFees}</span>
              </div>
            </div>

            <button
              onClick={() => handleApply(pkg.id)}
              className="w-full mt-6 bg-blue-700 text-white py-3 px-4 rounded-lg 
                       hover:bg-blue-800 transition-colors font-medium"
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