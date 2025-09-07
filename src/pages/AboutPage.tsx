import React from 'react';
import { GraduationCap, Microscope ,Award, Heart, BookOpen, MapPin, Mail, Linkedin } from 'lucide-react';
import myimg from '../assets/myimg.png';

const AboutPage: React.FC = () => {
  // Mock certifications data - replace with your actual data
  const certifications = [
    {
      id: 1,
      name: 'Battery Technology Certification',
      platform: 'ARIZONA STATE UNIVERSITY',
      year: '2025',
      summary: 'Advanced certification in sustainable chemistry practices and environmental impact reduction.'
    },
    {
      id: 2,
      name: 'Hydrogen Fuel Cells',
      platform: 'Udemy',
      year: '2025',
      summary: 'Specialized training in eco-friendly agricultural solutions and crop optimization.'
    }
  ];

  const education = [
    {
      degree: 'M.S. in Chemistry',
      school: 'Mahatma Gandhi Kashi Vidyapith, Varanasi (U.P.)',
      year: '2022-2024',
      focus: 'Green Chemistry and Sustainable Materials'
    },
    {
      degree: 'B.S. in Chemistry',
      school: 'Mahatma Gandhi Kashi Vidyapith, Varanasi (U.P.)',
      year: '2019-2022',
      focus: 'Organic Chemistry with Environmental Focus'
    },
    {
      degree: 'B.S. in Computer Applications',
      school: 'Mahatma Gandhi Kashi Vidyapith, Varanasi (U.P.)',
      year: '2024-present',
      focus: 'Artifical Intelligence and Data Science'
    }
  ];

  const interests = [
    'Sustainable Agriculture',
    'Green Chemistry Innovation',
    'Environmental Policy',
    'Water Purification',
    'Agricultural Innovation',
    'Process Optimization'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Passionate about creating sustainable solutions through innovative chemistry research
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
                    As a dedicated chemistry researcher with a passion for sustainability, I've spent the last 
                    several years developing innovative solutions to address environmental challenges through 
                    green chemistry principles.
                  </p>
                  <p>
                    My journey began with a fascination for how molecular interactions could be harnessed to 
                    create positive environmental impact. This led me to specialize in agricultural chemistry, 
                    where I focus on developing eco-friendly fertilizers, sustainable pest management solutions, 
                    and biodegradable materials.
                  </p>
                  <p>
                    Through my research, I've had the privilege of working on projects that have directly 
                    improved the lives of rural communities while reducing environmental impact. My work in 
                    developing organic fertilizers has helped increase crop yields by 25% while reducing 
                    chemical runoff by 40%.
                  </p>
                  <p>
                    I believe that chemistry holds the key to solving many of our environmental challenges, 
                    and I'm committed to using my knowledge and skills to create a more sustainable future 
                    for generations to come.
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
                <p className="text-gray-600 mb-6 text-lg">Researcher in Chemistry | Shaping a Greener Future</p>
                
                {/* Contact Info */}
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    <span>Varanasi, Uttar Pradesh</span>
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
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 border-l-4 border-emerald-500 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-emerald-600 font-medium mb-1">{edu.school}</p>
                <p className="text-gray-600 text-sm mb-3">{edu.year}</p>
                <p className="text-gray-700">{edu.focus}</p>
              </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Interests</h2>
            <p className="text-gray-600">Areas of passion and ongoing exploration</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-4 text-center border border-emerald-200 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
              >
                <p className="text-gray-700 font-medium">{interest}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;