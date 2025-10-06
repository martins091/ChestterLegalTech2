import { Rocket, Users, TrendingUp, Star } from "lucide-react";
import chess from "../images/chess.jpg"

const features = [
  {
    icon: Rocket,
    title: "Innovation-Driven",
    description: "We leverage cutting-edge legal technology and innovative approaches to deliver efficient, cost-effective solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Your success is our priority. We work closely with you to understand your business and deliver tailored solutions.",
  },
  {
    icon: TrendingUp,
    title: "Business-First Mindset",
    description: "We understand business dynamics and provide legal solutions that drive growth and competitive advantage.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                Why Choose <span className="text-gradient">Chestter Law</span>?
              </h2>
              <div className="w-24 h-1 bg-gold mb-8"></div>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-white text-xl h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src={chess}
              alt="Modern fintech technology dashboard showing analytics"
              className="rounded-2xl shadow-2xl w-full"
            />

            {/* Floating testimonial card */}
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-xl shadow-xl max-w-xs glassmorphism">
              <div className="flex items-center space-x-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-gold h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-3">
                "Exceptional fintech legal expertise that helped us navigate complex regulations seamlessly."
              </p>
              <div className="text-sm font-semibold text-navy">- TechStart CEO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
