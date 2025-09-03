"use client";

import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  const scrollToTop = () => {
    const startY = window.scrollY;
    const targetY = 0;
    const duration = Math.min(1000 + startY * 0.3, 1500);
    let startTime = null;


    const easeOutCubic = t => 1 - Math.pow(1 - t, 3);


    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);

      window.scrollTo(0, startY * (1 - easedProgress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }


    requestAnimationFrame(animation);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} 
                fixed bottom-8 right-8 z-50 p-3 rounded-full 
                bg-primary-600 hover:bg-primary-700 text-white 
                shadow-lg transform transition-all duration-300 ease-in-out 
                flex items-center justify-center focus:outline-none`}
      aria-label="Voltar ao topo"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-6 w-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};

export default ScrollToTop;