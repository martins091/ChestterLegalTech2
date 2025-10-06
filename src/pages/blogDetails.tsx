import { useParams } from "wouter";
// You may need to extract blogPosts into a shared file
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
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
    content: `The expansive growth of the virtual assets industry is primarily due to the fact that they have become ubiquitous over the last few years, prompting more national and regional authorities to grapple with their regulation. With the inauguration of the Fintech Roadmap Implementation Committee in Nigeria, one of the recommended areas of implementation is to decide on the preferred classification of cryptocurrencies (either as Commodities, Securities or Currency). Categorisation of these assets has been a hot topic in order to determine the legal status and how the law would apply to them in different circumstances.

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
      "An exploration of the intersection between data privacy laws and digital lending practices in Nigeria, focusing on compliance with the NDPR.",
    content: `With the advent of the Nigerian Data Protection Regulation 2019, personal data and data
privacy have become key issues in the digital economy. Though the regulation has been extant
for over 2 years, there is a lack of knowledge on the part of most data subjects as to the extent
of their data protection and what constitutes breach of data. While the NDPR has played a huge
role in stimulating the digital economy, this has restricted the impact of the regulation.
In espousing its objective, the Nigerian Data Protection Regulation provides that it was made in
recognition of the fact that many private and public bodies have migrated their respective
businesses and other information systems online, and these information systems have thus
become critical information infrastructure which must be safeguarded, regulated and protected
against atrocious breaches. 1 The principle guiding the NDPR also stipulates that personal data
shall be collected and processed in accordance with specific, legitimate and lawful purpose
consented to by the Data Subject.
In recent times there has been a proliferation of digital retail lenders within the lending space in
Nigeria, and this has helped to bridge the financial inclusion gap, as report from the Financial
Inclusion Secretariat shows that formal sector credit penetration as a ratio of the adult
population in Nigeria was below 5.3% in 2017 2 .  The rise in digital lending can be linked to the
widespread use of mobile phones, high demand for credit and a fragmented regulatory
landscape for industry players. Traditionally banks have been averse to retail lending, because
the risk appetite of banks do not extend to retail loans and also, the process of applying for a
bank loan is rather complex, often involving lengthy paperwork and delays.
On the contrary, it is abstruse why banks/financial institutions that have held and processed
data of customers for more than ‘10 years’ are unable to offer loan/overdraft facilities to such
customers, based on the data they have alone, yet digital lending companies employ simpler
processes and no paperwork to make this possible.
These companies are able to leverage payment data to determine lending risk more easily and
utilize smartphones as a distribution channel. Some have gone ahead to leverage alternative
credit-scoring algorithms to provide instant, unsecured, short-term loans to individuals. This sort
of lending is attractive not only to existing customers, but also to first time borrowers who would
otherwise be shut out due to lack of a credit history.
Consequently, the transfer of personal data and financial information through digital channels
raises concerns of data privacy and there is strict responsibility on the part of digital lenders to
process these data lawfully, as a result of the digital business model which they have adopted. It
has become customary practice for some digital lending companies to use non financial data

1 Preamble to Nigerian Data Protection Regulation 2019
2 https://www.cbn.gov.ng/Out/2018/CCD/FINANCIAL%20INCLUSION.PDF

and mined phone data to engage in debt shaming of debtors/loanees by informing their family,
friends and employers of the existing debt.
In a recent development, Sokoloan, a digital lending company was fined N10million by NITDA
for alleged privacy invasion. Aside processing data of data subjects without their consent,
NITDA further determined that the company embeds trackers that share data with third parties
inside its mobile application without providing users information about it or using the appropriate
lawful basis. The company was said to be in violation of the following: Use of non-conforming
privacy notice, contrary to Article 2.5 and 3.1(7) of the NDPR; Insufficient lawful basis for
processing personal data, contrary to Articles 2.2 and 2.3 of the NDPR; Illegal data sharing
without appropriate lawful basis, contrary to Article 2.2 of the NDPR and Non-filing of NDPR
Audit reports through a licensed Data Protection Compliance Organisation (DPCO), contrary to
Article 4.1(7) of the NDPR amongst others. 3

In processing the personal data of a data subject, and by requesting access to the contacts of
the loan customer, digital lenders also have access to the personal data of the ‘contacts’ of the
customer. It is worthy of note that consent to process personal data of the customer cannot
include consent to process personal data of another data subject which forms part of the data
that was collected from the customer.
According to the NDPR, prior to collecting personal data from a data subject, the Controller shall
provide the data subject - through a privacy policy - with the following information;
 Purpose of the processing for which the personal data are intended as well as the legal
basis for processing
 Period for which personal data will be stored
 Existence of right of data subject to withdraw consent anytime
 Existence of the right to request access to, rectification or erasure of the personal data
 How the data will be processed
 Type of data collected etc
Therefore digital lenders are not at liberty to process data from a customer’s phone, unless they
have informed the customer. Also lenders ought to specify all the data that they intend to collect
and how they want to use it. The use should be in line with what is reasonably expected by the
data subject. For instance, it is reasonable expected that a lender would obtain the customer’s
name and phone number for purposes of records, and possibly collect data relating to call
records, browsing history, phone model, GPS data and communication pattern for purpose of
credit scoring. However it is unreasonable for a lender to obtain contacts of ‘data subjects’ from
a customer’s phone for the purpose of calling them and engaging them to recover outstanding
debts.
The NDPR defines personal data as any information relating to an identified or identifiable
natural person (data subject); an identifiable natural person is one who can be identified, directly
or indirectly, in particular by reference to an identifier such as a name, an identification number,

3 https://nitda.gov.ng/nitda-sanctions-soko-loan-for-privacy-invasion/

location data, an online identifier or tone or more factors specific to the physical, physiological,
genetic, mental, economic, cultural or social identity of that natural person. It can be anything
from a name, address, a photo, email address, bank details, posts on social networking sites,
medical information, and other unique identifier such as but not limited to MAC address, IP
address, IMEI number, IMSI number, SIM, Personal Identifiable Information (PII) and others. 4
For data controllers/digital lenders, one way of complying with NDPR means sending an email
to every single person in a customer’s contact list to either get consent for you to hold and
process their data, and to explain how they exercise their rights under NDPR.
Furthermore, if a digital lender were found to be processing “personal data” belonging to a data
subject on a loanee’s contact list (or any other person whose information is uploaded to their
server through the action of another person) they would find it difficult to contend that the
processing was lawful, because the activity doesn’t prima facie satisfy any of the criteria for
lawfulness in Article 2.2 (a – e) of the NDPR.
It is interesting to note that the ‘loanee’s’ contact has not given consent for the lending app to
process her personal data for any purpose. She has merely given the loanee consent to
process her personal data to the extent that the loanee has stored it in his phone, but that
consent presumably does not extend to the lending app uploading that data to its server and
calling or texting such person when the loanee is in default.
In Kenya, the Data Protection Act is set to revolutionize digital lending privacy and put an end to
debtor shaming and collection of data from undisclosed sources 5 . In essence, digital lending
companies need to be aware of the far reaching implications of the provisions of the Nigerian
Data Protection Regulation, while we await a substantive legislation for data protection. As data
protection becomes more rooted in the fabric of the digital economy, there is bound to be a rise
in reports and fines/awards against erring data controllers. Therefore, digital lenders need to
fully grasp compliance obligations under the NDPR including conducting regular data audits and
appointing a DPCO, and come up with an appropriate compliance policy framework.`,
    author: "Chuma Akana",
    date: "2024-11-15",
    readTime: "11 min read",
    views: "2.0k",
    image: dataPrivacyImg,
    category: "Data Privacy",
    tags: ["NDPR", "Digital Lending", "Privacy", "Nigeria"],
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center text-gray-600">
        <p>Article not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navigation />

      <div className="max-w-5xl mt-10 mx-auto px-4 md:px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-gold hover:underline transition duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <article className="space-y-10 px-4 md:px-8 lg:px-20 py-10 bg-white rounded-3xl shadow-lg border border-gray-200">
          {/* Hero Image */}
          <div className="overflow-hidden rounded-3xl shadow-md">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-72 md:h-[32rem] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-blue-600" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-blue-600" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4 text-blue-600" />
              {post.author}
            </span>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-blue max-w-none text-gray-800 leading-relaxed">
            <p>{post.excerpt}</p>
            <div className="mt-6">
              {post.content.split("\n\n").map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
}
