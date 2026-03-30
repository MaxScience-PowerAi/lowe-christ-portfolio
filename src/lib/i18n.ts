import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translations for UI elements
const resources = {
  en: {
    translation: {
      nav: { home: 'Home', about: 'About', portfolio: 'Portfolio', contact: 'Contact' },
      hero: { viewProjects: 'View my Projects', contactMe: 'Contact Me' },
      stats: { projects: 'AI & Web Projects', experience: 'Years of Experience', tech: 'Technologies', accuracy: 'AI Accuracy' },
      skills: { title: 'Skills & Technologies', subtitle: 'A technical arsenal built around artificial intelligence and modern development', expertise_title: 'Technical Expertise' },
      about: { title: 'About Me', subtitle: 'AI Engineer & Full-Stack Developer', readMore: 'Read more', achievements: 'Achievements', approach: 'My Approach' },
      projects: { title: 'Featured Projects', subtitle: 'A selection of my recent work', viewAll: 'View all projects', filtering: { all: 'All Works', ai: 'Artificial Intelligence', web: 'Web Development', data: 'Data Science', startup: 'Startup' } },
      projectDetails: { challenge: 'The Challenge', solution: 'The Solution', result: 'The Result', viewCode: 'View Code', viewProject: 'View Project', tech: 'Technologies', client: 'Client' },
      contact: { title: 'Contact Me', subtitle: 'Let\'s build the future together', send: 'Send Message', name: 'Name', email: 'Email', message: 'Message', projectType: 'Project Type', sending: 'Sending...', success: 'Message sent successfully!', error: 'An error occurred. Please try again later.' },
      footer: { rights: 'All rights reserved.' }
    }
  },
  fr: {
    translation: {
      nav: { home: 'Accueil', about: 'À Propos', portfolio: 'Portfolio', contact: 'Contact' },
      hero: { viewProjects: 'Voir mes Projets', contactMe: 'Me Contacter' },
      stats: { projects: 'Projets IA & Web', experience: "Ans d'Expérience", tech: 'Technologies', accuracy: 'Précision IA' },
      skills: { title: 'Technologies & Compétences', subtitle: "Un arsenal technique construit autour de l'intelligence artificielle et du développement moderne", expertise_title: 'Expertise Technique' },
      about: { title: 'À Propos de Moi', subtitle: 'AI Engineer & Full-Stack Developer', readMore: 'En savoir plus', achievements: 'Accomplissements', approach: 'Mon Approche' },
      projects: { title: 'Projets en Vedette', subtitle: 'Une sélection de mes travaux récents', viewAll: 'Voir tous les projets', filtering: { all: 'Tous mes travaux', ai: 'Intelligence Artificielle', web: 'Web Development', data: 'Data Science', startup: 'Startups' } },
      projectDetails: { challenge: 'Le Défi', solution: 'La Solution', result: 'Le Résultat', viewCode: 'Voir le Code', viewProject: 'Voir le Projet', tech: 'Technologies', client: 'Client' },
      contact: { title: 'Me Contacter', subtitle: 'Construisons l\'avenir ensemble', send: 'Envoyer', name: 'Nom', email: 'Email', message: 'Message', projectType: 'Type de Projet', sending: 'Envoi en cours...', success: 'Message envoyé avec succès !', error: 'Une erreur est survenue. Veuillez réessayer.' },
      footer: { rights: 'Tous droits réservés.' }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
