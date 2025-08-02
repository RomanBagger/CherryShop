'use client';

import React from 'react';
import { useLanguage } from '@/lib/i18n/context';
import { Language } from '@/lib/i18n/translations';
import { Globe } from 'lucide-react';

const languageNames = {
  ru: '🇷🇺 Русский',
  en: '🇬🇧 English', 
  pl: '🇵🇱 Polski'
};

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    console.log('Switching language to:', lang);
    setLanguage(lang);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 border border-gray-300">
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">
          {languageNames[language]}
        </span>
      </button>
      
      {/* Dropdown menu */}
      <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[150px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {(Object.keys(languageNames) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
              language === lang ? 'bg-purple-50 text-purple-600 font-medium' : 'text-gray-700'
            }`}
          >
            {languageNames[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};
