"use client";

import { useTranslation } from '@/app/i18n/useTranslation';
import DecryptedText from '@/app/components/ui/DecryptedText';
import FadeIn from '@/app/components/ui/FadeIn';
import GradientText from '@/app/components/ui/GradientText';

const Timeline = () => {
  const { t, language } = useTranslation();
  
  const timelineItems = [
    {
      year: '2023',
      title: t('timeline2023Title'),
      description: t('timeline2023Description')
    },
    {
      year: '2024',
      title: t('timeline2024Title'),
      description: t('timeline2024Description')
    },
    {
      year: '2025',
      title: t('timeline2025Title'),
      description: t('timeline2025Description')
    },
    {
      year: t('now'),
      title: t('timelineNowTitle'),
      description: t('timelineNowDescription')
    }
  ];
  
  return (
    <section id={t('timeline').toLowerCase()} className="section-padding bg-black text-white">
      <div className="container-wrapper">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                animationSpeed={2.5}
              >
                {t('timelineTitle')}
              </GradientText>
            </h2>
            <div className="text-lg text-gray-300">
              <DecryptedText
                text={t('timelineDescription')}
                speed={60}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
              />
            </div>
          </div>
        </FadeIn>

        {/* Timeline para desktop */}
        <div className="hidden md:block relative py-8">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          <div className="grid grid-cols-1 gap-32">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Círculo na linha */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse shadow-lg shadow-primary-500/30"></div>
                  <div className="absolute w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>

                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {/* Conteúdo */}
                  <FadeIn 
                    direction={index % 2 === 0 ? 'right' : 'left'} 
                    delay={0.1 * index} 
                    className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}
                  >
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 text-sm font-medium mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline para mobile */}
        <div className="md:hidden relative py-8">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          <div className="space-y-32">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative pl-12">
                {/* Círculo na linha */}
                <div className="absolute left-4 top-8 transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse shadow-lg shadow-primary-500/30"></div>
                  <div className="absolute w-4 h-4 bg-gray-900 rounded-full"></div>
                </div>
                
                <FadeIn direction="left" delay={0.3 + (0.1 * index)}>
                  <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 text-sm font-medium mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;