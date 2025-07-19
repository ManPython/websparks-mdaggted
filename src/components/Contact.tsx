import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => window.setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    const timer = window.setTimeout(() => setShowSuccess(false), 5000);
    return () => window.clearTimeout(timer);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6">
            GET IN <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to experience the ultimate in luxury seating? Contact our experts today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-black/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/20">
              <h3 className="font-bold text-2xl text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <i className="bi bi-geo-alt-fill text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-gray-300">123 Racing Boulevard, Speed City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <i className="bi bi-telephone-fill text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+1 (555) 123-RACE</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <i className="bi bi-envelope-fill text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">info@supercarchair.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                    <i className="bi bi-clock-fill text-red-600 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-600/20 to-transparent p-8 rounded-2xl border border-red-600/30">
              <h3 className="font-bold text-xl text-white mb-4">Why Choose SuperCar Chair?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-3">
                  <i className="bi bi-check-circle-fill text-red-600"></i>
                  <span>Free white-glove delivery & setup</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="bi bi-check-circle-fill text-red-600"></i>
                  <span>30-day money-back guarantee</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="bi bi-check-circle-fill text-red-600"></i>
                  <span>5-year comprehensive warranty</span>
                </li>
                <li className="flex items-center space-x-3">
                  <i className="bi bi-check-circle-fill text-red-600"></i>
                  <span>24/7 premium customer support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-600/20">
            <h3 className="font-bold text-2xl text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-semibold text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-semibold text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-semibold text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bi bi-arrow-clockwise animate-spin"></i>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center justify-center space-x-2">
                    <i className="bi bi-send-fill"></i>
                    <span>Send Message</span>
                  </span>
                )}
              </button>
            </form>

            {showSuccess && (
              <div className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg">
                <div className="flex items-center space-x-3">
                  <i className="bi bi-check-circle-fill text-green-500 text-xl"></i>
                  <div>
                    <h4 className="font-semibold text-white">Message Sent!</h4>
                    <p className="text-gray-300 text-sm">We will get back to you within 24 hours.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
