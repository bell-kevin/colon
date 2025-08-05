import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-sky-400">
              Ogden Colon Hydrotherapy
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional alternative therapy services with over 20 years of experience. 
              Your inside tract to a healthier you!
            </p>
            <div className="text-emerald-400 font-medium">
              Lori Underwood, Colon Therapist
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300">(801) 479-5616</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-sky-400 mt-1" />
                <span className="text-gray-300">
                  2021 East Ryan Circle<br />
                  Ogden, UT 84403
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300">bellkevin@pm.me</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Service Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-sky-400" />
                <span className="text-gray-300 text-sm">Monday - Friday: 9am - 5pm</span>
              </div>
              <div className="ml-6 text-gray-300 text-sm">
                Saturday: By Appointment Only
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                About Lori Underwood
              </Link>
              <Link to="/services/colon-hydrotherapy" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Colon Hydrotherapy
              </Link>
              <Link to="/services/asyra-feedback" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Asyra Bioenergetic Feedback
              </Link>
              <Link to="/services/ionic-foot-bath" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Ionic Foot Bath
              </Link>
              <Link to="/reviews" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Our Reviews
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-sky-400 transition-colors text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2012 - 2025 OgdenColonHydrotherapy.com. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 text-sm transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;