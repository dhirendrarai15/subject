import React from 'react';
import { User, Github, Linkedin, Mail, Twitter, MapPin } from 'lucide-react';

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
              <span className="font-bold text-xl text-white">Chandani Rai</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              QC / Analytical Chemist (M.Sc Chemistry) specialising in physico-chemical and
              instrumental analysis of water, wastewater and environmental samples in a
              NABL-accredited (ISO/IEC 17025) laboratory.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3" />
                <span>chandani.rai1415@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Delhi, India</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/chandani-rai-b29667244" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://github.com/chandanirai1415-dev"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
              <a 
                href="https://twitter.com/Rai1415Rai"
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a 
                href="mailto: chandani.rai1415@gmail.com"
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
              <li><a href="/projects" className="footer-link">Testing Domains</a></li>
              <li><a href="/skills" className="footer-link">Skills</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Testing Domains</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Drinking / Ground / Waste Water</li>
              <li className="text-gray-300">Soil & Sediment</li>
              <li className="text-gray-300">Ambient Air</li>
              <li className="text-gray-300">Stack Emission</li>
              <li className="text-gray-300">Noise</li>
              <li className="text-gray-300">Illumination (Lux)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Chandani Rai. All rights reserved.
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