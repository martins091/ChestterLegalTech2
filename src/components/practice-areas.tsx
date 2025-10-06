import { Coins, Building, Lightbulb, Shield, Gavel, Handshake } from "lucide-react";

const practiceAreas = [
  {
    icon: Coins,
    title: "Fintech & Finance",
    description: "Regulatory compliance, licensing, payment systems, digital banking, and emerging financial technologies.",
  },
  {
    icon: Building,
    title: "Corporate & Commercial Law",
    description: "Company formation, mergers & acquisitions, joint ventures, and commercial transactions.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property & Technology",
    description: "Patent protection, trademark registration, software licensing, and technology transfer agreements.",
  },
  {
    icon: Shield,
    title: "Data Protection & Privacy",
    description: "NDPR compliance, GDPR alignment, privacy policies, and data security frameworks.",
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    description: "Commercial litigation, arbitration, mediation, and alternative dispute resolution mechanisms.",
  },
  {
    icon: Handshake,
    title: "Legal Advisory",
    description: "Strategic legal counsel, regulatory guidance, and ongoing business support for growth-stage companies.",
    featured: true,
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Practice Areas</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in cutting-edge legal services for the modern financial technology landscape, providing comprehensive solutions across key practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className={`card-hover rounded-2xl p-8 border shadow-lg ${
                  area.featured
                    ? "bg-navy text-white"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    area.featured
                      ? "bg-gold"
                      : "bg-navy"
                  }`}
                >
                  <IconComponent
                    className={`text-2xl h-8 w-8 ${
                      area.featured ? "text-white" : "text-white"
                    }`}
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-4 ${
                    area.featured ? "text-white" : "text-navy"
                  }`}
                >
                  {area.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    area.featured ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
