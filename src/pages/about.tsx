import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PremiumContactForm from "@/components/premium-contact-form";
import { Award, Users, Globe, TrendingUp, Shield, Lightbulb, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import light from "../images/light.jpg"

const stats = [
  { number: "150+", label: "Satisfied Clients", icon: Users },
  { number: "10+", label: "Years Experience", icon: Award },
  { number: "50+", label: "Successful Cases", icon: CheckCircle },
  { number: "5", label: "Practice Areas", icon: Target },
];

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our professional dealings, ensuring trust and transparency with every client."
  },
  {
    icon: Lightbulb,
    title: "Innovation", 
    description: "We embrace cutting-edge legal technology and forward-thinking approaches to deliver modern solutions."
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Your success is our priority. We tailor our services to meet your unique business needs and objectives."
  },
  {
    icon: TrendingUp,
    title: "Excellence",
    description: "We strive for exceptional results in every matter, combining legal expertise with strategic business thinking."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "We understand international best practices while maintaining deep knowledge of the Nigerian legal landscape."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that drive your business forward and create lasting value."
  }
];

const timeline = [
  {
    year: "2014",
    title: "Foundation",
    description: "Chestter Law was established with a vision to revolutionize legal services in Nigeria's emerging fintech sector."
  },
  {
    year: "2017",
    title: "Fintech Focus",
    description: "Specialized in fintech regulations and became a trusted advisor to Nigeria's leading financial technology companies."
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description: "Launched innovative digital legal services and remote consultation capabilities during the global shift."
  },
  {
    year: "2024",
    title: "Industry Leadership",
    description: "Recognized as Nigeria's foremost fintech-focused law firm with over 150 satisfied clients and counting."
  }
];

export default function About() {
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
            About <span className="text-gold">Chestter Law</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Nigeria's foremost fintech-focused law firm, pioneering innovative legal solutions for the modern financial technology landscape.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
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

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                  Our Mission & Vision
                </h2>
                <div className="w-24 h-1 bg-gold mb-8"></div>
              </div>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <h3 className="text-2xl font-bold text-navy mb-4">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To provide innovative, client-centric legal solutions that empower fintech companies and financial services providers to navigate Nigeria's evolving regulatory landscape while driving business growth and technological advancement.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                  <h3 className="text-2xl font-bold text-navy mb-4">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be Africa's leading fintech-focused law firm, recognized for our expertise, innovation, and commitment to advancing the financial technology ecosystem across the continent.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={light}
                alt="Modern office space representing innovation and professionalism"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating achievement card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl glassmorphism">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                    <Award className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy">Industry Leader</div>
                    <div className="text-sm text-gray-600">Fintech Legal Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/10 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Our Core Values</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Our values guide every decision we make and every service we provide, ensuring we deliver exceptional results while maintaining the highest professional standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="card-hover bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 border border-gray-100 shadow-xl text-center group animate-scale-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-6 group-hover:text-gold transition-colors duration-300">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Our Journey</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              From our founding to becoming Nigeria's leading fintech law firm, here's how we've grown and evolved over the years.
            </p>
          </div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-navy via-gold to-navy hidden lg:block rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} animate-fade-in-up`} style={{animationDelay: `${index * 0.3}s`}}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-10 rounded-3xl shadow-2xl card-hover border border-gray-100 group">
                      <div className="text-3xl font-bold bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent mb-4">{item.year}</div>
                      <h3 className="text-2xl font-bold text-navy mb-6 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-gold to-gold/80 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                  
                  <div className="w-full lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us CTA */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Experience the Chestter Law Difference?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join the growing community of fintech innovators who trust us to navigate complex legal challenges and drive business success.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Consultation
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-navy hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-navy/5 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">
              Ready to Get Started?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Take the first step towards exceptional legal representation. Let's discuss how we can help your business thrive in the fintech landscape.
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