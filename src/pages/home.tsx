import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FirmIntroduction from "@/components/firm-introduction";
import PracticeAreas from "@/components/practice-areas";
import WhyChooseUs from "@/components/why-choose-us";
import TeamPreview from "@/components/team-preview";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FirmIntroduction />
      <PracticeAreas />
      <WhyChooseUs />
      <TeamPreview />
      <CTASection />
      <Footer />
    </div>
  );
}
