"use client";

import Image from 'next/image';
import { useTranslation } from '@/i18n/useTranslation';
import { Globe, Github } from 'lucide-react';

const ProjectCard = ({ title, description, imageUrl, siteUrl, githubUrl }) => {
  const { t } = useTranslation();
  
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700 transition-all h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">{title}</span>
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4 md:p-5 border-t border-gray-800 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400 flex-grow mb-4">
          {description || t('demoNotAvailable')}
        </p>
        <div className="flex justify-end gap-3">
          {(siteUrl || githubUrl) ? (
            <>
              {siteUrl && (
                <a 
                  href={siteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 text-primary-400 hover:bg-primary-500/20 transition-all"
                  aria-label={t('viewSite')}
                  title={t('viewSite')}
                >
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              )}
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 text-primary-400 hover:bg-primary-500/20 transition-all"
                  aria-label={t('viewCode')}
                  title={t('viewCode')}
                >
                  <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              )}
            </>
          ) : (
            <span className="text-xs text-gray-500 italic">{t('demoNotAvailable')}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;