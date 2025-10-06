import { Award } from "lucide-react";
import team from "../images/team.jpg"

export default function FirmIntroduction() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
                We're not your typical law firm
              </h2>
              <div className="w-24 h-1 bg-gold mb-8"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              At Chestter Law, we take a modern, innovative approach to legal services. We understand that in today's fast-paced fintech landscape, you need more than just legal expertise—you need strategic partners who can navigate complex regulatory environments while driving your business forward.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our team combines deep legal knowledge with industry expertise to deliver solutions that are not just legally sound, but business-smart. We're committed to being responsive, accessible, and always focused on your success.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-2">150+</div>
                <div className="text-gray-600">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-navy mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={team}
              alt="Professional Nigerian business team collaborating"
              className="rounded-2xl shadow-2xl w-full"
            />

            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl glassmorphism">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <Award className="text-white text-xl h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold text-navy">Award-Winning</div>
                  <div className="text-sm text-gray-600">Legal Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
