
import { Shield, TrendingUp, Banknote, Users, Clock, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const LifeInsurance = () => {
  const policies = [
    {
      id: 1,
      title: 'Term Life Insurance',
      subtitle: 'Pure Protection Plans',
      description: 'Maximum coverage at minimum premium. Pure protection for your family without investment component.',
      icon: Shield,
      color: 'bg-blue-50 text-blue-600',
      features: [
        'High coverage at low premium',
        'Pure risk cover without investment',
        'Tax benefits under Section 80C',
        'Option to convert to endowment',
        'Multiple payout options'
      ],
      plans: ['LIC Tech Term', 'LIC Amulya Jeevan II', 'LIC Saral Jeevan Bima'],
      ageRange: '18-65 years',
      minPremium: '₹500/month',
      popular: true
    },
    {
      id: 2,
      title: 'Endowment Plans',
      subtitle: 'Protection + Investment',
      description: 'Traditional plans offering life cover with guaranteed returns and bonuses.',
      icon: TrendingUp,
      color: 'bg-green-50 text-green-600',
      features: [
        'Life cover + savings component',
        'Guaranteed returns with bonuses',
        'Maturity benefits available',
        'Loan facility against policy',
        'Tax benefits on premium & maturity'
      ],
      plans: ['LIC New Endowment Plan', 'LIC New Jeevan Anand', 'LIC New Bima Bachat'],
      ageRange: '8-59 years',
      minPremium: '₹1,000/month',
      popular: false
    },
    {
      id: 3,
      title: 'Money Back Plans',
      subtitle: 'Periodic Returns',
      description: 'Receive periodic payouts during policy term while maintaining life cover throughout.',
      icon: Banknote,
      color: 'bg-purple-50 text-purple-600',
      features: [
        'Periodic survival benefits',
        'Continuous life cover',
        'Loyalty additions',
        'Maturity benefit at the end',
        'Premium waiver on death'
      ],
      plans: ['LIC New Money Back Plan', 'LIC New Children Money Back', 'LIC Money Back Plus'],
      ageRange: '13-45 years',
      minPremium: '₹1,500/month',
      popular: false
    },
    {
      id: 4,
      title: 'Unit Linked Plans (ULIPs)',
      subtitle: 'Market-Linked Returns',
      description: 'Investment cum insurance plans with potential for higher returns linked to market performance.',
      icon: TrendingUp,
      color: 'bg-orange-50 text-orange-600',
      features: [
        'Market-linked returns',
        'Choice of investment funds',
        'Flexibility to switch funds',
        'Top-up facility available',
        'Tax benefits available'
      ],
      plans: ['LIC New Jeevan Nidhi', 'LIC Nivesh Plus', 'LIC SIIP'],
      ageRange: '18-60 years',
      minPremium: '₹2,000/month',
      popular: false
    },
    {
      id: 5,
      title: 'Pension Plans',
      subtitle: 'Retirement Security',
      description: 'Ensure a comfortable retirement with guaranteed income for life after retirement.',
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600',
      features: [
        'Guaranteed pension for life',
        'Immediate or deferred annuity',
        'Joint life pension options',
        'Return of purchase price option',
        'Tax benefits on contribution'
      ],
      plans: ['LIC New Jeevan Shanti', 'LIC Jeevan Akshay VII', 'LIC New Jeevan Nidhi'],
      ageRange: '30-79 years',
      minPremium: '₹1,000/month',
      popular: false
    },
    {
      id: 6,
      title: 'Child Plans',
      subtitle: 'Secure Their Future',
      description: 'Specially designed plans to secure your child\'s education and marriage expenses.',
      icon: Heart,
      color: 'bg-pink-50 text-pink-600',
      features: [
        'Educational milestone benefits',
        'Premium waiver on parent\'s death',
        'Guaranteed additions',
        'Maturity at child\'s important age',
        'Loan facility available'
      ],
      plans: ['LIC New Children Money Back', 'LIC Jeevan Tarun', 'LIC Child Career Plan'],
      ageRange: '0-12 years',
      minPremium: '₹1,200/month',
      popular: true
    }
  ];

  const benefits = [
    {
      title: 'Tax Benefits',
      description: 'Enjoy tax deductions under Section 80C and tax-free maturity benefits under Section 10(10D)',
      icon: Banknote
    },
    {
      title: 'Guaranteed Claims',
      description: 'LIC has maintained over 98% claim settlement ratio with government backing',
      icon: CheckCircle
    },
    {
      title: 'Flexible Premiums',
      description: 'Choose from annual, half-yearly, quarterly, or monthly premium payment options',
      icon: Clock
    },
    {
      title: 'Wide Network',
      description: 'Access to LIC\'s extensive network of 2000+ branches across India',
      icon: Users
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LIC Life Insurance
              <span className="text-blue-600 block">Plans for Every Need</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from a comprehensive range of life insurance policies designed to protect your family 
              and secure your financial future. Get expert guidance to find the perfect plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Ideal Policy</h2>
            <p className="text-lg text-gray-600">Compare different types of LIC policies and find the one that suits your needs</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {policies.map((policy) => (
              <Card key={policy.id} className="relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {policy.popular && (
                  <Badge className="absolute -top-3 left-6 bg-blue-600 text-white">Most Popular</Badge>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${policy.color} flex items-center justify-center`}>
                        <policy.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{policy.title}</CardTitle>
                        <CardDescription className="text-sm font-medium text-blue-600">
                          {policy.subtitle}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600">{policy.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Age Range:</span>
                      <p className="text-gray-600">{policy.ageRange}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Min. Premium:</span>
                      <p className="text-gray-600">{policy.minPremium}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {policy.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Popular Plans:</h4>
                    <div className="flex flex-wrap gap-2">
                      {policy.plans.map((plan, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {plan}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link to="/contact">
                      Get Quote for {policy.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose LIC */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LIC?</h2>
            <p className="text-lg text-gray-600">India's most trusted life insurance company</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98.74%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Claim Settlement Ratio</h3>
              <p className="text-gray-600 text-sm">Highest in the industry with government backing</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">290M+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Policies in Force</h3>
              <p className="text-gray-600 text-sm">Serving families across India for 65+ years</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">₹35L Cr</div>
              <h3 className="font-semibold text-gray-900 mb-2">Assets Under Management</h3>
              <p className="text-gray-600 text-sm">Strong financial foundation for your security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Family's Future?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get personalized policy recommendations based on your needs and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeInsurance;
