import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Calendar,
  User,
  Tag,
  ArrowRight,
  Clock,
  Eye,
  Heart,
  Share2,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import fintechimg from "../images/fintech.jpg";
import cryptoimg from "../images/crypto.jpg";
import dataPrivacyImg from "../images/property.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Fintech, Funding, and the Capital Market in Nigeria",
    excerpt:
      "In recent years, Nigeria’s FinTech ecosystem has seen exponential growth, with funding from venture capitalists, private equity firms, and the capital market playing a major role. While equity remains the dominant source, the Nigerian Stock Exchange’s new Growth Board is creating room for tech startups to access long-term capital through public listings, boosting visibility, governance, and global recognition.",
    content: `In recent times, the Nigerian FinTech ecosystem has witnessed strong drive and
campaign across various frontiers including payments, personal savings, financial
services, financial inclusion and mobile lending. This has precipitated the attention on
FinTech companies and led to unprecedented growth in the industry in a short period.
According to the Nigerian Start Up Funding Report, in 2019, Nigerian technology
companies attracted investments of over $377 million and a huge percentage of this
sum was invested in FinTech Companies. Also in 2018, wallet.ng, a Nigerian FinTech
company was listed among the Top 100 FinTech companies in the world, in a report
published by KPMG and H2 Ventures- the 2018 FinTech 100.

In Q1 2020, according to the Nigerian Startup Funding Report by Techpoint, Nigerian
startups raised $55.37, higher than they did in Q1 2018 and Q1 2019 combined. With
the likes of Microsoft setting up digital villages in Nigeria, more Nigerian FinTech
startups are leading the drive for financial inclusion in the continent.

Possibly, a large part of the industry growth is directly related to the amount of funding
being pumped in by investors in the Nigerian FinTech ecosystem, as it is widely agreed
that funding is important for FinTech companies to thrive.
FinTech companies like other companies in Nigeria, can have various sources of funding
including debt or equity. With respect to debt, most startups may be permitted by their
Articles of Association, to raise capital through debt from banks, financial institutions
and the capital market, subject to regulatory requirement.

For a lot of tech companies, funding can be a major challenge at the onset, particularly
when the product/concept is novel and innovative. Typically, the founders would raise
the initial capital from individuals/family for the first few months or years of the
business, before they are able to access external funds through seed funding or series
round, to scale their business. This lack of funds or access to credit has resulted in the
exit of some promising tech companies in recent years. As mentioned above, equity,
debt and mezzanine financing are available funding options for new and growing tech
companies, however what we see, is that most FinTech companies raise equity instead
of debt, as investments have mainly come from venture capitalists and private equity
firms.

These venture capitalist are incentivized to provide these funding, by the provisions of
the Venture Capital (Incentives) Act LFN 2004 which provides some tax benefits for the
Venture Capital Firms including; accelerated capital allowance for equity investment by
a venture company in a venture project for the first 5 years of the investment;
reduction of withholding of tax on dividends declared by venture projects to venture
companies for the first 5 years from 10% to 5%; export incentives such as export
expansion grants if the venture project exports its product; exemption of payment of
capital gains tax from gains realized by venture companies for a disposal of equity
interest in the venture project; and exemption from companies income tax for a period
of 3 years , which may be extended for an additional final period of 2 years.

Most startups would go through a Series A, B and C round, and believe they have
gained sufficient funding to grow and scale their business, add new products to their
portfolio, and return good profit to investors. Still, there is the option of listing in the
capital market and conducting an Initial Public Offering (IPO) to offer shares to the
public, and this is not uncommon in international markets. In 2014, Alibaba raised the
sum of $25 billion via IPO, and went on to reach market capitalization of $400 billion in
2017. Also Facebook raised $16 billion via Initial Public Offering in 2012, and has
become one of the biggest companies in the world. However, raising fund from the
capital market seems not to be a popular option for most African tech companies, as a
result of the perceived difficulties in managing a public company and the stringent
reporting requirements.

In recent times, the Nigerian Stock Exchange have indicated that it is planning to
reposition the Alternative Securities Market “ASEM” which is the NSE initiative for SMEs
as a “Growth Board” that will provide listing opportunities and capital formation for
Startups, SMEs and Venture Capital/Seed companies with a keen focus on startups
creating value with transformational impact on the market. Basically, the initiative
allows the target companies to float shares with a more flexible regulatory system than
is applicable to the main board or premium board.

The Growth board has an entry stage which is primarily targeted at startups, tech
companies and venture businesses. It is imperative that the company is a public limited
company in legal form i.e as prescribed by Section 24 of the Companies and Allied
Matters Act. Other requirements include that the company shall have a market
capitalization of N50m – N500m and a public float/minimum shareholders of 10% and
25 shareholders respectively. Continuing obligations and reporting include semi-annual
and annual company’s statements, while the Nigerian Stock Exchange will provide
strong support structures for the company including accounting, audit and legal services
at a pre agreed and prepaid rate with the startup.

For these companies, the benefits of listing on the Nigerian Stock Exchange above other
funding options include the highly liquid nature of the market, value creation and
corporate governance. There is also the issue of optimal price discovery, greater brand
profile and visibility for investors, customers and consumers. Through listing, these start
ups are also sure of business continuity, recognition in global markets,
transparency/credibility and an exit route for private equity and strategic core
investors.

The companies listed on the growth board are supported by the 3 pillars of designated
advisers, growth ambassador and NSEs institutional services. While the regulatory and
governance pillars are designed to facilitate the growth and institutionalization of these
companies, the institutional services relate to the NSE’s initiative via partnership with
strategic providers to offer companies access to expert services such as leadership
development, succession planning and formalization of business processes. This
enhances the company’s capacity to define its business model and integrate it with its
structures, systems processes and people. Some proponents also opine that accessing
funding through the capital market would give these tech companies an easier capital
flow while reducing the cost of funding.

It is believed that this option of capital market should be considered by FinTech
companies, as it will boost global recognition, ensure customer confidence and good
corporate governance which is the hallmark of stable and successful companies.

Chuma Akana

LinkedIn: www.linkedin.com/in/chuma-akana`,

    author: "Chuma Akana",
    date: "2024-12-10",
    readTime: "10 min read",
    views: "2.3k",
    image: fintechimg,
    category: "Fintech",
    tags: ["Startups", "Funding", "Capital Market", "Nigeria"],
    featured: true,
  },

  {
    id: 2,
    title: "Proprietary Rights in Virtual Assets: Crypto Under Common Law",
    excerpt:
      "An in-depth legal analysis of how virtual assets like cryptocurrency are classified and protected under English common law principles.",
    content: `**PROPRIETARY RIGHTS IN VIRTUAL ASSETS**

The expansive growth of the virtual assets industry is primarily due to the fact that they have become ubiquitous over the last few years, prompting more national and regional authorities to grapple with their regulation. With the inauguration of the Fintech Roadmap Implementation Committee in Nigeria, one of the recommended areas of implementation is to decide on the preferred classification of cryptocurrencies (either as Commodities, Securities or Currency). Categorisation of these assets has been a hot topic in order to determine the legal status and how the law would apply to them in different circumstances.

At present, the judicial view on the legal nature of cryptocurrency varies among jurisdictions. Some jurisdictions, including Singapore, have held that virtual assets have the characteristics of property. Other courts, including the European Court of Justice (ECJ) and courts in the United States, have held that cryptocurrency is a currency. Virtual assets or cryptocurrencies are similar in that they are primarily based on the same type of decentralized technology known as blockchain with inherent encryption.

In what was termed a watershed moment for English law in November 2019, the Chancellor of the UK High Court launched the “Legal Statement of Crypto Assets and Smart Contracts”. The statement provides direction and clarity to the status of crypto assets and smart contracts under UK Law.

In the case of *AA v Persons Unknown, Re Bitcoin* [2019] EWHC 3556 (Comm), the UK High Court held that bitcoin can be 'property' and can therefore be the subject of a proprietary injunction. In reaching its conclusion, the court adopted the detailed analysis of the issue set out in the UK Jurisdictional Task Force's Legal Statement on Crypto-Assets and Smart Contracts, thereby providing a far more detailed judicial basis for the finding than found in previous cases. The judge found the analysis on property to be compelling and adopted its conclusions.

The analysis identifies that under English law, property traditionally falls into two distinct categories:
- *Things in possession* (i.e., tangible assets); and
- *Things in action* (e.g., debt or contractual rights).

The latter category is hard to define, but it is generally used to mean a right of property that can be enforced by court litigation or action, such as a debt or contractual right; it is debatable whether a crypto-asset should be regarded as a thing in action but, by definition, it arguably should not (it is plainly not a thing in possession as such assets are not tangible).

However, following a detailed analysis of the relevant case law, the “Legal Statement” considered that other categories in addition to things in action and things in possession are capable of being property. Property could potentially extend to novel kinds of intangible asset that are not things in action, such as crypto-assets. Accordingly, the judge proceeded on the basis that bitcoin is property and granted the injunction sought. [1]

More recently also, the Singaporean court had to wind up a company (Otonomos BCC Pte Ltd) who was a leader in the field of blockchain technology, which provided a legally compliant corporate governance platform powered by smart contracts and used blockchain technology to enable the automation of companies' corporate governance.

The liquidators and the court dealt with numerous issues, including realizing the cryptocurrencies and other assets owned by Otonomos and fluctuations in the cryptocurrency’s value.

In winding up the company, the court had to look at the legal nature of cryptocurrency and whether they could be regarded as property.

The court considered the suit between *National Provincial Bank v Ainsworth* which sets out the classic definition of 'property' as follows:

> "[I]t must be definable, identifiable by third parties, capable in its nature of assumption by third parties, and have some degree of permanence or stability."

In *B2C2 v Quoine Pte Ltd*, the Singapore International Commercial Court recently held that cryptocurrencies met all of these requirements and accepted that cryptocurrencies could constitute trust property.

In that case, the Claimant had sought the remedy of specific performance such that the Defendant should deliver up the number of bitcoin which it had wrongfully held onto from the cancellation of certain trades. The court did not grant specific performance, but rather ordered that the Claimant’s remedy lay only in damages. [2]

In declining to grant specific performance, the Court’s primary considerations were whether the person against whom the relief was being sought would suffer substantial hardship and whether damages would have been an adequate remedy. The court found that the Defendant would suffer substantial hardship if required to deliver up the bitcoin. The Claimants were market leaders and would not have held on to the bitcoin as investments. In fact, their software had immediately begun hedging proceeds by selling bitcoin, whereas specific performance would have required the Defendant to deliver up bitcoin which at the time of trial had a price substantially higher than in April 2017 when the breaches occurred.

The court rejected Claimant’s argument that the damages were difficult to assess because of the volatility of the price of cryptocurrencies and were therefore not an adequate remedy. Instead, it held that “courts are accustomed to assess damages in relation to volatile assets and cryptocurrencies will be no different”. [3]

As the jurisprudence of virtual assets law evolves and more judicial authorities emerge, there is bound to be more clarity, and perhaps dynamism in regulation. Though we are yet to see instances of caselaws in Nigeria, proactive actions from regulators and stakeholders would assist the courts to properly adjudicate such matters where they arise, as seen in other jurisdictions.

**References**
[1] https://www.internationallawoffice.com/Newsletters/Tech-Data-Telecoms-Media/United-Kingdom/RPC/Bitcoin-is-property-and-can-therefore-be-subject-of-proprietary-injunction  
[2] *B2C2 Ltd v Quoine Pte Ltd* [2019] SGHC(I) 03 at [142]`,
    author: "Chuma Akana",
    date: "2024-11-28",
    readTime: "12 min read",
    views: "1.9k",
    image: cryptoimg,
    category: "Crypto Law",
    tags: ["Crypto", "Property Rights", "Common Law", "Blockchain"],
  },
  {
    id: 3,
    title: "Data Protection and Digital Lending in Nigeria",
    excerpt:
      "In recent times, the Nigerian FinTech ecosystem has witnessed strong drive and campaign across various frontiers including payments, personal savings, financial services, financial inclusion and mobile lending. This has precipitated the attention on FinTech companies and led to unprecedented growth in the industry in a short period. According to the Nigerian Start-up Ecosystem Report 2022 by Disrupt Africa, Nigerian FinTechs accounted for more than one-third of all start-ups in the country, and 63.5% of the funding raised. These numbers are indicative of the confidence reposed in the ecosystem by both foreign and local investors.\n\nHowever, this rapid growth comes with concerns, particularly regarding consumer data protection and the ethical use of such data by FinTech and digital lending companies. The Nigerian Data Protection Regulation (NDPR), issued by the National Information Technology Development Agency (NITDA), was introduced to ensure that personal data collected, stored, and processed by organizations is done in a lawful and ethical manner. Despite its implementation, the proliferation of loan apps with questionable data practices raised alarms. Cases of unauthorized access to contacts, harassment of defaulters, and privacy breaches prompted public outcry and regulatory response.\n\nTo address these issues, the Federal Competition and Consumer Protection Commission (FCCPC), in collaboration with other regulatory bodies including NITDA and the Central Bank of Nigeria (CBN), developed an interim framework for digital lending. This includes a Limited Interim Regulatory/Registration Framework and Guidelines for Digital Lending to monitor and vet digital lenders.\n\nWhile the NDPR lays the foundation for data protection, enforcement remains a challenge. The successful prosecution of data breaches and increased public awareness are crucial in strengthening trust in digital financial services. As Nigeria continues to embrace digital innovation, a balanced approach that promotes growth while safeguarding user rights is essential. Continued collaboration among stakeholders, robust regulation, and capacity-building initiatives will ensure a more transparent and accountable FinTech landscape in Nigeria.",
    author: "Chuma Akana",
    date: "2024-11-15",
    readTime: "11 min read",
    views: "2.0k",
    image: dataPrivacyImg,
    category: "Data Privacy",
    tags: ["NDPR", "Digital Lending", "Privacy", "Nigeria"],
  },
];

const categories = [
  "All",
  "Fintech Regulation",
  "Data Protection",
  "Digital Banking",
  "Intellectual Property",
  "Corporate Law",
  "Tax Law",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

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
            Legal <span className="text-gold">Insights</span> & News
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
            Stay informed with expert analysis, regulatory updates, and
            practical guidance from Nigeria's leading fintech law firm.
          </p>
          <div className="animate-fade-in-up delay-400">
            <Button
              onClick={() => scrollToSection("newsletter")}
              className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-gray-200 focus:border-gold focus:ring-gold/20"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-navy text-white hover:bg-navy/90"
                      : "border-gray-200 text-gray-600 hover:border-gold hover:text-gold"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.some((post) => post.featured) && (
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
                Featured Article
              </h2>
              <div className="w-24 h-1 bg-gold mx-auto"></div>
            </div>

            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <div
                  key={post.id}
                  className="premium-card rounded-3xl overflow-hidden animate-scale-in"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gold text-navy px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm space-x-4">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-navy mb-4 leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-sm">
                            <p className="font-semibold text-navy">
                              {post.author}
                            </p>
                            <div className="flex items-center text-gray-500 space-x-3">
                              <span className="flex items-center">
                                <Eye className="w-4 h-4 mr-1" />
                                {post.views}
                              </span>
                            </div>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${post.id}`}
                          className="inline-flex items-center bg-navy text-white hover:bg-navy/90 px-6 py-3 rounded-lg group transition-all duration-300"
                        >
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
              Latest Articles
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on the latest developments in fintech law,
              regulatory compliance, and business strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <article
                  key={post.id}
                  className="premium-card rounded-3xl overflow-hidden group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-navy px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-navy mb-3 leading-tight group-hover:text-gold transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {post.author}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-400">
                        <span className="flex items-center text-sm">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views}
                        </span>
                        <Button size="sm" variant="ghost" className="p-2">
                          <Heart className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="p-2">
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center mt-6 bg-navy text-white hover:bg-navy/90 px-6 py-3 rounded-lg group transition-all duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </article>
              ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500 mb-4">
                No articles found matching your search criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                variant="outline"
                className="border-gray-200 text-gray-600 hover:border-gold hover:text-gold"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section
        id="newsletter"
        className="py-24 hero-gradient relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-32 h-32 bg-gold/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-white/10 rounded-full animate-float"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stay Informed with Legal Updates
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Get weekly insights on fintech regulations, compliance updates, and
            legal strategies delivered directly to your inbox.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 rounded-xl bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-gold focus:ring-gold/20"
              />
              <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                Subscribe
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-3">
              Join 2,000+ legal professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
