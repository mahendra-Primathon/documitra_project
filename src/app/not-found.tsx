"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeftCircle } from "lucide-react";
import Header from "./components/Header";
import Image from "next/image";
import Image_404 from "../../public/assets/images/404.png";
import Footer from "./components/Footer";

export default function NotFound() {
  const pathname = usePathname(); // Get the invalid URL path

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6 text-center">
        {/* SVG Illustration */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* <Image
    src={Image_404}
    alt="404 Not Found"
    className="w-60 md:w-80"
    width={30}
    height={130}
  /> */}
        </motion.div>

        {/* 404 Text and Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md p-6 bg-white shadow-lg rounded-2xl mt-6"
        >
          <h1 className="text-6xl font-extrabold text-primary">404</h1>
          <p className="text-lg text-gray-600 mt-4">
            Oops! The page
            <span className="text-primary font-bold"> {pathname} </span>
            doesn’t exist.
          </p>
          <p className="text-gray-500 mt-2">
            You may have mistyped the URL or the page has been moved.
          </p>

          {/* Go Back Home Button */}
          <Link
            href="/"
            className="mt-6 inline-flex items-center px-5 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            <ArrowLeftCircle className="w-5 h-5 mr-2" />
            Go Back Home
          </Link>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
