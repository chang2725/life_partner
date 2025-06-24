
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Complete Guide to Term Life Insurance in 2024',
      excerpt: 'Everything you need to know about term life insurance, from benefits to choosing the right coverage amount for your family.',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Life Insurance',
      author: 'Rajesh Kumar',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'Tax Benefits of LIC Policies: Section 80C and 10(10D) Explained',
      excerpt: 'Maximize your tax savings with LIC policies. Learn about deductions under Section 80C and tax-free maturity benefits.',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Tax Planning',
      author: 'Rajesh Kumar',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 3,
      title: 'How to Calculate the Right Life Insurance Coverage',
      excerpt: 'Step-by-step guide to determine how much life insurance you actually need based on your income, expenses, and goals.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Financial Planning',
      author: 'Rajesh Kumar',
      date: '2024-01-05',
      readTime: '7 min read',
      featured: true
    },
    {
      id: 4,
      title: 'LIC vs Private Insurance: Which is Better?',
      excerpt: 'Detailed comparison between LIC and private insurance companies covering premiums, features, and claim settlement.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Comparison',
      author: 'Rajesh Kumar',
      date: '2023-12-28',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Understanding ULIPs: Investment cum Insurance Plans',
      excerpt: 'Complete guide to Unit Linked Insurance Plans, their benefits, risks, and who should consider investing in them.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Investment',
      author: 'Rajesh Kumar',
      date: '2023-12-20',
      readTime: '9 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Retirement Planning with LIC Pension Plans',
      excerpt: 'How to secure your retirement with LIC pension plans. Compare different options and choose the best one for you.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Retirement',
      author: 'Rajesh Kumar',
      date: '2023-12-15',
      readTime: '11 min read',
      featured: true
    },
    {
      id: 7,
      title: 'Child Insurance Plans: Securing Your Child\'s Future',
      excerpt: 'Everything about child insurance plans including education funding, premium waiver benefits, and maturity planning.',
      image: 'https://images.unsplash.com/photo-1476234251651-f353ce8cd5c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Child Planning',
      author: 'Rajesh Kumar',
      date: '2023-12-10',
      readTime: '8 min read',
      featured: false
    },
    {
      id: 8,
      title: 'LIC Policy Claim Process: Step-by-Step Guide',
      excerpt: 'Detailed guide on how to file LIC policy claims, required documents, and timeline for claim settlement.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Claims',
      author: 'Rajesh Kumar',
      date: '2023-12-05',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 9,
      title: 'Women and Life Insurance: Special Considerations',
      excerpt: 'Why women need life insurance and special LIC plans designed for women\'s unique financial needs and goals.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Women',
      author: 'Rajesh Kumar',
      date: '2023-11-30',
      readTime: '7 min read',
      featured: false
    }
  ];

  const categories = ['All', 'Life Insurance', 'Tax Planning', 'Financial Planning', 'Investment', 'Retirement'];
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Insurance & Financial
              <span className="text-blue-600 block">Planning Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Expert insights on life insurance, financial planning, and securing your family's future. 
              Stay updated with the latest trends and tips from your trusted LIC agent.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
            <Badge className="bg-blue-600">Editor's Choice</Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  <Button variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex items-center space-x-2">
              <Tag className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600">Filter by category:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3 text-xs">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center space-x-3 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="line-clamp-3 mb-4">{post.excerpt}</CardDescription>
                  <Button variant="ghost" size="sm" className="group-hover:text-blue-600 transition-colors p-0">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to get the latest articles on insurance and financial planning delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
