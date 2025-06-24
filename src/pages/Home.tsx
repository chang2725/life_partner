
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Award, Heart, Phone, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Home = () => {
  const policyCategories = [
    {
      title: 'Term Life Insurance',
      description: 'Pure protection at affordable premiums for your family\'s security',
      icon: Shield,
      color: 'bg-blue-50 text-blue-600',
      link: '/life-insurance'
    },
    {
      title: 'Investment Plans',
      description: 'Grow your wealth while securing your future with endowment plans',
      icon: Award,
      color: 'bg-green-50 text-green-600',
      link: '/life-insurance'
    },
    {
      title: 'Pension Plans',
      description: 'Ensure a comfortable retirement with guaranteed income',
      icon: Heart,
      color: 'bg-purple-50 text-purple-600',
      link: '/life-insurance'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      text: 'Rajesh ji helped us choose the perfect policy for our family. His guidance during the claim process was invaluable.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      location: 'Delhi',
      text: 'Professional, trustworthy, and always available. Got my policy within a week with all documents sorted.',
      rating: 5
    },
    {
      name: 'Sunita Devi',
      location: 'Bangalore',
      text: 'Excellent service! Rajesh explained all policy details clearly and helped me save on premiums.',
      rating: 5
    }
  ];

  const whyChooseUs = [
    { text: '15+ Years of Experience', icon: Award },
    { text: 'Certified LIC Agent', icon: CheckCircle },
    { text: '1000+ Happy Customers', icon: Users },
    { text: '24/7 Customer Support', icon: Phone }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Secure Your Family's
                <span className="text-blue-600 block">Future Today</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get expert guidance on Life Insurance policies from LIC's trusted agent. 
                Protect your loved ones with the right coverage at the best premiums.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/life-insurance">View Policies</Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <item.icon className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy Indian family"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Trusted by 1000+</p>
                    <p className="text-sm text-gray-600">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About LIC Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LIC?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Life Insurance Corporation of India - India's largest life insurer with over 65 years of trust
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Guaranteed Protection</h3>
              <p className="text-gray-600">Government-backed life insurance with guaranteed claims payment</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600">Over 290 million policies issued with excellent claim settlement ratio</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Wide Network</h3>
              <p className="text-gray-600">Present in every district of India with 2000+ branches</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Policy Categories</h2>
            <p className="text-lg text-gray-600">Find the perfect insurance solution for your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policyCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <CardDescription className="text-gray-600">
                    {category.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Link to={category.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real stories from satisfied policyholders</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl text-blue-100">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input placeholder="Enter your phone number" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <Input placeholder="Enter your age" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea placeholder="Tell us about your insurance requirements" rows={4} />
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
