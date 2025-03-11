"use client"; // Required for Next.js client-side components

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderNavLinksProps {
    title: string;
    path: string;
}

const HeaderNavLink: React.FC<HeaderNavLinksProps> = ({ title, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className="relative px-4 py-2 text-sm transition-colors duration-300"
    >
      <span
        className={`text-gray-600 hover:text-primary ${
          isActive ? "text-#050505 font-semibold" : ""
        }`}
      >
        {title}
      </span>
      {isActive && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-0.5 bg-primary"></span>
      )}
    </Link>
  );
};

export default HeaderNavLink;