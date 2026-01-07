"use client";

import { useTranslation } from '@/lib/i18n/useTranslation';
import { FileDown } from 'lucide-react';

const CVDownload = () => {
  const { t, language } = useTranslation();
  
  const cvFile = language === 'pt-BR' ? '/cv-raul-pt-br.pdf' : '/cv-raul-en.pdf';
  
  return (
    <a
      href={cvFile}
      download
      className="px-3 sm:px-4 py-1.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium flex items-center gap-1.5 sm:gap-2 transition-colors shadow-lg shadow-primary-900/20 hover:shadow-primary-900/30 border border-primary-500 whitespace-nowrap"
      aria-label={t('downloadCV')}
    >
      <FileDown className="h-4 w-4 sm:h-5 sm:w-5" />
      <span>CV</span>
    </a>
  );
};

export default CVDownload;