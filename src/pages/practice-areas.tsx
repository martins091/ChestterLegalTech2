import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PremiumContactForm from "@/components/premium-contact-form";
import { Coins, Building, Lightbulb, Shield, Gavel, Handshake, CheckCircle, ArrowRight, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    icon: Coins,
    title: "Fintech & Finance",
    description: "Comprehensive legal solutions for financial technology companies navigating Nigeria's evolving regulatory landscape.",
    features: [
      "Payment system licensing and compliance",
      "Digital banking regulations",
      "Cryptocurrency and blockchain advisory",
      "Mobile money and e-wallet compliance",
      "Open banking implementation",
      "Regulatory sandbox applications"
    ],
    caseStudies: [
      "Helped 15+ fintech startups obtain CBN licenses",
      "Guided major payment platform through regulatory compliance",
      "Assisted blockchain company with legal framework development"
    ],
    featured: true
  },
  {
    icon: Building,
    title: "Corporate & Commercial Law",
    description: "Strategic legal counsel for businesses from startup formation to complex corporate transactions.",
    features: [
      "Company incorporation and structuring",
      "Mergers and acquisitions",
      "Joint ventures and partnerships",
      "Corporate governance and compliance",
      "Securities and capital markets",
      "Commercial contract drafting"
    ],
    caseStudies: [
      "Facilitated $50M+ in M&A transactions",
      "Structured complex joint ventures for multinational corporations",
      "Advised on IPO preparations for emerging market companies"
    ]
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property & Technology",
    description: "Protecting and maximizing the value of your intellectual property assets in the digital age.",
    features: [
      "Patent and trademark registration",
      "Software licensing agreements",
      "Technology transfer arrangements",
      "Trade secret protection",
      "IP portfolio management",
      "Infringement litigation"
    ],
    caseStudies: [
      "Secured 200+ trademark registrations for tech companies",
      "Negotiated licensing deals worth millions in royalties",
      "Successfully defended IP rights in complex litigation"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection & Privacy",
    description: "Ensuring compliance with Nigeria's data protection regulations and international privacy standards.",
    features: [
      "NDPR compliance assessments",
      "GDPR alignment strategies",
      "Privacy policy development",
      "Data breach response protocols",
      "Cross-border data transfer compliance",
      "Privacy impact assessments"
    ],
    caseStudies: [
      "Achieved NDPR compliance for 100+ organizations",
      "Developed privacy frameworks for multinational companies",
      "Successfully handled data breach incidents with zero penalties"
    ]
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    description: "Expert litigation and alternative dispute resolution services for complex commercial matters.",
    features: [
      "Commercial litigation",
      "International arbitration",
      "Mediation and conciliation",
      "Regulatory disputes",
      "Cross-border enforcement",
      "Emergency relief proceedings"
    ],
    caseStudies: [
      "Won 90%+ of arbitration cases handled",
      "Recovered over ₦5 billion for clients in commercial disputes",
      "Successfully mediated complex multi-party commercial conflicts"
    ]
  },
  {
    icon: Handshake,
    title: "Legal Advisory & Compliance",
    description: "Ongoing strategic legal counsel and regulatory guidance for sustainable business growth.",
    features: [
      "Regulatory compliance monitoring",
      "Legal risk assessments",
      "Policy development and implementation",
      "Training and capacity building",
      "Legal due diligence",
      "Corporate restructuring"
    ],
    caseStudies: [
      "Serve as ongoing counsel to 50+ growth-stage companies",
      "Prevented regulatory violations through proactive compliance",
      "Guided successful corporate restructuring for efficiency"
    ]
  }
];

const stats = [
  { number: "500+", label: "Cases Handled", icon: Gavel },
  { number: "98%", label: "Success Rate", icon: Award },
  { number: "24/7", label: "Client Support", icon: Clock },
  { number: "150+", label: "Active Clients", icon: Users }
];

export default function PracticeAreas() {
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
            Our <span className="text-gold">Practice Areas</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Comprehensive legal solutions designed for the modern fintech and business landscape in Nigeria and beyond.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
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

      {/* Practice Areas Grid */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/10 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Legal Excellence Across All Sectors</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Our specialized practice areas are designed to provide comprehensive legal solutions for the challenges facing modern businesses in Nigeria's dynamic economy.
            </p>
          </div>

          <div className="space-y-16">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`lg:w-1/2 ${!isEven ? 'lg:order-2' : ''}`}>
                    <div className={` rounded-3xl p-10 ${area.featured ? 'bg-navy text-white' : 'bg-white'}`}>
                      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 ${
                        area.featured ? 'bg-gold' : 'bg-navy'
                      }`}>
                        <IconComponent className={`h-10 w-10 ${area.featured ? 'text-white' : 'text-white'}`} />
                      </div>
                      
                      <h3 className={`text-3xl font-bold mb-6 ${area.featured ? 'text-white' : 'text-navy'}`}>
                        {area.title}
                      </h3>
                      
                      <p className={`text-lg mb-8 leading-relaxed ${area.featured ? 'text-white/90' : 'text-gray-600'}`}>
                        {area.description}
                      </p>

                      <div className="space-y-4">
                        <h4 className={`text-xl font-semibold mb-4 ${area.featured ? 'text-gold' : 'text-navy'}`}>
                          Key Services:
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {area.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${area.featured ? 'text-gold' : 'text-navy'}`} />
                              <span className={`text-sm ${area.featured ? 'text-white/90' : 'text-gray-600'}`}>
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`lg:w-1/2 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-2xl font-bold text-navy mb-6">Recent Achievements</h4>
                        <div className="space-y-4">
                          {area.caseStudies.map((caseStudy, caseIndex) => (
                            <div key={caseIndex} className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg card-hover">
                              <div className="w-3 h-3 bg-gold rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-600 leading-relaxed">{caseStudy}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Button
                        onClick={() => scrollToSection("contact")}
                        className={`w-full group transition-all duration-300 transform hover:scale-105 ${
                          area.featured 
                            ? 'bg-white text-navy hover:bg-gray-50' 
                            : 'bg-navy text-white hover:bg-navy/90'
                        } px-8 py-4 rounded-xl font-semibold text-lg`}
                      >
                        <span>Discuss {area.title}</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">
              Why Choose <span className="text-gradient">Chestter Law</span>?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Our unique combination of legal expertise, industry knowledge, and innovative approach sets us apart as Nigeria's premier fintech law firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Industry Expertise",
                description: "Deep understanding of fintech regulations and emerging technology legal frameworks",
                icon: "🏆"
              },
              {
                title: "Proven Track Record",
                description: "Successfully handled 500+ cases with a 98% success rate across all practice areas",
                icon: "📈"
              },
              {
                title: "Innovation-Driven",
                description: "Leveraging legal technology and modern approaches for efficient, cost-effective solutions",
                icon: "💡"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock availability for urgent legal matters and client support",
                icon: "🕐"
              },
              {
                title: "Global Perspective",
                description: "International best practices combined with deep local market knowledge",
                icon: "🌍"
              },
              {
                title: "Client-Centric",
                description: "Tailored solutions focused on your business objectives and long-term success",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="premium-card rounded-3xl p-8 text-center group animate-scale-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Secure Your Business Future?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Don't let legal challenges hold back your business growth. Partner with Nigeria's leading fintech law firm today.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Legal Consultation
            </Button>
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-navy/5 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">
              Start Your Legal Journey
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Whether you're launching a fintech startup or need ongoing legal counsel, we're here to provide expert guidance every step of the way.
            </p>
          </div>

          <div className="animate-scale-in delay-400">
            <PremiumContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}