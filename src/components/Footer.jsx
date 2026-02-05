"use client";

import { useTranslation } from '@/i18n/useTranslation';
import FadeIn from '@/components/ui/FadeIn';
import { MapPin, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const { t, language } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-8 pb-6 sm:py-12 border-t border-gray-800">
      <div className="container-wrapper">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          <FadeIn direction="left">
            <div className="mb-0 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Raul Lize</h3>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">{t('jobTitle')}</p>
              <div className="flex items-center justify-center md:justify-start mt-2">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <p className="text-gray-400 text-sm">{t('location')}</p>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right">
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="https://github.com/Raullize" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="GitHub"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/raullizeteixeira/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="LinkedIn"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </a>
            </div>
          </FadeIn>
        </div>
        
        <FadeIn direction="up" delay={0.3}>
          <div className="mt-6 pt-6 sm:mt-8 sm:pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs sm:text-sm mb-4 md:mb-0">&copy; {currentYear} {t('developedBy')}. {t('allRightsReserved')}.</p>
            
            <nav aria-label="Links rápidos do rodapé">
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <li><a href={`#${language === 'pt-BR' ? 'sobre' : 'about'}`} className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t('about')}</a></li>
                <li><a href={`#${language === 'pt-BR' ? 'experiência' : 'experience'}`} className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t('experience')}</a></li>
                <li><a href={`#${language === 'pt-BR' ? 'formação' : 'education'}`} className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t('education')}</a></li>
                <li><a href={`#${language === 'pt-BR' ? 'projetos' : 'projects'}`} className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t('projects')}</a></li>
                <li><a href={`#${language === 'pt-BR' ? 'contato' : 'contact'}`} className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">{t('contact')}</a></li>
              </ul>
            </nav>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;