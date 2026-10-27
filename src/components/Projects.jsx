"use client";

import { useTranslation } from '@/i18n/useTranslation';
import DecryptedText from '@/components/ui/DecryptedText';
import FadeIn from '@/components/ui/FadeIn';
import GradientText from '@/components/ui/GradientText';
import ProjectCard from '@/components/ui/ProjectCard';

const projectsData = [
  {
    titleKey: 'proj_aprovaaiTitle',
    descKey: 'proj_aprovaaiDesc',
    images: ['/projects/aprova-ai.png'],
    siteUrl: '',
    githubUrl: 'https://github.com/Raullize/AprovaAI'
  },
  {
    titleKey: 'proj_armazemTitle',
    descKey: 'proj_armazemDesc',
    images: ['/projects/armazem-girassol.png'],
    siteUrl: 'https://armazem-girassol.vercel.app/',
    githubUrl: 'https://github.com/Raullize/armazem-girassol'
  },
  {
    titleKey: 'proj_depsTitle',
    descKey: 'proj_depsDesc',
    images: ['/projects/deps-models.png'],
    siteUrl: 'https://depsmodels.com/',
    githubUrl: 'https://github.com/Raullize/deps-models'
  },
  {
    titleKey: 'proj_octoTitle',
    descKey: 'proj_octoDesc',
    images: ['/projects/octo-hub.png'],
    siteUrl: 'https://octo-hub-site.vercel.app/',
    githubUrl: 'https://github.com/Raullize/octoHub'
  },
  {
    titleKey: 'proj_mygymTitle',
    descKey: 'proj_mygymDesc',
    images: ['/projects/my-gym.png'],
    siteUrl: 'https://my-gym-academy.vercel.app',
    githubUrl: 'https://github.com/depsModels/MyGym'
  },
  {
    titleKey: 'proj_deepfocusTitle',
    descKey: 'proj_deepfocusDesc',
    images: ['/projects/deep-focus.png'],
    siteUrl: 'https://deepfocus-pomodoro.vercel.app',
    githubUrl: 'https://github.com/Raullize/deep-focus'
  },
  {
    titleKey: 'proj_contacomigoTitle',
    descKey: 'proj_contacomigoDesc',
    images: ['/projects/conta-comigo.png'],
    siteUrl: '',
    githubUrl: 'https://github.com/Raullize/ContaComigo'
  },
  {
    titleKey: 'proj_mircTitle',
    descKey: 'proj_mircDesc',
    images: [
      '/projects/mirc-home.png',
      '/projects/mirc-risk-map.png',
      '/projects/mirc-social-proof.png',
      '/projects/mirc-login.png'
    ],
    siteUrl: '',
    githubUrl: 'https://github.com/Raullize/Hackathon2025'
  },
  {
    titleKey: 'proj_careflowTitle',
    descKey: 'proj_careflowDesc',
    images: [
      '/projects/careflow-calendar.png',
      '/projects/careflow-case-detail.jpeg',
      '/projects/careflow-notifications.jpeg'
    ],
    siteUrl: '',
    githubUrl: 'https://github.com/Raullize/Hackathon2026'
  }
];

const Projects = () => {
  const { t } = useTranslation();
  
  const projects = projectsData.map(project => ({
    title: t(project.titleKey),
    description: t(project.descKey),
    images: project.images,
    siteUrl: project.siteUrl,
    githubUrl: project.githubUrl
  }));

  return (
    <section id={t('projects').toLowerCase()} className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-wrapper">
        <FadeIn direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#1d4ed8", "#3b82f6", "#22d3ee", "#1d4ed8"]}
                animationSpeed={2.5}
              >
                {t('projectsTitle')}
              </GradientText>
            </h2>
            <div className="text-lg text-gray-300">
              <DecryptedText
                text={t('projectsDescription')}
                speed={60}
                maxIterations={10}
                sequential={true}
                revealDirection="start"
                animateOn="view"
              />
            </div>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => (
            <FadeIn 
              key={index} 
              direction="up" 
              delay={0.2 + (index * 0.1)} 
              duration={0.5}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                images={project.images}
                siteUrl={project.siteUrl}
                githubUrl={project.githubUrl}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
