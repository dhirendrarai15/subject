import React, { useEffect, useState } from 'react';
import { Atom, Code, Users, TrendingUp } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const SkillsPage: React.FC = () => {
  const { skills } = useContent();
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = {
    'Chemistry': { icon: Atom, color: 'emerald', bgColor: 'emerald-50' },
    'Software': { icon: Code, color: 'blue', bgColor: 'blue-50' },
    'Soft Skills': { icon: Users, color: 'purple', bgColor: 'purple-50' }
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up opacity-0">
            <TrendingUp className="mx-auto h-16 w-16 mb-6" />
            <h1 className="text-5xl font-bold mb-6">Skills & Expertise</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              A comprehensive overview of technical capabilities and professional competencies
            </p>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([category, config], categoryIndex) => {
              const categorySkills = getSkillsByCategory(category);
              const IconComponent = config.icon;
              
              return (
                <div 
                  key={category}
                  className={`fade-in-up opacity-0 stagger-${categoryIndex + 1}`}
                >
                  {/* Category Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-${config.color}-100 rounded-full mb-4`}>
                      <IconComponent className={`h-8 w-8 text-${config.color}-600`} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
                    <p className="text-gray-600">
                      {category === 'Chemistry' && 'Technical expertise in chemical sciences and research'}
                      {category === 'Software' && 'Programming and computational tools for research'}
                      {category === 'Soft Skills' && 'Leadership and communication abilities'}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, skillIndex) => (
                      <div 
                        key={skill.id}
                        className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-${config.color}-500`}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                          <span className={`text-sm font-medium text-${config.color}-600`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill Progress Bar */}
                        <div className="relative">
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div 
                              className={`bg-gradient-to-r from-${config.color}-500 to-${config.color}-600 h-3 rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: animatedSkills ? `${skill.level}%` : '0%'
                              }}
                            ></div>
                          </div>
                          
                          {/* Skill Level Indicator */}
                          <div className="flex justify-between text-xs text-gray-500 mt-1">
                            <span>Beginner</span>
                            <span>Expert</span>
                          </div>
                        </div>
                        
                        {/* Skill Description */}
                        <div className={`mt-4 p-3 bg-${config.bgColor} rounded-lg`}>
                          <p className={`text-${config.color}-700 text-sm`}>
                            {getSkillDescription(skill.name, skill.level)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skill Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Continuous Learning</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in-up opacity-0 stagger-1">
              <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-600">
                  {skills.filter(s => s.category === 'Chemistry').length}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900">Chemistry Skills</h3>
              <p className="text-gray-600 text-sm">Technical competencies</p>
            </div>
            
            <div className="fade-in-up opacity-0 stagger-2">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">
                  {skills.filter(s => s.category === 'Software').length}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900">Software Skills</h3>
              <p className="text-gray-600 text-sm">Programming languages</p>
            </div>
            
            <div className="fade-in-up opacity-0 stagger-3">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">
                  {skills.filter(s => s.category === 'Soft Skills').length}
                </span>
              </div>
              <h3 className="font-semibold text-gray-900">Soft Skills</h3>
              <p className="text-gray-600 text-sm">Leadership abilities</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function getSkillDescription(skillName: string, level: number): string {
  const descriptions: { [key: string]: { [range: string]: string } } = {
    'Organic Chemistry': {
      high: 'Advanced expertise in synthesis and mechanism design',
      medium: 'Solid understanding of organic reactions and pathways',
      low: 'Basic knowledge of organic chemistry principles'
    },
    'Python': {
      high: 'Proficient in data analysis, automation, and scientific computing',
      medium: 'Comfortable with basic programming and data manipulation',
      low: 'Learning fundamentals and syntax'
    },
    'Leadership': {
      high: 'Experienced in managing teams and complex projects',
      medium: 'Capable of leading small groups and initiatives',
      low: 'Developing leadership capabilities'
    }
  };

  const skillDesc = descriptions[skillName];
  if (!skillDesc) return 'Continuous development and practical application';

  if (level >= 85) return skillDesc.high;
  if (level >= 70) return skillDesc.medium;
  return skillDesc.low;
}

export default SkillsPage;