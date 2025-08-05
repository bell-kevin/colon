import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Search, Zap } from 'lucide-react';

const AsyraFeedback = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Asyra Bioenergetic Feedback
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FDA approved technology that provides comprehensive insights into your body's energetic imbalances and creates personalized homeopathic solutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Advanced Functional Medicine Technology
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              ASYRA Bioenergetic Feedback can provide an in-depth breakdown of a myriad of different imbalances 
              in the human body. Using the ASYRA machine, a practitioner is able to run a comprehensive set 
              of body system scans which detect these hidden imbalances and bring them back into balance.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This type of health technology is known as functional medicine and the ASYRA is an FDA approved 
              and non-invasive device. It screens for energetic imbalances that reflect imbalances in your 
              physiology as well as the presence of toxicity.
            </p>
            <p className="text-gray-600 leading-relaxed font-semibold">
              Toxicity of the body is the leading cause of all disease and aging, and the leading cause of premature death.
            </p>
          </div>

          <div className="w-full h-96 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl shadow-lg flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Asyra Bioenergetic Feedback Technology"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Can Asyra Detect?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Hidden Health Issues</h4>
              <p className="text-gray-600">
                Find hidden health problems you may be unaware of, including underlying causes of symptoms
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Allergies & Deficiencies</h4>
              <p className="text-gray-600">
                Test for food allergies, mineral deficiencies, and nutritional imbalances affecting your health
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-amber-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Emotional Challenges</h4>
              <p className="text-gray-600">
                Identify emotional imbalances and stress factors that may be impacting your physical health
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How Asyra Bioenergetic Feedback Works
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              The ASYRA machine can give you an amazing insight into what is really going on inside your body. 
              It uses advanced bioenergetic scanning technology to detect imbalances at the cellular level.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  1
                </div>
                <h4 className="font-semibold text-gray-900">Comprehensive Scan</h4>
                <p className="text-gray-600 text-sm">
                  The ASYRA runs a comprehensive set of body system scans to detect energetic imbalances
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  2
                </div>
                <h4 className="font-semibold text-gray-900">Analysis & Results</h4>
                <p className="text-gray-600 text-sm">
                  Detailed analysis reveals imbalances, toxicities, and areas needing attention
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  3
                </div>
                <h4 className="font-semibold text-gray-900">Custom Solution</h4>
                <p className="text-gray-600 text-sm">
                  Personalized homeopathic preparation is created on-site to address your specific needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="space-y-12 mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              FDA Approved & Non-Invasive
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                The ASYRA is FDA approved and represents the cutting edge of functional medicine technology. 
                Unlike traditional diagnostic methods that often only detect problems after they've become 
                significant health issues, the ASYRA can identify imbalances in their early stages.
              </p>
              <p>
                The screening process is completely non-invasive and painless. You simply hold onto sensors 
                while the machine conducts its comprehensive analysis of your body's energetic patterns.
              </p>
              <p>
                This technology allows us to create personalized treatment plans based on your body's 
                specific needs rather than taking a one-size-fits-all approach to health and wellness.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Custom Homeopathic Preparations
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                One of the most remarkable features of the ASYRA system is its ability to create custom 
                homeopathic preparations on-site while you wait. These preparations are specifically 
                formulated based on your individual scan results.
              </p>
              <p>
                The homeopathic remedies work to restore balance to the areas of imbalance identified 
                during your scan. This personalized approach often produces better results than 
                generic supplements or treatments.
              </p>
              <p>
                Many clients report noticeable improvements in their energy levels, overall well-being, 
                and specific health concerns after using their custom homeopathic preparations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Makes ASYRA Different?
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Traditional medical testing often only reveals problems after they've progressed to 
                a significant stage. The ASYRA can detect energetic imbalances that may indicate 
                developing issues before they become major health problems.
              </p>
              <p>
                The system can test for thousands of different items including foods, environmental 
                toxins, emotional stressors, pathogens, and nutritional deficiencies. This comprehensive 
                approach provides a complete picture of your health status.
              </p>
              <p>
                Many clients are amazed at how accurately the ASYRA identifies issues they're already 
                aware of, as well as revealing hidden problems they didn't know existed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">
            Discover What's Really Going On Inside Your Body
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Experience the power of advanced bioenergetic feedback technology and receive your personalized homeopathic solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Schedule ASYRA Scan <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:(801) 479-5616"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Call (801) 479-5616
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsyraFeedback;