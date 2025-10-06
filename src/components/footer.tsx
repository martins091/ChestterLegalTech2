import { Linkedin, Twitter, Facebook, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";
import logo from "../images/logo2.jpg"

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", href: "/practice-areas" },
  { name: "Our Team", href: "/team" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const contactInfo = [
  { icon: MapPin, text: "Lagos, Nigeria" },
  { icon: Phone, text: "+234 123 456 7890" },
  { icon: Mail, text: "info@chestterlaw.com" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            {/* <h3 className="text-2xl font-bold mb-4">Chestter Law</h3> */}
            <img src={logo} alt="Chestter Law" className="h-16" />
            <p className="text-white/80 mb-6 max-w-md">
              Nigeria's foremost fintech-focused law firm, providing innovative legal solutions for the modern financial technology landscape.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold/80 transition-colors duration-300"
                  >
                    <IconComponent className="text-white h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-white/80">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index} className="flex items-center space-x-2">
                    <IconComponent className="w-4 h-4" />
                    <span>{contact.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Chestter Law. All rights reserved. | 
            <Link href="/privacy-policy" className="hover:text-gold transition-colors duration-300 ml-1">
              Privacy Policy
            </Link> | 
            <Link href="/terms-of-service" className="hover:text-gold transition-colors duration-300 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
