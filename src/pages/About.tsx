'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, MapPin, Sparkles } from 'lucide-react';
import { developerInfoData } from '@/data/developer';
import { useTranslation } from 'react-i18next';
import { Separator } from '@/components/ui/separator';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

/**
 * About page with Lowe Christ biography, skills grid, and professional information
 * Premium AI-themed design with animated skill badges and experience timeline
 */
export default function About() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('fr') ? 'fr' : 'en';
  const developerInfo = developerInfoData[currentLang];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 lg:px-8 border-b border-border overflow-hidden">
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                {t('about.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {developerInfo.tagline}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portrait and Biography - Split Layout */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Portrait Photo - Lowe Christ */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg bg-muted shadow-2xl shadow-cyan-500/10">
                  <motion.div
                    className="absolute inset-0 w-full h-full"
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 0.5, -0.5, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="/images/lowe-christ.png"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    >
                      <source src="/videos/lowe-portrait.mp4" type="video/mp4" />
                      <img
                        src="/images/lowe-christ.png"
                        alt="Lowe Christ - AI Engineer"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        onError={(e) => {
                          e.currentTarget.src = "/images/portrait-lowechrist-placeholder.svg";
                        }}
                      />
                    </video>
                  </motion.div>
                  {/* Persistent AI-themed gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-violet-900/20 opacity-60 mix-blend-overlay pointer-events-none" />
                  
                  {/* Animated subtle grid/particles to give a 'tech background' motion feel */}
                  <motion.div 
                    className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen"
                    style={{ backgroundImage: 'radial-gradient(circle at center, rgb(34 211 238 / 0.15) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
                    animate={{ y: [0, -24], x: [0, 12] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  />
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  {developerInfo.socialLinks.instagram && (
                    <a
                      href={developerInfo.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.linkedin && (
                    <a
                      href={developerInfo.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="size-5" />
                    </a>
                  )}
                  {developerInfo.socialLinks.github && (
                    <a
                      href={developerInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 border border-border rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="size-5" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Biography and Info */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                {/* Name and Tagline */}
                <div className="space-y-3">
                  <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                    {developerInfo.name}
                  </h2>
                  <p className="text-xl text-muted-foreground font-light tracking-wide">
                    {developerInfo.tagline}
                  </p>
                  {/* Location badge */}
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="size-4 text-cyan-500" />
                    <span>{developerInfo.location}</span>
                  </div>
                  {/* AI-themed accent line */}
                  <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-500" />
                </div>

                <Separator />

                {/* Biography */}
                <div className="space-y-4">
                  {developerInfo.biography.split('\n\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base md:text-lg font-light leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-4 space-y-2">
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Email: </span>
                    <a
                      href={`mailto:${developerInfo.email}`}
                      className="text-foreground hover:text-cyan-500 transition-colors"
                    >
                      {developerInfo.email}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Téléphone: </span>
                    <a
                      href={`tel:${developerInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="text-foreground hover:text-cyan-500 transition-colors"
                    >
                      {developerInfo.phone}
                    </a>
                  </div>
                  <div className="text-sm font-light tracking-wide">
                    <span className="text-muted-foreground">Localisation: </span>
                    <span className="text-foreground">{developerInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies Section */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border relative overflow-hidden">
          {/* Subtle background */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/3 via-transparent to-violet-500/3" />
          <div className="max-w-6xl mx-auto relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <div className="inline-flex items-center gap-2 text-sm text-cyan-500 font-light tracking-widest uppercase">
                  <Sparkles className="size-4" />
                  <span>{t('skills.expertise_title')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  {t('skills.title')}
                </h2>
                <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                  {t('skills.subtitle')}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {developerInfo.skillCategories.map((category, catIndex) => (
                <ScrollReveal key={category.title} delay={catIndex * 0.1}>
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium tracking-wide text-foreground border-b border-border pb-3">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <motion.span
                          key={skill.name}
                          className="inline-flex items-center px-3 py-1.5 text-xs font-light tracking-wide rounded-full border border-border bg-background hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Achievements */}
        <section className="py-16 md:py-24 px-6 lg:px-8 border-t border-border">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-light tracking-wide">
                  {t('about.achievements')}
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Achievements */}
              <ScrollReveal>
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-wide text-foreground">
                    {t('about.achievements')}
                  </h3>
                  <div className="space-y-4">
                    {developerInfo.awards.map((award, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg border border-border hover:border-cyan-500/30 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 mt-2 shrink-0" />
                        <span className="text-sm font-light text-muted-foreground">{award}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Approach */}
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <h3 className="text-xl font-light tracking-wide text-foreground">
                    {t('about.approach')}
                  </h3>
                  <div className="space-y-4">
                    {developerInfo.approach.split('\n\n').map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm font-light leading-relaxed text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
