import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import visa1 from "../../../public/assets/images/Home/visa1.svg";
import visa2 from "../../../public/assets/images/Home/visa2.svg";
import visa3 from "../../../public/assets/images/Home/visa3.svg";
import visa4 from "../../../public/assets/images/Home/visa4.svg";

export const servicesLinks = [
  { text: "OCI Card", href: "/services/oci" },
  { text: "Renunciation of Indian Passport", href: "/services/renunciation" },
  { text: "Indian Passport Renewal", href: "/services/passport-renewal" },
  { text: "Indian Visa", href: "/services/visa" },
  { text: "Photo enhancement", href: "/services/police-clearance" },
];

export const documitraLinks = [
  { text: "About Us", href: "/about" },
  { text: "Blog", href: "/blog" },
  { text: "Careers", href: "/careers" },
  { text: "Refer a friend", href: "/partner" },
];



export const paymentMethods = [
  { name: "PayPal", image: visa1 },
  { name: "Visa", image: visa2 },
  { name: "Mastercard", image: visa3 },
  { name: "TrustPilot", image: visa4 },
];