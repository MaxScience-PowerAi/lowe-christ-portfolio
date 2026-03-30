'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { developerInfoData } from '@/data/developer';
import { useTranslation } from 'react-i18next';
import { ContactForm } from '@/components/forms/ContactForm';
import { Separator } from '@/components/ui/separator';

/**
 * Contact page with form and contact information
 * Features validated contact form and availability status
 */
export default function Contact() {
  const { t, i18n } = useTranslation();
  const currentLang = (i18n.language || 'en').startsWith('fr') ? 'fr' : 'en';
  const developerInfo = developerInfoData[currentLang];

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-6 lg:px-8 border-b border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0.8, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-light tracking-wide">
                {t('contact.subtitle')}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0.8, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Envoyer un Message
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Remplissez le formulaire ci-dessous et je vous répondrai dans les 24-48 heures. {developerInfo.availability}
                  </p>
                </div>

                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0.8, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-3">
                  <h2 className="text-3xl md:text-4xl font-light tracking-wide">
                    Informations de Contact
                  </h2>
                  <p className="text-muted-foreground font-light">
                    Vous préférez me contacter directement ? Voici comment me joindre.
                  </p>
                </div>

                <Separator />

                {/* Contact Details */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                      <Mail className="size-5 text-cyan-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">
                        Email
                      </p>
                      <a
                        href={`mailto:${developerInfo.email}`}
                        className="text-base md:text-lg font-light hover:text-cyan-500 transition-colors"
                      >
                        {developerInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
                      <Phone className="size-5 text-violet-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">
                        Phone
                      </p>
                      <a
                        href={`tel:${developerInfo.phone}`}
                        className="text-base md:text-lg font-light hover:text-violet-500 transition-colors"
                      >
                        {developerInfo.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      <MapPin className="size-5 text-amber-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light tracking-wide text-muted-foreground">
                        Location
                      </p>
                      <p className="text-base md:text-lg font-light">
                        {developerInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Bottom spacing */}
        <div className="h-16" />
      </div>
    </>
  );
}
