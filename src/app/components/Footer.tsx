// components/Footer/Footer.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";
import logoFooter from "../../../public/assets/images/Home/logoFooter.svg";
import visa1 from "../../../public/assets/images/Home/visa1.svg";
import visa2 from "../../../public/assets/images/Home/visa2.svg";
import visa3 from "../../../public/assets/images/Home/visa3.svg";
import visa4 from "../../../public/assets/images/Home/visa4.svg";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className="text-gray-300 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, children }) => (
  <div className="space-y-4">
    <h3 className="text-white font-semibold">{title}</h3>
    <div className="space-y-2">{children}</div>
  </div>
);

const Footer = () => {
  const servicesLinks = [
    { text: "OCI Card", href: "/services/oci" },
    { text: "Renunciation of Indian Passport", href: "/services/renunciation" },
    { text: "Indian Passport Renewal", href: "/services/passport-renewal" },
    { text: "Indian Visa", href: "/services/visa" },
    { text: "Police Clearance", href: "/services/police-clearance" },
  ];

  const documitraLinks = [
    { text: "About Us", href: "/about" },
    { text: "Blog", href: "/blog" },
    { text: "Careers", href: "/careers" },
    { text: "Partner Portal", href: "/partner" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
  ];

  const paymentMethods = [
    { name: "PayPal", image: visa1 },
    { name: "Visa", image: visa2 },
    { name: "Mastercard", image: visa3 },
    { name: "TrustPilot", image: visa4 },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="1st-row">
            <div className="flex items-center gap-2 mb-4  ">
              <Image src={logoFooter} alt="Documitra" width={90} height={90} />
              <div className="space-y-2 flex-row">
                <span className="font-semibold text-xl">Documitra</span>
                <a
                  href="mailto:info@documitra.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  info@documitra.com
                </a>
                <a
                  href="tel:1-877-426-7658"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  1-877-426-7658
                </a>
              </div>
            </div>
            <div className="">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quaerat officiis aliquam animi minus nulla aspernatur voluptate,
                ipsam iusto nemo, Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Dignissimos maxime iure culpa{" "}
              </p>
            </div>
          </div>

          {/* Services Links */}
          <FooterColumn title="Services">
            {servicesLinks.map((link, index) => (
              <div key={index}>
                <FooterLink href={link.href}>{link.text}</FooterLink>
              </div>
            ))}
          </FooterColumn>

          {/* Documitra Links */}
          <FooterColumn title="Documitra">
            {documitraLinks.map((link, index) => (
              <div key={index}>
                <FooterLink href={link.href}>{link.text}</FooterLink>
              </div>
            ))}
          </FooterColumn>

          {/* Connect Section */}
          <FooterColumn title="Connect">
            <div className="flex flex-row">
                
              <div className="flex gap-4 flex-col">
                {socialLinks.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.icon}
                  </FooterLink>
                ))}
              </div>
              <div className="mt-8 flex  ">
                <div className="grid grid-cols-2 gap-4 flex-row">
                  {paymentMethods.map((method, index) => (
                    <Image
                      key={index}
                      src={method.image}
                      alt={method.name}
                      width={80}
                      height={30}
                      className="object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          </FooterColumn>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">© 2025 All rights reserved</p>
          <div className="flex gap-4 text-sm text-gray-300">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
