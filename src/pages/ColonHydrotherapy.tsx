import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Heart, Zap } from 'lucide-react';

const ColonHydrotherapy = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Colon Hydrotherapy
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional colon cleansing and detoxification using modern, safe equipment with over 20 years of experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              What is Colon Hydrotherapy?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ogden Colon Hydrotherapy – Inside Tract offers a variety of synergistic alternative therapies 
              with Colon Hydrotherapy being our primary service.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Colon hydrotherapy is a cleansing procedure by which waste material is effectively removed 
              from the large intestine of the human digestive tract, namely the colon.
            </p>
            <p className="text-gray-600 leading-relaxed">
              As professional colon therapists, we use a modern colon hydrotherapy machine to safely remove 
              large amounts of metabolic waste from a client's colon. Depending on your health and lifestyle habits, 
              fecal waste can accumulate in the colon for months or even years.
            </p>
          </div>

          <div className="w-full h-96 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl shadow-lg flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3188/spa-relax-relaxing-luxury.jpg?auto=compress&cs=tinysrgb&w=800"
              alt="Professional Colon Hydrotherapy Treatment"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Process Info */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How Colon Hydrotherapy Works
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            By the use of gravity and or pressure, filtered water is introduced into the colon, or more commonly 
            the large intestine, whereupon waste is softened, broken up and dispelled through a natural process called peristalsis.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Benefits of Colon Hydrotherapy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-sky-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Removes Toxic Waste</h4>
              <p className="text-gray-600">
                Safely removes accumulated metabolic waste that may have been present in your colon for months or years
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Improves Overall Health</h4>
              <p className="text-gray-600">
                Having a healthy colon is essential to maintaining total body health and preventing various ailments
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Restores Natural Function</h4>
              <p className="text-gray-600">
                Helps restore proper elimination function and can lead to improved energy and well-being
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="space-y-12 mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Is A Toxic Colon Making You Really Sick?
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Your colon could be making you sick. And you're not alone because millions of people are experiencing 
                various signs of gastrointestinal health problems including persistent diarrhea or constipation.
              </p>
              <p>
                Depending on your daily diet, amount of daily stress, and other lifestyle factors, waste material 
                can accumulate in your colon and create an environment that promotes poor health.
              </p>
              <p>
                This condition typically results in poor or erratic eliminations, which can lead to a wide variety 
                of health ailments, aches, pains and serious disease conditions if left untreated.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What To Expect During A Colon Hydrotherapy Session
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Prior to beginning your first Colon Hydrotherapy treatment, your therapist will ask you to complete 
                a personal health questionnaire and intake form. This information and your answers regarding your 
                general health helps your colon therapist identify current health issues.
              </p>
              <p>
                The treatment itself is conducted in a private, comfortable environment using modern, sanitary equipment. 
                Throughout the session, your comfort and privacy are our top priorities.
              </p>
              <p>
                Most clients find the experience to be relaxing and report feeling lighter and more energetic following their treatment.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions About Colon Hydrotherapy
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  What's the difference between colon hydrotherapy, colonic irrigation and enemas?
                </h4>
                <p className="text-gray-600">
                  While all these methods involve cleansing the colon, colon hydrotherapy uses modern equipment 
                  and filtered water to provide a more thorough and comfortable cleansing experience compared to traditional enemas.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Is colon hydrotherapy safe?
                </h4>
                <p className="text-gray-600">
                  When performed by a trained professional using proper equipment and protocols, colon hydrotherapy 
                  is considered safe for most individuals. We use only modern, sanitary equipment and follow strict safety guidelines.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How many sessions will I need?
                </h4>
                <p className="text-gray-600">
                  The number of sessions varies depending on individual health conditions and goals. 
                  During your consultation, we'll discuss a personalized treatment plan that's right for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-sky-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">
            Ready to Start Your Journey to Better Digestive Health?
          </h3>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation and learn how colon hydrotherapy can benefit your health and wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-sky-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:(801) 479-5616"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-sky-600 transition-colors"
            >
              Call (801) 479-5616
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColonHydrotherapy;