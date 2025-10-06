import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Shield, Eye, Lock, UserCheck, Database, Globe, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const privacyPrinciples = [
  {
    icon: Shield,
    title: "Data Protection",
    description: "We implement robust security measures to protect your personal information from unauthorized access, disclosure, or misuse."
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We are transparent about what data we collect, how we use it, and with whom we share it."
  },
  {
    icon: Lock,
    title: "Security",
    description: "Your data is encrypted and stored securely using industry-standard security protocols and practices."
  },
  {
    icon: UserCheck,
    title: "Your Rights",
    description: "You have the right to access, correct, delete, or transfer your personal data at any time."
  }
];

const dataTypes = [
  {
    category: "Personal Information",
    items: [
      "Full name and professional title",
      "Email address and phone number",
      "Business address and contact details",
      "Professional qualifications and experience"
    ]
  },
  {
    category: "Technical Information",
    items: [
      "IP address and browser information",
      "Device type and operating system",
      "Website usage patterns and analytics",
      "Cookies and tracking preferences"
    ]
  },
  {
    category: "Communication Data",
    items: [
      "Email correspondence and inquiries",
      "Meeting notes and consultation records",
      "Legal document exchanges",
      "Client portal interactions"
    ]
  },
  {
    category: "Financial Information",
    items: [
      "Billing and payment information",
      "Invoice and transaction records",
      "Bank account details (when provided)",
      "Payment processing data"
    ]
  }
];

export default function PrivacyPolicy() {
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
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Your privacy is our priority. Learn how we protect, use, and manage your personal information.
          </p>
          <div className="animate-fade-in-up delay-400 text-white/80">
            <p className="text-lg">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-24 h-24 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Privacy Principles</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and maintaining the confidentiality of your information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {privacyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-8 text-center animate-scale-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{principle.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Introduction</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Chestter Law ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us.
                </p>
                <p>
                  As a law firm specializing in fintech and business law, we understand the critical importance of data protection and privacy. This policy is designed to comply with the Nigeria Data Protection Regulation (NDPR), General Data Protection Regulation (GDPR), and other applicable privacy laws.
                </p>
                <p>
                  By using our services or providing us with your information, you consent to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-8">Information We Collect</h2>
              <div className="space-y-8">
                {dataTypes.map((type, index) => (
                  <div key={index} className="border-l-4 border-gold pl-6">
                    <h3 className="text-xl font-semibold text-navy mb-4">{type.category}</h3>
                    <ul className="space-y-2">
                      {type.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start text-gray-600">
                          <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How We Use Information */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">How We Use Your Information</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Legal Services:</strong> To provide legal advice, representation, and related services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Communication:</strong> To respond to inquiries, send updates, and maintain client relationships</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Business Operations:</strong> To manage accounts, process payments, and improve our services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and professional obligations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Marketing:</strong> To send newsletters, updates, and promotional materials (with your consent)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Data Security</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <Lock className="w-5 h-5 mr-2 text-gold" />
                      Technical Safeguards
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• SSL/TLS encryption for data transmission</li>
                      <li>• Secure cloud storage with encryption at rest</li>
                      <li>• Regular security audits and updates</li>
                      <li>• Multi-factor authentication</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-navy mb-3 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-gold" />
                      Administrative Safeguards
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Staff training on data protection</li>
                      <li>• Access controls and permissions</li>
                      <li>• Incident response procedures</li>
                      <li>• Regular policy reviews</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Your Privacy Rights</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>Under applicable privacy laws, you have the following rights:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <UserCheck className="w-6 h-6 text-gold mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Right to Access</h4>
                        <p className="text-sm text-gray-600">Request copies of your personal data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <UserCheck className="w-6 h-6 text-gold mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Right to Rectification</h4>
                        <p className="text-sm text-gray-600">Request correction of inaccurate data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <UserCheck className="w-6 h-6 text-gold mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Right to Erasure</h4>
                        <p className="text-sm text-gray-600">Request deletion of your data</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <UserCheck className="w-6 h-6 text-gold mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Right to Portability</h4>
                        <p className="text-sm text-gray-600">Request transfer of your data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <UserCheck className="w-6 h-6 text-gold mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Right to Object</h4>
                        <p className="text-sm text-gray-600">Object to processing of your data</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <UserCheck className="w-6 h-6 text-gold mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-navy">Right to Withdraw Consent</h4>
                        <p className="text-sm text-gray-600">Withdraw consent at any time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="premium-card rounded-3xl p-8 lg:p-12 bg-navy text-white">
              <h2 className="text-3xl font-bold mb-6 text-white">Contact Our Data Protection Team</h2>
              <div className="prose prose-lg text-white/90 leading-relaxed space-y-4">
                <p>
                  If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact our Data Protection Officer:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-gold" />
                    <span>privacy@chestterlaw.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-gold" />
                    <span>Response within 48 hours</span>
                  </div>
                </div>
                <p className="mt-6">
                  We are committed to resolving any privacy concerns promptly and transparently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}