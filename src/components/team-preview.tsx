import { Button } from "@/components/ui/button";
import team1 from "../images/team1.jpg";
import { Link } from "wouter";

const teamMembers = [
  {
    name: "Chuma Akana",
    position: "Managing Partner",
    bio: "Specializes in fintech regulations and corporate law with 15+ years of experience in financial services.",
    // image: team1,
  },
  {
    name: "C J Nwogu ",
    position: "Senior Associate",
    bio: "CJ Nwogu is a highly skilled litigator & corporate practitioner with over 10 years of experience in commercial disputes, arbitration, and intellectual property law",
    // image:team1,
  },
 
];

export default function TeamPreview() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our experienced legal professionals who combine deep expertise
            with innovative thinking to deliver exceptional results.
          </p>
        </div>

        <div className="flex gap-y-8 gap-8 justify-center flex-wrap">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-2xl w-96 p-6 border border-gray-100 shadow-lg text-center"
            >
              {/* <img
                src={member.image}
                alt={`Professional headshot of ${member.name}`}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              /> */}
              <h3 className="text-xl font-semibold text-navy mb-2">
                {member.name}
              </h3>
              <p className="text-gold font-medium mb-3">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/team"
            className="bg-navy text-white hover:bg-navy/90 px-8 py-3 rounded-lg font-medium transition-colors duration-300"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    </section>
  );
}
