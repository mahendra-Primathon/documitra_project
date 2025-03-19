"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "../constants/aboutData";

const AboutVision: React.FC = () => {
  const { vision } = aboutData;

  return (
    <div className="bg-secondary">
      <section className="py-28 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 order-2 md:order-1">
            <Image
              src={vision.image}
              alt="Travel documents and passport"
              width={500}
              height={350}
              className="rounded-lg shadow-lg bg-secondary "
            />
          </div>
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-5xl font-bold mb-6">{vision.title}</h2>
            <p className="text-gray-700 mb-4 text-lg ">{vision.description}</p>
            <p className="text-gray-700 text-lg ">{vision.additionalInfo}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutVision;
