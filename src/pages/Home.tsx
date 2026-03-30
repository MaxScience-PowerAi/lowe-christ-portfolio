'use client';

import { motion } from 'framer-motion';
import { developerInfoData } from '@/data/developer';
import { getFeaturedProjects } from '@/data/projects';
import { useTranslation } from 'react-i18next';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ArrowRight, MapPin, Sparkles, Brain, Code2, Database, Rocket } from 'lucide-react';
import Link from 'next/link';

/**
 * Homepage with immersive hero section, animated neural-network background,
 * skills showcase, stats counter, and featured projects grid.
 * Premium AI-themed design with cyan/violet accents.
 */
export default function Home() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('fr') ? 'fr' : 'en';
  const developerInfo = developerInfoData[currentLang];
  const featuredProjects = getFeaturedProjects(currentLang);

  const quickSkills = [
    'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'LLMs & Agents',
    'React / Next.js', 'Python', 'TensorFlow', 'TypeScript', 'Supabase',
    'Prompt Engineering', 'Data Science', 'Full-Stack', 'Docker', 'Generative AI',
  ];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section - Full viewport with animated background */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Video - Lowe Christ */}
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/intro-lowe-christ-poster.png"
              className="w-full h-full object-cover object-center"
            >
              <source src="/videos/intro-lowe-christ.mp4" type="video/mp4" />
              {/* Fallback image if video fails to load or isn't supported */}
              <img
                src="/images/intro-lowe-christ-poster.png"
                alt="Lowe Christ - AI Engineer"
                className="w-full h-full object-cover object-center"
              />
            </video>
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
            {/* AI-themed color accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 via-transparent to-violet-900/15" />
          </div>

          {/* Video is acting as the hero background */}

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-6">
            <motion.div
              className="text-center space-y-6 max-w-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Location badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <MapPin className="size-4 text-cyan-400" />
                <span className="text-sm font-light tracking-wide text-white/90">{developerInfo.location}</span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-widest text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                LOWE CHRIST
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl font-light tracking-wide text-white/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {developerInfo.tagline}
              </motion.p>

              <motion.p
                className="text-base md:text-lg font-light leading-relaxed text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                {developerInfo.heroIntroduction}
              </motion.p>

              {/* AI-themed accent line */}
              <motion.div
                className="w-24 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-light tracking-wide rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-cyan-500/20"
                >
                  <span>{t('hero.viewProjects')}</span>
                  <ArrowRight className="size-4" />
                </Link>
                <a
                  href={`https://wa.me/${developerInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-light tracking-wide rounded-lg border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <span>{t('hero.contactMe')}</span>
                </a>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <ScrollIndicator />
            </motion.div>
          </div>
        </section>



        {/* Skills & Technologies Quick Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12 space-y-4">
                <div className="inline-flex items-center gap-2 text-sm text-cyan-500 font-light tracking-widest uppercase">
                  <Sparkles className="size-4" />
                  <span>Tech Stack</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  {t('skills.title')}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3">
                {quickSkills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="inline-flex items-center px-4 py-2 text-sm font-light tracking-wide rounded-full border border-border bg-background/50 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                  {t('about.title')}
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500 mx-auto" />
                <div className="space-y-4 text-lg font-light leading-relaxed text-muted-foreground">
                  <p>
                    {developerInfo.biography.split('\n\n')[0]}
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-base font-light tracking-wide text-foreground hover:text-cyan-500 transition-colors group"
                >
                  <span>{t('about.readMore')}</span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-24 md:py-32 border-t border-border">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4 px-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                {t('projects.title')}
              </h2>
              <p className="text-lg text-muted-foreground font-light tracking-wide">
                {t('projects.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                aspectRatio="landscape"
                showCategory={true}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <ScrollReveal delay={0.4}>
            <div className="flex justify-center mt-16 px-6">
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 px-6 py-3 text-base font-light tracking-wide rounded-lg border border-border hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <span>{t('projects.viewAll')}</span>
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
