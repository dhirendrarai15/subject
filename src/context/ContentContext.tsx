import React, { createContext, useContext, useState, useEffect } from 'react';
import soilTestImage from '../assets/soiltestwebp.webp';

export interface Experience {
  id: string;
  title: string;
  organization: string;
  date: string;
  location: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  impact: string;
  image?: string;
  tags: string[];
}

export interface Certification {
  id: string;
  name: string;
  platform: string;
  year: string;
  summary: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  body: string;
  image?: string;
  tags: string[];
  publishDate: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'Chemistry' | 'Software' | 'Soft Skills';
  level: number;
}

interface ContentContextType {
  experiences: Experience[];
  projects: Project[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  skills: Skill[];
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  addProject: (project: Omit<Project, 'id'>) => void;
  addCertification: (certification: Omit<Certification, 'id'>) => void;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteExperience: (id: string) => void;
  deleteProject: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const initialData = {
  experiences: [
    {
      id: '1',
      title: 'Chemical Analyst / QC Chemist',
      organization: 'Eco Care Instruments Pvt. Ltd.',
      date: 'Dec 2025 - Present',
      location: 'New Delhi',
      description: 'Analyse drinking water, groundwater and wastewater for 15+ parameters (pH, TDS, hardness, alkalinity, chloride, sulphate, fluoride, nitrate, COD, BOD, heavy metals) as per IS 3025, APHA & IS 10500 in a NABL-accredited (ISO/IEC 17025) environmental & water testing laboratory.'
    }
  ],
  projects: [
    {
      id: '1',
      title: 'Drinking, Ground & Waste Water',
      summary: 'Physico-chemical analysis of drinking water, groundwater and wastewater for 15+ parameters — pH, TDS, hardness, alkalinity, chloride, sulphate, fluoride, nitrate, COD, BOD and heavy metals.',
      impact: 'Tested as per IS 3025, APHA and IS 10500, with calibration, QC checks and NABL-format reporting for CPCB/SPCB and clients.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['IS 3025', 'APHA', 'IS 10500']
    },
    {
      id: '2',
      title: 'Soil & Sediment',
      summary: 'Analysis of soil and sediment samples for physico-chemical parameters, supporting environmental monitoring and compliance work.',
      impact: 'Performed to IS 2720 and standard methods with full traceability and documented QC.',
      image: soilTestImage,
      tags: ['IS 2720', 'Wet Chemistry', 'Environmental Monitoring']
    },
    {
      id: '3',
      title: 'Ambient Air',
      summary: 'Ambient air quality monitoring using a High-Volume Air Sampler — particulate matter and gaseous pollutants.',
      impact: 'Sampling and analysis aligned to IS 5182 and CPCB guidelines.',
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
      tags: ['IS 5182', 'High-Volume Sampler', 'Air Quality']
    },
    {
      id: '4',
      title: 'Stack Emission',
      summary: 'Working exposure to stack-emission monitoring for industrial sources — sampling support and analysis.',
      impact: 'Supports emission compliance reporting for industrial clients.',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg',
      tags: ['Stack Monitoring', 'Industrial Compliance', 'CPCB']
    },
    {
      id: '5',
      title: 'Noise Monitoring',
      summary: 'Noise level measurement using a Sound Level Meter for ambient and workplace environments.',
      impact: 'Day and night ambient noise measurements aligned to CPCB norms.',
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg',
      tags: ['Sound Level Meter', 'Ambient Noise', 'Workplace']
    },
    {
      id: '6',
      title: 'Illumination (Lux)',
      summary: 'Illumination surveys using a Lux Meter for workplaces and facilities.',
      impact: 'Verifies lighting adequacy against workplace standards.',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
      tags: ['Lux Meter', 'Workplace Survey', 'Compliance']
    }
  ],
  certifications: [],
  blogPosts: [
    {
      id: '1',
      title: 'Why NABL Accreditation Matters in Water Testing',
      slug: 'why-nabl-accreditation-matters-water-testing',
      body: 'What ISO/IEC 17025 accreditation means in practice — calibration, QC checks and traceable, decision-ready results...',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['NABL', 'ISO 17025', 'Water Testing'],
      publishDate: '2026-01-15'
    }
  ],
  skills: [
    { id: '1', name: 'Water & Wastewater Analysis', category: 'Chemistry', level: 92 },
    { id: '2', name: 'Wet Chemistry & Titrimetric Analysis', category: 'Chemistry', level: 90 },
    { id: '3', name: 'UV-Vis Colorimetric Analysis', category: 'Chemistry', level: 88 },
    { id: '4', name: 'Instrument Calibration & QC', category: 'Chemistry', level: 87 },
    { id: '5', name: 'MS Excel & Data Reporting', category: 'Software', level: 80 },
    { id: '6', name: 'NABL / ISO 17025 Documentation', category: 'Chemistry', level: 85 },
    { id: '7', name: 'Attention to Detail', category: 'Soft Skills', level: 90 },
    { id: '8', name: 'Teamwork', category: 'Soft Skills', level: 85 }
  ]
};

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fall back to the seed data whenever a stored list is missing OR empty,
    // so a bad/partial localStorage write can never blank out the site.
    let data: Partial<typeof initialData> = {};
    try {
      data = JSON.parse(localStorage.getItem('portfolioContent_v3') || '{}');
    } catch {
      data = {};
    }
    setExperiences(data.experiences?.length ? data.experiences : initialData.experiences);
    setProjects(data.projects?.length ? data.projects : initialData.projects);
    setCertifications(data.certifications?.length ? data.certifications : initialData.certifications);
    setBlogPosts(data.blogPosts?.length ? data.blogPosts : initialData.blogPosts);
    setSkills(data.skills?.length ? data.skills : initialData.skills);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    // Never persist before the initial load has happened (this used to
    // overwrite storage with empty arrays on mount).
    if (!isLoaded) return;
    const data = { experiences, projects, certifications, blogPosts, skills };
    localStorage.setItem('portfolioContent_v3', JSON.stringify(data));
  }, [isLoaded, experiences, projects, certifications, blogPosts, skills]);

  const addExperience = (experience: Omit<Experience, 'id'>) => {
    const newExperience = { ...experience, id: Date.now().toString() };
    setExperiences(prev => [newExperience, ...prev]);
  };

  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now().toString() };
    setProjects(prev => [newProject, ...prev]);
  };

  const addCertification = (certification: Omit<Certification, 'id'>) => {
    const newCertification = { ...certification, id: Date.now().toString() };
    setCertifications(prev => [newCertification, ...prev]);
  };

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost = { ...post, id: Date.now().toString() };
    setBlogPosts(prev => [newPost, ...prev]);
  };

  const addSkill = (skill: Omit<Skill, 'id'>) => {
    const newSkill = { ...skill, id: Date.now().toString() };
    setSkills(prev => [newSkill, ...prev]);
  };

  const updateExperience = (id: string, updatedExperience: Partial<Experience>) => {
    setExperiences(prev => prev.map(exp => 
      exp.id === id ? { ...exp, ...updatedExperience } : exp
    ));
  };

  const updateProject = (id: string, updatedProject: Partial<Project>) => {
    setProjects(prev => prev.map(proj => 
      proj.id === id ? { ...proj, ...updatedProject } : proj
    ));
  };

  const deleteExperience = (id: string) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id));
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(proj => proj.id !== id));
  };

  return (
    <ContentContext.Provider value={{
      experiences,
      projects,
      certifications,
      blogPosts,
      skills,
      addExperience,
      addProject,
      addCertification,
      addBlogPost,
      addSkill,
      updateExperience,
      updateProject,
      deleteExperience,
      deleteProject
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}