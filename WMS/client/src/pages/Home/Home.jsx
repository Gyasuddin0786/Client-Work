import CTASection from "../../components/sections/CTASection";
import HeroSection from "../../components/sections/Hero";
import PortfolioSection from "../../components/sections/PortfolioSection";
import ProcessSection from "../../components/sections/ProcessSection";
import ServicesSection from "../../components/sections/ServicesSection";
import Testimonials from "../../components/sections/Testimonials";
import WhyChooseUsSection from "../../components/sections/WhyChooseUs";

function Home() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <WhyChooseUsSection />

      <PortfolioSection />

      <ProcessSection />
      <Testimonials/>
      <CTASection />
    </>
  );
}

export default Home;