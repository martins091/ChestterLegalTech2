import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-24 hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Legal Strategy?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join forward-thinking companies that trust Chestter Law to navigate
          the complex world of fintech regulation and business law.
        </p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/contact"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
