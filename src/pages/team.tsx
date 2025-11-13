import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PremiumContactForm from "@/components/premium-contact-form";
import {
  Award,
  Users,
  Globe,
  Shield,
  Lightbulb,
  BookOpen,
  Scale,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Chuma Akana",
    position: "Managing Partner",
    bio: "Chuma Akana LLM is astute in commercial law and has advised multinationals, large corporations, and high-net-worth clients on a wide range of assignments. He has also acted for corporate clients on various cross-border transactions and is resourceful with exceptional analytical skills and insight. His practice areas include Technology, Privacy, and Dispute Resolution. He advises businesses on navigating global data protection and financial services regulations. Chuma is an alumnus of American University’s Washington College of Law and the Lagos Business School. He holds certifications in cybersecurity law and is recognized as one of Nigeria's top fintech lawyers. He is a member of the Section of Business Law, Nigerian Bar Association (NBA), International Bar Association (IBA), and African Bar Association.",
    expertise: [
      "Commercial Law",
      "Technology Law",
      "Data Protection",
      "Dispute Resolution",
    ],
  },
  {
    name: "C. J. Nwogu",
    position: "Partner",
    bio: "CJ Nwogu is a highly skilled litigator and corporate practitioner with over 10 years of experience in commercial disputes, arbitration, and intellectual property law. He has a strong record of successfully representing clients in high-stakes litigation and international arbitration proceedings. Known for his strategic thinking and exceptional advocacy skills, CJ consistently achieves favorable outcomes for his clients. Additionally, he is a certified Notary Public.",
    expertise: [
      "Commercial Litigation",
      "Arbitration",
      "IP Disputes",
      "Corporate Law",
    ],
  },
];

const stats = [
  { number: "150+", label: "Years Combined Experience", icon: Clock },
  { number: "10+", label: "Senior Legal Experts", icon: Users },
  { number: "50+", label: "Specialization Areas", icon: Scale },
  { number: "5", label: "Client Satisfaction", icon: Award },
];

const values = [
  {
    icon: Shield,
    title: "Integrity & Ethics",
    description:
      "Unwavering commitment to the highest ethical standards and professional integrity in all our dealings.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Excellence",
    description:
      "Continuously pushing boundaries with innovative legal solutions while maintaining excellence in delivery.",
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description:
      "Working as a unified team to leverage our collective expertise for optimal client outcomes.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Combining international best practices with deep understanding of local market dynamics.",
  },
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
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Meet Our <span className="text-gold">Expert Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Brilliant legal minds dedicated to delivering exceptional results
            for our clients across all practice areas.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Meeting
          </Button>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-navy rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6">
              Our Legal Experts
            </h2>
            <div className="w-32 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="space-y-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-start gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Removed Image Section */}
                <div className="lg:w-2/5">
                  <div className="bg-navy rounded-3xl p-8 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gold font-semibold mb-4">
                      {member.position}
                    </p>
                  </div>
                </div>

                <div className="lg:w-3/5 bg-white rounded-3xl p-8 shadow-lg">
                  <h4 className="text-2xl font-bold text-navy mb-4 flex items-center">
                    <BookOpen className="w-6 h-6 mr-3 text-gold" />
                    About {member.name.split(" ")[0]}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6">
              Our Team Values
            </h2>
            <div className="w-32 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition"
                >
                  <div className="w-16 h-16 bg-navy rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-gold h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-navy mb-6">
            Connect with Our Team
          </h2>
          <div className="w-32 h-1.5 bg-gold mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Ready to partner with Nigeria's most innovative legal team? Let's
            discuss how we can help achieve your business goals.
          </p>
          <div className="max-w-3xl mx-auto">
            <PremiumContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
