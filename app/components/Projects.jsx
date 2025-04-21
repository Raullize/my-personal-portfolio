import DecryptedText from './ui/DecryptedText';
import GradientText from './ui/GradientText';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    title: 'Armazém Girassol',
    description: 'Plataforma de e-commerce para produtos naturais e orgânicos.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: ''
  },
  {
    title: 'StockDeps',
    description: 'Sistema de gerenciamento de estoque e inventário.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: ''
  },
  {
    title: 'DEPS Models',
    description: 'Landing Page da empresa DEPS Models apresentando sua história, cultura e serviços oferecidos no mercado de desenvolvimento.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: ''
  },
  {
    title: 'octo.hub',
    description: 'Landing Page da empresa octo.hub com apresentação detalhada de seus serviços e soluções tecnológicas inovadoras.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: ''
  },
  {
    title: 'Psicóloga Karine Strapazon',
    description: 'Portfólio profissional da psicóloga Karine Strapazon, com informações sobre sua abordagem terapêutica e serviços oferecidos.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: ''
  },
  {
    title: 'MyGYM',
    description: 'Landing Page projetada para academias sem presença digital, oferecendo informações sobre serviços, planos e horários de funcionamento.',
    imageUrl: '/projects/projeto-default.jpg',
    siteUrl: '',
    githubUrl: ''
  }
];

const Projects = () => {
  return (
    <section id="projetos" className="section-padding bg-gradient-to-b from-black to-gray-900">
      <div className="container-wrapper">
        <div className="text-center mb-16">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              siteUrl={project.siteUrl}
              githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 