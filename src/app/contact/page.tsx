import Navbar from "../components/Navbar";
import Header from "../components/Header";

import Footer from "../components/Footer";
import ContactPage from "../components/contact";
import Link from "next/link";

export default function Page() {
  return (
    <div className="m-0 p-0 bg-secondary  ">
      {/* <Navbar /> */}
      <Header />
      <div className="   max-w-7xl pt-4 pb-1  mx-auto px-4  ">
        <nav className="flex text-md ">
          <Link href="/" className="text-gray-500 hover:text-primary">
            Home
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-500">Contact us</span>
        </nav>
      </div>
      <ContactPage />
      <Footer />
    </div>
  );
}
