import Navbar from "../components/home/Navbar";
import Header from "../components/Header";

import Footer from "../components/Footer";
import ContactPage from "../components/contact/contact";

export default function Page() {
  return (
    <div className="m-0 p-0">
      <Navbar />
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );
}
