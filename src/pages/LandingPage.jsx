import Navbar from "../components/Navbar";
import GetStarted from "../components/GetStarted";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import PartnerSection from "../components/PartnerSection";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#F8F1F1]">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <WhyChoose />
      <GetStarted />
      <PartnerSection />
      <Footer />
    </div>
  );
}
