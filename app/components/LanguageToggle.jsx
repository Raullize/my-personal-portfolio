"use client";

import { useLanguage } from "../hooks/useLanguage";
import Image from "next/image";
import { useState, useEffect } from "react";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detectar se é um dispositivo touchscreen
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleClick = () => {
    if (isTouchDevice) {
      // Em dispositivos touch, controlar o efeito de flip manualmente
      setIsFlipped(true);
      setTimeout(() => {
        toggleLanguage();
        // Resetar o estado após completar a animação
        setTimeout(() => setIsFlipped(false), 600);
      }, 150);
    } else {
      // Em dispositivos não-touch, apenas alternar o idioma
      toggleLanguage();
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <button 
        onClick={handleClick}
        className="w-10 h-10 rounded-full border border-gray-700 bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 overflow-hidden shadow-lg hover:shadow-primary-500/30 hover:border-gray-500 group"
        aria-label="Alternar idioma"
        title={language === 'pt-BR' ? 'Mudar para inglês' : 'Change to Portuguese'}
      >
        <div className={`relative w-full h-full transform transition-transform duration-500 ${!isTouchDevice ? 'group-hover:rotate-[360deg] group-hover:scale-110' : ''} ${isFlipped ? 'rotate-[360deg] scale-110' : ''}`}>
          <Image
            src={`/icons/${language === 'pt-BR' ? 'pt-br' : 'en'}.png`}
            alt={language === 'pt-BR' ? 'Português' : 'English'}
            fill
            sizes="40px"
            className="object-cover"
            priority
          />
        </div>
        <div className={`absolute inset-0 bg-gradient-to-tr from-primary-600/30 to-accent-600/30 transition-opacity duration-300 rounded-full ${!isTouchDevice ? 'opacity-0 group-hover:opacity-100' : ''} ${isFlipped ? 'opacity-100' : 'opacity-0'}`}></div>
      </button>
    </div>
  );
};

export default LanguageToggle; 