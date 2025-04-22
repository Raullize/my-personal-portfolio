"use client";

import DecryptedText from './ui/DecryptedText';
import FadeIn from './ui/FadeIn';
import GradientText from './ui/GradientText';

// Definindo as tecnologias com seus níveis
const technologies = [
  { name: 'HTML', level: 'Avançado' },
  { name: 'CSS', level: 'Intermediário' },
  { name: 'JavaScript', level: 'Intermediário' },
  { name: 'React', level: 'Básico' },
  { name: 'Next.js', level: 'Básico' },
  { name: 'Tailwind', level: 'Básico' },
  { name: 'Node.js', level: 'Básico' },
  { name: 'MySQL', level: 'Básico' },
  { name: 'PostgreSQL', level: 'Básico' },
  { name: 'MongoDB', level: 'Básico' },
  { name: 'Git', level: 'Intermediário' },
  { name: 'GitHub', level: 'Intermediário' },
  { name: 'Java', level: 'Básico' },
  { name: 'C', level: 'Básico' },
  { name: 'Python', level: 'Básico' },
  { name: 'PHP', level: 'Básico' },
  { name: 'TypeScript', level: 'Básico' },
];

// Função para determinar a classe de cor com base no nível
const getLevelColorClass = (level) => {
  switch (level) {
    case 'Básico':
      return 'border-blue-500 hover:bg-blue-500/10';
    case 'Intermediário':
      return 'border-green-500 hover:bg-green-500/10';
    case 'Avançado':
      return 'border-purple-500 hover:bg-purple-500/10';
    default:
      return 'border-gray-700';
  }
};

// Agrupando tecnologias por nível para melhor organização visual
const groupedTechnologies = {
  advanced: technologies.filter(tech => tech.level === 'Avançado'),
  intermediate: technologies.filter(tech => tech.level === 'Intermediário'),
  basic: technologies.filter(tech => tech.level === 'Básico')
};

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-wrapper">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
                <GradientText
                  colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                  animationSpeed={2.5}
                >
                  Olá
                </GradientText>
              </h2>
              <div className="text-lg md:text-xl font-medium text-gray-300 responsive-text">
                <DecryptedText
                  text="Bem-vindo(a) ao meu portfólio!"
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
                Sou estudante de Tecnologia em Sistemas para Internet no IFSul – Campus Charqueadas, 
                com foco em desenvolvimento web e criação de soluções digitais modernas e eficientes. 
                Ao longo da minha trajetória, venho trabalhando com diversas tecnologias e acumulando 
                experiências valiosas em projetos reais.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="text-lg responsive-text">
                <p className="mb-3">Tenho experiência com:</p>
                <ul className="space-y-2 ml-6 list-disc">
                  <li><span className="font-medium text-primary-400">Front-end:</span> HTML, CSS, JavaScript, ReactJS, Next.js, Tailwind</li>
                  <li><span className="font-medium text-primary-400">Back-end:</span> Node.js, PHP</li>
                  <li><span className="font-medium text-primary-400">Bancos de dados:</span> MySQL, PostgreSQL, MongoDB</li>
                  <li><span className="font-medium text-primary-400">Versionamento:</span> Git e GitHub</li>
                </ul>
              </div>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.4}>
              <p className="text-lg responsive-text">
                Também possuo conhecimentos em linguagens e ferramentas como Java, C, Python e TypeScript, 
                o que me proporciona uma base sólida para atuar em diferentes contextos e desafios técnicos.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.5}>
              <p className="text-lg responsive-text">
                Como profissional, sou organizado, comunicativo e colaborativo. Tenho inglês intermediário, 
                sou familiarizado com metodologias ágeis, segurança da informação, inteligência artificial e 
                Open Finance. Comprometido com a entrega de resultados de qualidade, estou sempre em busca 
                de aprimoramento contínuo e aprendizado constante.
              </p>
            </FadeIn>
          </div>
          
          <FadeIn direction="up" delay={0.6}>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">Tecnologias</h3>
              
              {/* Legenda */}
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500/20 border border-blue-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">Básico</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500/20 border border-green-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">Intermediário</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500/20 border border-purple-500 rounded-sm mr-2"></div>
                  <span className="text-sm text-gray-300">Avançado</span>
                </div>
              </div>
              
              {/* Versão Mobile - lista agrupada por nível */}
              <div className="md:hidden space-y-6">
                {Object.entries(groupedTechnologies).map(([levelKey, techs]) => (
                  <div key={levelKey} className="space-y-3">
                    <h4 className={`text-sm font-medium ${
                      levelKey === 'advanced' ? 'text-purple-400' : 
                      levelKey === 'intermediate' ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {levelKey === 'advanced' ? 'Avançado' : 
                       levelKey === 'intermediate' ? 'Intermediário' : 'Básico'}
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
                          ${tech.level === 'Básico' ? 'text-blue-400' : ''}
                          ${tech.level === 'Intermediário' ? 'text-green-400' : ''}
                          ${tech.level === 'Avançado' ? 'text-purple-400' : ''}
                          font-medium
                        `}>{tech.name} – {tech.level}</span>
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