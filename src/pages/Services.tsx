import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Phone } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ogden Colon Hydrotherapy Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of alternative therapy services designed to promote optimal health, wellness, and detoxification.
          </p>
        </div>

        {/* Main Services */}
        <div className="space-y-12 mb-16">
          {/* Colon Hydrotherapy */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Colon Hydrotherapy</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Colon hydrotherapy and colonic irrigation are alternative therapies for the removal of waste matter 
                  from within the large intestine of the human digestive tract. A colon therapist using modern colon 
                  hydrotherapy equipment can, through a series of water fills and evacuations, remove large amounts 
                  of metabolic waste that may have been present in your colon for months or even years.
                </p>
                <p className="text-gray-600">
                  A professional colon therapist using modern colon hydrotherapy can help you achieve better digestive health and overall wellness.
                </p>
                <Link
                  to="/services/colon-hydrotherapy"
                  className="inline-flex items-center bg-sky-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="w-full h-80 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3188/spa-relax-relaxing-luxury.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Colon Hydrotherapy Service"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Ionic Foot Bath */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="w-full h-80 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center order-2 lg:order-1">
                <img
                  src="https://images.pexels.com/photos/3188/spa-relax-relaxing-luxury.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Ionic Foot Bath Service"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900">Ionic Foot Bath</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  An Ionic Footbath helps the body eliminate toxins such as heavy metals, herbicides, insecticides, 
                  coloring, additives and preservatives that we acquire from water, food and air. These substances 
                  become stored in joints, organs, nerves and tissues, creating an environment conducive to disease, 
                  allergies and immune system dysfunction.
                </p>
                <p className="text-gray-600">
                  An Ionic Foot Bath can draw these toxins out of the body through the feet and restore balance to all body systems.
                </p>
                <Link
                  to="/services/ionic-foot-bath"
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Asyra Machine */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Asyra Bioenergetic Feedback</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The Asyra machine gives an in-depth breakdown of a myriad of imbalances in the body. 
                  The Asyra is capable of detecting these imbalances and bringing them back into balance 
                  with the aid of a homeopathic preparation that is prepared on site while you wait.
                </p>
                <p className="text-gray-600">
                  This is known as functional medicine. The Asyra is FDA approved and is a non-invasive device 
                  to screen your body for energetic imbalances. If you ever wondered what is really going on 
                  inside your body, the Asyra machine can give you amazing insights.
                </p>
                <Link
                  to="/services/asyra-feedback"
                  className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Asyra Bioenergetic Feedback Service"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            All Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Colon Hydrotherapy</h4>
              <p className="text-gray-600 text-sm">Professional colon cleansing and detoxification</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">B.E.F.E. – Bio-Electric Field Enhancement</h4>
              <p className="text-gray-600 text-sm">Advanced bio-electric field therapy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Migun Thermal Massage Bed</h4>
              <p className="text-gray-600 text-sm">Therapeutic thermal massage treatment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">ASYRA® – Advanced Bioenergetic Feedback</h4>
              <p className="text-gray-600 text-sm">Comprehensive body system scanning</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Ionic Foot Bath</h4>
              <p className="text-gray-600 text-sm">Detoxifying ionic foot bath therapy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold text-gray-900 mb-2">Nutrition and Juice Fasting Guidance</h4>
              <p className="text-gray-600 text-sm">Professional nutritional counseling</p>
            </div>
          </div>
        </div>

        {/* Service Hours & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Clock className="mr-3 h-6 w-6 text-sky-600" />
              Service Hours
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-700 font-medium">Monday - Friday</span>
                <span className="text-sky-600 font-semibold">9am - 5pm</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-700 font-medium">Saturday</span>
                <span className="text-emerald-600 font-semibold">On occasion with appointment</span>
              </div>
            </div>
          </div>

          <div className="bg-sky-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Phone className="mr-3 h-6 w-6" />
              Schedule Today
            </h3>
            <p className="text-sky-100 mb-6">
              To ask a question or to schedule an appointment at Ogden Colon Hydrotherapy, 
              call Lori Underwood anytime or use our Contact Us form.
            </p>
            <div className="space-y-4">
              <a
                href="tel:(801) 479-5616"
                className="block text-center bg-white text-sky-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
              >
                Call (801) 479-5616
              </a>
              <Link
                to="/contact"
                className="block text-center border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-colors"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;