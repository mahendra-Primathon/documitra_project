import Navbar from "../components/Navbar";
import Header from "../components/Header";
// import State from "../components/StatesSection";
import HeroSection from "../components/HeroSection";
import StatesSection from "../components/StatesSection";
import WhyDocuMitra from "../components/WhyDocuMitra";
import PremiumServices from "../components/PremiumService";
import ProcessSection from "../components/ProcesSection";
import FAQSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Testimonial from "../components/testimonial";

export default function Page() {
    return (
        <div className="m-0 p-0" >
            <Navbar />
            <Header />
            <HeroSection />
            <StatesSection />
            <WhyDocuMitra />
            <PremiumServices />
            <ProcessSection />
            <Testimonial />
            <FAQSection />
            <Footer />

        </div>
    );
};