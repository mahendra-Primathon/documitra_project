"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import Image from "next/image";
import star2 from "../../../public/assets/images/Home/star2.svg";
import TrustPilot from "../../../public/assets/images/Home/TrustPilot.svg";
import icon1 from "../../../public/assets/images/Home/icon1.svg";
import icon2 from "../../../public/assets/images/Home/icon2.svg";
import icon3 from "../../../public/assets/images/Home/icon3.svg";
import icon4 from "../../../public/assets/images/Home/icon4.svg";

interface StatItemProps {
  value: number;
  label: string;
  icon: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, icon }) => {
  const springValue = useSpring(0, { stiffness: 50, damping: 15 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    springValue.set(value);
    return springValue.onChange((v) => setDisplayValue(Math.floor(v)));
  }, [springValue, value]);

  return (
    <motion.div
      className="flex items-center gap-6 border-r-2 border-gray-300 pr-16 last:border-r-0 md:border-r-2 md:pr-16 max-md:border-r-0 max-md:pr-0 max-md:border-b-2 max-md:pb-6 "
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center gap-2">
          <Image src={icon} alt="icon" width={30} height={30} />
          <span className="font-semibold text-4xl">
            {displayValue.toLocaleString()}
          </span>
        </div>
        <span className="text-lg text-gray-600 justify-center ">{label}</span>
      </div>
    </motion.div>
  );
};

interface TrustPilotRatingProps {
  rating: number;
}

const TrustPilotRating: React.FC<TrustPilotRatingProps> = ({ rating }) => {
  return (
    <motion.div
      className="flex items-center gap-4 flex-col"
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-row my-auto">
        <motion.div
          initial={{ rotate: -15, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image src={icon4} alt="start" />
        </motion.div>
        <Image src={TrustPilot} alt="TrustPilot" width={150} height={30} />
      </div>
      <motion.div className="flex flex-row gap-2">
        {Array.from({ length: rating }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.6 }}
            viewport={{ once: true }}
          >
            <Image src={star2} alt="star" width={25} height={25} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const StatesSection = () => {
  const stats = [
    { icon: icon1, value: 10000, label: "Applications" },
    { icon: icon2, value: 100, label: "On Time Delivery" },
    { icon: icon3, value: 5, label: "Experience (yrs)" },
  ];

  return (
    <motion.div
      className="px-[10vw] mx-auto py-16"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-12 py-10 ">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
        <TrustPilotRating rating={5} />
      </div>
    </motion.div>
  );
};

export default StatesSection;
