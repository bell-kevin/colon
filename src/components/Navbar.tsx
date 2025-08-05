import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-sky-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>(801) 479-5616</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>2021 East Ryan Circle, Ogden UT 84403</span>
            </div>
          </div>
          <div className="text-sm font-medium">
            Monday - Friday: 9am - 5pm | Saturday: By Appointment
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <div className="text-2xl font-bold text-sky-600">
                  Ogden Colon Hydrotherapy
                  <div className="text-sm text-emerald-600 font-medium">
                    "Your Inside Tract To A Healthier You!"
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-sky-600 bg-sky-50' 
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about') 
                    ? 'text-sky-600 bg-sky-50' 
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                About
              </Link>
              <div className="relative group">
                <Link
                  to="/services"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive('/services') 
                      ? 'text-sky-600 bg-sky-50' 
                      : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  Services
                </Link>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/services/colon-hydrotherapy"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                    >
                      Colon Hydrotherapy
                    </Link>
                    <Link
                      to="/services/asyra-feedback"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                    >
                      Asyra Bioenergetic Feedback
                    </Link>
                    <Link
                      to="/services/ionic-foot-bath"
                      className="block px-4 py-2 text-sm text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                    >
                      Ionic Foot Bath
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                to="/reviews"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/reviews') 
                    ? 'text-sky-600 bg-sky-50' 
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                Our Reviews
              </Link>
              <Link
                to="/contact"
                className={`bg-sky-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-sky-700 transition-colors ${
                  isActive('/contact') ? 'bg-sky-700' : ''
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-sky-50 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/services/colon-hydrotherapy"
                className="block px-6 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Colon Hydrotherapy
              </Link>
              <Link
                to="/services/asyra-feedback"
                className="block px-6 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Asyra Feedback
              </Link>
              <Link
                to="/services/ionic-foot-bath"
                className="block px-6 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Ionic Foot Bath
              </Link>
              <Link
                to="/reviews"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50"
                onClick={() => setIsOpen(false)}
              >
                Our Reviews
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium bg-sky-600 text-white hover:bg-sky-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;