
import { Calendar, ExternalLink, TrendingUp, AlertCircle, Award, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'LIC Launches New Digital Initiative for Faster Policy Services',
      summary: 'Life Insurance Corporation of India introduces new digital platform to streamline policy purchases and claim processes.',
      date: '2024-01-20',
      category: 'Digital Innovation',
      source: 'LIC Official',
      readTime: '3 min read',
      trending: true
    },
    {
      id: 2,
      title: 'LIC Reports Strong Q3 Results with 15% Growth in New Business',
      summary: 'The state-owned insurer shows robust performance with increased policy sales and improved market share.',
      date: '2024-01-18',
      category: 'Financial Results',
      source: 'Economic Times',
      readTime: '4 min read',
      trending: false
    },
    {
      id: 3,
      title: 'New Tax Benefits for LIC Policyholders Under Budget 2024',
      summary: 'Government announces enhanced tax deductions and benefits for life insurance premium payments.',
      date: '2024-01-15',
      category: 'Tax & Policy',
      source: 'Financial Express',
      readTime: '5 min read',
      trending: true
    },
    {
      id: 4,
      title: 'LIC Introduces Special Pension Plan for Senior Citizens',
      summary: 'New immediate annuity plan offers higher returns and flexible payout options for retirees.',
      date: '2024-01-12',
      category: 'Product Launch',
      source: 'Business Standard',
      readTime: '3 min read',
      trending: false
    },
    {
      id: 5,
      title: 'LIC Claims Settlement Ratio Reaches All-Time High of 98.74%',
      summary: 'Corporation maintains its position as most trusted insurer with industry-leading claim settlement performance.',
      date: '2024-01-10',
      category: 'Performance',
      source: 'Hindu Business Line',
      readTime: '4 min read',
      trending: true
    },
    {
      id: 6,
      title: 'Digital India: LIC Partners with FinTech for Enhanced Customer Experience',
      summary: 'Strategic partnership aims to leverage technology for better policy management and customer service.',
      date: '2024-01-08',
      category: 'Partnerships',
      source: 'Mint',
      readTime: '3 min read',
      trending: false
    },
    {
      id: 7,
      title: 'LIC Announces Special Discounts for Women Policyholders',
      summary: 'New initiative offers reduced premiums and additional benefits for women across various policy categories.',
      date: '2024-01-05',
      category: 'Special Offers',
      source: 'Times of India',
      readTime: '4 min read',
      trending: false
    },
    {
      id: 8,
      title: 'Insurance Sector Growth: LIC Leads Market Expansion',
      summary: 'Industry analysis shows LIC maintaining market leadership while driving overall sector growth.',
      date: '2024-01-03',
      category: 'Market Analysis',
      source: 'Livemint',
      readTime: '6 min read',
      trending: false
    },
    {
      id: 9,
      title: 'LIC IPO Anniversary: Stock Performance and Future Outlook',
      summary: 'Two years post-IPO, LIC shares show stability with positive long-term growth prospects.',
      date: '2024-01-01',
      category: 'Stock Market',
      source: 'Moneycontrol',
      readTime: '5 min read',
      trending: false
    }
  ];

  const quickUpdates = [
    {
      title: 'Premium Payment Deadline Extended',
      description: 'LIC extends grace period for premium payments due to festive season',
      type: 'info'
    },
    {
      title: 'New Branch Opening',
      description: 'LIC opens 50 new branches across tier-2 and tier-3 cities',
      type: 'success'
    },
    {
      title: 'System Maintenance Notice',
      description: 'Online services will be temporarily unavailable on Jan 25th from 2-4 AM',
      type: 'warning'
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'info': return AlertCircle;
      case 'success': return Award;
      case 'warning': return AlertCircle;
      default: return AlertCircle;
    }
  };

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-blue-600 bg-blue-50';
      case 'success': return 'text-green-600 bg-green-50';
      case 'warning': return 'text-orange-600 bg-orange-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              LIC News & 
              <span className="text-blue-600 block">Updates</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest news, announcements, and developments from Life Insurance Corporation of India. 
              Get insights on new policies, market trends, and regulatory updates.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Updates */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-blue-600" />
            Quick Updates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickUpdates.map((update, index) => {
              const IconComponent = getUpdateIcon(update.type);
              return (
                <div key={index} className={`p-4 rounded-lg border-l-4 ${getUpdateColor(update.type)}`}>
                  <div className="flex items-start space-x-3">
                    <IconComponent className="h-5 w-5 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{update.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{update.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Trending News</h2>
            <Badge className="bg-red-600 flex items-center space-x-1">
              <TrendingUp className="h-3 w-3" />
              <span>Hot</span>
            </Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {newsArticles.filter(article => article.trending).slice(0, 2).map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <Badge className="bg-blue-600">{article.category}</Badge>
                    {article.trending && (
                      <Badge variant="destructive">Trending</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                    <span>•</span>
                    <span>{article.source}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">{article.summary}</CardDescription>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Read Full Article <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <div className="flex items-center space-x-2">
              <Newspaper className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">All Categories</span>
            </div>
          </div>
          <div className="space-y-6">
            {newsArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-3">
                        <Badge variant="secondary">{article.category}</Badge>
                        {article.trending && (
                          <Badge className="bg-red-600">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600">{article.summary}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(article.date)}</span>
                        </div>
                        <span>•</span>
                        <span>{article.source}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4 group-hover:text-blue-600 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Sources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our News Sources</h2>
            <p className="text-lg text-gray-600">We curate news from trusted financial and business publications</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="font-bold text-lg text-gray-800">Economic Times</div>
            <div className="font-bold text-lg text-gray-800">Business Standard</div>
            <div className="font-bold text-lg text-gray-800">Financial Express</div>
            <div className="font-bold text-lg text-gray-800">Mint</div>
            <div className="font-bold text-lg text-gray-800">Moneycontrol</div>
            <div className="font-bold text-lg text-gray-800">Times of India</div>
            <div className="font-bold text-lg text-gray-800">Hindu Business Line</div>
            <div className="font-bold text-lg text-gray-800">LIC Official</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
