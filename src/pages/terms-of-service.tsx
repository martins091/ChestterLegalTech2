import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { FileText, Scale, Shield, AlertTriangle, Clock, Mail, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceTerms = [
  {
    icon: Scale,
    title: "Legal Services",
    description: "Professional legal advice and representation in fintech, corporate law, and regulatory compliance matters."
  },
  {
    icon: Shield,
    title: "Confidentiality",
    description: "Attorney-client privilege and strict confidentiality maintained for all communications and legal matters."
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive legal documentation, contracts, and regulatory filings prepared to highest professional standards."
  },
  {
    icon: Users,
    title: "Client Relations",
    description: "Dedicated legal team providing personalized attention and strategic guidance for your business needs."
  }
];

const keyTerms = [
  {
    title: "Service Scope",
    content: "Our legal services include but are not limited to fintech regulatory compliance, corporate law, contract drafting and review, intellectual property protection, data protection compliance, and business advisory services. Specific service scope will be defined in individual engagement letters."
  },
  {
    title: "Professional Standards",
    content: "All services are provided in accordance with Nigerian Bar Association professional conduct rules, international legal standards, and applicable regulatory requirements. We maintain the highest standards of professional ethics and competence."
  },
  {
    title: "Client Obligations",
    content: "Clients are required to provide accurate and complete information, respond promptly to our requests, and comply with all applicable laws and regulations. Clients must also ensure timely payment of legal fees and expenses."
  },
  {
    title: "Confidentiality & Privilege",
    content: "All communications between clients and our firm are protected by attorney-client privilege and professional confidentiality rules. We implement strict data security measures to protect sensitive client information."
  }
];

export default function TermsOfService() {
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
            Terms of <span className="text-gold">Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Professional legal services terms, conditions, and client agreements governing our attorney-client relationship.
          </p>
          <div className="animate-fade-in-up delay-400 text-white/80">
            <p className="text-lg">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-24 h-24 bg-gold/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-navy/5 rounded-full animate-float"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">Our Professional Services</h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services delivered with the highest standards of professional excellence and integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceTerms.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="premium-card rounded-3xl p-8 text-center animate-scale-in"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-navy to-navy/80 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="text-gold h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Introduction */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Agreement Overview</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  These Terms of Service ("Agreement") govern the provision of legal services by Chestter Law ("Firm," "we," "our," or "us") to clients ("Client," "you," or "your"). By engaging our services, you agree to be bound by these terms and conditions.
                </p>
                <p>
                  This Agreement establishes the framework for our professional relationship and outlines the rights, responsibilities, and obligations of both parties. Individual matters will be governed by specific engagement letters that supplement these general terms.
                </p>
                <p>
                  Our legal services are provided in accordance with Nigerian law, professional conduct rules, and international best practices in legal service delivery.
                </p>
              </div>
            </div>

            {/* Key Terms */}
            <div className="space-y-8">
              {keyTerms.map((term, index) => (
                <div key={index} className="premium-card rounded-3xl p-8 lg:p-12">
                  <h2 className="text-2xl font-bold text-navy mb-6">{term.title}</h2>
                  <p className="prose prose-lg text-gray-600 leading-relaxed">{term.content}</p>
                </div>
              ))}
            </div>

            {/* Fees and Payment */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Fees and Payment Terms</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Legal fees are based on the complexity of the matter, time required, expertise needed, and value provided. Fee structures may include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-navy mb-3">Fee Structures</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Hourly rates for time-based services</li>
                      <li>• Fixed fees for defined scope projects</li>
                      <li>• Retainer arrangements for ongoing matters</li>
                      <li>• Success fees for specific outcomes</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h4 className="font-semibold text-navy mb-3">Payment Terms</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Invoices payable within 30 days</li>
                      <li>• Advance retainers may be required</li>
                      <li>• Late payment charges may apply</li>
                      <li>• Multiple payment methods accepted</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Client and Firm Responsibilities</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-gold" />
                    Client Responsibilities
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Provide accurate and complete information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Respond promptly to requests for information
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Pay fees and expenses in accordance with agreements
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Comply with all applicable laws and regulations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Maintain confidentiality of legal strategies
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-4 flex items-center">
                    <Building className="w-6 h-6 mr-3 text-gold" />
                    Firm Responsibilities
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Provide competent and diligent representation
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Maintain client confidentiality and privilege
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Keep clients informed of matter progress
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Act in the client's best interests
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      Comply with professional conduct rules
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="premium-card rounded-3xl p-8 lg:p-12 border-l-4 border-yellow-500">
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center">
                <AlertTriangle className="w-8 h-8 mr-3 text-yellow-500" />
                Limitation of Liability
              </h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  While we strive to provide the highest quality legal services, our liability is limited as follows:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Our liability shall not exceed the fees paid for the specific matter in question</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>We are not liable for indirect, consequential, or punitive damages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Claims must be brought within two years of the alleged malpractice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Professional liability insurance covers claims within policy limits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Termination */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Termination of Services</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  Either party may terminate the attorney-client relationship under the following circumstances:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Client Termination</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• May terminate representation at any time</li>
                      <li>• Written notice preferred but not required</li>
                      <li>• Responsible for fees and costs incurred</li>
                      <li>• Must arrange for file transfer if needed</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-3">Firm Termination</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• May withdraw for cause with proper notice</li>
                      <li>• Professional conduct rules govern withdrawal</li>
                      <li>• Client files returned upon termination</li>
                      <li>• Outstanding fees and costs remain due</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="premium-card rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-navy mb-6">Governing Law and Dispute Resolution</h2>
              <div className="prose prose-lg text-gray-600 leading-relaxed space-y-4">
                <p>
                  This Agreement is governed by the laws of the Federal Republic of Nigeria. Any disputes arising from this Agreement or our professional relationship shall be resolved as follows:
                </p>
                <div className="bg-slate-50 rounded-xl p-6 mt-6">
                  <h4 className="font-semibold text-navy mb-3">Dispute Resolution Process</h4>
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li><strong>1. Direct Discussion:</strong> Good faith negotiations between parties</li>
                    <li><strong>2. Mediation:</strong> Non-binding mediation with qualified mediator</li>
                    <li><strong>3. Arbitration:</strong> Binding arbitration under Lagos Chamber of Commerce rules</li>
                    <li><strong>4. Litigation:</strong> Federal High Court of Nigeria (Lagos Division) jurisdiction</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="premium-card rounded-3xl p-8 lg:p-12 bg-navy text-white">
              <h2 className="text-3xl font-bold mb-6 text-white">Questions About These Terms?</h2>
              <div className="prose prose-lg text-white/90 leading-relaxed space-y-4">
                <p>
                  If you have questions about these Terms of Service or need clarification on any provisions, please contact our client relations team:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-6 h-6 text-gold" />
                    <span>legal@chestterlaw.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-gold" />
                    <span>Business hours: 8 AM - 6 PM WAT</span>
                  </div>
                </div>
                <p className="mt-6">
                  We are committed to maintaining transparent and professional relationships with all our clients.
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