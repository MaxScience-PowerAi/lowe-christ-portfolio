'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-12 px-2 font-medium" disabled>
        FR
      </Button>
    );
  }

  const currentLang = (i18n.language || 'en').startsWith('fr') ? 'fr' : 'en';

  const toggleLanguage = () => {
    const nextLang = currentLang === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(nextLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="w-12 px-2 font-medium transition-colors hover:bg-accent uppercase"
      onClick={toggleLanguage}
      aria-label={`Switch language to ${currentLang === 'fr' ? 'English' : 'French'}`}
    >
      {currentLang}
    </Button>
  );
}
