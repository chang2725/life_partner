
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Life Insurance', path: '/life-insurance' },
    { name: 'Blog', path: '/blog' },
    { name: 'News', path: '/news' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-all duration-300 group">
            <div className="relative">
              <Shield className="h-8 w-8 group-hover:scale-110 transition-transform duration-300" />
              <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-purple-500 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">LIC Agent</span>
              <span className="text-xs text-gray-600">Rajesh Kumar ✨</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 relative group ${
                  isActive(item.path) 
                    ? 'text-blue-600' 
                    : 'text-gray-700'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+919876543210" className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-all duration-300 hover:scale-105 group">
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium">+91 98765 43210</span>
            </a>
            <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/contact">Get Quote ✨</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 hover:scale-105"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-sm border-t border-gray-200 rounded-b-lg shadow-lg">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 hover:scale-105 ${
                    isActive(item.path)
                      ? 'text-blue-600 bg-gradient-to-r from-blue-50 to-purple-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2 border-t border-gray-200 mt-4 space-y-3">
                <a href="tel:+919876543210" className="flex items-center space-x-2 text-blue-600 hover:scale-105 transition-transform duration-300">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
                <Button asChild size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Get Quote ✨</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
