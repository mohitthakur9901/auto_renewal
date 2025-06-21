import ContentSection from "@/components/content-4";
import FAQs from "@/components/faqs";
import FeaturesSection from "@/components/features-5";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ContentSection />
      <Testimonials />
      <StatsSection />
      <FAQs />
    </>
  );
}
