"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import star2 from '../../../public/assets/images/Home/star2.svg'
import TrustPilot from "../../../public/assets/images/Home/TrustPilot.svg";
import icon1 from "../../../public/assets/images/Home/icon1.svg";
import icon2 from "../../../public/assets/images/Home/icon2.svg";
import icon3 from "../../../public/assets/images/Home/icon3.svg";
import icon4 from "../../../public/assets/images/Home/icon4.svg";

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => (
  <div className="flex items-center gap-2 border-r-2 border-#e2e5eb pr-16   ">
    <div className="flex flex-col ">
      <div className="flex flex-row leading-none font-bold gap-2 ">
        <Image src={icon} alt="icon" width={30} height={30} />
        <span className="font-semibold text-4xl">{value}</span>
      </div>
      <span className="text-lg text-gray-600 justify-center text-center ">{label}</span>
    </div>
  </div>
);

interface TrustPilotRatingProps {
  rating: number;
  maxStars?: number;
}

const TrustPilotRating: React.FC<TrustPilotRatingProps> = ({
  rating,
  maxStars = 5,
}) => (
  <div className="flex items-center gap-2 flex-col">
    <div className="flex flex-row">
      <Image src={icon4} alt="start"  />
      <Image src={TrustPilot} alt="TrustPilot" width={150} height={30} />

    </div>
    <div className="flex flex-row gap-2">
      <Image src={star2} alt="start"  />
      <Image src={star2} alt="start"  />
      <Image src={star2} alt="start"  />
      <Image src={star2} alt="start"  />
      <Image src={star2} alt="start"  />

      {/* {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "fill-green-500 text-green-500" : "text-gray-300"
          }`}
        />
      ))} */}
    </div>
  </div>
);

const StatesSection = () => {
  const stats = [
    { icon: icon1, value: "10k+", label: "Applications" },
    { icon: icon2, value: "100%", label: "On Time Delivery" },
    { icon: icon3, value: "05yrs", label: "Experience" },
  ];

  return (
    <div className="px-[10vw] mx-auto  lg: py-16">
      <div className="flex flex-wrap justify-between items-center gap-8 ">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
        <TrustPilotRating rating={5} />
      </div>
    </div>
  );
};

export default StatesSection;
