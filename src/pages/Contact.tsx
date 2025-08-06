import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/xqalyyqn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Contact Form Submission from ${formData.name}`
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please use the following contact form to ask a question or to inquire about setting up an appointment with Lori Underwood at Ogden Colon Hydrotherapy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-sky-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">Call anytime for questions or appointments</p>
                    <a href="tel:(801) 479-5616" className="text-sky-600 font-semibold hover:text-sky-700 text-xl">
                      (801) 479-5616
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sky-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      2021 East Ryan Circle<br />
                      Ogden, UT 84403
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-sky-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">Send us a message</p>
                    <a href="mailto:underwoodfamily5@msn.com" className="text-sky-600 font-semibold hover:text-sky-700">
                      underwoodfamily5@msn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-sky-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Service Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Friday: 9am - 5pm</div>
                      <div>Saturday: By Appointment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-sky-600 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Lori Underwood, Colon Therapist
              </h3>
              <p className="text-sky-100 mb-4">
                Ogden Colon Hydrotherapy – Inside Tract
              </p>
              <p className="text-xl font-semibold text-emerald-200">
                "Your Inside Tract To A Healthier You!"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                <p className="text-emerald-700 font-medium">
                  Thank you for your message! We'll get back to you as soon as possible.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">
                  There was an error sending your message. Please try again or call us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                    placeholder="(801) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option value="Colon Hydrotherapy">Colon Hydrotherapy</option>
                    <option value="Asyra Bioenergetic Feedback">Asyra Bioenergetic Feedback</option>
                    <option value="Ionic Foot Bath">Ionic Foot Bath</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-colors"
                  placeholder="Please tell us about your health goals, any specific questions you have, or what you'd like to know more about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                If you are unable to reach us by phone, please leave a message with the best time to return your call, 
                or use this contact form and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;