'use client';

import { useLanguage } from '@/lib/i18n/context';
import { Language } from '@/lib/i18n/translations';
import { Globe } from 'lucide-react';

const languageConfig = {
  pl: {
    name: 'Polski',
    code: 'PL',
    flag: '🇵🇱'
  },
  en: {
    name: 'English',
    code: 'EN',
    flag: '🇬🇧'
  },
  ru: {
    name: 'Русский',
    code: 'RU',
    flag: '🇷🇺'
  }
};

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    console.log('Switching language to:', lang);
    setLanguage(lang);
  };

  return (
    <div className="relative group">
      <button className="flex items-center space-x-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-rose-50 hover:from-amber-100 hover:to-rose-100 transition-all duration-200 text-gray-700 border border-amber-200/50 hover:border-amber-300 shadow-sm hover:shadow-md">
        <Globe className="w-4 h-4 text-amber-600" />
        
        {/* Current language indicator */}
        <div className="flex items-center space-x-2">
          <span className="text-lg">
            {languageConfig[language].flag}
          </span>
          <span className="text-sm font-medium">
            {languageConfig[language].name}
          </span>
        </div>
      </button>
      
      {/* Dropdown menu */}
      <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl border border-amber-200/50 py-2 min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 backdrop-blur-sm">
        {(Object.keys(languageConfig) as Language[]).map((lang) => (
          <button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            className={`w-full text-left px-4 py-3 text-sm hover:bg-gradient-to-r hover:from-amber-50 hover:to-rose-50 transition-all duration-200 flex items-center space-x-3 ${
              language === lang ? 'bg-gradient-to-r from-amber-100 to-rose-100 text-amber-700 font-semibold border-l-4 border-amber-500' : 'text-gray-700'
            }`}
          >
            <span className="text-base mr-1">
              {languageConfig[lang].flag}
            </span>
            <span>{languageConfig[lang].name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
