import CVDownload from './CVDownload';
import LanguageToggle from './LanguageToggle';
import GradientText from './ui/GradientText';

const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      
      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-4 z-10">
        <LanguageToggle />
        <CVDownload />
      </div>

      <div className="relative z-10 container-wrapper flex flex-col items-center">
        <span className="text-primary-400 text-lg md:text-xl font-medium tracking-widest mb-4">DESENVOLVEDOR WEB</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-heading">
          <GradientText 
            colors={["#6366f1", "#a855f7", "#ec4899", "#6366f1"]} 
            animationSpeed={2.5}
          >
            Raul Lize
          </GradientText>
        </h1>
        
        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mb-8"></div>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
          Desenvolvendo interfaces modernas e soluções digitais eficientes, com foco em experiência do usuário e código de qualidade.
        </p>
        
        <div className="mt-12">
          <a 
            href="#sobre" 
            className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-600 text-gray-400 hover:text-white hover:border-white transition-colors duration-300"
            aria-label="Saiba mais"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header; 