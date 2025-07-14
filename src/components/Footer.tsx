import React from 'react';
import { User, Github, Linkedin, Mail, Twitter, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="modern-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl text-white">John Doe</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Chemistry researcher and sustainability advocate focused on green chemistry, 
              agricultural innovation, and sustainable materials development for a better tomorrow.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>john.doe@email.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://github.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://twitter.com/johndoe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto:john.doe@email.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="footer-link">About Me</a></li>
              <li><a href="/experience" className="footer-link">Experience</a></li>
              <li><a href="/projects" className="footer-link">Projects</a></li>
              <li><a href="/skills" className="footer-link">Skills</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Research Focus</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Green Chemistry</li>
              <li className="text-gray-300">Agricultural Innovation</li>
              <li className="text-gray-300">Sustainable Materials</li>
              <li className="text-gray-300">Environmental Safety</li>
              <li className="text-gray-300">Water Purification</li>
              <li className="text-gray-300">Process Optimization</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} John Doe. All rights reserved. Built with React and modern web technologies.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="footer-link">Privacy Policy</a>
              <a href="/terms" className="footer-link">Terms of Service</a>
              <a href="/sitemap" className="footer-link">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;