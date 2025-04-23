"use client";

import DecryptedText from './ui/DecryptedText';
import FadeIn from './ui/FadeIn';
import GradientText from './ui/GradientText';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    title: 'Armazém Girassol',
    description: 'Plataforma de e-commerce para produtos naturais e orgânicos, oferecendo uma experiência de compra intuitiva e segura.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: 'https://www.armazemgirassol.com.br',
    githubUrl: 'https://github.com/depsModels/armazem-girassol'
  },
  {
    title: 'StockDeps',
    description: 'Sistema avançado de gerenciamento de estoque e inventário, desenvolvido para otimizar o controle de produtos e recursos.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: 'https://github.com/depsModels/stockDeps'
  },
  {
    title: 'DEPS Models',
    description: 'Landing Page da empresa DEPS Models apresentando sua história, cultura e serviços oferecidos no mercado de desenvolvimento.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: 'https://depsmodels.com',
    githubUrl: 'https://github.com/depsModels/deps'
  },
  {
    title: 'octo.hub',
    description: 'Landing Page da empresa octo.hub com apresentação detalhada de seus serviços e soluções tecnológicas inovadoras.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: 'https://github.com/depsModels/octoHub'
  },
  {
    title: 'MyGYM',
    description: 'Landing Page projetada para academias sem presença digital, oferecendo informações sobre serviços, planos e horários de funcionamento.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: 'https://my-gym-gold.vercel.app',
    githubUrl: 'https://github.com/depsModels/MyGYM'
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-wrapper">
        <FadeIn direction="up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                animationSpeed={2.5}
              >
                Meus Projetos
              </GradientText>
            </h2>
            <div className="text-lg text-gray-300">
              <DecryptedText
                text="Alguns dos projetos que desenvolvi ou participei"
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
              key={project.title} 
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