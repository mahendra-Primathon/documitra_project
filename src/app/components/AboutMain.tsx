"use client";

import React from "react";

import AboutStory from "./AboutStory";
import AboutTeam from "./AboutTeam";
import AboutVision from "./AboutVision";
import AboutDefinesUs from "./AboutDefineUs";

const AboutMain: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AboutStory />
      <AboutTeam />
      <AboutVision />
      <AboutDefinesUs />
    </div>
  );
};

export default AboutMain;
