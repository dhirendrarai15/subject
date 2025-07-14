import React from 'react';
import { GraduationCap, Award, Heart, BookOpen } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const AboutPage: React.FC = () => {
  const { certifications } = useContent();

  const education = [
    {
      degree: 'M.S. in Chemistry',
      school: 'University of California, Berkeley',
      year: '2020-2022',
      focus: 'Green Chemistry and Sustainable Materials'
    },
    {
      degree: 'B.S. in Chemistry',
      school: 'Stanford University',
      year: '2016-2020',
      focus: 'Organic Chemistry with Environmental Focus'
    }
  ];

  const interests = [
    'Sustainable Agriculture',
    'Green Chemistry Innovation',
    'Environmental Policy',
    'Renewable Energy',
    'Biotechnology',
    'Climate Science'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up opacity-0">
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
            <div className="lg:col-span-2 fade-in-up opacity-0 stagger-1">
              <div className="bg-white rounded-xl shadow-lg p-8">
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

            {/* Profile Image */}
            <div className="fade-in-up opacity-0 stagger-2">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                  <div className="text-white text-6xl font-bold">JD</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-gray-600 mb-4">Chemistry Researcher & Sustainability Advocate</p>
                <div className="text-sm text-gray-500">
                  <p>📍 San Francisco, CA</p>
                  <p>📧 john.doe@email.com</p>
                  <p>🌐 LinkedIn: /in/johndoe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up opacity-0">
            <GraduationCap className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education</h2>
            <p className="text-gray-600">Academic foundation in chemistry and environmental science</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div 
                key={index}
                className={`bg-gray-50 rounded-xl p-8 border-l-4 border-emerald-500 fade-in-up opacity-0 stagger-${index + 1}`}
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up opacity-0">
            <Award className="mx-auto h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications</h2>
            <p className="text-gray-600">Professional development and specialized training</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.id}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 fade-in-up opacity-0 stagger-${index + 1}`}
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

      {/* Interests */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up opacity-0">
            <Heart className="mx-auto h-12 w-12 text-red-500 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Research Interests</h2>
            <p className="text-gray-600">Areas of passion and ongoing exploration</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-4 text-center border border-emerald-200 hover:border-emerald-400 transition-colors duration-200 fade-in-up opacity-0 stagger-${(index % 6) + 1}`}
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