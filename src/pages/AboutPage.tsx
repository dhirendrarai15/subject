import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Microscope ,Award, Heart, BookOpen, MapPin, Mail, Linkedin } from 'lucide-react';
import myimg from '../assets/myimg.png';

const AboutPage: React.FC = () => {
  const certifications: { id: number; name: string; platform: string; year: string; summary: string }[] = [];

  const education = [
    {
      degree: 'M.Sc Chemistry (66.4%)',
      school: 'Mahatma Gandhi Kashi Vidyapith, Varanasi (U.P.)',
      year: '2022-2024',
      focus: 'Postgraduate specialisation in chemistry with a strong analytical foundation'
    },
    {
      degree: 'B.Sc Chemistry (61.8%)',
      school: 'Mahatma Gandhi Kashi Vidyapith, Varanasi (U.P.)',
      year: '2019-2022',
      focus: 'Undergraduate degree in chemistry'
    },
    {
      degree: 'B.C.A (pursuing)',
      school: 'Mahatma Gandhi Kashi Vidyapith, Varanasi (U.P.)',
      year: '2024-present',
      focus: 'Computer applications alongside full-time laboratory work'
    },
    {
      degree: 'Intermediate (XII) — Science (53.8%)',
      school: 'A.B. Vajpayee Intermediate College, Varanasi (U.P.)',
      year: '2017-2019',
      focus: 'Science stream'
    },
    {
      degree: 'High School (X) — Science (68.3%)',
      school: 'A.B. Vajpayee Intermediate College, Varanasi (U.P.)',
      year: '2016-2017',
      focus: 'Science stream'
    }
  ];

  const interests = [
    'Analytical & Environmental Chemistry',
    'Water Quality & Treatment',
    'Laboratory Quality Systems',
    'Analytical Instrumentation',
    'Instrument Calibration & QC',
    'Environmental Monitoring & Compliance'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              QC / Analytical Chemist turning water and environmental samples into reliable, decision-ready data
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Biography */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">My Journey</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    I'm an analytical chemist focused on water and environmental quality. Working in a
                    NABL-accredited (ISO/IEC 17025) testing laboratory, I run the full workflow — sample
                    preparation, wet-chemistry and instrumental analysis, calibration, quality control
                    and compliant reporting.
                  </p>
                  <p>
                    My core strength is drinking-water and wastewater analysis — 15+ parameters including
                    pH, TDS, hardness, alkalinity, chloride, sulphate, fluoride, nitrate, COD, BOD and
                    heavy metals, tested as per IS 3025, APHA and IS 10500 — backed by a solid grounding
                    in soil and ambient-air testing.
                  </p>
                  <p>
                    Day to day I work hands-on with the UV-Vis spectrophotometer, pH/conductivity/TDS and
                    turbidity meters, flame photometer, COD digestion unit, BOD incubator and DO meter,
                    along with air, noise and lux monitoring equipment. I also have working knowledge of
                    AAS, GC/GC-MS, HPLC and ICP-MS.
                  </p>
                  <p>
                    I care about accuracy, traceability and getting results right the first time —
                    reliable data is what turns a test report into a decision.
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Card - Fixed */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center h-full flex flex-col justify-center">
                {/* Profile Image */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-gradient-to-br ring-emerald-200">
                  <img 
                    src={myimg}
                    alt="Chandani Rai"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Profile Info */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Chandani Rai</h3>
                <p className="text-gray-600 mb-6 text-lg">QC / Analytical Chemist — Water & Environmental Testing</p>
                
                {/* Contact Info */}
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    <span>Delhi, India</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4 text-emerald-500" />
                    <span>chandani.rai1415@gmail.com</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Linkedin className="h-4 w-4 text-emerald-500" />
                    <span>chandani-rai-b29667244</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GraduationCap className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600">Academic foundation in chemistry and environmental science</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gray-50 rounded-xl p-8 border-l-4 border-emerald-500 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-emerald-600 font-medium mb-1">{edu.school}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.year}</p>
                <p className="text-gray-700">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Award className="mx-auto h-12 w-12 text-blue-600 mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
              <p className="text-gray-600">Professional development and specialized training</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.id}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-blue-600 font-medium mb-2">{cert.platform}</p>
                  <p className="text-gray-600 text-sm">{cert.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Research Interests */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Microscope className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interests</h2>
            <p className="text-gray-600">Areas of focus and continuous learning</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
                whileHover={{ scale: 1.06, rotate: -1 }}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-4 text-center border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
              >
                <p className="text-gray-700 font-medium">{interest}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;