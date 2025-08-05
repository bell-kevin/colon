import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Droplets, Heart, Zap } from 'lucide-react';

const IonicFootBath = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ionic Foot Bath
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A relaxing, therapeutic foot bath that helps detoxify the body and restore balance to all of the body's systems.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              What is an Ionic Foot Bath?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              This relaxing, therapeutic foot bath helps detoxify the body and restore balance to all 
              of the body's systems. Each bath introduces the cells to ion rich, naturally charged water, 
              creating a sense of well being and relaxation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ionic Foot Baths (also known as ion foot baths or ion cleanse machines) aid in the detoxification 
              of the body. Toxins like heavy metals build up in our systems for a variety of reasons and cause 
              a wide range of health dysfunctions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A foot bath is a convenient and safe way to start or add to your detoxification routine.
            </p>
          </div>

          <div className="w-full h-96 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl shadow-lg flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Relaxing Ionic Foot Bath Treatment"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 lg:p-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How Do Ionic Foot Baths Work?
          </h3>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Ionic Detox Foot Bath Systems are currently the only method for creating a bio-charge 
              that is both safe and compatible with living matter. Water is the obvious medium used because 
              up to 75% of the human body is water.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Himalayan pink sea salt is added to the water to create a mineral rich solution that will 
              be transferred into the body by osmosis through the 2000 pores in your feet. Similar to 
              cellular water, this "bathes" the body encouraging the release of toxins.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold text-emerald-700">
              The treatment is approximately 30 minutes and is followed by an application of our exclusive 
              aromatherapy healing foot rub. Clients leave feeling refreshed and renewed!
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Benefits of Ionic Foot Bath Therapy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <Droplets className="h-8 w-8 text-emerald-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Removes Heavy Metals</h4>
              <p className="text-gray-600">
                Helps eliminate heavy metals, herbicides, insecticides, and other toxins acquired from our environment
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Restores Balance</h4>
              <p className="text-gray-600">
                Restores balance to all body systems and supports immune system function
              </p>
            </div>

            <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                <Zap className="h-8 w-8 text-cyan-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Promotes Relaxation</h4>
              <p className="text-gray-600">
                Creates a sense of well-being and relaxation, reducing stress and promoting healing
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="space-y-12 mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What Toxins Can Be Eliminated?
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                An Ionic Footbath helps the body eliminate toxins such as heavy metals, herbicides, 
                insecticides, coloring, additives and preservatives that we acquire from water, food and air.
              </p>
              <p>
                According to health experts, these substances become stored in joints, organs, nerves 
                and tissues, creating an environment conducive to disease, allergies and immune system dysfunction.
              </p>
              <p>
                The ionic foot bath process helps draw these accumulated toxins out of the body through 
                the feet, providing a gentle but effective detoxification method.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              The Complete Treatment Experience
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                The treatment begins with a relaxing 30-minute ionic foot bath session. During this time, 
                you can simply relax while the ionic system works to encourage your body's natural 
                detoxification processes.
              </p>
              <p>
                Following the foot bath, we apply our exclusive aromatherapy healing foot rub, which 
                provides additional therapeutic benefits and leaves you feeling completely refreshed and renewed.
              </p>
              <p>
                Many clients describe the experience as deeply relaxing and report feeling lighter, 
                more energized, and with an overall sense of well-being after their treatment.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Who Can Benefit from Ionic Foot Bath Therapy?
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Ionic foot bath therapy can benefit virtually anyone looking to support their body's 
                natural detoxification processes and improve their overall sense of well-being.
              </p>
              <p>
                Clients with chronic pain conditions, high levels of heavy metals, stress and depressive 
                conditions have reported significant improvement through the regular use of Ionic Foot Baths.
              </p>
              <p>
                Whether you're dealing with specific health challenges or simply want to maintain 
                optimal wellness, ionic foot bath therapy can be a valuable addition to your health routine.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Safe and Effective Detoxification
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Our ionic foot bath systems use only safe, natural methods to encourage detoxification. 
                The process works with your body's natural ability to eliminate toxins rather than 
                forcing or overwhelming your system.
              </p>
              <p>
                The mineral-rich solution created with Himalayan pink sea salt provides essential 
                minerals while supporting the detoxification process through the thousands of pores 
                in your feet.
              </p>
              <p>
                This gentle approach makes ionic foot bath therapy suitable for most people and 
                can be easily incorporated into a regular wellness routine.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">
            Experience the Relaxation and Renewal of Ionic Foot Bath Therapy
          </h3>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Book your ionic foot bath session today and discover the benefits of gentle, effective detoxification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Schedule Session <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a
              href="tel:(801) 479-5616"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Call (801) 479-5616
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IonicFootBath;