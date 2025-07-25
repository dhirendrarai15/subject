import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Beaker, Code, Search, FlaskConical, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { skills } from '../data/portfolio'; // Make sure this exists

interface SkillsProps {
  darkMode: boolean;
}

const SkillsPage: React.FC<SkillsProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categoryIcons = {
    analytical: Search,
    software: Code,
    research: FlaskConical,
    laboratory: Beaker,
    chemistry: Beaker,
    'soft skills': TrendingUp
  };

  const categoryColors = {
    analytical: 'from-blue-500 to-cyan-500',
    software: 'from-purple-500 to-pink-500',
    research: 'from-emerald-500 to-teal-500',
    laboratory: 'from-orange-500 to-red-500',
    chemistry: 'from-emerald-500 to-teal-500',
    'soft skills': 'from-purple-500 to-indigo-500'
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    const key = skill.category.toLowerCase();
    if (!acc[key]) acc[key] = [];
    acc[key].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={fadeInUp}
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className={`text-lg max-w-3xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Technical capabilities and professional competencies developed through years of research
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-8"
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || TrendingUp;
            const colorClass = categoryColors[category as keyof typeof categoryColors] || 'from-gray-500 to-gray-700';

            return (
              <motion.div
                key={category}
                variants={fadeInUp}
                className={`p-8 rounded-2xl transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-800 border border-gray-700' 
                    : 'bg-gray-50 border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClass} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold capitalize ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category} Skills
                  </h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="space-y-2 hover:scale-[1.01] transition-transform duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                        <span className={`text-sm font-semibold ${
                          darkMode ? 'text-emerald-400' : 'text-emerald-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`h-2 rounded-full overflow-hidden ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colorClass} rounded-full`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: index * 0.1,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPage;
