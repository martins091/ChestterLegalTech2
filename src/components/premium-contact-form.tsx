import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MessageSquare, User, Building, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function PremiumContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
      urgency: ""
    });

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100 premium-card">
      <div className="text-center mb-10">
        <h3 className="text-3xl lg:text-4xl font-bold text-navy mb-4">Let's Start a Conversation</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Ready to take your business to the next level? Our expert legal team is here to provide personalized solutions tailored to your needs.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center">
              <User className="w-4 h-4 mr-2" />
              Full Name *
            </label>
            <Input
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Enter your full name"
              className="h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Address *
            </label>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your.email@company.com"
              className="h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Phone Number
            </label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+234 xxx xxx xxxx"
              className="h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Company/Organization
            </label>
            <Input
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              placeholder="Your company name"
              className="h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy">
              Service Needed
            </label>
            <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
              <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fintech">Fintech & Finance</SelectItem>
                <SelectItem value="corporate">Corporate & Commercial Law</SelectItem>
                <SelectItem value="ip">Intellectual Property & Technology</SelectItem>
                <SelectItem value="data">Data Protection & Privacy</SelectItem>
                <SelectItem value="dispute">Dispute Resolution</SelectItem>
                <SelectItem value="advisory">Legal Advisory</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-navy flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Urgency Level
            </label>
            <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
              <SelectTrigger className="h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20">
                <SelectValue placeholder="How urgent is this?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low - General inquiry</SelectItem>
                <SelectItem value="medium">Medium - Within a week</SelectItem>
                <SelectItem value="high">High - Within 2-3 days</SelectItem>
                <SelectItem value="urgent">Urgent - ASAP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-navy flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Tell Us More About Your Needs *
          </label>
          <Textarea
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Please describe your legal needs, challenges, or questions in detail. The more information you provide, the better we can assist you."
            rows={6}
            className="rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20 resize-none"
            required
          />
        </div>

        <div className="text-center pt-6">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-navy hover:bg-navy/90 text-white font-semibold px-12 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending Message...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Send Message</span>
              </div>
            )}
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            We typically respond within 24 hours. For urgent matters, please call us directly.
          </p>
        </div>
      </form>
    </div>
  );
}