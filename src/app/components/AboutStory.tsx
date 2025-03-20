"use client";

import React from "react";
import Image from "next/image";
import { aboutData } from "../constants/aboutData";

const AboutStory: React.FC = () => {
  const { story } = aboutData;

  return (
    <div className="bg-secondary">
      <section className="py-28 px-4 max-w-7xl mx-auto  ">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-5xl font-bold mb-6">{story.title}</h2>
            <p className="text-gray-700 mb-4 text-lg">{story.description}</p>
            <p className="text-gray-700 tex-lg">{story.additionalInfo}</p>
          </div>
          <div className="flex-1 relative">
            <Image
              src={story.image}
              alt="Team collaborating on travel documents"
              width={600}
              height={400}
              className="rounded-lg "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStory;
