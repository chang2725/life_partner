
import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqData = [
    {
      id: 1,
      category: 'General',
      question: 'What is the difference between term insurance and endowment plans?',
      answer: 'Term insurance provides pure life cover without any investment component at very affordable premiums. If you survive the policy term, you get nothing back. Endowment plans combine insurance with investment - you get life cover plus guaranteed returns with bonuses. Premiums are higher but you receive maturity benefits if you survive the term.'
    },
    {
      id: 2,
      category: 'Tax Benefits',
      question: 'What tax benefits do I get with LIC policies?',
      answer: 'LIC policies offer dual tax benefits: 1) Premium paid qualifies for deduction up to ₹1.5 lakh under Section 80C. 2) Maturity amount and death benefits are tax-free under Section 10(10D) if premium doesn\'t exceed 10% of sum assured (20% for policies bought before 2012). This makes LIC policies highly tax-efficient investment options.'
    },
    {
      id: 3,
      category: 'Premium Payment',
      question: 'Can I pay premiums monthly instead of annually?',
      answer: 'Yes, LIC offers flexible premium payment options - annual, half-yearly, quarterly, and monthly. However, annual payment is most economical as you save on processing charges. Monthly payments are convenient but cost slightly more due to administrative charges. You can change payment frequency subject to policy terms.'
    },
    {
      id: 4,
      category: 'Policy Management',
      question: 'How do I check my policy status online?',
      answer: 'You can check your LIC policy status online through: 1) LIC official website using policy number and DOB, 2) LIC Customer Portal after registration, 3) LIC mobile app, or 4) SMS service. You can view premium due dates, bonus declarations, policy statements, and fund values. Contact me for assistance with online registration.'
    },
    {
      id: 5,
      category: 'Claims',
      question: 'What documents are required for claim settlement?',
      answer: 'For death claims: Original policy document, death certificate, claim form, hospital records (if applicable), police FIR (for unnatural death), nominee\'s identity proof, and bank details. For maturity claims: Policy document, discharge form, identity proof, and bank details. I assist my clients throughout the claim process to ensure smooth settlement.'
    },
    {
      id: 6,
      category: 'Policy Features',
      question: 'Can I take a loan against my LIC policy?',
      answer: 'Yes, you can take loans against policies that have acquired surrender value (typically after 2-3 years). Loan amount depends on surrender value and can be up to 90% of it. Interest rates are competitive (currently around 9-10% p.a.). The loan doesn\'t affect your policy benefits, but unpaid loan amount is deducted from claims. Very convenient for emergency funding.'
    },
    {
      id: 7,
      category: 'Eligibility',
      question: 'What is the maximum age for buying LIC policies?',
      answer: 'Maximum entry age varies by policy type: Term plans (65 years), Endowment plans (59 years), Pension plans (79 years), and immediate annuity plans (85 years). However, buying insurance early is always better - premiums are lower, and you get longer coverage. I recommend starting your insurance journey in your 20s or 30s for maximum benefits.'
    },
    {
      id: 8,
      category: 'Policy Modification',
      question: 'Can I increase my coverage amount after buying the policy?',
      answer: 'You cannot increase the sum assured of an existing policy. However, you can: 1) Buy additional policies to increase overall coverage, 2) Use riders for additional benefits, or 3) Exercise increase options available in some policies. I recommend reviewing your insurance needs annually and buying additional coverage when income increases or family responsibilities grow.'
    },
    {
      id: 9,
      category: 'Surrender & Revival',
      question: 'What happens if I stop paying premiums?',
      answer: 'If you stop paying premiums after the policy acquires surrender value (2-3 years), it becomes a paid-up policy with reduced benefits. You can surrender it for cash value or revive it within 5 years by paying due premiums with interest. If stopped before surrender value, the policy lapses with no benefits. Always consult me before stopping premiums - there might be better alternatives.'
    },
    {
      id: 10,
      category: 'Bonus & Returns',
      question: 'How are bonuses declared on LIC policies?',
      answer: 'LIC declares bonuses annually based on its investment performance and actuarial surplus. There are two types: 1) Reversionary bonus - added to your policy each year and payable on death/maturity, 2) Terminal bonus - one-time addition at the end for long-term policies. Bonus rates vary by policy type and year of purchase. These bonuses enhance your returns significantly over time.'
    },
    {
      id: 11,
      category: 'Medical Examination',
      question: 'When is medical examination required for LIC policies?',
      answer: 'Medical examination depends on: 1) Age of proposer, 2) Sum assured amount, 3) Health declaration in proposal form. Generally required if sum assured exceeds ₹25-50 lakhs or age above 45-50 years. For smaller amounts and younger ages, only health declaration suffices. Some policies may require specific medical tests. I guide you through the entire process including medical arrangements.'
    },
    {
      id: 12,
      category: 'Riders',
      question: 'What riders can I add to my LIC policy?',
      answer: 'Popular LIC riders include: 1) Accident Benefit Rider - additional payout for accidental death, 2) Disability Benefit Rider - premium waiver on permanent disability, 3) Critical Illness Rider - lump sum on diagnosis of specified diseases, 4) Term Rider - additional life cover at low cost. Riders enhance your policy\'s protection at minimal extra cost. I help choose appropriate riders based on your needs.'
    },
    {
      id: 13,
      category: 'Nomination',
      question: 'Can I change the nominee in my LIC policy?',
      answer: 'Yes, you can change nominees any time during the policy term by submitting a nomination change form with required documents. You can have multiple nominees with specified percentage shares. For minor nominees, you must appoint an appointee who will receive benefits until the nominee attains majority. Keeping nomination updated ensures smooth claim settlement for your family.'
    },
    {
      id: 14,
      category: 'Policy Transfer',
      question: 'Can I transfer my policy to another person?',
      answer: 'LIC policies can be assigned (transferred) to another person, but this is typically done for loan security purposes or as a gift to family members. The assignment must be in writing and registered with LIC. Once assigned, the assignee gets all policy rights and benefits. This is different from nomination - nominees only receive benefits after policyholder\'s death. Legal documentation is required for assignments.'
    },
    {
      id: 15,
      category: 'Digital Services',
      question: 'What digital services does LIC offer?',
      answer: 'LIC provides comprehensive digital services: 1) Online policy purchase, 2) Premium payment through net banking/cards, 3) Policy status checking, 4) Fund switching in ULIPs, 5) Address change, 6) Download policy documents, 7) Register complaints, and 8) LIC mobile app for all services. However, I recommend taking policies through agents like me for personalized service and ongoing support throughout the policy term.'
    }
  ];

  const categories = ['All', 'General', 'Tax Benefits', 'Premium Payment', 'Policy Management', 'Claims', 'Policy Features'];

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqData.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked
              <span className="text-blue-600 block">Questions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get answers to common questions about LIC policies, premiums, claims, and benefits. 
              Can't find what you're looking for? Contact me directly for personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="hover:bg-blue-600 hover:text-white transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <Card key={faq.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    {openFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === faq.id && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 mb-6">
                We couldn't find any questions matching your search. Try different keywords or contact us directly.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Ask a Question</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized answers from your trusted LIC agent. I'm here to help you understand 
            all aspects of life insurance and find the best policy for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
