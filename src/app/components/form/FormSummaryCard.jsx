import React from 'react'

import { ArrowLeft, Package2, Calendar, Coins } from "lucide-react";

function FormSummaryCard() {
  return (
    <div>
        {/* Summary Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 w-full sm:w-[24rem] md:w-[26rem] lg:w-[27rem] hover:shadow-xl transition-shadow mx-auto self-start">
          <h3 className="text-2xl font-semibold mb-6"> 6 Months Package for India</h3>

          <div className="space-y-4">
            {/* Number of Entries */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Package2 className="w-5 h-5 text-primary" />
                <span>Number of entries</span>
              </div>
              <span className="font-medium">Multiple</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            {/* Duration */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Duration</span>
              </div>
              <span className="font-medium">2 Months</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            {/* Goverment  Fees */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Coins className="w-5 h-5 text-primary" />
                <span>Goverment Fees</span>
              </div>
              <span className="font-medium">$9</span>
            </div>
            <hr className="border-t border-gray-300 my-4" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-600">
                <Coins className="w-5 h-5 text-primary" />
                <span>Documentation Fees</span>
              </div>
              <span className="font-medium">$19</span>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default FormSummaryCard
