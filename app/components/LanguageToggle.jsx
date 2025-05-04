"use client";

import { useLanguage } from "../hooks/useLanguage";
import Image from "next/image";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center">
      <button 
        onClick={toggleLanguage}
        className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary-500/30 hover:border-gray-500 group"
        aria-label="Alternar idioma"
        title={language === 'pt-BR' ? 'Mudar para inglês' : 'Change to Portuguese'}
      >
        <div className="relative w-full h-full transform group-hover:rotate-[360deg] group-hover:scale-110 transition-transform duration-500">
          <Image
            src={`/icons/${language === 'pt-BR' ? 'pt-br' : 'en'}.png`}
            alt={language === 'pt-BR' ? 'Português' : 'English'}
            fill
            sizes="40px"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-accent-600/30 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></div>
      </button>
    </div>
  );
};

export default LanguageToggle; 