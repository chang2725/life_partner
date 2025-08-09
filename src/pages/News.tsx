import { Calendar, ExternalLink, TrendingUp, AlertCircle, Award, Newspaper, Star, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';

interface NewsItem {
  headline: string;
  url: string;
  imageUrl: string;
}

interface QuickUpdate {
  title: string;
  description: string;
  type: 'info' | 'success' | 'warning';
}

const News = () => {
  const [newsArticles, setNewsArticles] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

  const AgentId = import.meta.env.VITE_API_AUTH_TOKEN || 'http://localhost:3000/api';
  const quickUpdates: QuickUpdate[] = [
    { title: 'Premium Payment Deadline Extended', description: 'LIC extends grace period for premium payments due to festive season', type: 'info' },
    { title: 'New Branch Opening', description: 'LIC opens 50 new branches across tier-2 and tier-3 cities', type: 'success' },
    { title: 'System Maintenance Notice', description: 'Online services will be temporarily unavailable on Jan 25th from 2-4 AM', type: 'warning' }
  ];

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/NEWS?id=${AgentId}`); // Replace with actual API endpoint
        const data = await response.json();
        setNewsArticles(data.data || []);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch {
      return dateString;
    }
  };

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'info': return AlertCircle;
      case 'success': return Award;
      case 'warning': return AlertCircle;
      default: return AlertCircle;
    }
  };

  const getUpdateStyles = (type: string) => {
    switch (type) {
      case 'info': 
        return 'bg-gradient-to-r from-blue-50 to-cyan-50 border-l-blue-400 text-blue-700';
      case 'success': 
        return 'bg-gradient-to-r from-green-50 to-emerald-50 border-l-green-400 text-green-700';
      case 'warning': 
        return 'bg-gradient-to-r from-orange-50 to-amber-50 border-l-orange-400 text-orange-700';
      default: 
        return 'bg-gradient-to-r from-gray-50 to-slate-50 border-l-gray-400 text-gray-700';
    }
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Card key={idx} className="overflow-hidden animate-pulse">
          <div className="aspect-video bg-gradient-to-r from-gray-200 to-gray-300"></div>
          <CardHeader className="p-4 pb-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="h-3 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm border border-blue-400/30">
              <Star className="w-4 h-4 mr-2" />
              Latest Updates & News
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                LIC News &
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Updates
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay informed with the latest news, announcements, and developments from 
              <span className="text-blue-300 font-semibold"> Life Insurance Corporation of India</span>. 
              Get insights on new policies, market trends, and regulatory updates.
            </p>
           
          </div>
        </div>
      </section>

      {/* Enhanced Quick Updates */}
      <section className="py-12 bg-gradient-to-r from-gray-50 to-blue-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg mr-3">
              <AlertCircle className="h-6 w-6 text-blue-600" />
            </div>
            Quick Updates
            <Badge className="ml-4 bg-red-100 text-red-600 animate-pulse">Live</Badge>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickUpdates.map((update, index) => {
              const IconComponent = getUpdateIcon(update.type);
              return (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl border-l-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ${getUpdateStyles(update.type)}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-white/80 rounded-lg">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{update.title}</h3>
                      <p className="text-sm leading-relaxed opacity-90">{update.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced News Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Latest News
              </h2>
              <p className="text-gray-600 text-lg">Curated updates from trusted sources</p>
            </div>
            <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-200">
              <Newspaper className="h-5 w-5 text-blue-600" />
              <span className="text-blue-700 font-medium">All Categories</span>
            </div>
          </div>
          
          {/* News Grid */}
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article, idx) => (
                <Card 
                  key={idx} 
                  className="group h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={article.imageUrl} 
                      alt={article.headline} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white shadow-lg">News</Badge>
                  </div>
                  
                  <CardHeader className="flex-grow p-6 pb-4">
                    <CardTitle className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {article.headline}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-6 pt-0">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="inline h-4 w-4 mr-2" />
                      {formatDate(new Date().toISOString())}
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                      {article.headline} - Click to read the complete article and stay updated with the latest developments.
                    </p>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      asChild 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        Read Full Article 
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          
          {/* Enhanced Empty State */}
          {!isLoading && newsArticles.length === 0 && (
            <div className="text-center py-20">
              <div className="p-4 bg-gray-100 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Newspaper className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No news available</h3>
              <p className="text-gray-500 text-lg mb-6">Check back later for the latest updates</p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Refresh Page
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced News Sources */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted News Sources</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We curate news from India's most respected financial and business publications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              'Economic Times', 'Business Standard', 'Financial Express', 'Mint',
              'Moneycontrol', 'Times of India', 'Hindu Business Line', 'LIC Official'
            ].map((source, index) => (
              <div 
                key={source}
                className="group cursor-pointer transform hover:scale-110 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 border border-white/20">
                  <div className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors text-center">
                    {source}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 text-sm">
              News content is aggregated from multiple sources for comprehensive coverage
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;