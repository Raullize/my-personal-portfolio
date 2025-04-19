import GradientText from './ui/GradientText';

const timelineItems = [
  {
    year: '2023',
    title: 'Ensino Médio Técnico',
    description: 'Ano de conclusão do meu ensino médio técnico em informática, período onde tive meus primeiros contatos com diversas linguagens de programação e inclusive projetos escolares que pude testar meus conhecimentos.'
  },
  {
    year: '2024',
    title: 'DEPS Models',
    description: 'Foi o ano onde tive a oportunidade de participar da organização da DEPS Models e ter ganhado muita experiência com projetos para clientes reais, fazendo o uso de metodologias ágeis, reuniões com os clientes para alinhar as expectativas. Pude participar tanto no desenvolvimento front end quanto back end das aplicações.'
  },
  {
    year: '2025',
    title: 'Compass UOL',
    description: 'Tive a oportunidade de entrar na área da tecnologia e desenvolvimento na empresa Compass UOL, na bolsa scholarship Open Finance, onde pude aperfeiçoar meu conhecimento em relação às linguagens de JS, específico nodeJS.'
  },
  {
    year: 'Até o momento',
    title: 'Novas oportunidades',
    description: 'Sigo em busca de oportunidades onde possam não só agregar a mim, mas principalmente que eu consiga agregar valor com meus conhecimentos.'
  }
];

const Timeline = () => {
  return (
    <section className="section-padding bg-black text-white">
      <div className="container-wrapper">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
            <GradientText
              colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
              animationSpeed={2.5}
            >
              Minha Trajetória
            </GradientText>
          </h2>
          <p className="text-lg text-gray-300">Um breve resumo da minha jornada como desenvolvedor</p>
        </div>

        {/* Timeline para desktop */}
        <div className="hidden md:block relative">
          {/* Linha central da timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-600 to-accent-600"></div>

          <div className="grid grid-cols-1 gap-12">
            {timelineItems.map((item, index) => (
              <div key={item.year} className="relative">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  {/* Conteúdo */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 text-sm font-medium mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  {/* Círculo central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-900 border-2 border-primary-500 rounded-full z-10"></div>
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
            {timelineItems.map((item) => (
              <div key={item.year} className="relative pl-12">
                {/* Círculo */}
                <div className="absolute left-2 transform -translate-x-1/2 w-5 h-5 bg-gray-900 border-2 border-primary-500 rounded-full"></div>
                
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 text-sm font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline; 