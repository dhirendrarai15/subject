import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface ExperienceProps {
  darkMode: boolean;
}

const experiences = [
  {
    role: "Chemical Analyst / QC Chemist",
    org: "Eco Care Instruments Pvt. Ltd. — NABL-accredited (ISO/IEC 17025) environmental & water testing lab",
    date: "Dec 2025 – Present",
    location: "New Delhi",
    points: [
      "Analyse drinking water, groundwater and wastewater for 15+ parameters (pH, TDS, hardness, alkalinity, chloride, sulphate, fluoride, nitrate, COD, BOD, heavy metals) as per IS 3025, APHA & IS 10500.",
      "Perform wet-chemistry titrations, gravimetric and UV-Vis colorimetric analysis, and sample digestion for heavy-metal testing.",
      "Handle soil/sediment and ambient-air monitoring, with exposure to stack, noise and illumination testing.",
      "Maintain calibration, QC checks (blank/duplicate/spike) and NABL-format reporting for CPCB/SPCB and clients."
    ]
  },
  {
    role: "Key Achievements",
    org: "Highlights from the lab",
    date: "Dec 2025 – Present",
    location: "New Delhi",
    points: [
      "Independent Testing: handle daily water & wastewater analysis end-to-end with accurate, reproducible results.",
      "Method Command: strong practical grip on IS 3025 / APHA wet-chemistry and UV-Vis methods in a short span.",
      "Quality Discipline: maintain NABL / ISO 17025 documentation and QC for reliable, traceable data.",
      "Multi-Domain Exposure: experience across water, soil and air testing in a single accredited lab."
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
            QC / analytical chemistry experience in a NABL-accredited water and environmental testing laboratory.
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
