import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    role: "Environmental Testing Researcher",
    org: "Agricultural & Industrial Clients",
    date: "06/2022 – Present",
    location: "Varanasi, UP",
    points: [
      "Conducted soil pH and nutrient analysis for local farmers.",
      "Performed chemical compatibility tests for fertilizers.",
      "Developed bio-fertilizer solutions for 50+ farmers.",
    ]
  },
  {
    role: "Chemical Safety Auditor",
    org: "Educational Institutions & Industries",
    date: "01/2022 – 04/2024",
    location: "Varanasi, UP",
    points: [
      "Audited labs for safety compliance in schools and colleges.",
      "Prepared regulatory documentation for chemical handling."
    ]
  },
  {
    role: "Laboratory Analysis Consultant",
    org: "Small Businesses",
    date: "03/2022 – 02/2024",
    location: "Varanasi, UP",
    points: [
      "Provided water testing for restaurants and treatment plants.",
      "Supported QC for soft drinks and ice-cream makers."
    ]
  },
  {
    role: "Chemistry Content Developer",
    org: "Online Education Platforms",
    date: "03/2021 – Present",
    location: "Remote",
    points: [
      "Created educational content and experiment guides.",
      "Worked on course planning with senior product managers."
    ]
  }
];

const ExperiencePage: React.FC<ExperienceProps> = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeInUp} className={`text-4xl md:text-5xl font-bold mb-6  ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </motion.h2>
          <motion.p variants={fadeInUp} className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Key professional roles and research-based work experience in chemistry and environmental sciences.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] duration-300 ${
                darkMode ? 'bg-gray-800 border border-gray-700 text-white' : 'bg-white border border-gray-200 text-gray-800'
              }`}
            >
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-sm text-emerald-500">{exp.org}</p>
              <p className="text-sm italic mb-2">{exp.date} | {exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
