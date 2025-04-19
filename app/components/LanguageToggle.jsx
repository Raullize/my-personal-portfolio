
const LanguageToggle = () => {
  return (
    <div className="relative inline-flex items-center">
      <button 
        className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 hover:bg-gray-800 backdrop-blur-sm text-sm font-medium flex items-center gap-2 transition-all"
        aria-label="Alternar idioma"
      >
        <span className="w-5 h-5 flex items-center justify-center">
          <span className="animate-pulse bg-green-500 w-2 h-2 rounded-full absolute"></span>
          <span className="w-full h-full border-2 border-green-500 rounded-full"></span>
        </span>
        <span>PT-BR</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default LanguageToggle; 