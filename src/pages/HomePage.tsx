import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Award, Users, Target, TrendingUp, Globe, Microscope, FlaskConical, Zap, ChevronLeft, ChevronRight, Play, Star, Quote, ChevronDown, Beaker, Atom, Leaf, Factory, Calendar, MapPin, Briefcase, Code, Mail, Phone, Send, Linkedin, Github, Twitter, BookOpen, Search, Tag, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';
import SkillsPage from './SkillsPage'; // adjust path if needed
import ExperiencePage from './ExperiencePage'; // adjust path if needed
import BlogPage from './BlogPage'; // adjust path if needed
import StatsSection from "./StatsSection";
import AboutPage from './AboutPage'; // adjust path if needed
import ContactPage from './ContactPage'; // adjust path if needed



import newimage from '../assets/newimage.png';


const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);
  const [isProjectsPaused, setIsProjectsPaused] = useState(false);
  const [currentInstrumentSlide, setCurrentInstrumentSlide] = useState(0);
  const [isInstrumentsPaused, setIsInstrumentsPaused] = useState(false);
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
      title: 'Water & Environmental Testing',
      subtitle: 'QC / Analytical Chemist · M.Sc Chemistry',
      description: 'Turning samples into reliable, decision-ready data in a NABL-accredited (ISO/IEC 17025) laboratory.'
    },
    {
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      title: 'Water & Wastewater Analysis',
      subtitle: 'From sample to decision-ready data',
      description: 'Physico-chemical and instrumental analysis of drinking water, groundwater and wastewater — 15+ parameters as per IS 3025, APHA and IS 10500.'
    },
    {
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      title: 'Quality You Can Trace',
      subtitle: 'NABL-accredited (ISO/IEC 17025) laboratory',
      description: 'Calibration, QC checks and compliant reporting — accuracy, traceability and results that are right the first time.'
    }
  ];

  const allProjects = [...projects];

  // Instruments carousel.
  // Images: put photos in  public/instruments/  with these exact file names
  // (e.g. public/instruments/uv-vis-spectrophotometer.jpg). Until an image
  // exists, a stock lab photo is shown automatically.
  const INSTRUMENT_FALLBACK_IMG = 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg';
  const instruments = [
    { img: 'uv-vis-spectrophotometer.jpg', name: 'UV-Vis Spectrophotometer', desc: 'Colorimetric analysis — nitrate, fluoride, hexavalent chromium, ammonia, phenol.', handsOn: true },
    { img: 'ph-meter.jpg', name: 'pH Meter', desc: 'pH measurement of water, wastewater and soil extracts.', handsOn: true },
    { img: 'conductivity-tds-meter.jpg', name: 'Conductivity / TDS Meter', desc: 'Conductivity and dissolved-solids checks for water samples.', handsOn: true },
    { img: 'turbidity-meter.jpg', name: 'Turbidity Meter (Nephelometer)', desc: 'Turbidity (NTU) measurement for drinking water.', handsOn: true },
    { img: 'flame-photometer.jpg', name: 'Flame Photometer', desc: 'Sodium and potassium estimation in water samples.', handsOn: true },
    { img: 'cod-digestion-unit.jpg', name: 'COD Digestion Unit', desc: 'Potassium dichromate reflux COD of wastewater and effluents.', handsOn: true },
    { img: 'bod-incubator.jpg', name: 'BOD Incubator', desc: '5-day, 20°C BOD incubation for wastewater samples.', handsOn: true },
    { img: 'do-meter.jpg', name: 'DO Meter', desc: 'Dissolved-oxygen measurement for BOD and field samples.', handsOn: true },
    { img: 'hot-air-oven.jpg', name: 'Hot Air Oven', desc: 'Drying and gravimetric TDS / TSS determination.', handsOn: true },
    { img: 'muffle-furnace.jpg', name: 'Muffle Furnace', desc: 'Ashing and fixed-solids determination at high temperature.', handsOn: true },
    { img: 'analytical-balance.jpg', name: 'Analytical Balance', desc: 'Precision weighing for gravimetric analysis and standards.', handsOn: true },
    { img: 'high-volume-air-sampler.jpg', name: 'High-Volume Air Sampler', desc: 'PM10 / PM2.5 ambient-air sampling as per IS 5182.', handsOn: true },
    { img: 'sound-level-meter.jpg', name: 'Sound Level Meter', desc: 'Ambient and workplace noise-level surveys.', handsOn: true },
    { img: 'lux-meter.jpg', name: 'Lux Meter', desc: 'Illumination surveys for workplaces and facilities.', handsOn: true },
    { img: 'aas.jpg', name: 'AAS', desc: 'Atomic absorption spectroscopy for heavy-metal analysis.', handsOn: false },
    { img: 'gc-ms.jpg', name: 'GC / GC-MS', desc: 'Gas chromatography for separation and identification of organics.', handsOn: false },
    { img: 'hplc.jpg', name: 'HPLC', desc: 'High-performance liquid chromatography.', handsOn: false },
    { img: 'icp-ms.jpg', name: 'ICP-MS', desc: 'Trace-level multi-element analysis.', handsOn: false }
  ];

  const testimonials = [
    {
      name: 'Akansha Singh',
      role: 'Senior Chemist, Environmental Testing',
      content: 'Chandani\'s bench work is meticulous — her titrations and UV-Vis results are consistently accurate and reproducible. You can trust the numbers she reports.',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5
    },
    {
      name: 'Ishika Vishwakarma',
      role: 'Sanjay Memorial Womens College - Chemistry Department',
      content: 'A sincere and disciplined chemist. Her grasp of IS 3025 and APHA methods grew remarkably fast, and her documentation is always audit-ready.',
      avatar: newimage,
      rating: 5
    },
    {
      name: 'Nishu Yadav',
      role: 'Environmental Consultant',
      content: 'Working with Chandani is reassuring — she treats calibration and QC checks as non-negotiable, and it shows in the reliability of her data.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5
    }
  ];

  
  const stats = [
    { number: '15+', label: 'Water Parameters Analysed', icon: FlaskConical },
    { number: '14+', label: 'Instruments Operated', icon: Microscope },
    { number: '6', label: 'Testing Domains', icon: Globe },
    { number: '100%', label: 'NABL / ISO 17025 Workflow', icon: Award }
  ];

  
  const expertise = [
    {
      icon: FlaskConical,
      title: 'Water & Wastewater Analysis',
      description: 'Drinking water, groundwater and effluents — 15+ parameters as per IS 3025, APHA and IS 10500',
      color: 'from-emerald-400 to-teal-600'
    },
    {
      icon: Microscope,
      title: 'Wet Chemistry & Titrimetry',
      description: 'Complexometric, argentometric and acid-base titrations, plus gravimetric analysis',
      color: 'from-blue-400 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Instrumental Analysis',
      description: 'UV-Vis colorimetry, flame photometry, COD/BOD/DO — with working knowledge of AAS, GC-MS, HPLC and ICP-MS',
      color: 'from-purple-400 to-indigo-600'
    },
    {
      icon: Globe,
      title: 'Soil & Air Monitoring',
      description: 'Soil/sediment testing and ambient-air sampling, with exposure to stack, noise and lux surveys',
      color: 'from-orange-400 to-red-600'
    },
    {
      icon: Target,
      title: 'Calibration & QC',
      description: 'Instrument calibration and blank/duplicate/spike checks for traceable results',
      color: 'from-yellow-400 to-orange-600'
    },
    {
      icon: Award,
      title: 'NABL / ISO 17025 Quality',
      description: 'Accreditation-compliant documentation and NABL-format reporting for CPCB/SPCB and clients',
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

  // Auto-advance project slides (paused while the visitor hovers to read)
  useEffect(() => {
    if (isProjectsPaused || allProjects.length === 0) return;
    const projectInterval = setInterval(() => {
      setCurrentProjectSlide((prev) => (prev + 1) % Math.ceil(allProjects.length / 3));
    }, 4000);
    return () => clearInterval(projectInterval);
  }, [allProjects.length, isProjectsPaused]);

  // Auto-advance instrument slides (paused while the visitor hovers to read)
  useEffect(() => {
    if (isInstrumentsPaused) return;
    const instrumentInterval = setInterval(() => {
      setCurrentInstrumentSlide((prev) => (prev + 1) % Math.ceil(instruments.length / 3));
    }, 3500);
    return () => clearInterval(instrumentInterval);
  }, [isInstrumentsPaused]);

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

  const nextInstrumentSlide = () => {
    setCurrentInstrumentSlide((prev) => (prev + 1) % Math.ceil(instruments.length / 3));
  };

  const prevInstrumentSlide = () => {
    setCurrentInstrumentSlide((prev) => (prev - 1 + Math.ceil(instruments.length / 3)) % Math.ceil(instruments.length / 3));
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Chandani-Rai-Resume.pdf';
    link.download = 'Chandani-Rai-Resume.pdf';
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
                      onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                      className="btn-primary-emerald inline-flex items-center"
                    >
                      View Experience
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
    <StatsSection />
      <AboutPage darkMode={false} />

      {/* About Preview */}
      <section id="about" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="heading-lg text-gray-900 mb-6">
                QC / Analytical Chemist in a NABL-Accredited Lab
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm an analytical chemist focused on water and environmental quality. In a NABL-accredited (ISO/IEC 17025) testing laboratory, I run the full workflow — sample preparation, wet-chemistry and instrumental analysis, calibration, quality control and compliant reporting.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                My core strength is drinking-water and wastewater analysis, backed by a solid grounding in soil and ambient-air testing. I care about accuracy, traceability and getting results right the first time.
              </p>
              
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
                    alt="Chandani Rai in laboratory"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-6 text-center">
                  <div className="text-2xl font-bold text-emerald-600">15+</div>
                  <div className="text-sm text-gray-600">Parameters Tested</div>
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
            <h2 className="heading-lg text-gray-900 mb-4">Testing Domains</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The sample types I analyse in a NABL-accredited environmental and water testing laboratory
            </p>
          </div>
          
          <div
            className="project-slider relative"
            onMouseEnter={() => setIsProjectsPaused(true)}
            onMouseLeave={() => setIsProjectsPaused(false)}
            onTouchStart={() => setIsProjectsPaused(true)}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProjectSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(allProjects.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0" style={{ minWidth: "100%" }} >  
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {allProjects.slice(slideIndex * 3, (slideIndex + 1) * 3).map((project, index) => (
<div 
  key={project.id} 
  className="modern-card hover-lift fade-in flex flex-col justify-between"
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
  
  <div className="flex-1">
    <div className="flex items-center mb-3">
      <h3 className="text-xl font-semibold text-gray-900 flex-1">{project.title}</h3>
      {'category' in project && project.category === 'Industrial' && (
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
  </div>

  {/* Button always sticks to bottom */}
  <Link to="/projects" className="w-full btn-primary-emerald mt-auto inline-flex items-center justify-center">
    Learn More
    <ArrowRight className="ml-2 h-4 w-4" />
  </Link>
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
              View All Testing Domains
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section id="instruments" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-gray-900 mb-4">Instruments I Work With</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From wet-chemistry benches to instrumental analysis — the tools behind every reliable result
            </p>
          </div>

          <div
            className="project-slider relative"
            onMouseEnter={() => setIsInstrumentsPaused(true)}
            onMouseLeave={() => setIsInstrumentsPaused(false)}
            onTouchStart={() => setIsInstrumentsPaused(true)}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentInstrumentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(instruments.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {instruments.slice(slideIndex * 3, (slideIndex + 1) * 3).map((instrument, index) => (
                        <div
                          key={instrument.name}
                          className="modern-card hover-lift fade-in flex flex-col"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="image-overlay mb-6">
                            <img
                              src={`/instruments/${instrument.img}`}
                              alt={instrument.name}
                              className="w-full h-44 object-cover rounded-xl"
                              onError={(e) => {
                                const target = e.currentTarget;
                                if (target.src !== INSTRUMENT_FALLBACK_IMG) {
                                  target.src = INSTRUMENT_FALLBACK_IMG;
                                }
                              }}
                            />
                          </div>

                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-2">{instrument.name}</h3>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${
                                instrument.handsOn
                                  ? 'bg-emerald-100 text-emerald-700'
                                  : 'bg-amber-100 text-amber-700'
                              }`}
                            >
                              {instrument.handsOn ? 'Hands-on' : 'Working Knowledge'}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{instrument.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Navigation */}
            <button onClick={prevInstrumentSlide} className="slider-nav prev">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextInstrumentSlide} className="slider-nav next">
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slider Dots */}
            <div className="slider-dots">
              {Array.from({ length: Math.ceil(instruments.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentInstrumentSlide(index)}
                  className={`slider-dot ${index === currentInstrumentSlide ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>

          <p className="text-center mt-12 text-sm text-gray-500 fade-in">
            Plus everyday lab equipment — water bath, hot plate, magnetic stirrer, shaker, centrifuge, filtration assembly and fume hood.
          </p>
        </div>
      </section>

      {/* Skills Section */}
<SkillsPage darkMode={false} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core competencies applied every day in an accredited testing laboratory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.id}
                className={`bg-gray-50 rounded-xl p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 fade-in`}
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
                      width: `${skill.level}%`
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
            <h2 className="heading-lg text-gray-900 mb-4">Insights & Articles</h2>
            
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
                  <ContactPage darkMode={false} />

     
      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="heading-lg text-gray-900 mb-4">What Colleagues Say</h2>
            <p className="text-xl text-gray-600">
              Testimonials from colleagues and mentors
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
            <h2 className="heading-lg mb-6">Looking for a Reliable QC / Analytical Chemist?</h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm open to QC and analytical chemist roles in water, environmental, pharma and manufacturing testing labs — and happy to discuss how I can support your laboratory.
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
                View Testing Domains
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
