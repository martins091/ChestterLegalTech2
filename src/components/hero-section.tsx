import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import chess from "../images/bg.jpg";
import { Link } from "wouter";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gray-900"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${chess})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gold/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          Chestter Law
        </h1>
        <p
          className={`text-2xl md:text-4xl lg:text-4xl text-white text-gold font-semibold mb-10 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          A Foremost Fintech-Focused Law Firm
        </p>
        {/* <p
          className={`text-2xl md:text-3xl text-white/90 mb-14 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          Client-centric. Innovative. Responsible. Business-First.
        </p> */}
        <div
          className={`space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center transition-all duration-1000 delay-600 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            to="/contact"
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto bg-white hover:bg-navy/90 text-navy font-semibold px-12 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Legal Help
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl h-8 w-8" />
      </div>
    </section>
  );
}
