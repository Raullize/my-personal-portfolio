"use client";

import { useTranslation } from '@/lib/i18n/useTranslation';
import DecryptedText from '@/components/ui/DecryptedText';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';

const technologies = [
  { name: 'HTML', level: 'advanced' },
  { name: 'CSS', level: 'intermediate' },
  { name: 'JavaScript', level: 'intermediate' },
  { name: 'TypeScript', level: 'basic' },
  { name: 'Java', level: 'basic' },
  { name: 'C', level: 'basic' },
  { name: 'Python', level: 'learning' },
  { name: 'PHP', level: 'basic' },
  { name: 'React', level: 'basic' },
  { name: 'Next.js', level: 'basic' },
  { name: 'Tailwind', level: 'intermediate' },
  { name: 'Node.js', level: 'basic' },
  { name: 'MySQL', level: 'basic' },
  { name: 'PostgreSQL', level: 'basic' },
  { name: 'MongoDB', level: 'learning' },
  { name: 'Git', level: 'intermediate' },
  { name: 'GitHub', level: 'intermediate' },
  { name: 'Docker', level: 'learning' },
  { name: 'Linux', level: 'learning' },
  { name: 'AWS', level: 'learning' },
  { name: 'Drizzle', level: 'learning' },
  { name: 'Prisma', level: 'learning' },
  { name: 'Stripe', level: 'learning' },
];

const About = () => {
  const { t, language } = useTranslation();

  const getLevelColorClass = (level) => {
    switch (level) {
      case 'basic':
        return 'border-blue-500 hover:bg-blue-500/10';
      case 'intermediate':
        return 'border-green-500 hover:bg-green-500/10';
      case 'advanced':
        return 'border-purple-500 hover:bg-purple-500/10';
      case 'learning':
        return 'border-yellow-500 hover:bg-yellow-500/10';
      default:
        return 'border-gray-700';
    }
  };

  // Agrupando tecnologias por nível para melhor organização visual
  const groupedTechnologies = {
    advanced: technologies.filter(tech => tech.level === 'advanced'),
    intermediate: technologies.filter(tech => tech.level === 'intermediate'),
    basic: technologies.filter(tech => tech.level === 'basic'),
    learning: technologies.filter(tech => tech.level === 'learning')
  };

  return (
    <section id={t('about').toLowerCase()} className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-wrapper">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
                <GradientText
                  colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                  animationSpeed={2.5}
                >
                  {t('aboutTitle')}
                </GradientText>
              </h2>
              <div className="text-lg md:text-xl font-medium text-gray-300 responsive-text">
                <DecryptedText
                  text={t('aboutSubtitle')}
                  speed={60}
                  maxIterations={10}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                />
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg responsive-text">
                {t('aboutIntro')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="text-lg responsive-text">
                <p className="mb-3">{t('experienceTitle')}</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><span className="font-medium text-primary-400">{t('frontendSkills').split(':')[0]}:</span> {t('frontendSkills').split(':')[1]}</li>
                  <li><span className="font-medium text-primary-400">{t('backendSkills').split(':')[0]}:</span> {t('backendSkills').split(':')[1]}</li>
                  <li><span className="font-medium text-primary-400">{t('databaseSkills').split(':')[0]}:</span> {t('databaseSkills').split(':')[1]}</li>
                  <li><span className="font-medium text-primary-400">{t('devopsSkills').split(':')[0]}:</span> {t('devopsSkills').split(':')[1]}</li>
                  <li><span className="font-medium text-primary-400">{t('versioningSkills').split(':')[0]}:</span> {t('versioningSkills').split(':')[1]}</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <p className="text-lg responsive-text">
                {t('additionalSkills')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.45}>
              <p className="text-lg responsive-text font-medium text-primary-400">
                {t('learningSkills')}
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.5}>
              <p className="text-lg responsive-text">
                {t('professionalProfile')}
              </p>
            </FadeIn>
          </div>
          
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">{t('technologies')}</h3>
              
              {/* Legenda */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500/20 border border-blue-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">{t('basic')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500/20 border border-green-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">{t('intermediate')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500/20 border border-purple-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">{t('advanced')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500/20 border border-yellow-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">{t('learning')}</span>
                </div>
              </div>
              
              {/* Versão Mobile - lista agrupada por nível */}
              <div className="md:hidden space-y-6">
                {Object.entries(groupedTechnologies).map(([levelKey, techs]) => (
                  <div key={levelKey} className="space-y-3">
                    <h4 className={`text-sm font-medium ${
                      levelKey === 'advanced' ? 'text-purple-400' : 
                      levelKey === 'intermediate' ? 'text-green-400' : 
                      levelKey === 'learning' ? 'text-yellow-400' : 
                      'text-blue-400'
                    }`}>
                      {t(levelKey)}
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {techs.map((tech, index) => (
                        <FadeIn key={tech.name} direction="up" delay={0.1 + (index * 0.03)} duration={0.5}>
                          <div className={`px-3 py-2 text-center text-sm card-base ${getLevelColorClass(tech.level)}`}>
                            {tech.name}
                          </div>
                        </FadeIn>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Versão Desktop - grid tradicional */}
              <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-4">
                {technologies.map((tech, index) => (
                  <FadeIn key={tech.name} direction="up" delay={0.1 + (index * 0.03)} duration={0.5}>
                    <div 
                      className={`bg-gray-800/50 backdrop-blur-sm border ${getLevelColorClass(tech.level)} rounded-lg px-3 py-2 
                              text-center text-sm font-medium transition-all relative group`}
                    >
                      <span>{tech.name}</span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center bg-gray-900/90 rounded-lg transition-opacity duration-200">
                        <span className={`
                          ${tech.level === 'basic' ? 'text-blue-400' : ''}
                          ${tech.level === 'intermediate' ? 'text-green-400' : ''}
                          ${tech.level === 'advanced' ? 'text-purple-400' : ''}
                          ${tech.level === 'learning' ? 'text-yellow-400' : ''}
                          font-medium
                        `}>{tech.name} – {t(tech.level)}</span>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;