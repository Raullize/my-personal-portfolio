import GradientText from './ui/GradientText';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    title: 'Armazém Girassol',
    description: 'Plataforma de e-commerce para produtos naturais e orgânicos.',
    imageUrl: '/projects/projeto-default.jpg'
  },
  {
    title: 'StockDeps',
    description: 'Sistema de gerenciamento de estoque e inventário.',
    imageUrl: '/projects/projeto-default.jpg'
  },
  {
    title: 'DepsModels',
    description: 'Plataforma para gestão de projetos e modelos de desenvolvimento.',
    imageUrl: '/projects/projeto-default.jpg'
  },
  {
    title: 'octo.hub',
    description: 'Hub de colaboração para desenvolvedores e equipes de tecnologia.',
    imageUrl: '/projects/projeto-default.jpg'
  },
  {
    title: 'Psicóloga Karine Strapazon',
    description: 'Website profissional para atendimento psicológico e agendamento de consultas.',
    imageUrl: '/projects/projeto-default.jpg'
  },
  {
    title: 'MyGym',
    description: 'Aplicação para gerenciamento de academias e acompanhamento de treinos.',
    imageUrl: '/projects/projeto-default.jpg'
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
          <p className="text-lg text-gray-300">Alguns dos projetos que desenvolvi ou participei</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 