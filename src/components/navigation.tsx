import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logo from "../images/logo.png"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-lg"
          : "bg-white/90 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img src={logo} alt="Chestter Law" className="h-16" />
              {/* <h1 className="text-2xl font-bold text-navy cursor-pointer hover:text-gold transition-colors duration-300">Chestter Law</h1> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                  location === "/" ? "text-navy" : "text-gray-600 hover:text-gold"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                  location === "/about" ? "text-navy" : "text-gray-600 hover:text-gold"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/practice-areas"
                className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                  location === "/practice-areas" ? "text-navy" : "text-gray-600 hover:text-gold"
                }`}
              >
                Practice Areas
              </Link>
              <Link
                href="/team"
                className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                  location === "/team" ? "text-navy" : "text-gray-600 hover:text-gold"
                }`}
              >
                Our Team
              </Link>
              <Link
                href="/blog"
                className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                  location === "/blog" ? "text-navy" : "text-gray-600 hover:text-gold"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/careers"
                className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                  location === "/careers" ? "text-navy" : "text-gray-600 hover:text-gold"
                }`}
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="bg-navy text-white hover:bg-navy/90 transition-colors duration-300 px-4 py-2 rounded-lg text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-navy transition-colors duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 font-medium ${
                location === "/" ? "text-navy" : "text-gray-600 hover:text-gold transition-colors duration-300"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 ${
                location === "/about" ? "text-navy font-medium" : "text-gray-600 hover:text-gold transition-colors duration-300"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/practice-areas"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 ${
                location === "/practice-areas" ? "text-navy font-medium" : "text-gray-600 hover:text-gold transition-colors duration-300"
              }`}
            >
              Practice Areas
            </Link>
            <Link
              href="/team"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 ${
                location === "/team" ? "text-navy font-medium" : "text-gray-600 hover:text-gold transition-colors duration-300"
              }`}
            >
              Our Team
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 ${
                location === "/blog" ? "text-navy font-medium" : "text-gray-600 hover:text-gold transition-colors duration-300"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/careers"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full text-left px-3 py-2 ${
                location === "/careers" ? "text-navy font-medium" : "text-gray-600 hover:text-gold transition-colors duration-300"
              }`}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mx-3 my-2 w-[calc(100%-1.5rem)] bg-navy text-white text-center py-2 rounded-lg font-medium hover:bg-navy/90 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
