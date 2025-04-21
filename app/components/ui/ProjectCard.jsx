import Image from 'next/image';

const ProjectCard = ({ title, description, imageUrl, siteUrl, githubUrl }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/80 backdrop-blur-sm hover:border-gray-700 transition-all h-full flex flex-col">
      <div className="aspect-video relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <span className="text-gray-400 text-lg font-medium">{title}</span>
          </div>
        )}
      </div>
      
      <div className="p-3 sm:p-4 md:p-5 border-t border-gray-800 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-400 flex-grow mb-4">
          {description || 'Descrição em breve.'}
        </p>
        <div className="flex justify-end gap-3">
          {(siteUrl || githubUrl) ? (
            <>
              {siteUrl && (
                <a 
                  href={siteUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 text-primary-400 hover:bg-primary-500/20 transition-all"
                  aria-label="Visitar site"
                  title="Visitar site"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
              {githubUrl && (
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 text-primary-400 hover:bg-primary-500/20 transition-all"
                  aria-label="Ver código no GitHub"
                  title="Ver código no GitHub"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </>
          ) : (
            <span className="text-xs text-gray-500 italic">Demo não disponível</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 