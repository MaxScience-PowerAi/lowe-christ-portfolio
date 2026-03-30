/**
 * Core TypeScript interfaces for Lowe Christ Portfolio
 * AI Engineer & Full-Stack Developer — Douala, Cameroun
 */

export type ProjectCategory = 'ai' | 'web' | 'data-science' | 'startup' | 'other';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  techStack?: string;
  location?: string;
  slug: string;
  challenge?: string;
  solution?: string;
  result?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  awards: string[];
  clients: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  portraitImage: string;
  skillCategories: SkillCategory[];
}

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'ai' | 'web' | 'video' | 'design' | 'other';
  message: string;
  timestamp: Date;
}
