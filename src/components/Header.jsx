"use client";

import { useTranslation } from '@/lib/i18n/useTranslation';
import LanguageToggle from '@/components/LanguageToggle';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';
import Squares from '@/components/ui/Squares';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <Squares 
        speed={0.5} 
        squareSize={40}
        direction='diagonal'
        borderColor='rgba(255, 255, 255, 0.1)'
        hoverFillColor='rgba(99, 102, 241, 0.2)'
      />
      
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10">
        <FadeIn direction="down" delay={0.2} duration={0.5} forceVisible={true} className="block">
          <LanguageToggle />
        </FadeIn>
      </div>

      <div className="relative z-10 container-wrapper flex flex-col items-center">
        <FadeIn direction="down" delay={0.2} duration={0.7} className="mb-4">
          <span className="text-gray-300 text-xl md:text-2xl font-medium tracking-widest">{t('jobTitle')}</span>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.4} duration={0.8}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading whitespace-nowrap">
            <GradientText 
              colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]} 
              animationSpeed={2.5}
            >
              Raul Lize
            </GradientText>
          </h1>
        </FadeIn>
        
        <FadeIn direction="none" delay={0.6} duration={1}>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mb-8"></div>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.8} duration={0.7}>
          <p className="responsive-text text-lg md:text-xl text-gray-300 leading-relaxed">
            {t('tagline')}
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={1} duration={0.7}>
          <div className="mt-12">
            <a 
              href="#sobre" 
              className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors duration-300"
              aria-label={t('seeMore')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </FadeIn>
      </div>
    </header>
  );
};

export default Header;