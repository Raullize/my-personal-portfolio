"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';
import DecryptedText from '@/components/ui/DecryptedText';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';

const ExperienceCard = ({ item, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open first item by default
  const { t } = useTranslation();

  return (
    <div className="relative pl-8 md:pl-0">
      <div className="absolute left-[-17px] md:left-[-39px] top-6 w-3 h-3 rounded-full bg-blue-500 border-2 border-black z-20"></div>

      <motion.div
        initial={false}
        className={`
          relative bg-gray-900/60 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300
          ${isOpen ? 'border-blue-500/50 shadow-lg shadow-blue-900/20' : 'border-gray-800 hover:border-gray-700'}
        `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left p-6 flex justify-between items-start gap-4 focus:outline-none"
        >
          <div className="space-y-2 flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {item.role}
            </h3>
            <div className="text-lg text-gray-300 font-medium">
              {item.company}
            </div>
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 mt-2">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {item.period}
              </div>
              
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {item.location}
              </div>

              <div className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-xs text-gray-300">
                {item.type}
              </div>
            </div>
          </div>

          <div className={`
            p-1 rounded-full bg-gray-800 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1
            ${isOpen ? 'rotate-180 text-white' : 'rotate-0'}
          `}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="px-6 pb-6 pt-0 space-y-6 border-t border-gray-800/50 mt-2">
                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-4">
                    {t('responsibilitiesTitle')}
                  </h4>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {t('technologiesTitle')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-md bg-gray-800 text-gray-300 text-xs font-medium border border-gray-700 hover:border-blue-500/30 hover:bg-blue-500/5 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();
  const experienceItems = [
    {
      role: t('exp_domvsRole'),
      company: t('exp_domvsCompany'),
      period: t('exp_domvsPeriod'),
      location: t('exp_domvsLocation'),
      type: t('exp_domvsType'),
      responsibilities: Array.isArray(t('exp_domvsResponsibilities')) ? t('exp_domvsResponsibilities') : [],
      technologies: Array.isArray(t('exp_domvsTechnologies')) ? t('exp_domvsTechnologies') : []
    },
    {
      role: t('exp_compassRole'),
      company: t('exp_compassCompany'),
      period: t('exp_compassPeriod'),
      location: t('exp_compassLocation'),
      type: t('exp_compassType'),
      responsibilities: Array.isArray(t('exp_compassResponsibilities')) ? t('exp_compassResponsibilities') : [],
      technologies: Array.isArray(t('exp_compassTechnologies')) ? t('exp_compassTechnologies') : []
    },
    {
      role: t('exp_depsRole'),
      company: t('exp_depsCompany'),
      period: t('exp_depsPeriod'),
      location: t('exp_depsLocation'),
      type: t('exp_depsType'),
      responsibilities: Array.isArray(t('exp_depsResponsibilities')) ? t('exp_depsResponsibilities') : [],
      technologies: Array.isArray(t('exp_depsTechnologies')) ? t('exp_depsTechnologies') : []
    }
  ];
  
  return (
    <section id={t('experience').toLowerCase()} className="section-padding bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container-wrapper">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#1d4ed8", "#3b82f6", "#22d3ee", "#1d4ed8"]}
                animationSpeed={2.5}
              >
                {t('experienceSectionTitle')}
              </GradientText>
            </h2>
            <div className="text-lg md:text-xl font-medium text-gray-300 responsive-text max-w-2xl mx-auto">
              <DecryptedText
                key={t('experienceSectionDescription')}
                text={t('experienceSectionDescription')}
                speed={60}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
              />
            </div>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[5px] md:left-[-1px] top-0 bottom-0 w-0.5 bg-gray-800"></div>

          <div className="space-y-8 pl-4 md:pl-8">
            {experienceItems.map((item, index) => (
              <FadeIn key={index} direction="up" delay={index * 0.1}>
                <ExperienceCard item={item} index={index} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
