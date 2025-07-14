import React from 'react';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const ExperiencePage: React.FC = () => {
  const { experiences } = useContent();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up opacity-0">
            <Briefcase className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Professional Experience</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A journey through impactful roles in chemistry research and environmental sustainability
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div 
                  key={experience.id}
                  className={`relative fade-in-up opacity-0 stagger-${index + 1}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  {/* Experience card */}
                  <div className="ml-20 bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                        {experience.title}
                      </h3>
                      <div className="flex items-center text-emerald-600 font-medium">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.date}
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                      <div className="flex items-center text-gray-600">
                        <Briefcase className="h-4 w-4 mr-2" />
                        {experience.organization}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {experience.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {experience.description}
                    </p>
                    
                    {/* Key achievements */}
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-semibold text-emerald-800 mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-emerald-700">
                          <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Improved safety protocols and reduced incidents by 30%</span>
                        </li>
                        <li className="flex items-start text-emerald-700">
                          <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Developed innovative testing methodologies</span>
                        </li>
                        <li className="flex items-start text-emerald-700">
                          <ArrowRight className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Mentored junior researchers and interns</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills developed */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in-up opacity-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills Developed</h2>
            <p className="text-gray-600">Core competencies gained through professional experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: 'Chemical Safety Auditing', level: 95 },
              { skill: 'Environmental Compliance', level: 90 },
              { skill: 'Research Methodology', level: 88 },
              { skill: 'Team Leadership', level: 82 },
              { skill: 'Data Analysis', level: 85 },
              { skill: 'Project Management', level: 78 }
            ].map((item, index) => (
              <div 
                key={index}
                className={`bg-gray-50 rounded-lg p-6 fade-in-up opacity-0 stagger-${index + 1}`}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{item.skill}</h3>
                  <span className="text-sm text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;