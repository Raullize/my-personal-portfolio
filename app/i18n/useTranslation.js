"use client";

import { useLanguage } from '../hooks/useLanguage';
import translations from './translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    if (!translations[language]) {
      console.warn(`Translation not found for language: ${language}`);
      return key;
    }
    
    if (!translations[language][key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return translations[language][key];
  };
  
  return { t, language };
}; 