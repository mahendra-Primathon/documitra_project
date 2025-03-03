import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import logoFooter from "../../../public/assets/images/Home/logoFooter.svg";
import {
  servicesLinks,
  documitraLinks,
  paymentMethods,
} from "../constants/footerData";

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
  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      text: "Facebook Page",
    },
    { icon: <Twitter className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
  ];
  return (
    <footer className="bg-primary text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-8 mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
          {/* Company Info */}

          
          <div className="flex-1">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <Image src={logoFooter} alt="Documitra" width={80} height={100} />
              <div className="space-y-2 text-center md:text-left">
                <span className="font-semibold text-xl">Documitra</span>
                <a
                  href="mailto:info@documitra.com"
                  className="flex items-center justify-center md:justify-start gap-2"
                >
                  info@documitra.com
                </a>
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center md:justify-start gap-2"
                >
                  +91 1234567890
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-300 text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              quaerat officiis aliquam animi minus nulla aspernatur voluptate,
              ipsam iusto nemo, Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Dignissimos maxime iure culpa
            </p>
          </div>

          {/* Services Links */}
          <div className="flex-1">
            <FooterColumn title="Services">
              {servicesLinks?.map((link, index) => (
                <div key={index}>
                  <FooterLink href={link.href}>{link.text}</FooterLink>
                </div>
              ))}
            </FooterColumn>
          </div>

          {/* Documitra Links */}
          <div className="flex-1">
            <FooterColumn title="Documitra">
              <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                {documitraLinks?.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.text}
                  </FooterLink>
                ))}
              </div>
            </FooterColumn>
          </div>

          {/* Connect Section */}
          <div className="flex-1">
            <FooterColumn title="Connect">
              <div className="flex flex-row md:flex-col gap-4">
                {socialLinks?.map((link, index) => (
                  <FooterLink key={index} href={link.href}>
                    {link.icon}
                  </FooterLink>
                ))}
              </div>
            </FooterColumn>
          </div>

          {/* Payment Methods */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:flex flex-col gap-3 mt-4">
              {paymentMethods.map((method, index) => (
                <Image
                  key={index}
                  src={method.image}
                  alt={method.name}
                  width={120} // Decreased size for better fit on mobile
                  height={50}
                  className="object-contain"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300 text-center md:text-left">
            © 2025 All rights reserved
          </p>
          <div className="flex gap-4 text-sm text-gray-300">
            <FooterLink href="/privacy">Affiliates</FooterLink>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/cookies">Cookies</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
