import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Ready to collaborate on sustainable chemistry solutions? Let's discuss your project ideas
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a 
                        href="mailto:chandani.rai1415@gmail.com"
                        className="text-teal-600 hover:text-teal-700 transition-colors"
                      >
                        chandani.rai1415@gmail.com
                      </a>
                      <p className="text-sm text-gray-500">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a 
                        href="tel:+917275658524"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        +91 7275658524
                      </a>
                      <p className="text-sm text-gray-500">Available Mon-Fri, 9AM-5PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-lg p-3">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                      <p className="text-gray-600">Varanasi, Uttar Pradesh</p>
                      <p className="text-sm text-gray-500">Open to remote collaboration</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Connect on Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/chandani-rai-b29667244" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://github.com/chandanirai1415-dev" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com/Rai1415Rai" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <a 
                      href="mailto:chandani.rai1415@gmail.com?subject=Research Collaboration Inquiry"
                      className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </a>
                    <a 
                      href="tel:+917275658524"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Alternative */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none"
                        placeholder="Tell me about your project or collaboration idea..."
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>

                    {/* Alternative Contact Methods */}
                    <div className="pt-6 border-t border-gray-200 text-center">
                      <p className="text-gray-600 mb-4">Prefer a different way to reach out?</p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href="mailto:chandani.rai1415@gmail.com"
                          className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                        >
                          Direct Email
                        </a>
                        <span className="text-gray-300">|</span>
                        <a 
                          href="https://linkedin.com/in/chandani-rai-b29667244"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                        >
                          LinkedIn Message
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Collaboration CTA */}
      <div className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Research Collaboration?</h2>
          <p className="text-xl text-teal-100 mb-8">
            I'm always open to discussing new projects in green chemistry and sustainable materials
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
              <h3 className="font-semibold mb-2">Academic Research</h3>
              <p className="text-teal-100 text-sm">Joint research projects and publications</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
              <h3 className="font-semibold mb-2">Industry Consulting</h3>
              <p className="text-teal-100 text-sm">Sustainable chemistry solutions for businesses</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors duration-200">
              <h3 className="font-semibold mb-2">Speaking Engagements</h3>
              <p className="text-teal-100 text-sm">Conferences and educational workshops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;