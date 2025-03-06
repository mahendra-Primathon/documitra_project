// src/app/packages/page.tsx
"use client"; // Ensure this runs on the client side

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const PackagesPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/packages/usa"); // Redirect to the home page when visiting /packages
  }, [router]);

  return null; // Since we are redirecting, we don't need to render anything
};

export default PackagesPage;
