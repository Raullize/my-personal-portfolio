"use client";

import { useTranslation } from '../i18n/useTranslation';
import DecryptedText from './ui/DecryptedText';
import FadeIn from './ui/FadeIn';
import GradientText from './ui/GradientText';
import ProjectCard from './ui/ProjectCard';

// Dados dos projetos com suporte a múltiplos idiomas
const projectsData = [
  {
    title: 'Armazém Girassol',
    title_en: 'Armazém Girassol',
    description: 'Plataforma de e-commerce para produtos naturais e orgânicos, oferecendo uma experiência de compra intuitiva e segura.',
    description_en: 'E-commerce platform for natural and organic products, offering an intuitive and secure shopping experience.',
    imageUrl: '/projects/ArmazemGirassol.png',
    siteUrl: 'https://www.armazemgirassol.com.br',
    githubUrl: 'https://github.com/depsModels/armazem-girassol'
  },
  {
    title: 'StockDeps',
    title_en: 'StockDeps',
    description: 'Sistema de gerenciamento de estoque e inventário, desenvolvido para otimizar o controle de produtos e recursos.',
    description_en: 'Inventory and stock management system, developed to optimize product and resource control.',
    imageUrl: '/projects/StockDeps.png',
    siteUrl: '',
    githubUrl: 'https://github.com/depsModels/stockDeps'
  },
  {
    title: 'DEPS Models',
    title_en: 'DEPS Models',
    description: 'Landing Page da empresa DEPS Models apresentando sua cultura e serviços oferecidos no mercado de desenvolvimento.',
    description_en: 'DEPS Models company landing page showcasing its culture and services offered in the development market.',
    imageUrl: '/projects/DepsModels.png',
    siteUrl: 'https://depsmodels.com',
    githubUrl: 'https://github.com/depsModels/deps'
  },
  {
    title: 'octo.hub',
    title_en: 'octo.hub',
    description: 'Landing Page da empresa octo.hub com apresentação detalhada de seus serviços e soluções tecnológicas inovadoras.',
    description_en: 'Landing page for octo.hub company with detailed presentation of its services and innovative technological solutions.',
    imageUrl: '/projects/OctoHub.png',
    siteUrl: 'https://octohub.site',
    githubUrl: 'https://github.com/depsModels/octoHub'
  },
  {
    title: 'MyGYM',
    title_en: 'MyGYM',
    description: 'Landing Page projetada para academias sem presença digital, oferecendo informações sobre serviços, planos e horários de funcionamento.',
    description_en: 'Landing Page designed for gyms without digital presence, providing information about services, plans and opening hours.',
    imageUrl: '/projects/MyGym.png',
    siteUrl: 'https://my-gym-academy.vercel.app',
    githubUrl: 'https://github.com/depsModels/MyGym'
  },
  {
    title: 'DeepFocus',
    title_en: 'DeepFocus',
    description: 'Pomodoro personalizável, minimalista e moderno que ajuda a manter o foco durante sessões de trabalho ou estudo.',
    description_en: 'Customizable, minimalist and modern Pomodoro timer that helps maintain focus during work or study sessions.',
    imageUrl: '/projects/DeepFocus.png',
    siteUrl: 'https://deepfocus-pomodoro.vercel.app',
    githubUrl: 'https://github.com/Raullize/deep-focus'
  }
];

const Projects = () => {
  const { t, language } = useTranslation();
  
  // Filtrar projetos com base no idioma atual
  const projects = projectsData.map(project => ({
    title: language === 'pt-BR' ? project.title : project.title_en,
    description: language === 'pt-BR' ? project.description : project.description_en,
    imageUrl: project.imageUrl,
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
                colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
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
                imageUrl={project.imageUrl}
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