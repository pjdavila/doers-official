'use client'

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMounted } from '@/hooks/use-mounted';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const mounted = useMounted();
  const [isOpen, setIsOpen] = useState(false);

  const languages = mounted ? [
    { code: 'en', name: t('language.en') },
    { code: 'es', name: t('language.es') }
  ] : [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-white hover:text-orange transition-colors duration-300"
        onClick={toggleDropdown}
        aria-label="Language selector"
      >
        <Globe size={16} />
        <span className="font-space text-sm hidden md:inline">{mounted ? i18n.language.toUpperCase() : 'EN'}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-0 mt-2 py-2 w-32 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((language) => (
              <button
                key={language.code}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-white hover:bg-zinc-800 transition-colors duration-200"
                onClick={() => changeLanguage(language.code)}
              >
                <span>{language.name}</span>
                {mounted && i18n.language === language.code && <Check size={14} className="text-orange" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;