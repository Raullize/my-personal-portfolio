"use client";

import { useLanguage } from '../hooks/useLanguage';
import ptTranslations from './pt.json';
import enTranslations from './en.json';

// Mapeamento de códigos de idioma para arquivos de tradução
const translations = {
  'pt-BR': ptTranslations,
  'en-US': enTranslations,
};

/**
 * Registra um novo idioma no sistema de tradução
 * @param {string} languageCode - Código do idioma (ex: 'fr-FR', 'es-ES')
 * @param {Object} translationData - Objeto com as traduções
 * @returns {boolean} - Sucesso ou falha no registro
 */
export const registerLanguage = (languageCode, translationData) => {
  if (!languageCode || typeof languageCode !== 'string') {
    console.error('O código do idioma deve ser uma string válida');
    return false;
  }
  
  if (!translationData || typeof translationData !== 'object') {
    console.error('As traduções devem ser um objeto válido');
    return false;
  }
  
  translations[languageCode] = translationData;
  return true;
};

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key) => {
    if (!translations[language]) {
      console.warn(`Translation not found for language: ${language}`);
      // Fallback para inglês ou português se o idioma atual não for encontrado
      const fallbackLanguage = translations['en-US'] ? 'en-US' : 'pt-BR';
      if (!translations[fallbackLanguage] || !translations[fallbackLanguage][key]) {
        return key;
      }
      return translations[fallbackLanguage][key];
    }
    
    if (!translations[language][key]) {
      console.warn(`Translation key not found: ${key} in language: ${language}`);
      // Tentar encontrar a chave em inglês como fallback
      if (language !== 'en-US' && translations['en-US'] && translations['en-US'][key]) {
        return translations['en-US'][key];
      }
      // Se não estiver disponível em inglês, retornar a chave original
      return key;
    }
    
    return translations[language][key];
  };
  
  // Retorna o hook com função de tradução e idioma atual
  return { t, language };
}; 