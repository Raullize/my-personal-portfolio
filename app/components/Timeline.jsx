"use client";

import DecryptedText from './ui/DecryptedText';
import FadeIn from './ui/FadeIn';
import GradientText from './ui/GradientText';

const timelineItems = [
  {
    year: '2023',
    title: 'Ensino Médio Técnico',
    description: 'Conclusão do curso técnico em Informática, onde tive meus primeiros contatos com linguagens de programação e participei de projetos escolares que me permitiram aplicar na prática os conhecimentos adquiridos em sala de aula.'
  },
  {
    year: '2024',
    title: 'DEPS Models',
    description: 'Participei da estruturação da DEPS Models, uma iniciativa que me proporcionou experiência real com clientes e projetos de verdade. Atuei em todas as etapas do desenvolvimento, utilizando metodologias ágeis, participando de reuniões com stakeholders e contribuindo tanto no front-end quanto no back-end das aplicações.'
  },
  {
    year: '2025',
    title: 'Compass UOL',
    description: 'Fui selecionado para a bolsa Scholarship Open Finance da Compass UOL, onde aprofundei meus conhecimentos em desenvolvimento com foco em JavaScript e Node.js. Essa experiência tem sido essencial para meu crescimento profissional em um ambiente dinâmico e voltado à inovação financeira.'
  },
  {
    year: 'Atualmente',
    title: 'Em busca de novas oportunidades',
    description: 'Sigo aberto a oportunidades que não apenas contribuam para o meu desenvolvimento, mas que também me permitam gerar valor com os conhecimentos que venho construindo ao longo da minha trajetória.'
  }
];

const Timeline = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-wrapper">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                animationSpeed={2.5}
              >
                Minha Trajetória
              </GradientText>
            </h2>
            <div className="text-lg text-gray-300">
              <DecryptedText
                text="Um breve resumo da minha jornada como desenvolvedor"
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
        <div className="hidden md:block relative">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          <div className="grid grid-cols-1 gap-12">
            {timelineItems.map((item, index) => (
              <div key={item.year} className="relative">
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

                  {/* Círculo central */}
                  <FadeIn delay={0.3 + (0.1 * index)} duration={0.4} direction="none">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse"></div>
                      <div className="absolute w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline para mobile */}
        <div className="md:hidden relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={item.year} className="relative pl-12">
                {/* Círculo */}
                <FadeIn delay={0.2 + (0.1 * index)} duration={0.5} direction="none">
                  <div className="absolute left-4 top-6 transform -translate-x-1/2 w-7 h-7 flex items-center justify-center">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 absolute animate-pulse"></div>
                    <div className="w-3.5 h-3.5 bg-gray-900 rounded-full absolute"></div>
                  </div>
                </FadeIn>
                
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