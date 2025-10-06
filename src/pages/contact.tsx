import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PremiumContactForm from "@/components/premium-contact-form";
import { MapPin, Phone, Mail, Clock, MessageSquare, Globe, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    primary: "+234 (0) 1 461 7000",
    secondary: "+234 (0) 809 123 4567",
    description: "Call us during business hours for immediate assistance",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email",
    primary: "info@chestterlaw.com",
    secondary: "partnerships@chestterlaw.com",
    description: "Send us an email and we'll respond within 2 hours",
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Office",
    primary: "Address: first floor, Flat F1 Lagos City Mall,  Onikan Lagos Island",
    secondary: "Lagos, Nigeria",
    description: "Visit our modern office",
    action: "Get Directions"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    primary: "Available 24/7",
    secondary: "Instant responses",
    description: "Chat with our team for immediate legal assistance",
    action: "Start Chat"
  }
];

const offices = [
  // {
  //   name: "Lagos Headquarters",
  //   address: "Plot 1234, Tiamiyu Savage Street\nVictoria Island, Lagos\nNigeria",
  //   phone: "+234 (0) 1 461 7000",
  //   email: "lagos@chestterlaw.com",
  //   hours: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM",
  //   image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
  //   featured: true
  // },
  {
    name: "Lagos Office",
    address: "Address: first floor, Flat F1 Lagos City Mall,  Onikan Lagos Island, Lagos, Nigeria",
    phone: "+234 (0) 9 461 7001",
    email: "info@chestterlaw.com",
    hours: "Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM",
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  },
  // {
  //   name: "Port Harcourt Branch",
  //   address: "15th Floor, Standard Bank Building\nOld GRA, Port Harcourt\nRivers State",
  //   phone: "+234 (0) 84 461 7002",
  //   email: "portharcourt@chestterlaw.com", 
  //   hours: "Monday - Friday: 8:00 AM - 5:30 PM\nSaturday: 9:00 AM - 1:00 PM",
  //   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
  // }
];

const faqs = [
  {
    question: "How quickly can you respond to urgent legal matters?",
    answer: "For urgent matters, we provide same-day response through our emergency hotline. Our team is available 24/7 for critical legal issues affecting our clients' business operations."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes, we offer secure virtual consultations via video conference for clients who cannot visit our offices. These sessions are encrypted and confidential, maintaining the same professional standards as in-person meetings."
  },
  {
    question: "What are your consultation fees?",
    answer: "Initial consultations for new clients are complimentary for the first 30 minutes. Subsequent consultation rates vary by practice area and complexity. We'll provide transparent pricing before any engagement."
  },
  {
    question: "Can you handle matters outside Lagos?",
    answer: "Absolutely. We have offices in Lagos, Abuja, and Port Harcourt, and regularly handle matters across Nigeria and internationally. Our team is licensed to practice in all Nigerian jurisdictions."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we regularly work with international clients doing business in Nigeria or Nigerian companies with global operations. We have experience with cross-border transactions and international regulations."
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "Client confidentiality is paramount. We maintain strict data security protocols, encrypted communications, secure document management systems, and comprehensive confidentiality agreements with all staff."
  }
];

const stats = [
  { number: "24/7", label: "Emergency Support", icon: Clock },
  { number: "2hr", label: "Response Time", icon: MessageSquare },
  { number: "3", label: "Office Locations", icon: Building },
  { number: "500+", label: "Clients Served", icon: Users }
];

export default function Contact() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gold/30 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Get in <span className="text-gold">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Ready to discuss your legal needs? Our expert team is here to provide the guidance and representation you need.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-24 h-24 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg card-hover">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-navy mb-3 animate-fade-in-up">{stat.number}</div>
                  <div className="text-gray-600 font-semibold text-sm lg:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/10 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">How to Reach Us</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Multiple ways to connect with our team. Choose the method that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-8 text-center group animate-scale-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                    {method.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-navy">{method.primary}</p>
                    <p className="text-gray-600">{method.secondary}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm mb-6">{method.description}</p>
                  <Button className="w-full bg-navy text-white hover:bg-navy/90 group">
                    {method.action}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Our Offices</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Visit us at any of our strategically located offices across Nigeria.
            </p>
          </div>

          <div className="space-y-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className={`premium-card rounded-3xl overflow-hidden animate-fade-in-up ${
                  office.featured ? 'bg-navy text-white' : 'bg-white'
                }`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={office.image}
                      alt={office.name}
                      className="w-full h-full object-cover"
                    />
                    {office.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                          Headquarters
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <h3 className={`text-2xl lg:text-3xl font-bold mb-6 ${
                      office.featured ? 'text-white' : 'text-navy'
                    }`}>
                      {office.name}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className={`font-semibold mb-3 flex items-center ${
                          office.featured ? 'text-gold' : 'text-navy'
                        }`}>
                          <MapPin className="w-5 h-5 mr-2" />
                          Address
                        </h4>
                        <p className={`leading-relaxed whitespace-pre-line ${
                          office.featured ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {office.address}
                        </p>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-3 flex items-center ${
                          office.featured ? 'text-gold' : 'text-navy'
                        }`}>
                          <Clock className="w-5 h-5 mr-2" />
                          Office Hours
                        </h4>
                        <p className={`leading-relaxed whitespace-pre-line ${
                          office.featured ? 'text-white/90' : 'text-gray-600'
                        }`}>
                          {office.hours}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                      <div className="flex items-center space-x-3">
                        <Phone className={`w-5 h-5 ${office.featured ? 'text-gold' : 'text-navy'}`} />
                        <span className={office.featured ? 'text-white' : 'text-navy'}>
                          {office.phone}
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className={`w-5 h-5 ${office.featured ? 'text-gold' : 'text-navy'}`} />
                        <span className={office.featured ? 'text-white' : 'text-navy'}>
                          {office.email}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-8">
                      <Button
                        className={`transition-all duration-300 transform hover:scale-105 ${
                          office.featured 
                            ? 'bg-gold text-white hover:bg-gold/90' 
                            : 'bg-navy text-white hover:bg-navy/90'
                        } px-6 py-3 rounded-xl font-semibold`}
                      >
                        Get Directions
                      </Button>
                      <Button
                        variant="outline"
                        className={`transition-all duration-300 ${
                          office.featured 
                            ? 'border-2 border-white text-white hover:bg-white hover:text-navy' 
                            : 'border-2 border-gray-200 text-gray-600 hover:border-gold hover:text-gold'
                        } px-6 py-3 rounded-xl font-semibold`}
                      >
                        Schedule Visit
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Get quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="premium-card rounded-2xl p-8 animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <h3 className="text-xl font-bold text-navy mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Still have questions?</p>
            <Button
              onClick={() => scrollToSection("contact-form")}
              className="bg-navy text-white hover:bg-navy/90 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Ask Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-navy/5 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">
              Let's Start the Conversation
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Ready to discuss your legal needs? Fill out the form below and our team will get back to you within 2 hours.
            </p>
          </div>

          <div className="animate-scale-in delay-400">
            <PremiumContactForm />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Need Urgent Legal Assistance?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Our emergency hotline is available 24/7 for critical legal matters that require immediate attention.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </Button>
            {/* <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Live Chat
            </Button> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}