"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Code2, User, ExternalLink, Github, Target, Lightbulb, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ImageWithLightbox } from "@/components/portfolio/ImageWithLightbox";
import { Lightbox } from "@/components/portfolio/Lightbox";
import type { Project } from "@/types";
import { useTranslation } from "react-i18next";

export function ProjectClient({ project }: { project: Project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const images = useMemo(() => project.images, [project.images]);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen">
      <motion.div
        className="relative w-full h-[70vh] overflow-hidden bg-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={project.coverImage}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground font-light">
              <div className="flex items-center gap-2">
                <Calendar className="size-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2 capitalize">
                <span>•</span>
                <span>{project.category}</span>
              </div>
              {project.location && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4" />
                    <span>{project.location}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-lg md:text-xl font-light leading-relaxed text-foreground">
              {project.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            {project.techStack && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <Code2 className="size-4 text-cyan-500" />
                  <span>{t('projectDetails.tech')}</span>
                </div>
                <p className="font-light text-foreground">{project.techStack}</p>
              </div>
            )}
            {project.client && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm font-light tracking-wide uppercase text-muted-foreground">
                  <User className="size-4" />
                  <span>{t('projectDetails.client')}</span>
                </div>
                <p className="font-light text-foreground">{project.client}</p>
              </div>
            )}
          </div>

          {/* Challenge / Solution / Result Section */}
          {(project.challenge || project.solution || project.result) && (
            <>
              <Separator />
              <div className="grid gap-8 md:gap-10">
                {project.challenge && (
                  <ScrollReveal>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Target className="size-5 text-red-400" />
                        <h3 className="text-lg font-medium tracking-wide">{t('projectDetails.challenge')}</h3>
                      </div>
                      <p className="text-base font-light leading-relaxed text-muted-foreground pl-7">
                        {project.challenge}
                      </p>
                    </div>
                  </ScrollReveal>
                )}
                {project.solution && (
                  <ScrollReveal delay={0.1}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="size-5 text-cyan-500" />
                        <h3 className="text-lg font-medium tracking-wide">{t('projectDetails.solution')}</h3>
                      </div>
                      <p className="text-base font-light leading-relaxed text-muted-foreground pl-7">
                        {project.solution}
                      </p>
                    </div>
                  </ScrollReveal>
                )}
                {project.result && (
                  <ScrollReveal delay={0.2}>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="size-5 text-green-500" />
                        <h3 className="text-lg font-medium tracking-wide">{t('projectDetails.result')}</h3>
                      </div>
                      <p className="text-base font-light leading-relaxed text-muted-foreground pl-7">
                        {project.result}
                      </p>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </>
          )}

          {/* External Links */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4 pt-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-light tracking-wide rounded-lg border border-border hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <Github className="size-4" />
                  <span>{t('projectDetails.viewCode')}</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-light tracking-wide rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 transition-opacity duration-300"
                >
                  <ExternalLink className="size-4" />
                  <span>{t('projectDetails.viewProject')}</span>
                </a>
              )}
            </div>
          )}
        </motion.div>
      </section>

      <section className="py-12 md:py-16">
        <div className="space-y-8 md:space-y-12">
          {images.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.1}>
              <ImageWithLightbox
                image={image}
                onClick={() => openLightbox(index)}
                priority={index === 0}
                index={0}
                className="w-full"
              />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setCurrentImageIndex}
      />
    </div>
  );
}
