'use client';

import { Instagram, Linkedin, Github } from 'lucide-react';
import { developerInfoData } from '@/data/developer';
import { useTranslation } from 'react-i18next';

/**
 * Minimal footer component with social links and copyright
 * Uses AI-themed accent colors on hover
 */
export function Footer() {
  const { i18n, t } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('fr') ? 'fr' : 'en';
  const developerInfo = developerInfoData[currentLang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-light tracking-wide">
            © {currentYear} {developerInfo.name}. {t('footer.rights')}
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {developerInfo.socialLinks.instagram && (
              <a
                href={developerInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition-colors duration-300"
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
                className="text-muted-foreground hover:text-cyan-500 transition-colors duration-300"
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
                className="text-muted-foreground hover:text-cyan-500 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="size-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
