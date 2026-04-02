"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Briefcase } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

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
              {item.company}
            </h3>

            {/* Company Description */}
            {item.companyDescription && (
              <div className="text-sm text-gray-500 italic">
                {item.companyDescription}
              </div>
            )}
            
            {/* Last Role / Current Role Display */}
            {item.roles && item.roles.length > 0 && (
              <div className="text-lg text-gray-300 font-medium mt-1">
                {item.roles[0].title}
              </div>
            )}
            
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 mt-2">
              <div className="flex items-center gap-1.5 font-medium text-gray-300">
                <Calendar className="w-4 h-4" />
                {item.periodTotal}
              </div>
              
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                {item.location}
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
              <div className="px-6 pb-6 pt-0 space-y-8 border-t border-gray-800/50 mt-2">
                {item.roles.map((role, rIdx) => (
                  <div key={rIdx} className={`relative ${item.roles.length > 1 && rIdx !== item.roles.length - 1 ? 'pb-8 border-b border-gray-800/50' : ''}`}>
                    
                    {/* Role Header */}
                    <div className="mb-5 pt-4">
                      <h4 className="text-lg font-bold text-blue-400 flex items-center gap-2">
                        <Briefcase className="w-4 h-4" />
                        {role.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 mt-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {role.period}
                        </div>
                        <div className="px-2 py-0.5 rounded-full bg-gray-800 border border-gray-700 text-xs text-gray-300">
                          {role.type}
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {t('responsibilitiesTitle')}
                      </h4>
                      <ul className="space-y-2">
                        {role.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        {t('technologiesTitle')}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {role.technologies.map((tech, idx) => (
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
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExperienceCard;