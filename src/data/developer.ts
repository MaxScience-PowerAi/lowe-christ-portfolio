import type { DeveloperInfo } from '@/types';

const en: DeveloperInfo = {
  name: 'Lowe Christ',
  tagline: 'AI Engineer & Full-Stack Developer',
  heroIntroduction: "I build intelligent systems and full-stack applications that solve real-world problems — from AI-powered crop disease detection to language models for African languages.",
  biography: `I'm Lowe Christ, an AI Engineer and Full-Stack Developer based in Douala, Cameroon. I specialize in building intelligent solutions at the intersection of artificial intelligence, data science, and modern web development.\n\nMy expertise spans prompt engineering, AI agents, generative AI, computer vision, and NLP. I'm also a Kaggle competitor and have built several impactful projects including AgroGuard (AI-powered plant disease detection), PALAM (a language model for Cameroonian local languages), and Retrouvo (a platform to help find lost items and missing persons).\n\nAs co-founder and CTO of PowerAi, I architected scalable AI pipelines and led technical teams. I believe technology should be accessible, locally relevant, and globally competitive.\n\nWhether you need an AI-powered application, a full-stack web platform, or an intelligent automation system — I transform ideas into production-ready digital products that are efficient, elegant, and intelligent.`,
  approach: `My approach is driven by three core principles: solve real problems, learn by building, and create accessible solutions. I believe the best way to master AI and software development is to build concrete projects with measurable impact.\n\nWhether it's smart agriculture, local language preservation, or community safety — I strive to create solutions that transcend their immediate purpose and become lasting tools for communities across Africa and beyond.`,
  awards: [
    'Kaggle Competitor — Data Science & Machine Learning',
    'Co-Founder & CTO, PowerAi — Technical Leadership',
    'Full-Stack Developer — React, Next.js, Node.js',
    'Prompt Engineering & AI Agents Specialist',
  ],
  clients: [
    'Startups & Entrepreneurs',
    'Local Tech Community',
    'Small & Medium Businesses',
    'Students & Individuals',
  ],
  education: 'AI Engineering, Data Science, Prompt Engineering & AI Agents',
  location: 'Douala, Cameroun 🇨🇲',
  email: 'christlowe6@gmail.com',
  phone: '+237 678 83 18 68',
  availability: 'Available for new projects & collaborations',
  socialLinks: {
    instagram: 'https://instagram.com/lowechrist',
    linkedin: 'https://linkedin.com/in/lowechrist',
    github: 'https://github.com/lowechrist',
  },
  portraitImage: '/images/lowe-christ.png',
  skillCategories: [
    {
      title: 'Artificial Intelligence',
      skills: [
        { name: 'Machine Learning' }, { name: 'Deep Learning' }, { name: 'Computer Vision' }, { name: 'NLP' },
        { name: 'LLMs & Agents' }, { name: 'Prompt Engineering' }, { name: 'TensorFlow / Keras' }, { name: 'Generative AI' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React / Next.js' }, { name: 'TypeScript' }, { name: 'Node.js' }, { name: 'Tailwind CSS' },
        { name: 'REST APIs' }, { name: 'Supabase' }, { name: 'MongoDB' }, { name: 'React Native' }
      ]
    },
    {
      title: 'Data Science',
      skills: [
        { name: 'Python' }, { name: 'Pandas' }, { name: 'Scikit-learn' }, { name: 'Data Visualization' },
        { name: 'Kaggle' }, { name: 'SQL' }, { name: 'Jupyter' }, { name: 'Statistics' }
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git / GitHub' }, { name: 'Docker' }, { name: 'Linux' }, { name: 'Vercel' },
        { name: 'Figma' }, { name: 'Video Editing' }, { name: 'CI/CD' }, { name: 'Agile' }
      ]
    }
  ]
};

const fr: DeveloperInfo = {
  ...en,
  tagline: 'Ingénieur IA & Développeur Full-Stack',
  heroIntroduction: "Je conçois des systèmes intelligents et des applications full-stack qui résolvent des problèmes concrets — de la détection de maladies agricoles par l'IA aux modèles de langages africains.",
  biography: `Je suis Lowe Christ, un Ingénieur IA et Développeur Full-Stack basé à Douala, au Cameroun. Je me spécialise dans la création de solutions intelligentes à la croisée de l'intelligence artificielle, de la science des données et du développement web moderne.\n\nMon expertise couvre le prompt engineering, les agents conversationnels, l'IA générative, la vision par ordinateur et le traitement du langage naturel (NLP). En tant que compétiteur Kaggle, j'ai développé plusieurs projets à fort impact tels que AgroGuard (détection par l'IA des maladies des plantes), PALAM (un modèle de langage pour les langues locales camerounaises), et Retrouvo (une plateforme d'aide à la recherche d'objets ou de personnes disparus).\n\nEn tant que co-fondateur et CTO de PowerAi, j'ai architecturé des pipelines d'IA scalables et dirigé des équipes techniques. Je suis convaincu que la technologie doit être accessible, pertinente localement, tout en restant compétitive à l'échelle mondiale.\n\nQue vous ayez besoin d'une application boostée par l'IA, d'une plateforme web full-stack ou d'un système d'automatisation intelligent — je transforme rapidement des idées en produits digitaux élégants et performants prêts pour la production.`,
  approach: `Mon approche est guidée par trois principes fondamentaux : résoudre les vrais problèmes, apprendre en construisant, et créer des solutions hautement accessibles. Je crois fermement que la meilleure façon de maîtriser l'Intelligence Artificielle et le développement logiciel est de réaliser des projets concrets avec un véritable impact.\n\nQu'il s'agisse de l'agriculture intelligente, de la préservation de la culture, ou de la sécurité locale, je m'efforce de créer des solutions qui deviennent des outils durables pour les communautés.`,
  awards: [
    'Compétiteur Kaggle — Data Science & Machine Learning',
    'Co-Fondateur & CTO, PowerAi — Leadership Technique',
    'Développeur Full-Stack — React, Next.js, Node.js',
    'Spécialiste Prompt Engineering & AI Agents',
  ],
  clients: [
    'Startups & Entrepreneurs',
    'Communauté Tech Locale',
    'Petites & Moyennes Entreprises',
    'Étudiants & Particuliers',
  ],
  education: 'Ingénierie IA, Data Science, Prompt Engineering & AI Agents',
  availability: 'Disponible pour de nouveaux projets et collaborations',
};

export const developerInfoData = { en, fr };
