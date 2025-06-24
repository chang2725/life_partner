
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 98765 43210', '+91 87654 32109'],
      description: 'Available 9 AM - 8 PM (Mon-Sat)',
      color: 'text-blue-600 bg-blue-50'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['rajesh.lic@gmail.com'],
      description: 'Response within 24 hours',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123, Business Center', 'Connaught Place', 'New Delhi - 110001'],
      description: 'Visit by appointment',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 9:00 AM - 7:00 PM', 'Saturday: 9:00 AM - 5:00 PM', 'Sunday: By Appointment'],
      description: 'Emergency support available',
      color: 'text-orange-600 bg-orange-50'
    }
  ];

  const services = [
    'New Policy Purchase',
    'Policy Review & Analysis',
    'Premium Payment Assistance',
    'Claim Settlement Support',
    'Policy Loan Processing',
    'Financial Planning Consultation',
    'Other Services'
  ];

  const whyChooseMe = [
    {
      title: '15+ Years Experience',
      description: 'Extensive expertise in LIC products and financial planning'
    },
    {
      title: 'Personal Attention',
      description: 'Dedicated support throughout your policy journey'
    },
    {
      title: 'Quick Response',
      description: 'Fast turnaround on queries and policy processing'
    },
    {
      title: 'Transparent Advice',
      description: 'Honest recommendations based on your actual needs'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
              <span className="text-blue-600 block">For Expert Guidance</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to secure your family's future? Contact me for personalized insurance solutions, 
              policy reviews, or any questions about LIC products. I'm here to help you make informed decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${info.color} flex items-center justify-center mx-auto mb-4`}>
                    <info.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-medium text-gray-900">{detail}</p>
                  ))}
                  <CardDescription className="text-sm">{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Me a Message</h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and I'll get back to you within 24 hours with personalized advice.
                </p>
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input placeholder="Enter your full name" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input placeholder="Enter your phone number" required />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input type="email" placeholder="Enter your email" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Age
                        </label>
                        <Input placeholder="Enter your age" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required
                      </label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, '-')}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        placeholder="Tell me about your insurance requirements, questions, or how I can help you..."
                        rows={5}
                        required
                      />
                    </div>
                    <div className="flex items-start space-x-2">
                      <input type="checkbox" id="consent" className="mt-1" required />
                      <label htmlFor="consent" className="text-sm text-gray-600">
                        I agree to be contacted regarding LIC policies and services. Your information will be kept confidential.
                      </label>
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Office Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit My Office</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Located in the heart of Delhi, my office is easily accessible by metro and road. 
                  Schedule an appointment for face-to-face consultation.
                </p>
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123, Business Center, Connaught Place</p>
                  </div>
                </div>
              </Card>

              {/* Why Choose Me */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Me?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {whyChooseMe.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prefer Instant Communication?</h2>
            <p className="text-lg text-gray-600">Choose your preferred way to connect with me</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Direct Call</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Get immediate assistance over phone</p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
                  <a href="tel:+919876543210">Call Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>WhatsApp Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Quick messages and document sharing</p>
                <Button asChild className="bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    Start Chat
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow group">
              <CardHeader>
                <Mail className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Detailed queries and document exchange</p>
                <Button asChild className="bg-purple-600 hover:bg-purple-700 group-hover:scale-105 transition-transform">
                  <a href="mailto:rajesh.lic@gmail.com">Send Email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't wait for tomorrow. Let's discuss your insurance needs today and create a comprehensive 
            protection plan for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <a href="tel:+919876543210">Schedule Free Consultation</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Me
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
