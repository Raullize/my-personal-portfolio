"use client";

import { useTranslation } from '@/i18n/useTranslation';
import DecryptedText from '@/components/ui/DecryptedText';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';
import ExperienceCard from '@/components/ui/ExperienceCard';

const Experience = () => {
  const { t } = useTranslation();
  
  const experienceItems = [
    {
      company: t('exp_domvsCompany'),
      companyDescription: t('exp_domvsCompanyDescription'),
      location: t('exp_domvsLocation'),
      periodTotal: t('exp_domvsPeriodTotal'),
      roles: [
        {
          title: t('exp_domvsRoleJunior'),
          period: t('exp_domvsPeriodJunior'),
          type: t('exp_domvsTypeJunior'),
          responsibilities: Array.isArray(t('exp_domvsResponsibilitiesJunior')) ? t('exp_domvsResponsibilitiesJunior') : [],
          technologies: Array.isArray(t('exp_domvsTechnologiesJunior')) ? t('exp_domvsTechnologiesJunior') : []
        },
        {
          title: t('exp_domvsRoleIntern'),
          period: t('exp_domvsPeriodIntern'),
          type: t('exp_domvsTypeIntern'),
          responsibilities: Array.isArray(t('exp_domvsResponsibilitiesIntern')) ? t('exp_domvsResponsibilitiesIntern') : [],
          technologies: Array.isArray(t('exp_domvsTechnologiesIntern')) ? t('exp_domvsTechnologiesIntern') : []
        }
      ]
    },
    {
      company: t('exp_compassCompany'),
      companyDescription: t('exp_compassCompanyDescription'),
      location: t('exp_compassLocation'),
      periodTotal: t('exp_compassPeriodTotal'),
      roles: [
        {
          title: t('exp_compassRole'),
          period: t('exp_compassPeriod'),
          type: t('exp_compassType'),
          responsibilities: Array.isArray(t('exp_compassResponsibilities')) ? t('exp_compassResponsibilities') : [],
          technologies: Array.isArray(t('exp_compassTechnologies')) ? t('exp_compassTechnologies') : []
        }
      ]
    },
    {
      company: t('exp_depsCompany'),
      companyDescription: t('exp_depsCompanyDescription'),
      location: t('exp_depsLocation'),
      periodTotal: t('exp_depsPeriodTotal'),
      roles: [
        {
          title: t('exp_depsRoleFullStack'),
          period: t('exp_depsPeriodFullStack'),
          type: t('exp_depsTypeFullStack'),
          responsibilities: Array.isArray(t('exp_depsResponsibilitiesFullStack')) ? t('exp_depsResponsibilitiesFullStack') : [],
          technologies: Array.isArray(t('exp_depsTechnologiesFullStack')) ? t('exp_depsTechnologiesFullStack') : []
        },
        {
          title: t('exp_depsRoleFrontEnd'),
          period: t('exp_depsPeriodFrontEnd'),
          type: t('exp_depsTypeFrontEnd'),
          responsibilities: Array.isArray(t('exp_depsResponsibilitiesFrontEnd')) ? t('exp_depsResponsibilitiesFrontEnd') : [],
          technologies: Array.isArray(t('exp_depsTechnologiesFrontEnd')) ? t('exp_depsTechnologiesFrontEnd') : []
        }
      ]
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