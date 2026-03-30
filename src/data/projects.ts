import type { Project } from '@/types';

const enProjects: Project[] = [
  {
    id: '1',
    title: 'Retrouvo',
    category: 'web',
    year: '2024',
    slug: 'retrouvo',
    coverImage: '/images/project-retrouvo-2.png',
    description: "A web and mobile platform that centralizes reports of lost items and missing persons, mobilizing the community to facilitate reunions across Cameroon.",
    client: 'Community Impact Project',
    techStack: 'React Native / Next.js / Supabase',
    location: 'Cameroun',
    challenge: "**Context**: In Cameroon, tracking lost belongings or finding missing persons relies heavily on fragmented social media posts.\n**Problem**: There is no centralized, efficient, and accessible tracking system for alerts, leading to chaotic rescue and recovery efforts.",
    solution: "**Solution**: I built a cross-platform application (web + mobile) that enables individuals to report lost/found objects and missing persons. It features interactive map geolocations, an intelligent matching algorithm linking related reports, and instant push notifications to mobilize communities safely.",
    result: "**Result**: The platform drastically reduced recovery time for lost assets and improved community solidarity, bridging the gap between individuals and civil safety systems.",
    images: [
      { id: '1-1', src: '/images/project-retrouvo.jpg', alt: 'Retrouvo — Signal Dashboard', aspectRatio: 'landscape' },
      { id: '1-2', src: '/images/project-retrouvo-2.png', alt: 'Mobile App Retrouvo', aspectRatio: 'portrait' },
      { id: '1-3', src: '/images/project-retrouvo.jpg', alt: 'Smart Matching System', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '2',
    title: 'AgroGuard',
    category: 'ai',
    year: '2024',
    slug: 'agroguard',
    coverImage: '/images/project-agroguard-2.png',
    description: "A computer vision system that detects whether a plant is healthy or diseased from leaf images, tailored for Cameroonian smallholder farmers.",
    client: 'Smart Agriculture',
    techStack: 'Python / TensorFlow / CNN / Flask',
    location: 'Cameroun',
    challenge: "**Context**: Agriculture relies on timely interventions. In Cameroon, smallholder farmers lose significant percentages of their harvest annually.\n**Problem**: High crop loss due to undetected diseases and limited access to agricultural and botanical experts.",
    solution: "**Solution**: I deployed a convolutional neural network (CNN) trained on thousands of leaf images to classify plant diseases accurately. This lightweight, mobile-friendly app allows farmers to simply photograph a leaf and immediately receive a diagnosis and recommended remediation steps.",
    result: "**Result**: Achieved highly accurate diagnosis and empowered farm owners to make fast, data-driven decisions that minimize crop loss and improve agricultural yield.",
    githubUrl: 'https://github.com/lowechrist',
    images: [
      { id: '2-1', src: '/images/project-agroguard.jpg', alt: 'Leaf Disease Detection', aspectRatio: 'landscape' },
      { id: '2-2', src: '/images/project-agroguard-2.png', alt: 'Camerounaise Farmer using AgroGuard', aspectRatio: 'landscape' },
      { id: '2-3', src: '/images/project-agroguard.jpg', alt: 'Computer Vision Analysis', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '3',
    title: 'PALAM',
    category: 'ai',
    year: '2024',
    slug: 'palam',
    coverImage: '/images/project-palam-2.png',
    description: "A language model (LLM) project designed to understand and generate text in Cameroonian local languages — bridging the digital divide for education.",
    client: 'Education & Culture',
    techStack: 'Python / NLP / Transformers / HuggingFace',
    location: 'Cameroun',
    challenge: "**Context**: Cameroon acts as a melting pot with over 250 local languages, largely neglected by mainstream global AI development.\n**Problem**: The digital exclusion of indigenous languages which threatens culture preservation and creates technological illiteracy in remote areas.",
    solution: "**Solution**: I'm developing PALAM — a purposely-built language model leveraging regional Cameroonian datasets. The underlying pipeline involves comprehensive data collection, tokenization, and neural network attention mechanisms specifically tailored for local dialects like Douala or Ewondo.",
    result: "**Result**: A pioneering local LLM prototype demonstrating immense potential for deploying educational AI tools tailored towards African linguistic heritage.",
    images: [
      { id: '3-1', src: '/images/project-palam.jpg', alt: 'LLM Architecture for Local Languages', aspectRatio: 'portrait' },
      { id: '3-2', src: '/images/project-palam-2.png', alt: 'PALAM Neural Network Visualization', aspectRatio: 'landscape' },
      { id: '3-3', src: '/images/project-palam.jpg', alt: 'NLP Processing Pipeline', aspectRatio: 'square' }
    ]
  },
  {
    id: '4',
    title: 'PowerAi',
    category: 'startup',
    year: '2023',
    slug: 'powerai',
    coverImage: '/images/project-powerai.jpg',
    description: "Co-founded an AI startup where I served as CTO — architecting scalable AI pipelines, managing the codebase, and leading technical strategy.",
    client: 'Startup PowerAi',
    techStack: 'Full-Stack / Python / DevOps / AI Pipelines',
    location: 'Cameroun',
    challenge: "**Context**: Running early-stage AI startups in under-resourced local technical ecosystems is a critical challenge.\n**Problem**: The startup needed scalable architectural infrastructure without huge venture capital and reliable team workflows to deliver a stable MVP.",
    solution: "**Solution**: I architected the core infrastructure encompassing highly robust AI inference pipelines, CI/CD automated workflows, and standardized secure API endpoints while coaching the technical team.",
    result: "**Result**: Streamlined MVP deployment, robust 99% uptime during launch phases, and successfully established a mature engineering culture within the startup.",
    images: [
      { id: '4-1', src: '/images/project-powerai.jpg', alt: 'Technical Architecture PowerAi', aspectRatio: 'landscape' },
      { id: '4-2', src: '/images/project-powerai.jpg', alt: 'PowerAi Dashboard', aspectRatio: 'landscape' },
      { id: '4-3', src: '/images/project-powerai.jpg', alt: 'AI Data Pipeline', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '5',
    title: 'Dog Breed Classifier',
    category: 'data-science',
    year: '2023',
    slug: 'dog-breed-classifier',
    coverImage: '/images/project-dog-breed.jpg',
    description: "A deep learning classification system that identifies dog breeds from photos using transfer learning with pre-trained CNN models.",
    client: 'Personal Project',
    techStack: 'Python / TensorFlow / Keras / Transfer Learning',
    location: 'Kaggle',
    challenge: "**Context**: Computer vision models often struggle with high variance and subtle multi-class categorization.\n**Problem**: Differentiating over 120 unique dog breeds demands a robust feature extraction system resistant to noise.",
    solution: "**Solution**: I engineered a deep neural network pipeline employing transfer learning through fine-tuned pre-trained models (ResNet, VGG16) to classify unseen images accurately, using ensemble learning and dynamic learning rate scheduling.",
    result: "**Result**: Attained exceptional accuracy ranking highly on Kaggle leaderboards, proving practical readiness to deploy enterprise-level vision models.",
    githubUrl: 'https://github.com/lowechrist',
    images: [
      { id: '5-1', src: '/images/project-dog-breed.jpg', alt: 'Dog Breed Classification by AI', aspectRatio: 'landscape' },
      { id: '5-2', src: '/images/project-dog-breed.jpg', alt: 'Prediction Results', aspectRatio: 'landscape' },
      { id: '5-3', src: '/images/project-dog-breed.jpg', alt: 'CNN Model Architecture', aspectRatio: 'portrait' }
    ]
  },
  {
    id: '6',
    title: 'Data Science Lab',
    category: 'data-science',
    year: '2023',
    slug: 'data-science-lab',
    coverImage: '/images/project-data-lab-2.png',
    description: "A collection of data science mini-projects: interactive dashboards, Kaggle explorations, and autonomous AI agents demonstrating diverse analytical capabilities.",
    client: 'Learning & Exploration',
    techStack: 'Python / Pandas / Scikit-learn / Matplotlib',
    location: 'Kaggle / GitHub',
    challenge: "**Context**: Ongoing proficiency in Data Science requires relentless practice and cross-disciplinary experimentation.\n**Problem**: Lack of a centralized platform to showcase distinct, highly technical exploratory data analyses efficiently.",
    solution: "**Solution**: Formulated a comprehensive portfolio hub containing meticulously documented Kaggle explorations, 3D interactive visualizations, and complex reactive AI autonomous agents built from scratch.",
    result: "**Result**: Built an immersive showcase that tangibly demonstrates deep technical expertise to stakeholders and recruiters effortlessly.",
    githubUrl: 'https://github.com/lowechrist',
    images: [
      { id: '6-1', src: '/images/project-data-lab.jpg', alt: 'Data Visualization Dashboard', aspectRatio: 'landscape' },
      { id: '6-2', src: '/images/project-data-lab-2.png', alt: 'AI Engineer Coding (Lowe Christ)', aspectRatio: 'landscape' },
      { id: '6-3', src: '/images/project-data-lab.jpg', alt: 'Autonomous AI Agent', aspectRatio: 'portrait' }
    ]
  }
];

const frProjects: Project[] = enProjects.map(p => ({ ...p }));

// Translations for FR
frProjects[0].description = "Plateforme web et mobile centralisant le signalement d'objets perdus et de personnes disparues, facilitant les retrouvailles grâce à la mobilisation citoyenne au Cameroun.";
frProjects[0].challenge = "**Contexte** : Au Cameroun, la recherche d'objets perdus ou de personnes disparues s'appuie trop sur les réseaux sociaux qui sont fragmentés.\n**Problème** : L'absence de système centralisé et accessible pour les alertes engendre un immense retard dans le repérage et le sauvetage.";
frProjects[0].solution = "**Solution** : J'ai conçu une interface cross-platform (Web + Mobile) dotée d'algorithmes de matching intelligent, reliant automatiquement les rapports connectés et notifiant les citoyens via une cartographie géolocalisée.";
frProjects[0].result = "**Résultat** : Un temps de recouvrement d'objets drastiquement réduit et une sécurité renforcée dans les communautés gérées par la plateforme.";

frProjects[1].description = "Système de vision par ordinateur pour la détection de maladies des plantes à partir d'images de feuilles, conçu pour les agriculteurs camerounais.";
frProjects[1].challenge = "**Contexte** : L'agriculture nécessite un diagnostic réactif des récoltes, dont le Cameroun subit d'importantes pertes chaque année.\n**Problème** : Beaucoup d'agriculteurs ne disposent ni des outils ni de l'expertise immédiate pour freiner précocement la propagation des maladies agricoles.";
frProjects[1].solution = "**Solution** : J'ai entrainé et déployé un Réseau de Neurones Convolutifs (CNN) accessible via smartphone. L'agriculteur capture simplement sa feuille infectée pour obtenir très rapidement un diagnostic précis aux recommandations adaptées.";
frProjects[1].result = "**Résultat** : Un système robuste avec un taux de précision record permettant de minimiser immédiatement la perte des denrées agricoles.";

frProjects[2].description = "Un modèle de langage (LLM) développé pour comprendre et générer du texte dans les langues locales camerounaises.";
frProjects[2].challenge = "**Contexte** : Malgré l'énorme diversité de ses 250+ langues locales, le Cameroun est numériquement très peu soutenu par l'industrie actuelle de l'IA.\n**Problème** : Un risque croissant de fracture numérique menaçant le patrimoine culturel local car les IA majeures ne saisissent pas ces dialectes natifs.";
frProjects[2].solution = "**Solution** : Mise en œuvre du projet PALAM. Ce modèle a été entraîné spécifiquement sur des données textuelles de dialectes (ex: Bamiléké, Douala, Ewondo) en instanciant des pipelines modernes de classification NLP et des mécanismes basés sur les Transformers populaires.";
frProjects[2].result = "**Résultat** : Un des premiers prototype IA purement orienté patrimoine, suscitant un fort engagement dans les communautés linguistiques et éducatives pures.";

frProjects[3].description = "Co-fondateur d'une startup en IA en tant que CTO — architecturant des pipelines scalables pour le déploiement rapide en production.";
frProjects[3].challenge = "**Contexte** : Piloter une startup IA innovante dans un environnement technologique émergeant comme en Afrique subsaharienne requiert une ingéniosité redoutable.\n**Problème** : La nécessité absolue d'architecturer très rapidement et qualitativement les cœurs technologiques malgré un budget VC drastique et des pannes d'infrastructures communes.";
frProjects[3].solution = "**Solution** : Déploiement pragmatique de l'architecture entière (APIs sécurisées, Cloud, Pipelines IA d'inférence) de l'entreprise tout en mettant en place du CI/CD et mentorant techniquement les talents locaux.";
frProjects[3].result = "**Résultat** : Déploiement du MVP très réussi, avec plus de 99% disponibilité, consolidant l'autorité sérieuse du groupe initial Startup PowerAi.";

frProjects[4].description = "Système de classification deep learning qui identifie les différentes races de chiens à partir de photographies en utilisant le Transfer Learning.";
frProjects[4].challenge = "**Contexte** : Catégoriser visuellement des objets avec de fines variations (plus de 120 races différentes de canidés).\n**Problème** : La discrimination multi-class visuelle devient exponentiellement complexe pour un réseau classique s'il n'arrive pas à extraire les Features locales dominantes.";
frProjects[4].solution = "**Solution** : Je me suis approprié les méthodes de Transfer Learning finies (via les modèles ResNet / VGG16) combinées à du learning rate adaptatif et du fine-tuning de pointe pour aboutir à un puissant classificateur d'images final.";
frProjects[4].result = "**Résultat** : Score d'exactitude exceptionnel publié sur les tableaux Kaggle, prouvant les aptitudes d'ingénierie concrètes orientées Vision Informatique.";

frProjects[5].description = "Tableaux de bord d'analyse de données, explorations Kaggle approfondies, et la création de petits agents autonomes de Machine Learning.";
frProjects[5].challenge = "**Contexte** : Maintenir un niveau exceptionnel d'excellence dans le secteur de la Data Science exige une curiosité continue.\n**Problème** : L'absence de support unique regroupant des visualisations interactives hétérogènes exposant des rapports prédictifs.";
frProjects[5].solution = "**Solution** : J'ai aggrégé et structuré plusieurs exercices de pointe (dashboards temps réels, agents IA autonomes programmés de A à Z, algorithmes descriptifs Kaggle) dans ce Data Science Lab accessible à la demande.";
frProjects[5].result = "**Résultat** : Accroissement dramatique de la crédibilité applicative servant de support visuel technique implacable propice aux ingénieries de l'IA applicative.";

export const projectsData = { en: enProjects, fr: frProjects };

// Helper function to get project by slug dynamically based on locale
export const getProjectBySlug = (slug: string, locale: 'en'|'fr' = 'en'): Project | undefined => {
  return projectsData[locale].find((project) => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string, locale: 'en'|'fr' = 'en'): Project[] => {
  if (category === 'all') return projectsData[locale];
  return projectsData[locale].filter((project) => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (locale: 'en'|'fr' = 'en'): Project[] => {
  return projectsData[locale].slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (
  currentSlug: string, locale: 'en'|'fr' = 'en'
): { prev: Project | null; next: Project | null } => {
  const currentIndex = projectsData[locale].findIndex((p) => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projectsData[locale][currentIndex - 1] : null,
    next: currentIndex < projectsData[locale].length - 1 ? projectsData[locale][currentIndex + 1] : null,
  };
};

// All unique categories for filtering
export const allCategories = [
  { value: 'all', label: 'All Projects' },
  { value: 'ai', label: 'Artificial Intelligence' },
  { value: 'web', label: 'Web Development' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'startup', label: 'Startup' },
];
