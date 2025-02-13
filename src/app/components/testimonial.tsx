"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials, Testimonial } from "../constants/testimonialData";

interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  imageSrc: string;
}

const TestimonialCard = ({ name, rating, comment, imageSrc }: TestimonialProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = comment.length > 70;

  return (
    <div className="bg-secondary p-6 rounded-3xl shadow-sm w-72 sm:w-80 lg:w-96">
      <div className="flex items-center gap-3 mb-4">
        <div className="relative w-12 h-12">
          <Image
            src={imageSrc}
            alt={name}
            className="rounded-full object-cover"
            fill
            sizes="(max-width: 48px) 100vw"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-green-500 text-green-500" />
            <span className="text-green-500">{rating}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {expanded || !isLong ? comment : `${comment.slice(0, 70)}...`}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 text-sm mt-2 hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const TestimonialSection = () => {
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [animationX, setAnimationX] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const shuffledTestimonials = [...testimonials].sort(() => Math.random() - 0.5);
  const halfLength = Math.ceil(shuffledTestimonials.length / 2);
  const row1 = [...shuffledTestimonials.slice(0, halfLength), ...shuffledTestimonials.slice(0, halfLength)];
  const row2 = [...shuffledTestimonials.slice(halfLength), ...shuffledTestimonials.slice(halfLength)];

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="w-[100vw] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-red">
          Our Customers Love Us
        </h2>

        <div className="relative w-full overflow-hidden space-y-6">
          {[row1, row2].map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex space-x-6 w-[200%]"
              animate={{ x: isHovered ? animationX : ["0%", "-100%"] }}
              transition={isHovered ? {} : { repeat: Infinity, duration: 60, ease: "linear" }}
              onMouseEnter={(event) => {
                setIsHovered(true);
                setAnimationX(event.currentTarget.getBoundingClientRect().x);
              }}
              onMouseLeave={() => setIsHovered(false)}
            >
              {row.map((testimonial, index) => (
                <div
                  key={`${rowIndex}-${index}`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;