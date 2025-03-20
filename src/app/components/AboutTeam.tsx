"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { aboutData } from "../constants/aboutData";

const AboutTeam: React.FC = () => {
  const { team } = aboutData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState<number | null>(null); // Start as null

  // Update items per view based on screen size after mounting
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure rendering only happens after `itemsPerView` is set
  if (itemsPerView === null) return null; // Avoid hydration mismatch

  // Calculate visible team members based on itemsPerView
  const visibleMembers = team.members.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <div className="bg-white">
      <section className="py-12">
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
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0
                    ? Math.max(0, team.members.length - itemsPerView)
                    : Math.max(0, prev - itemsPerView)
                )
              }
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              aria-label="Previous"
            >
              ←
            </button>

            {/* Indicator dots for mobile */}
            {itemsPerView === 1 && (
              <div className="flex space-x-2">
                {Array.from({ length: Math.ceil(team.members.length) }).map(
                  (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-2 w-2 rounded-full ${
                        Math.floor(currentIndex) === index
                          ? "bg-primary"
                          : "bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </div>
            )}

            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev + itemsPerView >= team.members.length ? 0 : prev + itemsPerView
                )
              }
              className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
