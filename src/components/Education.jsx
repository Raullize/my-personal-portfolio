"use client";

import { useTranslation } from '@/i18n/useTranslation';
import DecryptedText from '@/components/ui/DecryptedText';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();
  
  const educationItems = [
    {
      title: t('eduTsiTitle'),
      institution: t('eduTsiInstitution'),
      location: t('eduTsiLocation'),
      description: t('eduTsiDesc'),
      status: 'inprogress',
      statusLabel: t('eduStatusInProgress'),
      year: t('eduTsiPeriod'),
      subjects: t('eduTsiSubjects').split(', ')
    },
    {
      title: t('eduItTitle'),
      institution: t('eduItInstitution'),
      location: t('eduItLocation'),
      description: t('eduItDesc'),
      status: 'completed',
      statusLabel: t('eduStatusCompleted'),
      year: t('eduItPeriod'),
      subjects: t('eduItSubjects').split(', ')
    }
  ];

  const footerStats = [
    {
      icon: <GraduationCap className="w-5 h-5" />,
      text: t('eduFooterSuperiorInProgress')
    },
    {
      icon: <Award className="w-5 h-5 text-green-500" />,
      text: t('eduFooterCertifications')
    },
    {
      icon: <BookOpen className="w-5 h-5 text-yellow-500" />,
      text: t('eduFooterContinuousLearning')
    }
  ];
  
  return (
    <section id={t('education').toLowerCase()} className="section-padding bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      <div className="container-wrapper relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#1d4ed8", "#3b82f6", "#22d3ee", "#1d4ed8"]}
                animationSpeed={2.5}
              >
                {t('educationSectionTitle')}
              </GradientText>
            </h2>
            <div className="text-lg md:text-xl font-medium text-gray-300 responsive-text max-w-3xl mx-auto">
              <DecryptedText
                key={t('educationSectionDescription')}
                text={t('educationSectionDescription')}
                speed={60}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
              />
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {educationItems.map((item, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={0.2 + (index * 0.1)}
              className="h-full"
            >
              <div className="h-full bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 hover:border-primary-500/30 transition-all hover:shadow-lg hover:shadow-primary-500/5 group relative overflow-hidden">
                <div className="flex justify-between items-start mb-6">
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-gray-800/50 flex items-center justify-center border border-gray-700 group-hover:border-primary-500/30 transition-colors">
                    <GraduationCap className="w-6 h-6 text-gray-300 group-hover:text-primary-400 transition-colors" />
                  </div>
                  
                  {/* Status Badge */}
                  {item.status === 'inprogress' ? (
                    <span className="bg-primary-600/20 text-primary-300 border border-primary-500/30 text-xs font-bold px-4 py-1.5 rounded-full">
                      {item.statusLabel}
                    </span>
                  ) : (
                    <span className="text-gray-500 text-sm font-bold pt-1">
                      {item.statusLabel}
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold mb-1 text-white group-hover:text-primary-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-400 font-medium mb-4">
                  {item.institution}
                </p>

                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                  {item.description}
                </p>
                
                <div>
                  <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    {t('eduMainSubjects')}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-gray-800/40 border border-gray-700/50 text-gray-300 text-xs hover:bg-gray-800 hover:border-primary-500/30 transition-colors"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer Stats */}
        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-8 border-t border-gray-800/50">
            {footerStats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="text-gray-500 group-hover:text-primary-400 transition-colors">
                  {stat.icon}
                </div>
                <span className="text-gray-400 font-medium text-sm md:text-base group-hover:text-gray-300 transition-colors">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Education;
