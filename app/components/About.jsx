import DecryptedText from './ui/DecryptedText';
import GradientText from './ui/GradientText';

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-gradient-to-b from-gray-900 to-black">
      <div className="container-wrapper">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 font-heading">
              <GradientText
                colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]}
                animationSpeed={2.5}
              >
                Olá
              </GradientText>
            </h2>
            <div className="text-lg md:text-xl font-medium text-gray-300">
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
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p className="text-lg">
              Sou estudante de Tecnologia em Sistemas para Internet no IFSul Campus Charqueadas. 
              Em meus projetos, utilizo tecnologias como HTML, CSS, JavaScript, ReactJS, Tailwind, 
              NextJS, NodeJS, bancos de dados como MySQL, PostgreSQL e MongoDB, Git e GitHub. 
              Mas também tenho conhecimento em outras tecnologias como JAVA, C, Python, PHP e TypeScript.
            </p>
            
            <p className="text-lg">
              Como profissional sou organizado, me comunico bem, trabalho bem em equipe. 
              Tenho inglês intermediário, sou familiarizado com metodologias ágeis, 
              conhecimentos sobre segurança da informação, inteligência artificial e open finance, 
              boas práticas de desenvolvimento, comprometido com a entrega de resultados e sempre 
              aberto a novos aprendizados.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-center text-white">Tecnologias</h3>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind',
                'Node.js', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git', 'GitHub',
                'Java', 'C', 'Python', 'PHP', 'TypeScript'
              ].map((tech) => (
                <div 
                  key={tech} 
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg px-3 py-2 
                          text-center text-sm font-medium hover:bg-gray-800 hover:border-gray-600 
                          transition-all"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 