import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Award, Users, Target, TrendingUp, Globe, Microscope, FlaskConical, Zap, ChevronLeft, ChevronRight, Play, Star, Quote, ChevronDown, Beaker, Atom, Leaf, Factory, Calendar, MapPin, Briefcase, Code, Mail, Phone, Send, Linkedin, Github, Twitter, BookOpen, Search, Tag, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import SkillsPage from './SkillsPage'; // adjust path if needed
import ExperiencePage from './ExperiencePage'; // adjust path if needed
import BlogPage from './BlogPage'; // adjust path if needed
import CountUp from 'react-countup';


const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const [skillsAnimated, setSkillsAnimated] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { projects, experiences, skills, blogPosts } = useContent();

  const heroSlides = [
    {
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
      title: 'Green Chemistry Innovation',
      subtitle: 'Pioneering sustainable solutions for tomorrow',
      description: 'Developing eco-friendly chemical processes that reduce environmental impact while maintaining industrial efficiency.'
    },
    {
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      title: 'Agricultural Research',
      subtitle: 'Transforming farming through chemistry',
      description: 'Creating organic fertilizers and sustainable pest management solutions that increase crop yields naturally.'
    },
    {
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      title: 'Environmental Solutions',
      subtitle: 'Chemistry for a cleaner planet',
      description: 'Advancing water purification technologies and biodegradable materials for environmental restoration.'
    }
  ];

  const industrialProjects = [
    {
      id: 'industrial-1',
      title: 'Industrial Catalyst Development',
      summary: 'Revolutionary catalyst system for petrochemical refineries that reduces energy consumption by 35% while increasing yield.',
      impact: 'Implemented in 12 major refineries, saving 2.3 million tons of CO2 annually.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      tags: ['Industrial Chemistry', 'Catalysis', 'Energy Efficiency'],
      category: 'Industrial'
    },
    {
      id: 'industrial-2',
      title: 'Pharmaceutical Manufacturing Optimization',
      summary: 'Green synthesis pathway for active pharmaceutical ingredients using continuous flow chemistry.',
      impact: 'Reduced waste by 60% and production time by 40% for major pharmaceutical companies.',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg',
      tags: ['Pharmaceutical', 'Green Synthesis', 'Process Optimization'],
      category: 'Industrial'
    },
    {
      id: 'industrial-3',
      title: 'Polymer Recycling Innovation',
      summary: 'Advanced chemical recycling process for mixed plastic waste into high-quality raw materials.',
      impact: 'Processes 50,000 tons of plastic waste annually, creating circular economy solutions.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      tags: ['Recycling', 'Polymers', 'Circular Economy'],
      category: 'Industrial'
    }
  ];

  const allProjects = [...projects, ...industrialProjects];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Research Director, GreenTech Solutions',
      content: 'John\'s innovative approach to sustainable chemistry has revolutionized our agricultural products. His fertilizer formulations increased crop yields while reducing environmental impact.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5
    },
    {
      name: 'Prof. Michael Rodriguez',
      role: 'UC Berkeley Chemistry Department',
      content: 'An exceptional researcher with a passion for environmental sustainability. John\'s work on water purification systems has made a real difference in rural communities.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'Environmental Consultant',
      content: 'Working with John on green chemistry initiatives has been inspiring. His expertise in sustainable materials development is unmatched in the industry.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5
    }
  ];

  
  const stats = [
    { number: '50+', label: 'Research Projects', icon: FlaskConical },
    { number: '15+', label: 'Publications', icon: Award },
    { number: '500+', label: 'Lives Impacted', icon: Users },
    { number: '40%', label: 'Emission Reduction', icon: TrendingUp }
  ];

  
  const expertise = [
    { 
      icon: FlaskConical, 
      title: 'Green Chemistry', 
      description: 'Sustainable chemical processes and eco-friendly synthesis methods',
      color: 'from-emerald-400 to-teal-600'
    },
    { 
      icon: Microscope, 
      title: 'Analytical Chemistry', 
      description: 'Advanced characterization and quality control techniques',
      color: 'from-blue-400 to-cyan-600'
    },
    { 
      icon: Globe, 
      title: 'Environmental Chemistry', 
      description: 'Pollution control and environmental remediation solutions',
      color: 'from-purple-400 to-indigo-600'
    },
    { 
      icon: Zap, 
      title: 'Materials Science', 
      description: 'Development of biodegradable and sustainable materials',
      color: 'from-orange-400 to-red-600'
    },
    { 
      icon: Target, 
      title: 'Agricultural Innovation', 
      description: 'Sustainable fertilizers and crop enhancement solutions',
      color: 'from-yellow-400 to-orange-600'
    },
    { 
      icon: Award, 
      title: 'Process Optimization', 
      description: 'Efficient and sustainable manufacturing processes',
      color: 'from-pink-400 to-purple-600'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialInterval);
  }, []);

  // Auto-advance project slides
  useEffect(() => {
    const projectInterval = setInterval(() => {
      setCurrentProjectSlide((prev) => (prev + 1) % Math.ceil(allProjects.length / 3));
    }, 4000);
    return () => clearInterval(projectInterval);
  }, [allProjects.length]);

  // Animate stats on scroll
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      const skillsSection = document.getElementById('skills-section');
      
      if (statsSection && !statsAnimated) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsAnimated(true);
        }
      }
      
      if (skillsSection && !skillsAnimated) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setSkillsAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [statsAnimated, skillsAnimated]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % Math.ceil(allProjects.length / 3));
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + Math.ceil(allProjects.length / 3)) % Math.ceil(allProjects.length / 3));
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 transform scale-100' 
                : 'opacity-0 transform scale-105'
            }`}
          >
            <div className="absolute inset-0">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>
            
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <div className="fade-in fade-in-delay-1">
                    <h1 className="heading-xl text-white mb-6">
                      {slide.title}
                    </h1>
                  </div>
                  
                  <div className="fade-in fade-in-delay-2">
                    <p className="text-2xl text-gray-200 mb-4 font-light">
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  <div className="fade-in fade-in-delay-3">
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                      {slide.description}
                    </p>
                  </div>
                  
                  <div className="fade-in fade-in-delay-4 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-primary-emerald inline-flex items-center"
                    >
                      View My Work
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button onClick={handleResumeDownload} className="btn-secondary inline-flex items-center">
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 glass-card p-3 text-white hover:bg-white/20 transition-all z-20"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 glass-card p-3 text-white hover:bg-white/20 transition-all z-20"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="stat-number mb-2">{stat.number}</div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="heading-lg text-gray-900 mb-6">
                Pioneering Sustainable Chemistry Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                As a dedicated chemistry researcher with a passion for sustainability, I've spent years 
                developing innovative solutions to address environmental challenges through green chemistry principles.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My work focuses on creating eco-friendly fertilizers, sustainable materials, and 
                water purification systems that make a real difference in communities worldwide.
              </p>
              
              {/* Education */}
              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">M.S. in Chemistry</p>
                      <p className="text-sm text-gray-600">University of California, Berkeley (2020-2022)</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    <div>
                      <p className="font-medium text-gray-900">B.S. in Chemistry</p>
                      <p className="text-sm text-gray-600">Stanford University (2016-2020)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link to="/about" className="btn-primary-emerald inline-flex items-center">
                Learn More About Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="fade-in fade-in-delay-2">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-5">
                  <img 
                    src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                    alt="John Doe in laboratory"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-6 text-center">
                  <div className="text-2xl font-bold text-emerald-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperiencePage darkMode={false} />

      
      {/* Enhanced Projects Section with Slider */}
      <section id="projects" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative research projects making a real impact on sustainability and environmental health
            </p>
          </div>
          
          <div className="project-slider relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(allProjects.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProjects.slice(slideIndex * 3, (slideIndex + 1) * 3).map((project, index) => (
                        <div 
                          key={project.id} 
                          className="modern-card hover-lift fade-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          {project.image && (
                            <div className="image-overlay mb-6">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-xl"
                              />
                            </div>
                          )}
                          <div className="flex items-center mb-3">
                            <h3 className="text-xl font-semibold text-gray-900 flex-1">{project.title}</h3>
                            {project.category === 'Industrial' && (
                              <Factory className="h-5 w-5 text-emerald-600" />
                            )}
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">{project.summary}</p>
                          
                          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 mb-6">
                            <h4 className="font-semibold text-emerald-800 mb-2">Impact:</h4>
                            <p className="text-emerald-700 text-sm">{project.impact}</p>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span 
                                key={tag}
                                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <button className="w-full btn-primary-emerald">
                            Learn More
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation */}
            <button
              onClick={prevProjectSlide}
              className="slider-nav prev"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextProjectSlide}
              className="slider-nav next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slider Dots */}
            <div className="slider-dots">
              {Array.from({ length: Math.ceil(allProjects.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectSlide(index)}
                  className={`slider-dot ${index === currentProjectSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 fade-in">
            <Link to="/projects" className="btn-secondary inline-flex items-center">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<SkillsPage darkMode={false} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical capabilities and professional competencies developed through years of research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.id}
                className={`bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {skill.category === 'Chemistry' && <Atom className="h-6 w-6 text-emerald-600 mr-3" />}
                  {skill.category === 'Software' && <Code className="h-6 w-6 text-blue-600 mr-3" />}
                  {skill.category === 'Soft Skills' && <Users className="h-6 w-6 text-purple-600 mr-3" />}
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    <p className="text-sm text-gray-600">{skill.category}</p>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      skill.category === 'Chemistry' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                      skill.category === 'Software' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                      'bg-gradient-to-r from-purple-500 to-purple-600'
                    }`}
                    style={{ 
                      width: skillsAnimated ? `${skill.level}%` : '0%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          
        </div>

      {/* Blog Section */}
      
      <section id="blog" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-gray-900 mb-4">Latest Research Insights</h2>
            
          </div>

<BlogPage darkMode={false} />


          <div className="text-center mt-12 fade-in">
            <Link to="/blog" className="btn-secondary inline-flex items-center">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to collaborate on sustainable chemistry solutions? Let's discuss your project ideas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="fade-in">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-emerald-100">john.doe@email.com</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-emerald-100">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-white/20 rounded-lg p-3 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-emerald-100">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="font-semibold mb-4">Connect on Social Media</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://linkedin.com/in/johndoe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://github.com/johndoe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com/johndoe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white/20 text-white p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in fade-in-delay-1">
              <div className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={contactForm.name}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={contactForm.email}
                          onChange={handleContactChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={contactForm.subject}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={contactForm.message}
                        onChange={handleContactChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                        placeholder="Tell me about your project or collaboration idea..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-gray-900 mb-4">What Colleagues Say</h2>
            <p className="text-xl text-gray-600">
              Testimonials from research partners and industry leaders
            </p>
          </div>

          <div className="testimonial-slider relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-slide ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-full absolute inset-0'
                }`}
              >
                <div className="modern-card text-center max-w-3xl mx-auto">
                  <Quote className="h-12 w-12 text-emerald-600 mx-auto mb-6" />
                  
                  <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="nav-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`nav-dot ${index === currentTestimonial ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding chemistry-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating" style={{ animationDelay: '0s' }}>
            <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full"></div>
          </div>
          <div className="floating" style={{ animationDelay: '2s' }}>
            <div className="absolute top-40 right-32 w-16 h-16 bg-white/10 rounded-full"></div>
          </div>
          <div className="floating" style={{ animationDelay: '4s' }}>
            <div className="absolute bottom-32 left-1/3 w-12 h-12 bg-white/10 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="heading-lg mb-6">Ready to Collaborate?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's work together to create sustainable solutions for tomorrow's challenges. 
              Whether it's research collaboration, consulting, or speaking engagements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary border-white text-white hover:bg-white hover:text-emerald-600"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <Play className="mr-2 h-5 w-5" />
                View Research
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;