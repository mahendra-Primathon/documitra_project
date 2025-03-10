import React from "react";
import { Package2, Calendar, Coins } from "lucide-react";

function FormSummaryCard({ pkg }) {
  // if (!pkg) {
  //   return <div>No package selected.</div>;
  // }

  return (
    <div>
      {/* Summary Card */}
      <div className="bg-white rounded-3xl shadow-lg p-6 w-full sm:w-[22rem] md:w-[24rem] lg:w-[25rem] hover:shadow-xl transition-shadow mx-auto self-start">
        <h3 className="text-2xl font-semibold mb-10  ">
          {pkg ? pkg.title : "6 Months Package for India"}
        </h3>

        <div className="space-y-4">
          {/* Number of Entries */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Package2 className="w-5 h-5 text-primary" />
              <span>Number of entries</span>
            </div>
            <span className="font-medium">
              {pkg ? pkg.numberOfEntries : "Multiple"}
            </span>
          </div>
          <hr className="border-t border-gray-300 my-4" />

          {/* Duration */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Duration</span>
            </div>
            <span className="font-medium">
              {pkg ? pkg.duration : "2 Months"}
            </span>
          </div>
          <hr className="border-t border-gray-300 my-4" />

          {/* Government Fees */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Coins className="w-5 h-5 text-primary" />
              <span>Government Fees</span>
            </div>
            <span className="font-medium">
              {pkg ? `₹${pkg.governmentFees}` : "$9"}
            </span>
          </div>
          <hr className="border-t border-gray-300 my-4" />

          {/* Documentation Fees */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-gray-600">
              <Coins className="w-5 h-5 text-primary" />
              <span>Documentation Fees</span>
            </div>
            <span className="font-medium">
              {pkg ? `₹${pkg.documitraFees}` : "$19"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSummaryCard;
