"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/useTranslation';
import { Globe, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ title, description, images = [], siteUrl, githubUrl }) => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultipleImages = images.length > 1;

  const goToImage = (index) => {
    setCurrentImage((index + images.length) % images.length);
  };

  useEffect(() => {
    if (!hasMultipleImages || isPaused) return;

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isPaused, images.length, currentImage]);

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700 transition-all h-full flex flex-col">
      <div
        className="aspect-video relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.length > 0 ? (
          <>
            <Image
              key={images[currentImage]}
              src={images[currentImage]}
              alt={`${title} - ${currentImage + 1}`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {hasMultipleImages && (
              <>
                <button
                  type="button"
                  onClick={() => goToImage(currentImage - 1)}
                  aria-label={t('previousImage')}
                  title={t('previousImage')}
                  className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => goToImage(currentImage + 1)}
                  aria-label={t('nextImage')}
                  title={t('nextImage')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {images.map((image, index) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => goToImage(index)}
                      aria-label={`${title} - ${index + 1}`}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImage ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
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
