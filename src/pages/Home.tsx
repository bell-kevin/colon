import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Shield, Zap, Users, Phone, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-emerald-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional Alternative Therapy Services
                  <span className="text-sky-600"> For Life</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We have the knowledge to help you find true health and balance in your life! 
                  Our health services change people's lives... Find out what we can do for you!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-sky-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                >
                  Schedule Appointment
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-sky-600 text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300 text-center"
                >
                  View Services
                </Link>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-5 w-5 text-sky-600" />
                <span className="font-semibold">(801) 479-5616</span>
                <span>- Call anytime!</span>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-sky-100 to-emerald-100 rounded-2xl shadow-2xl flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3188/spa-relax-relaxing-luxury.jpg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wellness and Health"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that professional, caring treatment makes in your journey to better health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-sky-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Professional Care</h3>
              <p className="text-gray-600">
                Over 20 years of experience with compassionate, professional treatment
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Safe & Modern</h3>
              <p className="text-gray-600">
                State-of-the-art equipment and FDA approved technologies for your safety
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>
              <p className="text-gray-600">
                Thousands of satisfied clients with improved health and wellness
              </p>
            </div>

            <div className="text-center space-y-4 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Personal Approach</h3>
              <p className="text-gray-600">
                Individualized care tailored to your specific health needs and goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Primary Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of alternative therapy services designed to promote optimal health and wellness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Colon Hydrotherapy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Colon Hydrotherapy"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Colon Hydrotherapy</h3>
                  <p className="text-gray-600 mb-6">
                    A cleansing procedure for the removal of waste matter from the large intestine. 
                    Using modern equipment, we can safely remove accumulated metabolic waste.
                  </p>
                  <Link
                    to="/services/colon-hydrotherapy"
                    className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Asyra Feedback */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Asyra Bioenergetic Feedback"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Asyra Bioenergetic Feedback</h3>
                  <p className="text-gray-600 mb-6">
                    FDA approved technology that provides in-depth analysis of body imbalances. 
                    Detects hidden health issues and creates custom homeopathic preparations.
                  </p>
                  <Link
                    to="/services/asyra-feedback"
                    className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Ionic Foot Bath */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="space-y-6">
                <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Ionic Foot Bath"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Ionic Foot Bath</h3>
                  <p className="text-gray-600 mb-6">
                    A relaxing, therapeutic foot bath that helps detoxify the body and restore balance. 
                    Ion-rich water creates a sense of well-being and relaxation.
                  </p>
                  <Link
                    to="/services/ionic-foot-bath"
                    className="inline-flex items-center text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey to Better Health?
          </h2>
          <p className="text-xl text-sky-100 mb-8">
            Contact us today to schedule your consultation and discover how our services can help you achieve optimal wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Appointment
            </Link>
            <a
              href="tel:(801) 479-5616"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300"
            >
              Call (801) 479-5616
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;