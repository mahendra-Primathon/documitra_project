"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { aboutData } from "../constants/aboutData";

const AboutTeam: React.FC = () => {
  const { team } = aboutData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Mobile: 1 item per view
      } else {
        setItemsPerView(4); // Desktop: 4 items per view
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible team members based on itemsPerView
  const visibleMembers = team.members.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  // Handle carousel navigation
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0
        ? Math.max(0, team.members.length - itemsPerView)
        : Math.max(0, prev - itemsPerView)
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= team.members.length ? 0 : prev + itemsPerView
    );
  };

  return (
    <div className="bg-white">
      <section className="py-12  ">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4">{team.title}</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            {team.description}
          </p>

          {/* Team members grid */}
          <div
            className={`grid gap-6 mb-8 ${
              itemsPerView === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-4"
            }`}
          >
            {visibleMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-64 w-full">
                  {member.image && (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              aria-label="Previous"
            >
              <span className="sr-only">Previous</span>
              <span aria-hidden="true">←</span>
            </button>

            {/* Indicator dots for mobile */}
            {itemsPerView === 1 && (
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(team.members.length) }).map(
                  (_, index) => {
                    const isActive = Math.floor(currentIndex) === index;
                    return (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full ${
                          isActive ? "bg-primary" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    );
                  }
                )}
              </div>
            )}

            <button
              onClick={handleNext}
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              aria-label="Next"
            >
              <span className="sr-only">Next</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
