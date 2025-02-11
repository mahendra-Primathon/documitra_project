"use client";

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import person1 from '../../../public/assets/images/testimonials/person1.png';
import person2 from '../../../public/assets/images/testimonials/person2.png';
import person3 from '../../../public/assets/images/testimonials/person3.png';
import person4 from '../../../public/assets/images/testimonials/person4.png';
import person5 from '../../../public/assets/images/testimonials/person5.png';

interface TestimonialProps {
  name: string;
  rating: number;
  comment: string;
  imageSrc: string;
}

const TestimonialCard = ({ name, rating, comment, imageSrc }: TestimonialProps) => (
  <div className="bg-white p-6 rounded-3xl shadow-sm">
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
    <p className="text-gray-600 text-sm leading-relaxed">{comment}</p>
  </div>
);

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sachin",
      rating: 4.5,
      comment: "I was amazed by how quickly Documitra processed my passport renewal. It saved me so much time and stress.",
      imageSrc: person1
    },
    {
      name: "Katravelli",
      rating: 4.5,
      comment: "The support team at Documitra was incredibly helpful. They answered all my questions promptly and guided me through the application process.",
      imageSrc: person2
    },
    {
      name: "Charlie",
      rating: 4.5,
      comment: "Knowing that my personal information was in safe hands with Documitra gave me peace of mind throughout the process.",
      imageSrc: person3
    },
    {
      name: "Sara",
      rating: 4.5,
      comment: "The support team at Documitra was incredibly helpful. They answered all my questions promptly and guided me through the application process.",
      imageSrc: person4
    },
    {
      name: "John",
      rating: 4.5,
      comment: "Knowing that my personal information was in safe hands with Documitra gave me peace of mind throughout the process.",
      imageSrc: person5
    }
  ];

  return (
    <div className="bg-[#F8F9FF] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Customers love us
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>
        
       
      </div>
    </div>
  );
};

export default TestimonialSection;