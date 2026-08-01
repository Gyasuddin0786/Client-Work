import CTASection from "../../components/sections/CTASection";
import HeroSection from "../../components/sections/Hero";
import PortfolioSection from "../../components/sections/PortfolioSection";
import ProcessSection from "../../components/sections/ProcessSection";
import ServicesSection from "../../components/sections/ServicesSection";
import Testimonials from "../../components/sections/Testimonials";
import WhyChooseUsSection from "../../components/sections/WhyChooseUs";
import SEO from "../../components/common/SEO";

function Home() {
  return (
    <>
       <SEO
        title="SK 1 Welding Workshop | Steel & Metal Fabrication, Gate & Welding Services"
        description="Professional steel and metal fabrication, gates, railings, sheds, staircases, grills and custom welding services."
        keywords="steel fabrication, metal fabrication, welding workshop, gate fabrication, railing, shed, SK 1 Welding Workshop"
      />
      <HeroSection />

      <ServicesSection />

      <WhyChooseUsSection />

      <PortfolioSection />

      <ProcessSection />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;
