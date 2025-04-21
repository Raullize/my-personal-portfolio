"use client";

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Função de animação de scroll customizada
    function smoothScrollTo(targetY, duration) {
      const startY = window.scrollY;
      const difference = targetY - startY;
      let startTime = null;

      // Função para calcular a posição do scroll em cada frame
      const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      // Função de animação que será executada em cada frame
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, startY + difference * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      // Iniciar animação
      requestAnimationFrame(animation);
    }
    
    // Handler para links com âncoras
    const handleClick = function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      // Se o link aponta para o topo da página
      if (targetId === '#') {
        smoothScrollTo(0, 1000);
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        
        // Calcular a duração da animação baseada na distância a percorrer
        // Quanto mais longe, mais tempo leva, mas com um limite máximo
        const distance = Math.abs(window.scrollY - targetPosition);
        const duration = Math.min(1000 + distance * 0.5, 2000); // Entre 1s e 2s
        
        smoothScrollTo(targetPosition, duration);
      }
    };

    // Aplicar aos links de ancoragem
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    // Limpar event listeners quando o componente é desmontado
    return () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  // Este componente não renderiza nada visualmente
  return null;
};

export default SmoothScroll; 