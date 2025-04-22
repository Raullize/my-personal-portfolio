const CVDownload = () => {
  return (
    <a
      href="/cv-raul-lize.pdf"
      download
      className="px-3 sm:px-4 py-1.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium flex items-center gap-1.5 sm:gap-2 transition-colors shadow-lg shadow-primary-900/20 hover:shadow-primary-900/30 border border-primary-500 whitespace-nowrap"
      aria-label="Baixar Currículo"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span>CV</span>
    </a>
  );
};

export default CVDownload; 