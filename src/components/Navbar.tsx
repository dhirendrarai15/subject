import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut, Atom, User, Lock, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [authData, setAuthData] = useState({ email: '', password: '', confirmPassword: '' });
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout, login } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'blog', 'contact'];
        let currentSection = sections.find(section => {
  const element = document.getElementById(section);
  if (element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
  }
  return false;
}) || 'home';

        // Find the section that's most in view
        let maxVisibleArea = 0;
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            
            // Calculate visible area of the section
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(viewportHeight, rect.bottom);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            
            // If this section has more visible area, make it active
            if (visibleHeight > maxVisibleArea && rect.top < viewportHeight * 0.6) {
              maxVisibleArea = visibleHeight;
              currentSection = section;
            }
          }
        });
        
        if (currentSection) {
          setActiveSection(currentSection);
        }
      } else {
        setActiveSection(location.pathname.slice(1) || 'home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authMode === 'login') {
      const success = await login(authData.email, authData.password);
      if (success) {
        setShowAuthModal(false);
        navigate('/admin');
      }
    } else if (authMode === 'register') {
      // Mock registration
      alert('Registration functionality would be implemented here');
    } else if (authMode === 'forgot') {
      // Mock forgot password
      alert('Password reset email would be sent');
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

const navItems = [
  { id: 'home', label: 'Home', action: () => scrollToSection('home') },
  { id: 'about', label: 'About', action: () => scrollToSection('about') },
  { id: 'experience', label: 'Experience', action: () => scrollToSection('experience') },
  { id: 'projects', label: 'Projects', action: () => scrollToSection('projects') },
  { id: 'skills', label: 'Skills', action: () => scrollToSection('skills') }, // ✅ updated
  { id: 'blog', label: 'Blog', action: () => scrollToSection('blog') },
  { id: 'contact', label: 'Contact', action: () => scrollToSection('contact') }
];


  const isActive = (itemId: string) => {
    if (location.pathname === '/' && (itemId === 'home' || itemId === 'about' || itemId === 'projects' || itemId === 'experience' || itemId === 'skills' || itemId === 'blog' || itemId === 'contact')) {
      return activeSection === itemId;
    }
    return location.pathname === `/${itemId}` || (itemId === 'home' && location.pathname === '/');
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'modern-navbar shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Atom className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                John Doe
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action || (() => navigate(item.path!))}
                  className={`nav-link ${isActive(item.id) ? 'active' : ''} ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {isAuthenticated && (
                <>
                  <Link
                    to="/admin"
                    className={`nav-link ${location.pathname === '/admin' ? 'active' : ''} ${
                      scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    className={`flex items-center space-x-1 nav-link ${
                      scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              )}
              
              {!isAuthenticated && (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="btn-primary-emerald text-sm"
                >
                  Login
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-emerald-200'
                }`}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action || (() => navigate(item.path!))}
                  className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    isActive(item.id)
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              
              {isAuthenticated && (
                <>
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                      location.pathname === '/admin'
                        ? 'text-emerald-600 bg-emerald-50'
                        : 'text-gray-700 hover:text-emerald-600 hover:bg-gray-50'
                    }`}
                  >
                    Admin
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </>
              )}
              
              {!isAuthenticated && (
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white bg-gradient-to-r from-emerald-500 to-teal-600 rounded-md hover:from-emerald-600 hover:to-teal-700 transition-all"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative">
            <button
              onClick={() => setShowAuthModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Atom className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {authMode === 'login' && 'Welcome Back'}
                {authMode === 'register' && 'Create Account'}
                {authMode === 'forgot' && 'Reset Password'}
              </h2>
              <p className="text-gray-600 mt-2">
                {authMode === 'login' && 'Sign in to access your dashboard'}
                {authMode === 'register' && 'Join our chemistry community'}
                {authMode === 'forgot' && 'Enter your email to reset password'}
              </p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={authData.email}
                    onChange={(e) => setAuthData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {authMode !== 'forgot' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={authData.password}
                      onChange={(e) => setAuthData(prev => ({ ...prev, password: e.target.value }))}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              )}

              {authMode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={authData.confirmPassword}
                      onChange={(e) => setAuthData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary-emerald py-3"
              >
                {authMode === 'login' && 'Sign In'}
                {authMode === 'register' && 'Create Account'}
                {authMode === 'forgot' && 'Send Reset Link'}
              </button>
            </form>

            <div className="mt-6 text-center space-y-2">
              {authMode === 'login' && (
                <>
                  <button
                    onClick={() => setAuthMode('forgot')}
                    className="text-emerald-600 hover:text-emerald-700 text-sm"
                  >
                    Forgot your password?
                  </button>
                  <div className="text-gray-600 text-sm">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setAuthMode('register')}
                      className="text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                      Sign up
                    </button>
                  </div>
                </>
              )}
              
              {authMode === 'register' && (
                <div className="text-gray-600 text-sm">
                  Already have an account?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Sign in
                  </button>
                </div>
              )}
              
              {authMode === 'forgot' && (
                <div className="text-gray-600 text-sm">
                  Remember your password?{' '}
                  <button
                    onClick={() => setAuthMode('login')}
                    className="text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Sign in
                  </button>
                </div>
              )}
            </div>

            {authMode === 'login' && (
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm">
                <p className="font-medium text-blue-800">Demo Credentials:</p>
                <p className="text-blue-700">Email: admin@johndoe.com</p>
                <p className="text-blue-700">Password: chemistry123</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;