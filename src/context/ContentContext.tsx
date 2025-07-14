import React, { createContext, useContext, useState, useEffect } from 'react';

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
      title: 'Chemical Safety Auditor',
      organization: 'GreenTech Solutions',
      date: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Conduct comprehensive safety audits for chemical manufacturing facilities, ensuring compliance with environmental regulations and sustainable practices.'
    },
    {
      id: '2',
      title: 'Research Assistant',
      organization: 'University of California',
      date: '2020 - 2022',
      location: 'Berkeley, CA',
      description: 'Conducted research on sustainable agricultural chemicals and eco-friendly pesticide alternatives.'
    }
  ],
  projects: [
    {
      id: '1',
      title: 'Eco-Friendly Fertilizer Development',
      summary: 'Developed a novel organic fertilizer using agricultural waste that increases crop yield by 25%.',
      impact: 'Reduced chemical runoff by 40% and improved soil health metrics.',
      image: 'https://images.pexels.com/photos/296230/pexels-photo-296230.jpeg',
      tags: ['Agriculture', 'Sustainability', 'Organic Chemistry']
    },
    {
      id: '2',
      title: 'Water Purification System',
      summary: 'Designed a cost-effective water treatment system using activated carbon from coconut shells.',
      impact: 'Provided clean water access to 500+ families in rural communities.',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg',
      tags: ['Water Treatment', 'Environmental', 'Green Chemistry']
    },
    {
      id: '3',
      title: 'Natural Cosmetics Research',
      summary: 'Formulated organic skincare products using plant-based extracts and sustainable processes.',
      impact: 'Created 100% biodegradable formulations with 90% natural ingredients.',
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg',
      tags: ['Cosmetics', 'Natural Products', 'Sustainability']
    }
  ],
  certifications: [
    {
      id: '1',
      name: 'Green Chemistry Professional Certificate',
      platform: 'American Chemical Society',
      year: '2023',
      summary: 'Advanced certification in sustainable chemical processes and environmental impact assessment.'
    },
    {
      id: '2',
      name: 'Chemical Safety Management',
      platform: 'OSHA',
      year: '2022',
      summary: 'Comprehensive training in workplace chemical safety and hazard communication.'
    }
  ],
  blogPosts: [
    {
      id: '1',
      title: 'The Future of Green Chemistry in Agriculture',
      slug: 'future-green-chemistry-agriculture',
      body: 'Exploring how sustainable chemical practices are revolutionizing modern farming...',
      image: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg',
      tags: ['Green Chemistry', 'Agriculture', 'Sustainability'],
      publishDate: '2024-01-15'
    }
  ],
  skills: [
    { id: '1', name: 'Organic Chemistry', category: 'Chemistry', level: 95 },
    { id: '2', name: 'Analytical Chemistry', category: 'Chemistry', level: 90 },
    { id: '3', name: 'Green Chemistry', category: 'Chemistry', level: 88 },
    { id: '4', name: 'Spectroscopy', category: 'Chemistry', level: 85 },
    { id: '5', name: 'Python', category: 'Software', level: 75 },
    { id: '6', name: 'R', category: 'Software', level: 70 },
    { id: '7', name: 'Leadership', category: 'Soft Skills', level: 82 },
    { id: '8', name: 'Project Management', category: 'Soft Skills', level: 78 }
  ]
};

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioContent');
    if (savedData) {
      const data = JSON.parse(savedData);
      setExperiences(data.experiences || initialData.experiences);
      setProjects(data.projects || initialData.projects);
      setCertifications(data.certifications || initialData.certifications);
      setBlogPosts(data.blogPosts || initialData.blogPosts);
      setSkills(data.skills || initialData.skills);
    } else {
      setExperiences(initialData.experiences);
      setProjects(initialData.projects);
      setCertifications(initialData.certifications);
      setBlogPosts(initialData.blogPosts);
      setSkills(initialData.skills);
    }
  }, []);

  useEffect(() => {
    const data = { experiences, projects, certifications, blogPosts, skills };
    localStorage.setItem('portfolioContent', JSON.stringify(data));
  }, [experiences, projects, certifications, blogPosts, skills]);

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