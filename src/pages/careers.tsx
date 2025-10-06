import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PremiumContactForm from "@/components/premium-contact-form";
import { MapPin, Clock, Users, TrendingUp, Heart, Star, Award, Briefcase, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const openPositions = [
  // {
  //   id: 1,
  //   title: "Senior Associate - Fintech & Regulatory",
  //   department: "Fintech Practice",
  //   location: "Lagos, Nigeria",
  //   type: "Full-time",
  //   experience: "5+ years",
  //   description: "Join our fintech practice to help shape Nigeria's financial technology landscape. You'll work with leading fintech companies on regulatory compliance, licensing, and strategic legal matters.",
  //   requirements: [
  //     "LLB from a recognized Nigerian university",
  //     "Called to the Nigerian Bar with 5+ years PQE",
  //     "Experience in financial services law or fintech regulation",
  //     "Strong understanding of CBN regulations",
  //     "Excellent analytical and communication skills"
  //   ],
  //   responsibilities: [
  //     "Advise fintech clients on regulatory compliance",
  //     "Draft and review commercial agreements",
  //     "Support clients through regulatory approval processes",
  //     "Conduct legal research on emerging regulations",
  //     "Represent clients in regulatory matters"
  //   ],
  //   benefits: [
  //     "Competitive salary and performance bonuses",
  //     "Professional development opportunities",
  //     "Health insurance and wellness programs",
  //     "Flexible working arrangements",
  //     "International conference attendance"
  //   ],
  //   featured: true
  // },
  {
    id: 2,
    title: "Legal Counsel - Data Protection & Privacy",
    department: "Technology Practice",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "3-5 years",
    description: "Lead our data protection practice helping organizations navigate NDPR compliance and international privacy regulations.",
    requirements: [
      "LLB with specialization in technology law",
      "3-5 years experience in data protection law",
      "CIPP certification preferred",
      "Experience with NDPR and GDPR compliance",
      "Strong project management skills"
    ],
    responsibilities: [
      "Conduct privacy impact assessments",
      "Develop data protection policies and procedures",
      "Provide NDPR compliance training",
      "Handle data breach response matters",
      "Negotiate data processing agreements"
    ],
    benefits: [
      "Competitive compensation package",
      "Certification and training support",
      "Modern office environment",
      "Career advancement opportunities",
      "Work-life balance initiatives"
    ]
  },
  {
    id: 3,
    title: "Junior Associate - Corporate Law",
    department: "Corporate Practice",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "1-3 years",
    description: "Start your career with Nigeria's leading fintech law firm. Work on complex corporate transactions and gain exposure to cutting-edge legal work.",
    requirements: [
      "LLB from a recognized university",
      "Called to the Nigerian Bar within 1-3 years",
      "Strong academic record",
      "Interest in corporate and commercial law",
      "Excellent research and writing skills"
    ],
    responsibilities: [
      "Assist with corporate transactions",
      "Draft legal documents and agreements",
      "Conduct legal research and due diligence",
      "Support senior lawyers on complex matters",
      "Maintain client files and databases"
    ],
    benefits: [
      "Comprehensive training program",
      "Mentorship from senior partners",
      "Competitive starting salary",
      "Professional development budget",
      "Clear career progression path"
    ]
  },
  {
    id: 4,
    title: "Paralegal - Litigation Support",
    department: "Litigation Practice",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "2+ years",
    description: "Support our litigation team in managing complex commercial disputes and arbitration proceedings.",
    requirements: [
      "Paralegal certification or relevant degree",
      "2+ years litigation support experience",
      "Proficiency in legal research tools",
      "Strong organizational and analytical skills",
      "Experience with case management systems"
    ],
    responsibilities: [
      "Assist with case preparation and document review",
      "Conduct factual and legal research",
      "Manage litigation databases and files",
      "Coordinate with expert witnesses and consultants",
      "Support court filings and procedural matters"
    ],
    benefits: [
      "Competitive salary and benefits",
      "Skills development programs",
      "Collaborative work environment",
      "Performance-based bonuses",
      "Career growth opportunities"
    ]
  },
  {
    id: 5,
    title: "Business Development Manager",
    department: "Business Development",
    location: "Lagos, Nigeria",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive growth initiatives and build strategic partnerships for Nigeria's premier fintech law firm.",
    requirements: [
      "Bachelor's degree in Business, Law, or related field",
      "5+ years business development experience",
      "Strong network in fintech and financial services",
      "Proven track record in client acquisition",
      "Excellent presentation and negotiation skills"
    ],
    responsibilities: [
      "Develop and execute business development strategies",
      "Build relationships with potential clients",
      "Identify new market opportunities",
      "Support marketing and branding initiatives",
      "Collaborate with legal teams on client proposals"
    ],
    benefits: [
      "Competitive base salary plus commissions",
      "Equity participation opportunities",
      "Extensive travel and networking budget",
      "Leadership development programs",
      "Performance incentives"
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement paths with regular performance reviews and promotion opportunities."
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning through training programs, certifications, and conference attendance."
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and comprehensive wellness programs."
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Work with international clients and participate in cross-border transactions."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Join a diverse team of brilliant minds in a supportive, inclusive environment."
  },
  {
    icon: Award,
    title: "Recognition & Rewards",
    description: "Performance-based bonuses and recognition programs for outstanding contributions."
  }
];

const stats = [
  { number: "95%", label: "Employee Satisfaction", icon: Star },
  { number: "30+", label: "Team Members", icon: Users },
  { number: "5+", label: "Practice Areas", icon: Briefcase },
  { number: "100%", label: "Growth Opportunities", icon: TrendingUp }
];

export default function Careers() {
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
            Join Our <span className="text-gold">Legal Dream Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Be part of Nigeria's most innovative legal team shaping the future of fintech and business law.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("positions")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
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

      {/* Why Join Us */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/10 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Why Choose Chestter Law?</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Join a forward-thinking legal team where innovation meets excellence, and your career growth is our priority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-8 text-center group animate-scale-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-6 group-hover:text-gold transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Open Positions</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Discover exciting opportunities to grow your legal career with Nigeria's most innovative law firm.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div
                key={position.id}
                className={`premium-card rounded-3xl p-8 lg:p-10 animate-fade-in-up ${
                  position.featured ? 'bg-navy text-white' : 'bg-white'
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                  <div className="lg:w-2/3">
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      {position.featured && (
                        <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                          Featured Position
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        position.featured ? 'bg-white/20 text-white' : 'bg-navy/10 text-navy'
                      }`}>
                        {position.department}
                      </span>
                    </div>

                    <h3 className={`text-2xl lg:text-3xl font-bold mb-4 ${
                      position.featured ? 'text-white' : 'text-navy'
                    }`}>
                      {position.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-6 mb-6 text-sm">
                      <div className="flex items-center">
                        <MapPin className={`w-4 h-4 mr-2 ${position.featured ? 'text-gold' : 'text-gray-500'}`} />
                        <span className={position.featured ? 'text-white/90' : 'text-gray-600'}>
                          {position.location}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className={`w-4 h-4 mr-2 ${position.featured ? 'text-gold' : 'text-gray-500'}`} />
                        <span className={position.featured ? 'text-white/90' : 'text-gray-600'}>
                          {position.type}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className={`w-4 h-4 mr-2 ${position.featured ? 'text-gold' : 'text-gray-500'}`} />
                        <span className={position.featured ? 'text-white/90' : 'text-gray-600'}>
                          {position.experience}
                        </span>
                      </div>
                    </div>

                    <p className={`text-lg leading-relaxed mb-6 ${
                      position.featured ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {position.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className={`font-semibold mb-3 ${
                          position.featured ? 'text-gold' : 'text-navy'
                        }`}>
                          Requirements
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.slice(0, 3).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start text-sm">
                              <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                position.featured ? 'bg-gold' : 'bg-navy'
                              }`}></div>
                              <span className={position.featured ? 'text-white/90' : 'text-gray-600'}>
                                {req}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-3 ${
                          position.featured ? 'text-gold' : 'text-navy'
                        }`}>
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.slice(0, 3).map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start text-sm">
                              <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                position.featured ? 'bg-gold' : 'bg-navy'
                              }`}></div>
                              <span className={position.featured ? 'text-white/90' : 'text-gray-600'}>
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className={`font-semibold mb-3 ${
                          position.featured ? 'text-gold' : 'text-navy'
                        }`}>
                          Benefits & Perks
                        </h4>
                        <ul className="space-y-2">
                          {position.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start text-sm">
                              <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                                position.featured ? 'bg-gold' : 'bg-navy'
                              }`}></div>
                              <span className={position.featured ? 'text-white/90' : 'text-gray-600'}>
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3 flex flex-col space-y-4">
                    <Button
                      onClick={() => scrollToSection("apply")}
                      className={`w-full transition-all duration-300 transform hover:scale-105 ${
                        position.featured 
                          ? 'bg-gold text-white hover:bg-gold/90' 
                          : 'bg-navy text-white hover:bg-navy/90'
                      } px-8 py-4 rounded-xl font-semibold text-lg`}
                    >
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className={`w-full transition-all duration-300 ${
                        position.featured 
                          ? 'border-2 border-white text-white hover:bg-white hover:text-navy' 
                          : 'border-2 border-gray-200 text-gray-600 hover:border-gold hover:text-gold'
                      } px-8 py-4 rounded-xl font-semibold`}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Our Hiring Process</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              We've designed a comprehensive process to ensure the best fit for both candidates and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your application with CV, cover letter, and portfolio"
              },
              {
                step: "02", 
                title: "Initial Review",
                description: "Our team reviews your application and experience"
              },
              {
                step: "03",
                title: "Interview Process",
                description: "Technical and behavioral interviews with team members"
              },
              {
                step: "04",
                title: "Final Decision",
                description: "Reference checks and final decision within 2 weeks"
              }
            ].map((process, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-gold text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
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
            Ready to Shape the Future of Law?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join Nigeria's most innovative legal team and be part of the fintech revolution.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              onClick={() => scrollToSection("apply")}
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Apply for a Position
            </Button>
            {/* <Button
              variant="outline"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Submit General Application
            </Button> */}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-navy/5 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-gold/5 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">
              Start Your Journey with Us
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Ready to take the next step in your legal career? We'd love to hear from you.
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