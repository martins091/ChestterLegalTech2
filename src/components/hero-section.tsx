import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import chess from "../images/picture1.png";
import slide2 from "../images/picture2.jpg";
import slide3 from "../images/picture3.jpg";
import slide4 from "../images/picture4.jpg";
import { Link } from "wouter";

const images = [chess, slide2, slide3, slide4];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slides */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 z-10 zoom-in"
              : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-20"></div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 z-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gold/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Hero Text Content */}
      <div className="relative z-40 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-8 whitespace-nowrap">
          A Foremost Fintech-Focused Law Firm
        </h1>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link
            to="/contact"
            onClick={() => {
              const element = document.getElementById("contact");
              if (element)
                element.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="w-full sm:w-auto bg-white hover:bg-navy/90 text-navy font-semibold px-12 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Legal Help
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-40">
        <ChevronDown className="text-white text-2xl h-8 w-8" />
      </div>

      {/* Zoom Animation Style */}
      <style>{`
        .zoom-in {
          animation: zoomInAnim 5s forwards;
        }

        @keyframes zoomInAnim {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
