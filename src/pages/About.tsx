import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            About Lori Underwood
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dedicated colon hydrotherapist with over 20 years of experience helping clients achieve optimal health and wellness.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="w-full h-96 bg-gradient-to-br from-sky-100 to-emerald-100 rounded-2xl shadow-lg flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lori Underwood - Professional Colon Therapist"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              A Personal Journey to Health and Healing
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Lori Underwood is a practicing colon hydrotherapist with over 20 years of experience. 
                Many of her clients believe her to be Ogden's premiere provider of Colon Hydrotherapy services.
              </p>
              <p>
                As a child, Lori was very sickly and suffered with severe migraine headaches which began when she was just 2 years old. 
                Unfortunately, this pattern of ill health continued well into her adult years, including a very serious episode of toxic shock.
              </p>
              <p>
                For 25 years, Lori endured numerous unnecessary medical treatments, none of which provided any long-term relief. 
                But she was never willing to accept her poor health circumstances...
              </p>
              <p>
                So she began a quest to discover the hidden secrets to true and lasting health. 
                Ultimately, after years of investigation, Lori came to understand that migraine headaches were simply the result of having too many toxins in her body.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto">
              <Clock className="h-8 w-8 text-sky-600" />
            </div>
            <div className="text-3xl font-bold text-sky-600">20+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>

          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="h-8 w-8 text-emerald-600" />
            </div>
            <div className="text-3xl font-bold text-emerald-600">1000+</div>
            <div className="text-gray-600">Satisfied Clients</div>
          </div>

          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="h-8 w-8 text-amber-600" />
            </div>
            <div className="text-3xl font-bold text-amber-600">Certified</div>
            <div className="text-gray-600">Professional</div>
          </div>

          <div className="text-center space-y-4 p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-purple-600">100%</div>
            <div className="text-gray-600">Compassionate Care</div>
          </div>
        </div>

        {/* Story Continuation */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              From Personal Struggle to Professional Healing
            </h3>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                Much of this non-traditional health wisdom came from a few family members who embraced alternative practices... 
                And later from her training to become a certified colon hydro therapist.
              </p>
              <p>
                Today, Lori is a dedicated and accomplished alternative health practitioner who has great compassion for her clients. 
                She knows from personal experience what it is like to suffer through years of acute ongoing health problems.
              </p>
              <p>
                Because of this, Lori is uniquely qualified to help you overcome many of the health problems you may be experiencing now.
              </p>
              <p className="font-semibold text-sky-700">
                If you learn nothing else by visiting this website... Please understand that Lori's personal story of toxic ill health and full recovery is not an isolated one.
              </p>
              <p>
                Every day, millions of people suffer with unexplained digestive disorders, pain and illness. But there is a solution...
              </p>
              <p>
                And strange as it may seem, the solution could be as simple as detoxifying your internal body systems. 
                And this begins by cleansing your digestive tract including your colon.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Lori Today
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you have any questions or would like to schedule an appointment at Ogden Colon Hydrotherapy – Inside Tract, 
            call Lori Underwood anytime or use our contact form.
          </p>
          <div className="space-y-4">
            <div className="text-2xl font-bold text-sky-600">(801) 479-5616</div>
            <div className="text-gray-600">
              2021 East Ryan Circle, Ogden UT 84403
            </div>
            <div className="text-lg font-semibold text-emerald-600">
              "Your Inside Tract To A Healthier You!"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;