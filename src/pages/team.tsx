import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PremiumContactForm from "@/components/premium-contact-form";
import { Award, Users, Globe, TrendingUp, Shield, Lightbulb, Mail, Linkedin, Twitter, BookOpen, Scale, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  // {
  //   name: "Adebayo Chestter",
  //   position: "Managing Partner & Founder",
  //   bio: "Adebayo is the visionary founder of Chestter Law with over 15 years of experience in financial services law. He specializes in fintech regulations, corporate law, and has been instrumental in shaping Nigeria's digital banking landscape. Adebayo holds an LLM in Financial Regulation from Harvard Law School and is a frequent speaker at international fintech conferences.",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
  //   expertise: ["Fintech Regulations", "Corporate Law", "Digital Banking", "Securities Law"],
  //   education: ["LLB - University of Lagos", "LLM Financial Regulation - Harvard Law School", "Called to Nigerian Bar - 2009"],
  //   achievements: [
  //     "Led legal framework development for 3 major fintech IPOs",
  //     "Advised CBN on digital banking regulations",
  //     "Speaker at 20+ international conferences"
  //   ],
  //   social: {
  //     email: "adebayo@chestterlaw.com",
  //     linkedin: "#",
  //     twitter: "#"
  //   },
  //   featured: true
  // },
  {
    name: "Chuma Akana",
    position: "Senior Partner - Technology & Data Protection",
    bio: "Folake is a leading expert in data protection, privacy law, and technology transactions with over 12 years of experience. She has successfully guided numerous multinational corporations through complex NDPR and GDPR compliance projects. Folake holds certifications in cybersecurity law and is recognized as one of Nigeria's top data protection lawyers.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    expertise: ["Data Protection", "Privacy Law", "Cybersecurity", "Technology Transactions"],
    education: ["LLB - Obafemi Awolowo University", "LLM Technology Law - University of Edinburgh", "CIPP/E Certification"],
    achievements: [
      "Achieved NDPR compliance for 100+ organizations",
      "Developed privacy frameworks for Fortune 500 companies",
      "Zero data breach penalties for clients under her guidance"
    ],
    social: {
      email: "folake@chestterlaw.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "C J Nwogu ",
    position: "Senior Counsel - Litigation & Dispute Resolution",
    bio: "Kemi is a formidable litigator with extensive experience in commercial disputes, arbitration, and intellectual property matters. With over 10 years of courtroom experience, she has successfully represented clients in high-stakes commercial litigation and international arbitration proceedings. She is known for her strategic thinking and exceptional advocacy skills.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    expertise: ["Commercial Litigation", "Arbitration", "IP Disputes", "Regulatory Disputes"],
    education: ["LLB - University of Ibadan", "BL - Nigerian Law School", "Chartered Arbitrator - CIArb"],
    achievements: [
      "90%+ success rate in arbitration cases",
      "Recovered over ₦5 billion for clients",
      "Lead counsel in landmark IP case"
    ],
    social: {
      email: "kemi@chestterlaw.com",
      linkedin: "#",
      twitter: "#"
    }
  },
  
];

const stats = [
  { number: "80+", label: "Years Combined Experience", icon: Clock },
  { number: "6", label: "Senior Legal Experts", icon: Users },
  { number: "15+", label: "Specialization Areas", icon: Scale },
  { number: "100%", label: "Client Satisfaction", icon: Award }
];

const values = [
  {
    icon: Shield,
    title: "Integrity & Ethics",
    description: "Unwavering commitment to the highest ethical standards and professional integrity in all our dealings."
  },
  {
    icon: Lightbulb,
    title: "Innovation & Excellence",
    description: "Continuously pushing boundaries with innovative legal solutions while maintaining excellence in delivery."
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "Working as a unified team to leverage our collective expertise for optimal client outcomes."
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Combining international best practices with deep understanding of local market dynamics."
  }
];

export default function Team() {
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
            Meet Our <span className="text-gold">Expert Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Brilliant legal minds dedicated to delivering exceptional results for our clients across all practice areas.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </section>

      {/* Team Stats */}
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

      {/* Team Members */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gold/10 to-transparent rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-navy/10 to-transparent rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Our Legal Experts</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Our team combines decades of legal expertise with innovative thinking to deliver unparalleled results for our clients.
            </p>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-12 animate-fade-in-up ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Profile Image and Basic Info */}
                <div className="lg:w-2/5">
                  <div className={`premium-card rounded-3xl p-8 text-center ${member.featured ? 'bg-navy text-white' : 'bg-navy'}`}>
                    <div className="relative mb-8">
                      {/* <img
                        src={member.image}
                        alt={`Professional headshot of ${member.name}`}
                        className="w-48 h-48 rounded-3xl mx-auto object-cover shadow-xl"
                      /> */}
                      {member.featured && (
                        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                          <Award className="text-navy h-6 w-6" />
                        </div>
                      )}
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 ${member.featured ? 'text-white' : 'text-navy'}`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg mb-6 ${member.featured ? 'text-gold' : 'text-gold'} font-semibold`}>
                      {member.position}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-8">
                      <a
                        href={`mailto:${member.social.email}`}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          member.featured 
                            ? 'bg-gold text-navy hover:bg-gold/80' 
                            : 'bg-navy text-white hover:bg-navy/80'
                        }`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          member.featured 
                            ? 'bg-gold text-navy hover:bg-gold/80' 
                            : 'bg-navy text-white hover:bg-navy/80'
                        }`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          member.featured 
                            ? 'bg-gold text-navy hover:bg-gold/80' 
                            : 'bg-navy text-white hover:bg-navy/80'
                        }`}
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            member.featured 
                              ? 'bg-gold/20 text-gold' 
                              : 'bg-navy/10 text-navy'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="lg:w-3/5 space-y-8">
                  {/* Bio */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg card-hover">
                    <h4 className="text-2xl font-bold text-navy mb-4 flex items-center">
                      <BookOpen className="w-6 h-6 mr-3 text-gold" />
                      About {member.name.split(' ')[0]}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
                  </div>

                  {/* Education & Achievements */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-3xl p-6 shadow-lg card-hover">
                      <h5 className="text-xl font-bold text-navy mb-4">Education & Qualifications</h5>
                      <ul className="space-y-2">
                        {member.education.map((edu, eduIndex) => (
                          <li key={eduIndex} className="text-gray-600 text-sm flex items-start">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {edu}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-lg card-hover">
                      <h5 className="text-xl font-bold text-navy mb-4">Key Achievements</h5>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-gray-600 text-sm flex items-start">
                            <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-56 h-56 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6 animate-fade-in-up">Our Team Values</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              The principles that guide our team and define our approach to delivering exceptional legal services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-8 text-center group animate-scale-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="w-16 h-16 bg-navy rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-gold h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
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
            Ready to Work with Our Expert Team?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Connect with our legal experts and discover how our team's combined expertise can drive your business forward.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Schedule Team Consultation
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
              Connect with Our Team
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-gold to-gold/70 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Ready to partner with Nigeria's most innovative legal team? Let's discuss how we can help achieve your business goals.
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