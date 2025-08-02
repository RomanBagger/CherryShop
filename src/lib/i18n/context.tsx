'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation, interpolate } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, variables?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ru');

  // Загружаем язык из localStorage при инициализации
  useEffect(() => {
    const savedLanguage = localStorage.getItem('mumishop-language') as Language;
    if (savedLanguage && ['ru', 'en', 'pl'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Сохраняем язык в localStorage при изменении
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('mumishop-language', lang);
  };

  // Функция для получения переводов с интерполяцией
  const t = (key: string, variables?: Record<string, string | number>): string => {
    const translation = getTranslation(key, language);
    return variables ? interpolate(translation, variables) : translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
