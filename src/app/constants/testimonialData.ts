import person1 from "../../../public/assets/images/testimonials/person1.png";
import person2 from "../../../public/assets/images/testimonials/person2.png";
import person3 from "../../../public/assets/images/testimonials/person3.png";
import person4 from "../../../public/assets/images/testimonials/person4.png";
import person5 from "../../../public/assets/images/testimonials/person5.png";

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  imageSrc: string;
}

export const testimonials: Testimonial[] = [
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